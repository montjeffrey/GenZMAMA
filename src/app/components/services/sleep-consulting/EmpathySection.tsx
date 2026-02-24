"use client";

import { sleepConsultingContent } from "./sleep-consulting-data";

export default function EmpathySection() {
    const { empathy } = sleepConsultingContent;

    return (
        <section className="py-20 bg-stone-50 relative overflow-hidden">
            <div className="container mx-auto max-w-3xl px-4 relative z-10">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-warm-brown/10 relative">

                    {/* Decorative quotes */}
                    <div className="absolute top-6 left-6 text-terracotta/20 font-serif text-8xl leading-none italic select-none">
                        "
                    </div>

                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-hand text-terracotta mb-6">
                            {empathy.title}
                        </h2>

                        <p className="text-lg md:text-xl font-sans text-warm-brown/80 leading-relaxed">
                            {empathy.content}
                        </p>
                    </div>
                </div>
            </div>

            {/* Background pattern/accents */}
            <div className="absolute top-1/2 left-0 w-full h-full pointer-events-none -z-10 opacity-5 transform -translate-y-1/2">
                <div className="absolute top-10 right-20 w-40 h-40 bg-warm-brown rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-20 w-48 h-48 bg-terracotta rounded-full blur-2xl"></div>
            </div>
        </section>
    );
}
