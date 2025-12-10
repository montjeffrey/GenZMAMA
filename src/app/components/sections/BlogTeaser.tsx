import Link from "next/link";
import PolaroidFrame from "../ui/PolaroidFrame";
import WashiTape from "../ui/WashiTape";

const posts = [
    { id: 1, title: "5 Messy Play Ideas", category: "Activities", image: "/assets/placeholder-1.jpg", color: "terracotta" },
    { id: 2, title: "Toddler Meal Prep Hacks", category: "Nutrition", image: "/assets/placeholder-2.jpg", color: "forest" },
    { id: 3, title: "Sleep Training 101", category: "Parenting Tips", image: "/assets/placeholder-3.jpg", color: "brown" },
];

export default function BlogTeaser() {
    return (
        <section className="py-20 bg-white relative">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/paper-texture.png')] opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-5xl font-hand text-warm-brown mb-2">From the Mommy Blog</h2>
                        <p className="font-sans text-stone-500">Real talk, fun ideas, and community support.</p>
                    </div>
                    <Link href="/blog" className="hidden md:block font-hand text-2xl text-terracotta underline decoration-wavy hover:text-warm-brown">
                        View All Posts
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <Link key={post.id} href={`/blog/${post.id}`} className="group">
                            <div className="relative transform transition-all duration-300 group-hover:-translate-y-2">
                                <WashiTape color={post.color as any} className="w-24 left-1/2 -translate-x-1/2 -top-3 z-10" />
                                <div className="bg-white p-4 shadow-md border border-stone-100">
                                    <div className="aspect-square bg-stone-100 mb-4 overflow-hidden relative">
                                        {/* Image Placeholder */}
                                        <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-hand text-2xl bg-stone-100 group-hover:scale-105 transition-transform duration-500">
                                            Image
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#8B4513]/60 mb-1 block">{post.category}</span>
                                    <h3 className="text-2xl font-hand text-warm-brown leading-none group-hover:text-terracotta transition-colors">{post.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12 md:hidden">
                    <Link href="/blog" className="font-hand text-2xl text-terracotta underline decoration-wavy">
                        View All Posts
                    </Link>
                </div>
            </div>
        </section>
    );
}
