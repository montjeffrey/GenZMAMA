"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import WashiTape from "../ui/WashiTape";
import PolaroidFrame from "../ui/PolaroidFrame";
import TornEdge from "../ui/TornEdge";

const Scene = dynamic(() => import("../canvas/Scene"), { ssr: false });
const Hero3D = dynamic(() => import("../canvas/Hero3D"), { ssr: false });

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 700], [0, 250]);
    const rotate = useTransform(scrollY, [0, 500], [3, 10]);

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pb-24">
            {/* 3D Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Scene>
                    <Hero3D />
                </Scene>
            </div>

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left: Text Content */}
                <div className="space-y-6">
                    <div className="relative inline-block">
                        <h1 className="text-6xl md:text-7xl font-hand text-warm-brown leading-[1.1]">
                            Energetic, Fun Care <br />
                            <span className="text-terracotta">that Feels Like Family</span>
                        </h1>
                        <WashiTape color="beige" className="w-full -z-10 top-1/2 left-0 rotate-1 scale-110" />
                    </div>

                    <p className="text-xl md:text-2xl font-sans text-stone-600 max-w-lg">
                        Serving Wharton, NJ & Surrounding Areas. Reliable care for professional parents and new moms who need a trusted partner.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <Link href="/contact" className="bg-terracotta text-white font-hand text-2xl px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform hover:-rotate-1">
                            Book Childcare
                        </Link>
                        <Link href="/blog" className="text-forest-green font-bold text-lg underline decoration-wavy underline-offset-4 hover:text-warm-brown self-center">
                            Read the Blog
                        </Link>
                    </div>
                </div>

                {/* Right: Visuals (Polaroid + 3D) */}
                <div className="relative flex justify-center">
                    {/* Parallax effect on the Polaroid */}
                    <motion.div
                        style={{ y, rotate }}
                        className="relative transition-transform duration-500 hover:rotate-0 hover:scale-105"
                    >
                        <WashiTape color="terracotta" className="w-32 -top-4 left-1/2 -translate-x-1/2 z-20" />
                        <PolaroidFrame rotation={0} caption="Adventures everyday!" className="max-w-md w-full">
                            {/* Placeholder Image - usually Next/Image */}
                            <div className="w-full h-64 bg-stone-200 flex items-center justify-center text-stone-400 bg-gradient-to-br from-terracotta/20 to-warm-brown/20">
                                <span className="font-hand text-2xl text-warm-brown opacity-60">Mrs. A & The Kids</span>
                            </div>
                        </PolaroidFrame>
                    </motion.div>
                </div>
            </div>

            {/* Torn Edge Separator */}
            <div className="absolute bottom-0 w-full z-20 pointer-events-none">
                <TornEdge position="bottom" className="text-paper-white" />
            </div>
        </section>
    );
}
