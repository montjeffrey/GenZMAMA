

import { Metadata } from "next";
import Link from "next/link";
import WashiTape from "../../components/ui/WashiTape";
import PolaroidFrame from "../../components/ui/PolaroidFrame";

export const metadata: Metadata = {
    title: "Meet Mrs. A",
    description: "Get to know Mrs. A, the energetic force behind The Gen Z Mama. Experienced, fun, and reliable childcare in Wharton, NJ.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen py-20 overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="text-center mb-20 relative">
                    <div className="relative inline-block">
                        <h1 className="text-6xl md:text-7xl font-hand text-terracotta mb-4 rotate-[-2deg] relative z-10">
                            MeEt Mrs. A
                        </h1>
                        <WashiTape color="forest" className="w-[120%] h-8 -bottom-2 -left-[10%] absolute opacity-30 z-0 rotate-1" />
                    </div>
                    <p className="font-sans text-xl text-warm-brown/80 max-w-2xl mx-auto mt-6">
                        The heart, soul, and "cool mom" energy behind The Gen Z Mama.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                    {/* Left Column: Photo */}
                    <div className="relative group perspective-1000">
                        <PolaroidFrame rotation={-3} className="p-4 bg-white shadow-xl transition-transform duration-500 group-hover:rotate-0">
                            {/* Placeholder for Mrs. A's Photo */}
                            <div className="w-full aspect-[4/5] bg-stone-100 flex flex-col items-center justify-center relative overflow-hidden border-2 border-stone-100 bg-gradient-to-br from-orange-100 to-amber-50">
                                <div className="text-6xl mb-4 grayscale opacity-50">✨</div>
                                <span className="font-hand text-warm-brown/60 text-2xl px-8 text-center rotate-[-5deg]">
                                    Only Good Vibes
                                </span>
                            </div>
                        </PolaroidFrame>
                        <WashiTape color="beige" className="w-40 -top-6 -left-6 rotate-[-15deg] z-20 shadow-sm" />
                        <WashiTape color="terracotta" className="w-32 -bottom-6 -right-6 rotate-[10deg] z-20 opacity-80" />
                    </div>

                    {/* Right Column: Bio */}
                    <div className="space-y-8 relative">
                        {/* Decorative Background Element */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl -z-10"></div>

                        <div className="prose prose-lg text-warm-brown/90 font-sans">
                            <p className="text-xl leading-relaxed">
                                <span className="font-hand text-3xl text-terracotta font-bold">Hi! I'm Mrs. A.</span> I created The Gen Z Mama because I believe childcare shouldn't feel transactional. It should feel like family (but the cool kind of family).
                            </p>
                            <p>
                                With years of experience and a passion for child development, I've designed a space where safety meets creativity. We ditch the rigid curriculums for organic, play-based learning that actually excites little minds.
                            </p>
                        </div>

                        {/* "Vibe Check" / Values Section */}
                        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-dashed border-stone-200 relative">
                            <h3 className="text-2xl font-hand text-warm-brown mb-4 flex items-center gap-2">
                                <span>Why "Gen Z"?</span>
                            </h3>
                            <p className="text-stone-600">
                                It's a mindset. It's about being authentic, inclusive, and maybe a little bit extra. We prioritize mental health, emotional intelligence, and individuality over cookie-cutter expectations.
                            </p>
                            <WashiTape color="forest" className="w-24 -top-3 left-1/2 -translate-x-1/2 opacity-50" />
                        </div>

                        <div className="pt-4 flex gap-4">
                            <Link href="/contact" className="bg-terracotta text-white font-hand text-xl px-8 py-3 rounded-full hover:bg-terracotta/90 hover:scale-105 hover:-rotate-1 transition-all shadow-md inline-block">
                                Join the Fam
                            </Link>
                            <Link href="/services" className="bg-transparent border-2 border-warm-brown text-warm-brown font-hand text-xl px-8 py-3 rounded-full hover:bg-warm-brown/5 transition-all inline-block">
                                See Services
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
