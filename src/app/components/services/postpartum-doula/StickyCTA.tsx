"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past 600px 
            const scrolled = window.scrollY > 600;
            setIsVisible(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Mobile Bottom Floating Button */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up w-full px-8 max-w-[320px]">
                <Link
                    href="/contact?service=postpartum-doula"
                    className="flex items-center justify-center gap-2 bg-terracotta text-white font-hand text-xl px-6 py-4 rounded-full shadow-2xl border border-white/20 active:scale-95 transition-transform w-full"
                >
                    <span>Inquire Now</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>

            {/* Desktop Floating Button */}
            <div className="hidden md:block fixed bottom-8 right-8 z-50 animate-fade-in">
                <Link
                    href="/contact?service=postpartum-doula"
                    className="group flex items-center gap-3 bg-white pl-5 pr-1 py-1 rounded-full shadow-xl border border-warm-brown/10 hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                    <span className="font-hand text-xl text-terracotta">Inquire Now</span>
                    <span className="bg-terracotta text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-forest-green transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </Link>
            </div>
        </>
    );
}
