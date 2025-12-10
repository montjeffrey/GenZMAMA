import Link from "next/link";
import PolaroidFrame from "../ui/PolaroidFrame";
import WashiTape from "../ui/WashiTape";

export default function ServicesSnapshot() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 relative">
                    <h2 className="text-5xl font-hand text-warm-brown inline-block relative">
                        Care Options
                        <WashiTape color="terracotta" className="w-full -bottom-2 left-0 rotate-1 opacity-50 -z-10 h-4" />
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Card 1: Facility */}
                    <div className="group relative">
                        <PolaroidFrame rotation={-2} className="h-full flex flex-col items-center text-center p-6 bg-paper-white" caption="At My Home">
                            <div className="w-full h-48 bg-terracotta/10 flex items-center justify-center mb-4 rounded-sm border-2 border-dashed border-terracotta/30">
                                <span className="text-4xl">🏡</span>
                            </div>
                            <h3 className="text-2xl font-bold font-hand text-terracotta mb-2">Facility-Based Care</h3>
                            <p className="font-sans text-stone-600 mb-6">Structured fun, socialization, and learning in my dedicated childcare space.</p>
                            <Link href="/services#facility" className="inline-block border-2 border-terracotta text-terracotta font-hand text-xl px-6 py-2 rounded-full hover:bg-terracotta hover:text-white transition-colors">
                                View Pricing & Details
                            </Link>
                        </PolaroidFrame>
                    </div>

                    {/* Card 2: Travel */}
                    <div className="group relative mt-8 md:mt-0">
                        <PolaroidFrame rotation={2} className="h-full flex flex-col items-center text-center p-6 bg-paper-white" caption="At Your Home">
                            <div className="w-full h-48 bg-forest-green/10 flex items-center justify-center mb-4 rounded-sm border-2 border-dashed border-forest-green/30">
                                <span className="text-4xl">🚗</span>
                            </div>
                            <h3 className="text-2xl font-bold font-hand text-forest-green mb-2">Travel Care</h3>
                            <p className="font-sans text-stone-600 mb-6">I come to you! Convenient care for families within 20 miles of Dover, NJ.</p>
                            <Link href="/services#travel" className="inline-block border-2 border-forest-green text-forest-green font-hand text-xl px-6 py-2 rounded-full hover:bg-forest-green hover:text-white transition-colors">
                                View Pricing & Details
                            </Link>
                        </PolaroidFrame>
                    </div>
                </div>
            </div>
        </section>
    );
}
