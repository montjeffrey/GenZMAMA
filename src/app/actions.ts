"use server";

import { contactFormSchema, ContactFormData } from "@/lib/schemas";

export async function submitInquiry(data: ContactFormData) {
    // 1. Validate data on the server
    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
        return { success: false, errors: result.error.flatten().fieldErrors };
    }

    // 2. Simulate sending email (Integration point for Resend/Nodemailer)
    console.log("---- NEW INQUIRY RECEIVED ----");
    console.log(result.data);
    console.log("------------------------------");

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 3. Return success
    return { success: true, message: "Inquiry received! We'll reach out shortly." };
}
