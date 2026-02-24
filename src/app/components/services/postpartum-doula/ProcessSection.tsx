"use client";

import { postpartumDoulaContent } from "./postpartum-doula-data";

export default function ProcessSection() {
    const { process } = postpartumDoulaContent;

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-4xl px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-hand text-terracotta mb-4">
                        {process.title}
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-warm-brown/10 -z-10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {process.steps.map((step, index) => (
                            <div key={step.id} className="relative flex flex-col items-center text-center group">

                                {/* Step Number Circle */}
                                <div className="w-24 h-24 rounded-full bg-paper-white border border-warm-brown/20 flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md transition-shadow group-hover:-translate-y-1 duration-300 relative bg-white">
                                    <span className="text-4xl font-hand text-terracotta/40 absolute -top-2 -left-2 group-hover:text-terracotta/60 transition-colors">
                                        0{index + 1}
                                    </span>
                                    {/* Abstract icons depending on index */}
                                    {index === 0 && (
                                        <svg className="w-10 h-10 text-warm-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    )}
                                    {index === 1 && (
                                        <svg className="w-10 h-10 text-warm-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                        </svg>
                                    )}
                                    {index === 2 && (
                                        <svg className="w-10 h-10 text-warm-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    )}
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-hand text-terracotta mb-4">
                                    {step.label}
                                </h3>

                                <p className="text-warm-brown/80 font-sans leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-sage-green/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-stone-100 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        </section>
    );
}
