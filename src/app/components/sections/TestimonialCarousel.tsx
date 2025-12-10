"use client";

import { useState, useEffect } from "react";
import PolaroidFrame from "../ui/PolaroidFrame";
// import { Review } from "@/lib/data"; // Removed dependency
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface SanityReview {
    id: string;
    type: "polaroid" | "sticky";
    name: string;
    role: string;
    content: string;
    date: string;
    rotation: number;
    color?: string;
    headshot?: any;
}

interface TestimonialCarouselProps {
    reviews: SanityReview[];
    className?: string;
}

export default function TestimonialCarousel({ reviews, className }: TestimonialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Filter for short reviews or just use all? Let's use all.
    const currentReview = reviews[currentIndex];

    // Auto-advance
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div
            className={cn("relative max-w-md mx-auto", className)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Main Display */}
            <div className="relative z-10 p-4">
                <PolaroidFrame
                    rotation={currentReview.rotation}
                    fitContent={true}
                    className="w-full pb-4 transition-all duration-500 ease-in-out"
                >
                    <div className="p-5 flex flex-col justify-center text-center">
                        <p className="font-hand text-lg md:text-xl text-warm-brown leading-relaxed mb-4">
                            "{currentReview.content}"
                        </p>
                        <div className="font-sans text-stone-500">
                            <span className="font-bold text-terracotta text-lg block">{currentReview.name}</span>
                            <span className="text-sm uppercase tracking-wider">{currentReview.role}</span>
                        </div>
                    </div>
                </PolaroidFrame>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center -ml-4 md:-ml-12 z-20">
                <button
                    onClick={prevSlide}
                    className="bg-white p-3 rounded-full shadow-lg text-terracotta hover:scale-110 transition-transform hover:bg-stone-50"
                    aria-label="Previous review"
                >
                    <ChevronLeft size={24} />
                </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center -mr-4 md:-mr-12 z-20">
                <button
                    onClick={nextSlide}
                    className="bg-white p-3 rounded-full shadow-lg text-terracotta hover:scale-110 transition-transform hover:bg-stone-50"
                    aria-label="Next review"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Dots */}
            <div className="absolute -bottom-8 left-0 w-full flex justify-center gap-2">
                {reviews.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={cn(
                            "w-3 h-3 rounded-full transition-all",
                            idx === currentIndex
                                ? "bg-terracotta scale-110"
                                : "bg-stone-300 hover:bg-stone-400"
                        )}
                        aria-label={`Go to review ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
