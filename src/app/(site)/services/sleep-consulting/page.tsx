import Link from "next/link";
import type { Metadata } from "next";

import HeroSection from "../../../components/services/sleep-consulting/HeroSection";
import EmpathySection from "../../../components/services/sleep-consulting/EmpathySection";
import PackagesSection from "../../../components/services/sleep-consulting/PackagesSection";
import ProcessSection from "../../../components/services/sleep-consulting/ProcessSection";
import StickyCTA from "../../../components/services/sleep-consulting/StickyCTA";

export const metadata: Metadata = {
    title: "Pediatric Sleep Consulting | The Gen Z Mama",
    description: "Gentle, effective sleep solutions for modern parents. Expert pediatric sleep consulting with empathetic support to help your family thrive.",
    openGraph: {
        title: "Pediatric Sleep Consulting | The Gen Z Mama",
        description: "Gentle, effective sleep solutions for modern parents. Expert pediatric sleep consulting.",
    },
};

export default function SleepConsultingPage() {
    return (
        <main className="min-h-screen bg-paper-white relative">
            <StickyCTA />

            {/* Navigation - In-flow to avoid overlap */}
            <div className="container mx-auto px-4 pt-28 pb-4 relative z-20 md:max-w-4xl">
                <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-warm-brown/60 hover:text-terracotta transition-colors font-hand text-lg group"
                >
                    <div className="w-8 h-8 rounded-full bg-white border border-warm-brown/20 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <span>Back to Services</span>
                </Link>
            </div>

            <HeroSection />
            <EmpathySection />
            <PackagesSection />
            <ProcessSection />

            {/* Bottom spacer for mobile sticky bar */}
            <div className="h-24 md:h-12 bg-white"></div>
        </main>
    );
}
