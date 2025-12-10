"use client";

import { useState } from "react";
import WashiTape from "../../components/ui/WashiTape";
import PolaroidFrame from "../../components/ui/PolaroidFrame";
import Link from "next/link";

export default function ServicesClient() {
    const [activeTab, setActiveTab] = useState<'facility' | 'travel'>('facility');

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-hand text-warm-brown mb-4">Transparent Pricing & Packages</h1>
                    <p className="font-sans text-lg text-stone-600">No hidden fees. We value transparency because trust is everything.</p>
                </div>

                {/* Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white p-1 rounded-full border-2 border-stone-200 shadow-inner flex relative overflow-hidden">
                        <button
                            onClick={() => setActiveTab('facility')}
                            className={`relative z-10 px-8 py-2 rounded-full font-hand text-xl transition-colors ${activeTab === 'facility' ? 'text-white' : 'text-stone-500'}`}
                        >
                            At My Facility
                        </button>
                        <button
                            onClick={() => setActiveTab('travel')}
                            className={`relative z-10 px-8 py-2 rounded-full font-hand text-xl transition-colors ${activeTab === 'travel' ? 'text-white' : 'text-stone-500'}`}
                        >
                            At Your Home
                        </button>
                        {/* Slider */}
                        <div className={`absolute top-1 bottom-1 w-[50%] bg-terracotta rounded-full transition-transform duration-300 ${activeTab === 'facility' ? 'translate-x-0' : 'translate-x-full'}`}></div>
                    </div>
                </div>

                {/* Pricing Table */}
                <div className="max-w-4xl mx-auto mb-20">
                    <PolaroidFrame rotation={0} className="w-full bg-white p-8">
                        <h2 className="text-3xl font-hand text-terracotta mb-6 flex items-center gap-2">
                            {activeTab === 'facility' ? '🏡 Facility Care Patterns' : '🚗 Travel Care Patterns'}
                            <span className="text-sm font-sans text-stone-400 font-normal">(Sample Rates)</span>
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full font-sans text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-dashed border-stone-200 text-warm-brown text-lg">
                                        <th className="py-4 pl-4">Package</th>
                                        <th className="py-4">Includes</th>
                                        <th className="py-4 pr-4 text-right">Investment</th>
                                    </tr>
                                </thead>
                                <tbody className="text-stone-600">
                                    <tr className="border-b border-stone-100 hover:bg-stone-50">
                                        <td className="py-4 pl-4 font-bold">Date Night</td>
                                        <td className="py-4">4 hours (6pm - 10pm)</td>
                                        <td className="py-4 pr-4 text-right">{activeTab === 'facility' ? '$80' : '$120'}</td>
                                    </tr>
                                    <tr className="border-b border-stone-100 hover:bg-stone-50">
                                        <td className="py-4 pl-4 font-bold">Full Day</td>
                                        <td className="py-4">8 hours (8am - 4pm)</td>
                                        <td className="py-4 pr-4 text-right">{activeTab === 'facility' ? '$150' : '$200'}</td>
                                    </tr>
                                    <tr className="border-b border-stone-100 hover:bg-stone-50">
                                        <td className="py-4 pl-4 font-bold">Hourly Rate</td>
                                        <td className="py-4">Ad-hoc hours</td>
                                        <td className="py-4 pr-4 text-right">{activeTab === 'facility' ? '$25/hr' : '$35/hr'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 text-center bg-forest-green/10 p-4 rounded-lg border border-forest-green/20">
                            <p className="font-hand text-forest-green text-xl font-bold">Ready to secure your spot?</p>
                            <p className="mb-4 text-sm">We'll schedule an interview first.</p>
                            <Link href="/contact" className="inline-block bg-forest-green text-white px-6 py-2 rounded-full font-hand hover:scale-105 transition-transform">
                                Start Inquiry
                            </Link>
                        </div>
                    </PolaroidFrame>
                </div>

                {/* Map Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <WashiTape color="beige" className="w-48 -top-6 left-0 -rotate-2 z-10" />
                        <div className="bg-white p-2 shadow-lg border-4 border-white rotate-1">
                            {/* Placeholder for Google Map - Use iframe for low-tech/demo */}
                            {/* Custom "Paper Map" Visualization */}
                            <div className="w-full h-96 bg-[#e8e4d9] relative overflow-hidden group">
                                {/* Map Background Pattern (SVG Roads) */}
                                <svg className="absolute inset-0 w-full h-full opacity-30" width="100%" height="100%">
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a8a29e" strokeWidth="0.5" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#grid)" />
                                    <path d="M-10,150 Q150,120 400,200 T900,100" fill="none" stroke="#d6d3c9" strokeWidth="8" />
                                    <path d="M-10,300 Q300,350 600,250 T1000,300" fill="none" stroke="#d6d3c9" strokeWidth="6" />
                                </svg>

                                {/* Radius Circle */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-64 h-64 border-4 border-dashed border-terracotta rounded-full flex items-center justify-center bg-terracotta/10 relative transition-transform duration-700 group-hover:scale-110">
                                        <div className="absolute -top-8 bg-white px-3 py-1 rounded shadow-md border border-stone-200 rotate-[-5deg]">
                                            <span className="font-hand text-lg text-terracotta font-bold">20 Mile Radius</span>
                                        </div>
                                        {/* Pin Center */}
                                        <div className="relative">
                                            <div className="w-4 h-4 bg-terracotta rounded-full animate-ping absolute top-0 left-0"></div>
                                            <div className="w-4 h-4 bg-terracotta rounded-full relative z-10 border-2 border-white"></div>
                                        </div>
                                        <div className="absolute mt-12 font-hand text-warm-brown font-bold text-xl drop-shadow-md">Wharton, NJ</div>
                                    </div>
                                </div>

                                {/* Floating Pins (Decor) */}
                                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-forest-green rounded-full opacity-60"></div>
                                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-forest-green rounded-full opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
