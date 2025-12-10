"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import WashiTape from "./WashiTape";
import { urlFor } from "@/sanity/lib/image";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    mainImage?: any;
    themeColor?: string;
}

interface BlogCardProps {
    post: BlogPost;
    className?: string;
    rotation?: number;
}

export default function BlogCard({ post, className, rotation = 0 }: BlogCardProps) {
    // Map data color to WashiTape valid color, default to terracotta
    const tapeColor = (post.themeColor as "terracotta" | "forest" | "brown" | "beige") || "terracotta";

    return (
        <Link href={`/blog/${post.slug}`} className="block group">
            <div
                className={cn(
                    "relative bg-white p-3 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:z-10",
                    className
                )}
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                {/* Decorative Tape */}
                <WashiTape
                    color={tapeColor}
                    className="w-32 h-10 -top-4 left-1/2 -translate-x-1/2 z-20 opacity-90"
                />

                {/* Image Section */}
                <div className="aspect-[4/3] bg-stone-100 relative overflow-hidden mb-4">
                    {post.mainImage ? (
                        <Image
                            src={urlFor(post.mainImage).width(400).height(300).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-400">
                            No Image
                        </div>
                    )}
                </div>

                {/* Content Section - Flexible Height */}
                <div className="px-2 pb-2 text-center">
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-stone-400 mb-2">
                        {post.category}
                    </span>
                    <h2 className="text-2xl font-hand text-warm-brown leading-tight mb-3 group-hover:text-terracotta transition-colors">
                        {post.title}
                    </h2>
                    <p className="font-sans text-stone-600 text-sm leading-relaxed line-clamp-4">
                        {post.excerpt}
                    </p>
                </div>
            </div>
        </Link>
    );
}
