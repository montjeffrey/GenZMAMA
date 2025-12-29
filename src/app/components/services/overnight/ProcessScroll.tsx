"use client";

import { useEffect, useRef, useState } from "react";

export default function ProcessScroll() {
    const [activeStep, setActiveStep] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Simple intersection observer to detect active section would go here
    // For MVP, we can just static render or use simple scroll listeners

    return (
        <section className="py-32 bg-forest-green/5 relative overflow-hidden">
            {/*
            This component is a placeholder for the "Scroll-driven storytelling" 
            mentioned in P2, often implemented with Framer Motion or specific scroll hooks. 
            For now, we'll implement a clean static version that looks ready for interaction.
        */}
            <div className="container mx-auto px-4 text-center mb-16">
                <h2 className="text-4xl font-hand text-terracotta mb-4">A Night of Restful Sleep</h2>
                <p className="text-xl text-warm-brown font-sans">See exactly how we care for your little one while you recharge.</p>
            </div>

            <div className="container mx-auto max-w-5xl px-4 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-warm-brown/10 transform transition-all hover:-translate-y-2 duration-300">
                        <div className="text-4xl mb-4">🌙</div>
                        <h3 className="text-2xl font-hand text-warm-brown mb-2">9:00 PM</h3>
                        <p className="text-stone-600">The specialist arrives. We review the day's schedule, wash up, and you head straight to bed.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-warm-brown/10 transform transition-all hover:-translate-y-2 duration-300 md:translate-y-12">
                        <div className="text-4xl mb-4">🍼</div>
                        <h3 className="text-2xl font-hand text-warm-brown mb-2">2:00 AM</h3>
                        <p className="text-stone-600">Baby stirs. We handle the diaper change, feeding, and soothing. You don't even wake up.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-warm-brown/10 transform transition-all hover:-translate-y-2 duration-300 md:translate-y-24">
                        <div className="text-4xl mb-4">☀️</div>
                        <h3 className="text-2xl font-hand text-warm-brown mb-2">7:00 AM</h3>
                        <p className="text-stone-600">Morning handoff. Bottles are washed, baby is happy, and you are fully rested for the day.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
