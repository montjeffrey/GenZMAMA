"use client";

import { useState } from "react";
import { overnightContent } from "./overnight-data";

export default function IncludedCare() {
    const { included } = overnightContent;
    const [openItem, setOpenItem] = useState<string | null>("feeding"); // Default first open

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <section className="py-20 bg-warm-brown/5 relative">
            <div className="container mx-auto max-w-3xl px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-hand text-terracotta mb-4">
                        {included.title}
                    </h2>
                    <p className="text-xl text-warm-brown font-sans">
                        {included.subtitle}
                    </p>
                </div>

                <div className="space-y-4">
                    {included.items.map((item) => {
                        const isOpen = openItem === item.id;

                        return (
                            <div
                                key={item.id}
                                className={`
                  border-2 rounded-2xl overflow-hidden transition-all duration-300
                  ${isOpen ? "border-forest-green bg-white shadow-md" : "border-warm-brown/20 bg-white/50 hover:border-warm-brown/40"}
                `}
                            >
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span className={`text-xl font-hand transition-colors ${isOpen ? "text-forest-green" : "text-warm-brown"}`}>
                                        {item.label}
                                    </span>
                                    <span className={`
                    w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300
                    ${isOpen ? "rotate-180 bg-forest-green text-white" : "text-warm-brown bg-warm-brown/10"}
                  `}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="p-6 pt-0 border-t border-dashed border-forest-green/20">
                                        <p className="text-lg text-warm-brown/90 mb-3 font-medium">
                                            {item.content}
                                        </p>
                                        <p className="text-sm font-sans text-terracotta bg-terracotta/5 inline-block px-3 py-1 rounded-md">
                                            ✨ Why it matters: {item.whyItMatters}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
