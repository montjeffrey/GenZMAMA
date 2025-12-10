
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";

import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import WashiTape from "../../../components/ui/WashiTape";
import PolaroidFrame from "../../../components/ui/PolaroidFrame";
import BlogPost from "../../../components/blog/BlogPost";

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  category,
  mainImage,
  themeColor,
  publishedAt,
  excerpt,
  body
}`;

// Generate static params for all blog posts
export async function generateStaticParams() {
    const posts = await sanityFetch<any[]>({
        query: `*[_type == "post"]{ "slug": slug.current }`,
        tags: ["post"]
    });

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await sanityFetch<any>({ query: POST_QUERY, params: { slug }, tags: [`post:${slug}`] });

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    const ogImage = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined;

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.publishedAt,
            authors: ["Mrs. A"],
            images: ogImage ? [ogImage] : [],
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await sanityFetch<any>({ query: POST_QUERY, params: { slug }, tags: [`post:${slug}`] });

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen py-24">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Navigation Back */}
                <div className="mb-8">
                    <Link href="/blog" className="text-warm-brown font-hand text-xl hover:text-terracotta transition-colors flex items-center gap-2">
                        &larr; Back to All Posts
                    </Link>
                </div>

                {/* Post Container (Journal Style) */}
                <div className="bg-white p-8 md:p-12 shadow-2xl relative rotate-1">
                    {/* Washi Tape Decor */}
                    <WashiTape color={post.themeColor || "terracotta"} className="w-48 -top-6 left-1/2 -translate-x-1/2 z-10" />

                    {/* Header */}
                    <div className="text-center mb-12 border-b-2 border-dashed border-stone-200 pb-8">
                        <span className="inline-block bg-stone-100 text-stone-500 font-sans text-sm px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-hand text-warm-brown mb-6">{post.title}</h1>
                        <div className="font-sans text-stone-400 italic">
                            Posted on {new Date(post.publishedAt).toLocaleDateString(undefined, { dateStyle: 'long' })} by Mrs. A
                        </div>
                    </div>

                    {/* Content Flex */}
                    <div className="flex flex-col md:flex-row gap-12 items-start">

                        {/* Visual */}
                        <div className="md:w-1/3 w-full">
                            <PolaroidFrame rotation={-2} caption="Visual Inspiration">
                                <div className="aspect-square bg-stone-100 flex items-center justify-center bg-stone-50 overflow-hidden relative">
                                    {post.mainImage ? (
                                        <Image
                                            src={urlFor(post.mainImage).width(500).height(500).url()}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <span className="text-4xl">📸</span>
                                    )}
                                </div>
                            </PolaroidFrame>
                        </div>

                        {/* Text */}
                        <div className="md:w-2/3 w-full prose prose-stone prose-lg font-sans text-stone-600">
                            {post.excerpt && (
                                <p className="lead text-xl text-warm-brown font-hand">{post.excerpt}</p>
                            )}

                            <BlogPost content={post.body} />
                        </div>
                    </div>

                    {/* Footer / Share */}
                    <div className="mt-12 pt-8 border-t-2 border-dashed border-stone-200 text-center">
                        <p className="font-hand text-xl text-stone-400">Thanks for reading!</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
