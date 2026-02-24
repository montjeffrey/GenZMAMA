"use client";

import { postpartumDoulaContent } from "./postpartum-doula-data";

export default function EmpathySection() {
    const { empathy } = postpartumDoulaContent;

    return (
        <section className="py-20 bg-stone-50 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl px-4 relative z-10">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-warm-brown/10 relative">

                    {/* Decorative quotes */}
                    <div className="absolute top-6 left-6 text-terracotta/20 font-serif text-8xl leading-none italic select-none">
                        "
                    </div>

                    <div className="relative z-10 text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-hand text-terracotta mb-6">
                            {empathy.title}
                        </h2>

                        <p className="text-lg md:text-xl font-sans text-warm-brown/80 leading-relaxed">
                            {empathy.content}
                        </p>
                    </div>

                    {/* Educational Callout */}
                    <div className="bg-sage-green/10 rounded-2xl p-6 md:p-8 border border-sage-green/20 relative w-full text-left">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-sage-green/20">
                            <span className="text-2xl text-forest-green animate-pulse">💡</span>
                        </div>
                        <h3 className="text-xl font-hand text-forest-green mb-2 pl-4">
                            {empathy.callout.title}
                        </h3>
                        <p className="text-warm-brown/80 font-sans pl-4">
                            {empathy.callout.description}
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
