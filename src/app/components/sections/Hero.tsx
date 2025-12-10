import Link from "next/link";
import WashiTape from "../ui/WashiTape";
import PolaroidFrame from "../ui/PolaroidFrame";
import Scene from "../canvas/Scene";
import Hero3D from "../canvas/Hero3D";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
                        Serving Dover, NJ & Surrounding Areas. Reliable care for professional parents and new moms who need a trusted partner.
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
                    {/* We can use Hero3D here if we use View implementation, but for now let's stick to DOM + standard R3F background */}
                    <div className="relative rotate-3 hover:rotate-0 transition-transform duration-500">
                        <WashiTape color="terracotta" className="w-32 -top-4 left-1/2 -translate-x-1/2 z-20" />
                        <PolaroidFrame rotation={3} caption="Adventures everyday!" className="max-w-md w-full">
                            {/* Placeholder Image - usually Next/Image */}
                            <div className="w-full h-64 bg-stone-200 flex items-center justify-center text-stone-400">
                                (Candid Photo of Yan)
                            </div>
                        </PolaroidFrame>
                    </div>
                </div>
            </div>

            {/* Torn Edge Separator */}
            <div className="absolute bottom-0 w-full z-20">
                {/* TornEdge component would go here, implemented via CSS or SVG */}
            </div>
        </section>
    );
}
