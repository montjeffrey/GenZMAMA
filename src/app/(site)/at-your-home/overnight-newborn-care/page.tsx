import Link from "next/link";
import type { Metadata } from "next";
import HeroSection from "../../../components/services/overnight/HeroSection";
import ProcessScroll from "../../../components/services/overnight/ProcessScroll";
import IncludedCare from "../../../components/services/overnight/IncludedCare";
import PricingSection from "../../../components/services/overnight/PricingSection";
import StickyCTA from "../../../components/services/overnight/StickyCTA";
import FAQSection from "../../../components/services/overnight/FAQSection";

export const metadata: Metadata = {
    title: "Overnight Newborn Care | The Gen Z Mama",
    description: "Expert overnight newborn care in your home. Get the sleep you need while we care for your baby with compassionate, professional support.",
    openGraph: {
        title: "Overnight Newborn Care | The Gen Z Mama",
        description: "Expert overnight newborn care in your home. Get the sleep you need while we care for your baby.",
    },
};

export default function OvernightNewbornCarePage() {
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

            <ProcessScroll />



            <IncludedCare />

            <PricingSection />

            <FAQSection />

            {/* Bottom spacer for mobile sticky bar */}
            <div className="h-24 md:h-12 bg-white"></div>
        </main>
    );
}
