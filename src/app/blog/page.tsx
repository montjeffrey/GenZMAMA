"use client";

import { useState } from "react";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import WashiTape from "../components/ui/WashiTape";
import PolaroidFrame from "../components/ui/PolaroidFrame";

// Mock Data
const BLOG_POSTS = [
    { id: 1, title: "5 Messy Play Ideas", category: "Activities", excerpt: "Get messy without the stress. Here are our favorite sensory bins.", image: "/assets/placeholder-1.jpg", color: "terracotta" },
    { id: 2, title: "Toddler Meal Prep Hacks", category: "Nutrition", excerpt: "How to survive the picky eater phase with a smile.", image: "/assets/placeholder-2.jpg", color: "forest" },
    { id: 3, title: "Sleep Training 101", category: "Parenting Tips", excerpt: "Gentle methods that actually work for sensitive sleepers.", image: "/assets/placeholder-3.jpg", color: "brown" },
    { id: 4, title: "Best Wooden Toys 2024", category: "Product Reviews", excerpt: "Sustainable, durable, and fun. Our top picks.", image: "/assets/placeholder-1.jpg", color: "beige" },
    { id: 5, title: "Rainy Day Crafts", category: "Activities", excerpt: "Keep them entertained indoors with simple supplies.", image: "/assets/placeholder-2.jpg", color: "terracotta" },
    { id: 6, title: "Self-Care for Mamas", category: "Parenting Tips", excerpt: "Because you can't pour from an empty cup.", image: "/assets/placeholder-3.jpg", color: "forest" }
];

const CATEGORIES = ["All", "Parenting Tips", "Activities", "Nutrition", "Product Reviews"];

export default function BlogListing() {
    const [filter, setFilter] = useState("All");

    const filteredPosts = filter === "All"
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === filter);

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-hand text-warm-brown inline-block relative">
                        The Mommy Blog
                        <WashiTape color="brown" className="w-full -bottom-4 left-0 rotate-1 opacity-30 -z-10" />
                    </h1>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-hand text-xl border-2 transition-all ${filter === cat
                                ? 'bg-terracotta border-terracotta text-white shadow-md scale-105'
                                : 'bg-white border-stone-200 text-stone-500 hover:border-terracotta/50 hover:text-terracotta'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry gutter="2rem">
                        {filteredPosts.map((post, i) => (
                            <div key={post.id} className="relative group">
                                <Link href={`/blog/${post.id}`}>
                                    <PolaroidFrame
                                        rotation={i % 2 === 0 ? -1 : 1}
                                        caption={<span className="text-lg text-terracotta font-bold">{post.category}</span>}
                                        className="h-auto pb-12 hover:z-10 transition-transform duration-300 group-hover:-translate-y-2"
                                    >
                                        <div className="aspect-[4/5] bg-stone-100 flex items-center justify-center relative overflow-hidden">
                                            <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-400">Image ({post.title})</div>
                                        </div>
                                        <div className="absolute bottom-16 left-0 w-full px-4 text-center">
                                            <h2 className="text-2xl font-hand text-warm-brown leading-none mb-2 bg-white/80 inline-block p-1">{post.title}</h2>
                                            <p className="font-sans text-xs text-stone-500 line-clamp-2 bg-white/80 p-1">{post.excerpt}</p>
                                        </div>
                                    </PolaroidFrame>
                                </Link>
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>

            </div>
        </div>
    );
}
