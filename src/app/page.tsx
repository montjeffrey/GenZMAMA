import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import ServicesSnapshot from "./components/sections/ServicesSnapshot";
import BlogTeaser from "./components/sections/BlogTeaser";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full overflow-x-hidden">
      <Hero />
      <TrustBar />
      <ServicesSnapshot />
      <BlogTeaser />

      {/* Social Proof Section (Simple Static Quote) */}
      <section className="py-24 bg-terracotta/5 relative">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-6xl text-terracotta opacity-30 font-serif leading-none">“</span>
          <p className="text-3xl md:text-4xl font-hand text-warm-brown leading-snug relative z-10">
            Yan became part of our family instantly. Her energy is unmatched, and I've never seen my kids so excited to go to 'school' every day.
          </p>
          <div className="mt-8 font-sans font-bold text-forest-green">— Sarah M., Dover NJ</div>
        </div>
      </section>
    </div>
  );
}
