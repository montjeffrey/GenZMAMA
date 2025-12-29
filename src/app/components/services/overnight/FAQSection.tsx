"use client";

import { useState } from "react";
import { overnightContent } from "./overnight-data";

export default function FAQSection() {
    const { faqs } = overnightContent;
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => setOpenId(openId === id ? null : id);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto max-w-3xl px-4">
                <h2 className="text-4xl font-hand text-warm-brown text-center mb-12">
                    {faqs.title}
                </h2>

                <div className="space-y-4">
                    {faqs.items.map((item) => {
                        const isOpen = openId === item.id;
                        return (
                            <div key={item.id} className="border-b border-warm-brown/10 pb-4">
                                <button
                                    onClick={() => toggle(item.id)}
                                    className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
                                >
                                    <span className={`text-xl font-medium transition-colors ${isOpen ? "text-terracotta" : "text-warm-brown group-hover:text-terracotta"}`}>
                                        {item.question}
                                    </span>
                                    <span className={`text-2xl transition-transform duration-300 text-terracotta ${isOpen ? "rotate-45" : ""}`}>
                                        +
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 overflow-hidden ease-in-out ${isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-warm-brown/80 font-sans leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
