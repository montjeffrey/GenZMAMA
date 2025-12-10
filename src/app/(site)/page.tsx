import Hero from "../components/sections/Hero";
import TrustBar from "../components/sections/TrustBar";
import ServicesSnapshot from "../components/sections/ServicesSnapshot";
import BlogTeaser from "../components/sections/BlogTeaser";
import TestimonialCarousel from "../components/sections/TestimonialCarousel";
import { sanityFetch } from "@/sanity/lib/client";

const REVIEWS_QUERY = `*[_type == "review"] | order(date desc) {
    "id": _id,
    "content": text,
    "name": parentName,
    role,
    rating,
    "type": layoutType,
    "color": stickyColor,
    rotation,
    "date": date
}`;

export default async function Home() {
  const reviews = await sanityFetch<any[]>({ query: REVIEWS_QUERY, tags: ["review"] });

  return (
    <div className="flex flex-col gap-0 w-full overflow-x-hidden">
      <Hero />
      <TrustBar />
      <ServicesSnapshot />
      <BlogTeaser />

      {/* Social Proof Section (Dynamic Carousel) */}
      <section className="py-24 bg-terracotta/5 relative">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl text-warm-brown font-hand mb-12">What Other Mamas Say</h2>
          <TestimonialCarousel reviews={reviews || []} />
        </div>
      </section>
    </div>
  );
}
