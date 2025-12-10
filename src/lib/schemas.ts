import * as z from "zod";

export const contactFormSchema = z.object({
    parentName: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Phone number is required"),
    childCount: z.string(),
    childAges: z.string().min(1, "Ages are required"),
    startDate: z.string().min(1, "Start date is required"),
    schedule: z.array(z.string()).optional(),
    allergies: z.string().optional(),
    message: z.string().min(10, "Please tell us a bit more about your child"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
