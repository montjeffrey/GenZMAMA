import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "Services & Pricing",
    description: "Transparent pricing for facility-based and travel-to-home childcare in Wharton, NJ. Date nights, full days, and hourly rates.",
};

export default function ServicesPage() {
    return <ServicesClient />;
}
