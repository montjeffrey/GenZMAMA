"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { overnightContent } from "./overnight-data";

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const { hero } = overnightContent;

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past 500px (approx hero height)
            const scrolled = window.scrollY > 500;
            setIsVisible(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Mobile Bottom Floating Pill */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up w-auto">
                <Link
                    href="/contact?service=overnight"
                    className="flex items-center gap-2 bg-terracotta text-white font-hand text-lg px-6 py-3 rounded-full shadow-xl border border-white/20 active:scale-95 transition-transform"
                >
                    <span>Inquire Now</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>

            {/* Desktop Floating Button (Bottom Right or Top Right) */}
            <div className="hidden md:block fixed bottom-8 right-8 z-50 animate-fade-in">
                <Link
                    href="/contact?service=overnight"
                    className="group flex items-center gap-3 bg-white pl-4 pr-1 py-1 rounded-full shadow-xl border border-warm-brown/10 hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                    <span className="font-hand text-xl text-terracotta">Book Night Care</span>
                    <span className="bg-terracotta text-white w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-forest-green transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </Link>
            </div>
        </>
    );
}
