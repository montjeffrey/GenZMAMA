

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
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24 relative">
                    <div className="relative inline-block">
                        <h1 className="text-5xl md:text-7xl font-hand text-terracotta mb-4 rotate-[-2deg] relative z-10 px-4">
                            Meet Mrs. A
                        </h1>
                        <WashiTape color="forest" className="w-[110%] h-8 -bottom-1 -left-[5%] absolute opacity-30 z-0 rotate-1" />
                    </div>
                    <p className="font-sans text-xl text-warm-brown/80 max-w-2xl mx-auto mt-6 px-4">
                        The experienced heart, soul, and "cool mom" energy behind The Gen Z Mama.
                    </p>
                </div>

                {/* Main Content Grid - The Origin Story */}
                <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center mb-20 md:mb-32">

                    {/* Left Column: Photo */}
                    <div className="w-full md:w-5/12 relative group perspective-1000 order-1 md:order-1 pt-4 md:pt-0 shrink-0">
                        <PolaroidFrame rotation={-3} className="p-3 sm:p-5 bg-white shadow-xl transition-transform duration-500 group-hover:rotate-0">
                            <img src="/images/mrs-a.jpeg" alt="Mrs. A" className="w-full aspect-[4/5] object-cover" />
                        </PolaroidFrame>
                        <WashiTape color="beige" className="w-32 sm:w-40 -top-4 sm:-top-6 -left-4 sm:-left-6 rotate-[-15deg] z-20 shadow-sm" />
                        <WashiTape color="terracotta" className="w-24 sm:w-32 -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 rotate-[10deg] z-20 opacity-80" />
                    </div>

                    {/* Right Column: Bio */}
                    <div className="w-full md:w-7/12 space-y-6 md:space-y-8 relative order-2 md:order-2">
                        {/* Decorative Background Element */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl -z-10 hidden md:block"></div>

                        <div className="prose prose-lg text-stone-700 font-sans">
                            <p className="text-xl leading-relaxed mb-6">
                                <span className="font-hand text-4xl sm:text-5xl text-terracotta font-bold block mb-4">Hi! I'm Mrs. A.</span>
                                I didn't realize the true weight of childcare until I became a mommy myself. While I cherish the community I have now, early motherhood taught me the immense value of building your own village.
                            </p>
                            <p className="mb-4">
                                I originally created The Gen Z Mama as a supportive space for local moms in my town and the surrounding area. We would gather together to lift each other up, and I quickly became the mom people came to for just about everything—especially childcare services.
                            </p>
                            <p>
                                After getting my NJ in-home provider license, I expanded into providing Newborn Care Specialist & Sleep Consulting services. It has completely taken over in the best way possible, and I couldn't be more grateful to spend my days supporting families like yours.
                            </p>
                        </div>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <Link href="/contact" className="bg-terracotta text-white font-hand text-xl px-8 py-3 rounded-full hover:bg-terracotta/90 hover:scale-105 hover:-rotate-1 transition-all shadow-md inline-block">
                                Join the Fam
                            </Link>
                            <Link href="/services" className="bg-transparent border-2 border-warm-brown text-warm-brown font-hand text-xl px-8 py-3 rounded-full hover:bg-warm-brown/5 transition-all inline-block">
                                See Services
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Credentials & Personal */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Credentials */}
                    <div className="bg-sage/10 p-8 sm:p-10 rounded-[2rem] border-2 border-dashed border-sage/30 relative flex flex-col h-full">
                        <WashiTape color="forest" className="w-32 -top-5 left-8 sm:-left-4 -rotate-6 absolute z-10 opacity-70" />

                        <h3 className="text-3xl font-hand text-forest mb-6 flex items-center gap-3">
                            The Professional Side
                        </h3>

                        <div className="space-y-6 text-stone-700 font-sans flex-grow">
                            <p className="leading-relaxed">
                                My approach is rooted in real mom-experience, but I've purposefully backed it up with formal education to give your growing family the highest standard of care possible.
                            </p>

                            <ul className="space-y-5 pt-2">
                                <li className="flex items-start gap-4">
                                    <span className="text-2xl mt-0.5" aria-hidden="true">🎓</span>
                                    <div>
                                        <strong className="block text-warm-brown text-lg">Education</strong>
                                        <span className="text-stone-600 block mt-1">Associates degree from CCM & Bachelors degree from Rutgers.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-2xl mt-0.5" aria-hidden="true">📜</span>
                                    <div>
                                        <strong className="block text-warm-brown text-lg">Certifications</strong>
                                        <span className="text-stone-600 block mt-1">Certified Postpartum Doula, Pediatric Sleep Consultant, and Newborn Care Specialist (all through DNT).</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-2xl mt-0.5" aria-hidden="true">🏠</span>
                                    <div>
                                        <strong className="block text-warm-brown text-lg">Licensing</strong>
                                        <span className="text-stone-600 block mt-1">Licensed NJ In-Home Provider.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Get to Know Me */}
                    <div className="bg-mustard/10 p-8 sm:p-10 rounded-[2rem] border-2 border-dashed border-mustard/30 relative flex flex-col h-full">
                        <WashiTape color="terracotta" className="w-24 -top-4 right-8 sm:-right-4 rotate-12 absolute z-10 opacity-70" />

                        <h3 className="text-3xl font-hand text-warm-brown mb-6">Get to Know Me</h3>

                        <div className="space-y-8 text-stone-700 font-sans flex-grow">
                            <div>
                                <h4 className="font-bold text-lg text-terracotta mb-2 flex items-center gap-2">
                                    Life Outside of Work <span className="text-xl">✨</span>
                                </h4>
                                <p className="leading-relaxed text-stone-600">
                                    I'm a married mama to two amazing kiddos and one very loved dog. When I'm not snuggling babies or chatting with parents, I'm usually swimming, reading a good book, or heading to a Pilates class.
                                </p>
                            </div>

                            <div className="bg-white/50 p-6 rounded-2xl">
                                <h4 className="font-bold text-lg text-terracotta mb-4 flex items-center gap-2">
                                    Local NJ Favorites <span className="text-xl">📍</span>
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex flex-col gap-1">
                                        <strong className="text-warm-brown">For the Kids:</strong>
                                        <span className="text-sm text-stone-600">Mama's Play, Huckleberry, Liberty Science Center</span>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <strong className="text-warm-brown">Matcha Runs:</strong>
                                        <span className="text-sm text-stone-600">Beanbury, On the Spot, The Barn Cafe</span>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <strong className="text-warm-brown">Date Night:</strong>
                                        <span className="text-sm text-stone-600">The Pasta Shop, Longhorn, Ruth's Chris, Marley's Gotham Grill</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Photo Collage Section */}
                <div className="mt-20 md:mt-32 flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-6 relative px-4 pb-12">
                    {/* Decorative Background Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-warm-brown/5 rounded-[4rem] blur-2xl -z-10 hidden sm:block"></div>

                    <div className="relative group perspective-1000 w-64 sm:w-72 z-10 sm:translate-y-6 sm:translate-x-4">
                        <PolaroidFrame rotation={-5} fitContent={true} className="p-3 sm:p-4 bg-white shadow-xl transition-all duration-500 hover:rotate-0 hover:scale-[1.03] hover:z-30">
                            <img src="/images/family-photo2.jpeg" alt="Mrs. A's Family" className="w-full aspect-[4/5] object-cover" />
                            <div className="mt-3 text-center font-hand text-xl text-stone-600">My world 🤍</div>
                        </PolaroidFrame>
                        <WashiTape color="forest" className="w-24 sm:w-32 -top-4 -left-4 sm:-left-6 rotate-[-15deg] z-20 opacity-90 shadow-sm" />
                    </div>

                    <div className="relative group perspective-1000 w-64 sm:w-72 z-20 sm:-translate-y-8 sm:-translate-x-4">
                        <PolaroidFrame rotation={6} fitContent={true} className="p-3 sm:p-4 bg-white shadow-xl transition-all duration-500 hover:rotate-0 hover:scale-[1.03] hover:z-30">
                            <img src="/images/Kids-image.jpeg" alt="Mrs. A's Kids" className="w-full aspect-[4/5] object-cover" />
                            <div className="mt-3 text-center font-hand text-xl text-stone-600">The reason I do it all ✨</div>
                        </PolaroidFrame>
                        <WashiTape color="beige" className="w-24 sm:w-32 -top-3 -right-4 sm:-right-6 rotate-[12deg] z-30 opacity-90 shadow-sm" />
                    </div>
                </div>

            </div>
        </div>
    );
}
