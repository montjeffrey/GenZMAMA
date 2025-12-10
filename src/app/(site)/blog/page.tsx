import { Metadata } from "next";
import BlogListingClient from "./BlogListingClient";
import { sanityFetch } from "@/sanity/lib/client";

export const metadata: Metadata = {
    title: "The Mommy Blog",
    description: "Real talk on parenting, childcare, and life in New Jersey. Tips, tricks, and stories from The Gen Z Mama.",
};

const ALL_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  "id": _id,
  title,
  "slug": slug.current,
  category,
  mainImage,
  themeColor,
  publishedAt,
  excerpt
}`;

export default async function BlogListing() {
    const posts = await sanityFetch<any[]>({ query: ALL_POSTS_QUERY, tags: ["post"] });
    return <BlogListingClient initialPosts={posts || []} />;
}
