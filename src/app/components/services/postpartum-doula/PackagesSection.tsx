"use client";

import { useState } from "react";
import Link from "next/link";
import { postpartumDoulaContent } from "./postpartum-doula-data";

type PackageCategory = "core" | "specialty";

export default function PackagesSection() {
    const { packages } = postpartumDoulaContent;
    const [activeCategory, setActiveCategory] = useState<PackageCategory>("core");

    const categoryData = packages[activeCategory];

    return (
        <section id="pricing" className="py-24 bg-paper-white relative">
            <div className="container mx-auto max-w-5xl px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-hand text-terracotta mb-10">
                    {packages.title}
                </h2>

                {/* Progressive Disclosure Toggle */}
                <div className="mb-12">
                    <div className="grid grid-cols-2 bg-warm-brown/5 p-1.5 rounded-full relative w-full max-w-md mx-auto">
                        <button
                            onClick={() => setActiveCategory("core")}
                            className={`
                                w-full py-3 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 relative z-10 font-sans font-medium
                                ${activeCategory === "core" ? "text-white" : "text-warm-brown hover:text-terracotta"}
                            `}
                        >
                            Core Packages
                        </button>
                        <button
                            onClick={() => setActiveCategory("specialty")}
                            className={`
                                w-full py-3 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 relative z-10 font-sans font-medium
                                ${activeCategory === "specialty" ? "text-white" : "text-warm-brown hover:text-terracotta"}
                            `}
                        >
                            Specialty Add-Ons
                        </button>

                        {/* Sliding Background */}
                        <div
                            className={`
                                absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-terracotta rounded-full transition-all duration-300 ease-spring shadow-md
                                ${activeCategory === "specialty" ? "left-[calc(50%+3px)]" : "left-[3px]"}
                            `}
                        ></div>
                    </div>
                </div>

                {/* Category Subtitle */}
                <div className="max-w-2xl mx-auto mb-16 h-20 flex items-center justify-center">
                    <p className="text-lg md:text-xl font-sans text-warm-brown/80 leading-relaxed transition-opacity duration-300">
                        {categoryData.subtitle}
                    </p>
                </div>

                {/* Packages Grid */}
                <div className={`grid gap-8 justify-center ${activeCategory === "core"
                    ? "grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
                    }`}>
                    {categoryData.options.map((pkg, index) => (
                        <div
                            key={pkg.id}
                            className={`bg-white rounded-3xl p-8 shadow-xl border relative flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-left ${("isPopular" in pkg && pkg.isPopular) ? "border-terracotta scale-105 shadow-terracotta/20 z-10" : "border-warm-brown/10"}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {("isPopular" in pkg && pkg.isPopular) && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-terracotta text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase whitespace-nowrap shadow-md">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-6 border-b border-warm-brown/10 pb-6">
                                <h3 className="text-2xl font-hand text-terracotta mb-2">{pkg.name}</h3>

                                {('timeRange' in pkg) && (
                                    <span className="inline-block bg-warm-brown/10 text-warm-brown px-3 py-1 rounded-full text-sm font-sans mb-3">
                                        {pkg.timeRange}
                                    </span>
                                )}
                                <div className="flex flex-col mt-2">
                                    {("originalPrice" in pkg) && (
                                        <span className="text-lg text-warm-brown/50 line-through mb-1">
                                            Regularly ${pkg.originalPrice}
                                        </span>
                                    )}
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-xl text-warm-brown font-bold">$</span>
                                        <span className="text-4xl text-warm-brown font-bold tracking-tight">{pkg.price}</span>
                                    </div>
                                    {("rateNote" in pkg) && (
                                        <span className="text-sm text-terracotta italic mt-1 font-medium bg-terracotta/5 inline-block px-2 py-0.5 rounded">
                                            {pkg.rateNote}
                                        </span>
                                    )}
                                </div>

                                {('paymentPlan' in pkg) && (
                                    <div className="mt-4">
                                        <span className="inline-block bg-sage-green/20 text-forest-green px-3 py-1.5 rounded-full text-sm font-sans font-medium border border-sage-green/30">
                                            Payment Plan: {pkg.paymentPlan}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <p className="text-warm-brown/90 font-sans mb-8 flex-grow leading-relaxed">
                                {pkg.description}
                            </p>

                            <div className="mb-8">
                                <h4 className="text-sm uppercase tracking-wider text-warm-brown/60 font-bold mb-4">What's Included:</h4>
                                <ul className="space-y-3">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 flex-shrink-0">
                                                <svg className="w-5 h-5 text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-warm-brown/80 font-sans text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-auto mt-auto">
                                <Link
                                    href={`/contact?service=postpartum-doula&package=${pkg.id}`}
                                    className={`block w-full text-center py-3 px-6 rounded-full border-2 font-hand text-lg transition-colors duration-300 ${("isPopular" in pkg && pkg.isPopular) ? "border-terracotta bg-terracotta text-white hover:bg-forest-green hover:border-forest-green hover:text-white" : "border-terracotta text-terracotta hover:bg-terracotta hover:text-white"}`}
                                >
                                    {activeCategory === "core" ? "Secure My Dates" : "Select Add-On"}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
