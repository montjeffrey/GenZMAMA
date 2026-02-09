"use client";

import { useState } from "react";
import WashiTape from "../../components/ui/WashiTape";
import PolaroidFrame from "../../components/ui/PolaroidFrame";
import Link from "next/link";
import MapClient from "../../components/ui/MapClient";

export default function ServicesClient() {
    const [activeTab, setActiveTab] = useState<'facility' | 'travel'>('facility');

    return (
        <div className="min-h-screen py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-16">
                    <h1 className="text-3xl md:text-5xl font-hand text-warm-brown mb-4">Transparent Pricing & Packages</h1>
                    <p className="font-sans text-base md:text-lg text-stone-600">No hidden fees. We value transparency because trust is everything.</p>
                </div>

                {/* Toggle */}
                <div className="flex justify-center mb-8 md:mb-12">
                    <div className="bg-white p-1 rounded-full border-2 border-stone-200 shadow-inner flex relative overflow-hidden w-full max-w-[320px] md:max-w-none md:w-auto">
                        <button
                            onClick={() => setActiveTab('facility')}
                            className={`relative z-10 flex-1 md:flex-none px-4 md:px-8 py-2 rounded-full font-hand text-lg md:text-xl transition-colors ${activeTab === 'facility' ? 'text-white' : 'text-stone-500'}`}
                        >
                            At My Facility
                        </button>
                        <button
                            onClick={() => setActiveTab('travel')}
                            className={`relative z-10 flex-1 md:flex-none px-4 md:px-8 py-2 rounded-full font-hand text-lg md:text-xl transition-colors ${activeTab === 'travel' ? 'text-white' : 'text-stone-500'}`}
                        >
                            At Your Home
                        </button>
                        {/* Slider */}
                        <div className={`absolute top-1 bottom-1 w-[50%] bg-terracotta rounded-full transition-transform duration-300 ${activeTab === 'facility' ? 'translate-x-0' : 'translate-x-full'}`}></div>
                    </div>
                </div>

                {/* Pricing Table */}
                <div className="max-w-4xl mx-auto mb-12 md:mb-20">
                    <PolaroidFrame rotation={0} fitContent={true} className="w-full bg-white p-4 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-hand text-terracotta mb-4 md:mb-6 flex items-center gap-2 flex-wrap">
                            {activeTab === 'facility' ? '🏡 Facility Care Patterns' : '🚗 Travel Care Patterns'}
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full font-sans text-left border-collapse min-w-[500px] md:min-w-0">
                                <thead>
                                    <tr className="border-b-2 border-dashed border-stone-200 text-warm-brown text-base md:text-lg">
                                        <th className="py-3 md:py-4 pl-2 md:pl-4">Package</th>
                                        <th className="py-3 md:py-4">Includes</th>
                                        <th className="py-3 md:py-4 pr-2 md:pr-4 text-right">Investment</th>
                                    </tr>
                                </thead>
                                <tbody className="text-stone-600 text-sm md:text-base">
                                    {activeTab === 'facility' ? (
                                        <>
                                            <tr className="border-b border-stone-100 hover:bg-stone-50">
                                                <td className="py-3 md:py-4 pl-2 md:pl-4 font-bold">Full Day</td>
                                                <td className="py-3 md:py-4">8 hours (8am - 4pm)</td>
                                                <td className="py-3 md:py-4 pr-2 md:pr-4 text-right">$70</td>
                                            </tr>
                                            <tr className="border-b border-stone-100 hover:bg-stone-50">
                                                <td className="py-3 md:py-4 pl-2 md:pl-4 font-bold">Healthcare Workers Extended Hours</td>
                                                <td className="py-3 md:py-4">12 hours (6am - 6pm) </td>
                                                <td className="py-3 md:py-4 pr-2 md:pr-4 text-right">$70</td>
                                            </tr>
                                            <tr className="border-b border-stone-100 hover:bg-stone-50">
                                                <td className="py-3 md:py-4 pl-2 md:pl-4 font-bold">Hourly Rate</td>
                                                <td className="py-3 md:py-4">Ad-hoc hours</td>
                                                <td className="py-3 md:py-4 pr-2 md:pr-4 text-right">Inquire for details</td>
                                            </tr>
                                        </>
                                    ) : (
                                        <>
                                            <tr className="border-b border-stone-100 hover:bg-stone-50">
                                                <td className="py-3 md:py-4 pl-2 md:pl-4 font-bold">Daytime Rate</td>
                                                <td className="py-3 md:py-4">Hourly</td>
                                                <td className="py-3 md:py-4 pr-2 md:pr-4 text-right">$28.50</td>
                                            </tr>
                                            <tr className="border-b border-stone-100 hover:bg-stone-50">
                                                <td className="py-3 md:py-4 pl-2 md:pl-4 font-bold">
                                                    <Link href="/at-your-home/overnight-newborn-care" className="text-terracotta hover:text-forest-green transition-colors flex items-center gap-2 group flex-wrap">
                                                        Overnight Newborn Care
                                                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </Link>
                                                </td>
                                                <td className="py-3 md:py-4">Hourly (10pm - 7am)</td>
                                                <td className="py-3 md:py-4 pr-2 md:pr-4 text-right">$35</td>
                                            </tr>
                                            <tr className="border-b border-stone-100 hover:bg-stone-50">
                                                <td className="py-3 md:py-4 pl-2 md:pl-4 font-bold">Sleep Training</td>
                                                <td className="py-3 md:py-4">Per night (10pm - 7am)</td>
                                                <td className="py-3 md:py-4 pr-2 md:pr-4 text-right">$220</td>
                                            </tr>
                                        </>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 md:mt-8 text-center bg-forest-green/10 p-4 rounded-lg border border-forest-green/20">
                            <p className="font-hand text-forest-green text-lg md:text-xl font-bold">Ready to secure your spot?</p>
                            <p className="mb-4 text-sm md:text-base">We'll schedule an interview first.</p>
                            <Link href="/contact" className="inline-block bg-forest-green text-white px-6 py-2 rounded-full font-hand hover:scale-105 transition-transform text-sm md:text-base">
                                Start Inquiry
                            </Link>
                        </div>
                    </PolaroidFrame>
                </div>

                {/* Map Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <WashiTape color="beige" className="w-32 md:w-48 -top-4 md:-top-6 left-0 -rotate-2 z-10" />
                        <div className="bg-white p-2 shadow-lg border-4 border-white rotate-1">
                            {/* Placeholder for Google Map - Use iframe for low-tech/demo */}
                            {/* Custom "Paper Map" Visualization */}
                            <div className="w-full h-64 md:h-96 bg-[#e8e4d9] relative overflow-hidden group">
                                {/* Google Map */}
                                <div className="absolute inset-0 w-full h-full">
                                    <MapClient className="w-full h-full" />
                                </div>
                                {/* Map Background Pattern (SVG Roads) - KEEPING AS FALLBACK/UNDERLAY IF NEEDED, BUT HIDING FOR NOW */}

                                {/* Radius Circle */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-48 h-48 md:w-64 md:h-64 border-4 border-dashed border-terracotta rounded-full flex items-center justify-center relative transition-transform duration-700 group-hover:scale-110">
                                        <div className="absolute -top-6 md:-top-8 bg-white px-2 md:px-3 py-1 rounded shadow-md border border-stone-200 rotate-[-5deg]">
                                            <span className="font-hand text-base md:text-lg text-terracotta font-bold">20 Mile Radius</span>
                                        </div>
                                        {/* Pin Center */}
                                        <div className="relative">
                                            <div className="w-3 h-3 md:w-4 md:h-4 bg-terracotta rounded-full animate-ping absolute top-0 left-0"></div>
                                            <div className="w-3 h-3 md:w-4 md:h-4 bg-terracotta rounded-full relative z-10 border-2 border-white"></div>
                                        </div>
                                        <div className="absolute mt-8 md:mt-12 font-hand text-warm-brown font-bold text-lg md:text-xl drop-shadow-md bg-white/80 px-2 rounded-sm backdrop-blur-sm">Wharton, NJ</div>
                                    </div>
                                </div>

                                {/* Floating Pins (Decor) */}
                                <div className="absolute top-1/4 left-1/4 w-2 h-2 md:w-3 md:h-3 bg-forest-green rounded-full opacity-60 pointer-events-none"></div>
                                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 md:w-3 md:h-3 bg-forest-green rounded-full opacity-60 pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
