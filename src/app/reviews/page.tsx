"use client";

import WashiTape from "../components/ui/WashiTape";
import PolaroidFrame from "../components/ui/PolaroidFrame";

const reviews = [
    {
        type: "polaroid",
        name: "Sarah M.",
        role: "Toddler Mom",
        content: "Yan is literally a lifesaver. My daughter begs to go to her house. It's not just childcare, it's a whole vibe.",
        date: "Oct 2023",
        rotation: -2,
    },
    {
        type: "sticky",
        name: "Jessica T.",
        role: "Working Mom",
        content: "Finally, someone who gets it. No judgment, just pure love and fun. The updates she sends are hilarious and so reassuring.",
        date: "Nov 2023",
        color: "bg-yellow-100",
        rotation: 3,
    },
    {
        type: "polaroid",
        name: "Emily R.",
        role: "Boy Mom",
        content: "The creative activities are next level. My son comes home with the coolest art projects (that are actually fridge-worthy).",
        date: "Sept 2023",
        rotation: 2,
    },
    {
        type: "sticky",
        name: "Michelle K.",
        role: "Nurse & Mom",
        content: "Flexible, reliable, and honestly just the coolest person. I trust her completely with my twins.",
        date: "Dec 2023",
        color: "bg-pink-100",
        rotation: -4,
    },
    {
        type: "polaroid",
        name: "Amanda L.",
        role: "First-time Mom",
        content: "I was so nervous leaving my baby, but Yan made the transition so easy. She's basically family now.",
        date: "Jan 2024",
        rotation: 1,
    },
];

export default function ReviewsPage() {
    return (
        <div className="min-h-screen py-20 bg-stone-50 overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-20 relative">
                    <div className="relative inline-block">
                        <h1 className="text-5xl md:text-7xl font-hand text-warm-brown mb-4 rotate-[-1deg]">
                            The Tea ☕
                        </h1>
                        <span className="block font-sans text-stone-500 text-lg tracking-widest uppercase mt-2">
                            (aka Love Letters)
                        </span>
                        <WashiTape color="terracotta" className="w-[110%] h-6 -bottom-0 -left-[5%] absolute opacity-40 z-0 rotate-2" />
                    </div>
                </div>

                {/* Masonry-ish Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto pb-20">
                    {reviews.map((review, i) => (
                        <div key={i} className="flex justify-center p-4">
                            {review.type === "polaroid" ? (
                                <div className="relative group perspective-1000">
                                    <PolaroidFrame rotation={review.rotation} className="p-6 bg-white shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-0 max-w-xs">
                                        <div className="font-hand text-xl text-warm-brown leading-relaxed mb-4">
                                            "{review.content}"
                                        </div>
                                        <div className="pt-4 border-t border-dashed border-stone-200 flex justify-between items-end font-sans">
                                            <div>
                                                <div className="font-bold text-terracotta">{review.name}</div>
                                                <div className="text-xs text-stone-400">{review.role}</div>
                                            </div>
                                            <div className="text-xs text-stone-300">{review.date}</div>
                                        </div>
                                    </PolaroidFrame>
                                </div>
                            ) : (
                                <div
                                    className={`relative p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:rotate-0 max-w-xs ${review.color}`}
                                    style={{ transform: `rotate(${review.rotation}deg)` }}
                                >
                                    <div className="w-8 h-8 bg-black/10 rounded-full absolute -top-3 left-1/2 -translate-x-1/2 backdrop-blur-sm"></div>
                                    <div className="font-hand text-2xl text-stone-800 mb-4 leading-snug">
                                        {review.content}
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="font-sans text-right">
                                            <div className="font-bold text-stone-700 text-sm">{review.name}</div>
                                            <div className="text-xs text-stone-500 italic">{review.role}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center max-w-2xl mx-auto bg-white p-12 rounded-2xl border-2 border-dashed border-warm-brown/20 relative">
                    <WashiTape color="forest" className="w-32 -top-5 left-1/2 -translate-x-1/2 absolute rotate-1" />
                    <h2 className="text-3xl font-hand text-warm-brown mb-4">Have something to say?</h2>
                    <p className="text-stone-600 mb-8">
                        If you're part of the fam, we'd love to hear from you! Drop us a DM or send a text.
                    </p>
                    <a href="/contact" className="bg-forest-green text-white font-hand text-xl px-8 py-3 rounded-full hover:bg-forest-green/90 transition-colors shadow-md inline-block">
                        Send a Love Letter
                    </a>
                </div>

            </div>
        </div>
    );
}
