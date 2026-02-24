"use client";

import { sleepConsultingContent } from "./sleep-consulting-data";

export default function HeroSection() {
    const { hero } = sleepConsultingContent;

    return (
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
            <div className="container mx-auto max-w-4xl text-center relative z-10">

                <h1 className="text-5xl md:text-7xl font-hand text-terracotta mb-6 leading-tight">
                    {hero.title}
                </h1>

                <p className="text-xl md:text-2xl font-sans text-warm-brown max-w-2xl mx-auto mb-10 leading-relaxed">
                    {hero.promise}
                </p>

                <div className="flex justify-center">
                    <button
                        onClick={() => {
                            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-xl font-hand text-paper-white transition-transform hover:scale-105 active:scale-95"
                    >
                        <span className="absolute inset-0 bg-terracotta rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"></span>
                        <span className="relative z-10">{hero.cta}</span>
                    </button>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-10">
                <div className="absolute top-20 left-10 w-64 h-64 bg-terracotta rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-warm-brown rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}
