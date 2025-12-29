import { Suspense } from "react";
import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Start the conversation with The Gen Z Mama. Inquire about childcare availability in Wharton, NJ.",
};

export default function ContactPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white"></div>}>
            <ContactClient />
        </Suspense>
    );
}
