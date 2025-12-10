"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

interface Review {
    parentName: string
    text: string
    rating: number
    headshot?: any
}

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollXProgress } = useScroll({ container: containerRef })

    return (
        <div className="w-full relative group">
            <div
                ref={containerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 md:px-0 scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {reviews.map((review, i) => (
                    <motion.div
                        key={i}
                        className="snap-center shrink-0 w-[85vw] md:w-[400px] flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-stone-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            {review.headshot ? (
                                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-stone-100">
                                    <Image
                                        src={urlFor(review.headshot).width(100).height(100).url()}
                                        alt={review.parentName}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-lg">
                                    {review.parentName.charAt(0)}
                                </div>
                            )}
                            <div>
                                <h4 className="font-bold text-stone-900">{review.parentName}</h4>
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className={`w-4 h-4 ${i < review.rating ? "fill-current" : "text-stone-300 fill-current"}`} viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-stone-600 italic">"{review.text}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
