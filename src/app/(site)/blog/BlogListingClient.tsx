"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import WashiTape from "../../components/ui/WashiTape";
import BlogCard from "../../components/ui/BlogCard";

// Mock Data from Shared Lib
// Mock Data from Shared Lib
import { CATEGORIES } from "@/lib/data";

interface BlogListingClientProps {
    initialPosts: any[];
}

export default function BlogListingClient({ initialPosts }: BlogListingClientProps) {
    const [filter, setFilter] = useState("All");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const filteredPosts = filter === "All"
        ? initialPosts
        : initialPosts.filter(post => post.category === filter);

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
                {/* Hydration Fix: Use standard grid for server/initial render, then switch to Masonry to avoid layout mismatch */}
                {mounted ? (
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                        <Masonry gutter="2rem">
                            {filteredPosts.map((post, i) => (
                                <div key={post.id} className="mb-8 flex justify-center">
                                    <BlogCard
                                        post={post}
                                        rotation={i % 2 === 0 ? -1 : 1}
                                        className="w-full max-w-sm"
                                    />
                                </div>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, i) => (
                            <div key={post.id} className="mb-8 flex justify-center">
                                <BlogCard
                                    post={post}
                                    rotation={i % 2 === 0 ? -1 : 1}
                                    className="w-full max-w-sm"
                                />
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}
