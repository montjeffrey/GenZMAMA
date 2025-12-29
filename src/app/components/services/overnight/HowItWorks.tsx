"use client";

import { useEffect, useRef, useState } from "react";
import { overnightContent } from "./overnight-data";

export default function HowItWorks() {
    const { howItWorks } = overnightContent;

    // Placeholder for scroll interaction (P2)
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-20 bg-paper-white relative overflow-hidden">
            <div className="container mx-auto max-w-4xl px-4">
                <h2 className="text-4xl md:text-5xl font-hand text-terracotta text-center mb-16">
                    {howItWorks.title}
                </h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-warm-brown/20 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {howItWorks.steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    } gap-8 group`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-paper-white border-4 border-terracotta transform -translate-x-1/2 md:translate-x-[-50%] mt-6 z-10 transition-colors duration-300"></div>

                                {/* Content */}
                                <div className="ml-16 md:ml-0 md:w-1/2 p-4">
                                    <div className={`
                    bg-white/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-transparent transition-all duration-300
                    hover:border-warm-brown/30 hover:shadow-lg hover:bg-white/80
                  `}>
                                        <span className="inline-block px-3 py-1 bg-forest-green/10 text-forest-green font-bold rounded-full text-sm mb-3">
                                            {step.time}
                                        </span>
                                        <h3 className="text-2xl font-hand text-warm-brown mb-2">
                                            {step.label}
                                        </h3>
                                        <p className="text-lg text-warm-brown/80 leading-relaxed font-sans">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Spacer for alternating side */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
