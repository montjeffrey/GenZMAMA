"use server";

import { contactFormSchema, ContactFormData } from "@/lib/schemas";

import { verifyTurnstile, verifyEmailDeliverability } from "@/lib/security";

export async function submitInquiry(data: ContactFormData, token: string) {
    // 1. Security Check: Turnstile
    // We check this first to prevent bot spam from even reaching validation/email logic
    const turnstileResult = await verifyTurnstile(token);
    if (!turnstileResult.success) {
        return { success: false, message: turnstileResult.message || "Security verification failed." };
    }

    // 2. Validate data on the server
    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
        return { success: false, errors: result.error.flatten().fieldErrors };
    }

    // 3. Email Deliverability Check (MX Records)
    console.log(`Checking MX records for provider: ${result.data.email.split('@')[1]}...`);
    const emailResult = await verifyEmailDeliverability(result.data.email);
    console.log("MX Check Result:", emailResult);

    if (!emailResult.success) {
        return {
            success: false,
            errors: { email: [emailResult.message || "Invalid email domain"] }
        };
    }

    // 4. Send Email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "thegenzmamallc@gmail.com";

    console.log(`Attempting to send email to: ${toEmail}`);
    // console.log(`Using API Key: ${resendApiKey ? "Found (Starts with " + resendApiKey.substring(0, 5) + ")" : "MISSING"}`); // VALIDATION: Removed to prevent secret leakage in build logs

    if (resendApiKey) {
        try {
            const { Resend } = await import("resend");
            const resend = new Resend(resendApiKey);
            const { InquiryEmail } = await import("@/components/emails/InquiryEmail");
            const { render } = await import("@react-email/render");

            // Note: In development, Resend only sends to your verified email unless domain is set up
            console.log(`[DEBUG] Resend Client Initialized. Sending email...`);
            console.log(`[DEBUG] From: TheGenZMAMA Inquiry <notifications@thegenzmama.com>`);
            console.log(`[DEBUG] To: ${toEmail}`);

            const emailHtml = await render(InquiryEmail({ ...result.data }));

            const { data: emailData, error } = await resend.emails.send({
                from: "TheGenZMAMA Inquiry <notifications@thegenzmama.com>",
                to: [toEmail],
                subject: `New Childcare Inquiry: ${result.data.parentName}`,
                html: emailHtml,
            });

            if (error) {
                console.error("CRITICAL RESEND ERROR:", JSON.stringify(error, null, 2));
                return { success: false, message: "Failed to send email. Please try again later." };
            } else {
                console.log("Email sent successfully via Resend. ID:", emailData?.id);
            }

        } catch (err: any) {
            console.error("Failed to send email:", err);
            console.error("Error cause:", err?.cause);
            console.error("Error stack:", err?.stack);
            return { success: false, message: `Server Error: Failed to send email. Details: ${err?.message}` };
        }
    } else {
        console.warn("RESEND_API_KEY missing. Skipping email send.");
        return { success: false, message: "Server Error: RESEND_API_KEY is missing. Check .env.local" };
    }

    // 5. Return success
    return { success: true, message: "Inquiry received! We'll reach out shortly." };
}
