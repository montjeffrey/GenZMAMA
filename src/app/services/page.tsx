"use client";

import { useState } from "react";
import WashiTape from "../components/ui/WashiTape";
import PolaroidFrame from "../components/ui/PolaroidFrame";
import Link from "next/link";

export default function ServicesPage() {
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
                            <div className="w-full h-96 bg-stone-200 flex items-center justify-center relative overflow-hidden group">
                                <div className="text-stone-400 font-hand text-2xl">Google Map Embed: 20 Mile Radius around Dover, NJ</div>
                                {/* Radius Circle Visualization Placeholder */}
                                <div className="absolute w-64 h-64 border-4 border-dashed border-terracotta/40 rounded-full flex items-center justify-center opacity-50">
                                    <div className="w-4 h-4 bg-terracotta rounded-full animate-ping"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
