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
    // Check if the email domain actually accepts mail
    const emailResult = await verifyEmailDeliverability(result.data.email);
    if (!emailResult.success) {
        return {
            success: false,
            errors: { email: [emailResult.message || "Invalid email domain"] }
        };
    }

    // 4. Send Email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
        try {
            const { Resend } = await import("resend");
            const resend = new Resend(resendApiKey);
            const { InquiryEmail } = await import("@/components/emails/InquiryEmail"); // Dynamically import to avoid server/client issues if any

            // Note: In development, Resend only sends to your verified email unless domain is set up
            const { error } = await resend.emails.send({
                from: "Inquiry Form <onboarding@resend.dev>", // Update this when you have a custom domain
                to: ["colom.jeffrey@gmail.com"], // REPLACE with Mrs. A's email or env var
                subject: `New Childcare Inquiry: ${result.data.parentName}`,
                react: InquiryEmail({ ...result.data }),
            });

            if (error) {
                console.error("Resend Error:", error);
                // We don't fail the request if email fails, but we log it.
                // In production, you might want to throw or return partial success.
            } else {
                console.log("Email sent successfully via Resend");
            }

        } catch (err) {
            console.error("Failed to send email:", err);
        }
    } else {
        console.warn("RESEND_API_KEY missing. Skipping email send.");
        console.log("---- SIMULATED EMAIL CONTENT ----");
        console.log("To: Owner");
        console.log("Subject: New Inquiry");
        console.log(result.data);
    }

    // 5. Return success
    return { success: true, message: "Inquiry received! We'll reach out shortly." };
}
