"use client";

import { useState } from "react";
import { overnightContent } from "./overnight-data";

export default function PricingSection() {
    const { pricing } = overnightContent;
    const [careType, setCareType] = useState<"Single Baby" | "Twins">("Single Baby");
    const [shiftLength, setShiftLength] = useState<number>(10); // Default 10 hours

    // Helper to find rate
    const activeOption = pricing.options.find(o => o.type === careType) || pricing.options[0];
    const hourlyRate = activeOption.rate;
    const nightlyTotal = hourlyRate * shiftLength;

    return (
        <section id="pricing" className="py-24 bg-paper-white relative">
            <div className="container mx-auto max-w-4xl px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-hand text-terracotta mb-6">
                    {pricing.title}
                </h2>

                {/* Controls Container */}
                <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto border border-warm-brown/10">

                    {/* Toggle: Single vs Twins */}
                    <div className="mb-10">
                        <label className="block text-warm-brown font-hand text-xl mb-4">Who are we caring for?</label>
                        <div className="grid grid-cols-2 bg-warm-brown/5 p-1 rounded-full relative w-full max-w-[340px] mx-auto">
                            {pricing.options.map((option) => (
                                <button
                                    key={option.type}
                                    onClick={() => setCareType(option.type as any)}
                                    className={`
                    w-full py-3 rounded-full text-lg transition-all duration-300 relative z-10 leading-normal
                    ${careType === option.type ? "text-white" : "text-warm-brown hover:text-terracotta"}
                  `}
                                >
                                    {option.type}
                                </button>
                            ))}
                            {/* Sliding Background */}
                            <div
                                className={`
                  absolute top-1 bottom-1 w-[calc(50%-4px)] bg-terracotta rounded-full transition-all duration-300 ease-spring
                  ${careType === "Twins" ? "left-[calc(50%+2px)]" : "left-1"}
                `}
                            ></div>
                        </div>
                    </div>

                    {/* Toggle: Shift Length */}
                    <div className="mb-12">
                        <span className="block text-warm-brown font-hand text-xl mb-4">Shift Length</span>
                        <div className="flex justify-center gap-4">
                            {pricing.shiftLengths.map((hours) => (
                                <button
                                    key={hours}
                                    onClick={() => setShiftLength(hours)}
                                    className={`
                    w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-xl font-bold border-2 transition-all duration-200
                    ${shiftLength === hours
                                            ? "border-forest-green bg-forest-green text-white shadow-lg scale-110"
                                            : "border-warm-brown/30 text-warm-brown hover:border-forest-green/50"}
                  `}
                                >
                                    {hours}h
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price Display */}
                    <div className="pt-8 border-t border-dashed border-warm-brown/20">
                        <div className="flex flex-col items-center">
                            <span className="text-warm-brown/60 text-lg font-sans mb-1">Estimated Nightly Total</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl text-terracotta font-bold">$</span>
                                <span className="text-6xl text-terracotta font-bold tracking-tight">{nightlyTotal}</span>
                            </div>
                            <p className="text-warm-brown/50 text-sm mt-4 font-sans max-w-md mx-auto">
                                *Based on ${hourlyRate}/hr rate. {pricing.disclaimer}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
