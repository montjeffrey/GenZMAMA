import Link from "next/link";
import type { Metadata } from "next";

import HeroSection from "../../../components/services/postpartum-doula/HeroSection";
import EmpathySection from "../../../components/services/postpartum-doula/EmpathySection";
import IncludedCare from "../../../components/services/postpartum-doula/IncludedCare";
import PackagesSection from "../../../components/services/postpartum-doula/PackagesSection";
import ProcessSection from "../../../components/services/postpartum-doula/ProcessSection";
import FAQSection from "../../../components/services/postpartum-doula/FAQSection";
import StickyCTA from "../../../components/services/postpartum-doula/StickyCTA";

export const metadata: Metadata = {
    title: "Postpartum Doula | The Gen Z Mama",
    description: "Expert, compassionate postpartum doula care to nourish your body, calm your mind, and help your whole family thrive.",
    openGraph: {
        title: "Postpartum Doula | The Gen Z Mama",
        description: "Expert, compassionate postpartum doula care to nourish your body, calm your mind, and help your whole family thrive.",
    },
};

export default function PostpartumDoulaPage() {
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

            <div className="text-center py-8 relative z-20">
                <Link
                    href="/contact?service=postpartum-doula"
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-xl font-hand text-terracotta hover:text-white transition-colors border-2 border-terracotta hover:bg-terracotta rounded-full shadow-lg bg-white"
                >
                    Let's Talk Support
                </Link>
            </div>

            <IncludedCare />
            <PackagesSection />
            <ProcessSection />
            <FAQSection />

            {/* Bottom spacer for mobile sticky bar */}
            <div className="h-24 md:h-12 bg-white"></div>
        </main>
    );
}
