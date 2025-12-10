import Link from "next/link";
import WashiTape from "../../components/ui/WashiTape";
import PolaroidFrame from "../../components/ui/PolaroidFrame";

// In a real app, this would be async fetching data based on ID
export default function BlogPost({ params }: { params: { id: string } }) {
    // Mock data
    const post = {
        title: "5 Messy Play Ideas",
        category: "Activities",
        date: "October 10, 2024",
        content: "Messy play is essential for sensory development. It doesn't have to mean a ruined living room! Here are my top safe, contained ideas...",
        gallery: [1, 2, 3]
    };

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4 grid md:grid-cols-[1fr_300px] gap-12 max-w-6xl">

                {/* Main Content */}
                <article>
                    <header className="mb-8 relative">
                        <span className="text-terracotta font-bold tracking-widest uppercase text-sm">{post.category} • {post.date}</span>
                        <h1 className="text-5xl md:text-6xl font-hand text-warm-brown leading-none mt-2 relative z-10">
                            {post.title}
                        </h1>
                        <WashiTape color="forest" className="w-64 -top-8 -left-4 -rotate-2 opacity-20 -z-0" />
                    </header>

                    {/* Hero Image */}
                    <div className="mb-12 rotate-1">
                        <PolaroidFrame rotation={0} className="w-full">
                            <div className="w-full h-80 bg-stone-200 flex items-center justify-center text-stone-400">Hero Image</div>
                        </PolaroidFrame>
                    </div>

                    {/* Text Content */}
                    <div className="prose prose-stone prose-lg font-sans mb-12">
                        <p className="lead text-xl text-warm-brown font-medium">{post.content}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <h3>Why it matters</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>

                    {/* Step by Step Gallery */}
                    <div className="bg-paper-white p-8 rounded-xl border-dashed border-2 border-terracotta/30 relative">
                        <WashiTape color="terracotta" className="w-48 -top-6 left-1/2 -translate-x-1/2" />
                        <h3 className="text-3xl font-hand text-center mb-8 text-terracotta">Step-by-Step Guide</h3>
                        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                            {post.gallery.map((step) => (
                                <div key={step} className="flex-none w-64 snap-center">
                                    <div className="aspect-[3/4] bg-white shadow-md p-2 rotate-1">
                                        <div className="w-full h-full bg-stone-100 flex items-center justify-center text-stone-400">Step {step}</div>
                                    </div>
                                    <p className="text-center font-hand mt-2 text-warm-brown">Step {step}: Description</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="space-y-8 h-fit sticky top-24">
                    {/* Author */}
                    <div className="bg-white p-6 shadow-sm border-t-4 border-terracotta text-center">
                        <div className="w-24 h-24 bg-stone-200 rounded-full mx-auto mb-4 border-2 border-terracotta"></div>
                        <h3 className="font-hand text-2xl text-warm-brown">Hi, I'm Yan!</h3>
                        <p className="text-sm text-stone-500 mt-2">I'm an energetic childcare provider who becomes part of your family.</p>
                        <Link href="/about" className="text-terracotta font-bold text-sm mt-4 inline-block underline decoration-wavy">Read My Story</Link>
                    </div>

                    {/* CTA Box */}
                    <div className="bg-forest-green/10 p-6 rounded-lg text-center border border-forest-green/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 text-6xl opacity-10">🧸</div>
                        <h3 className="font-hand text-2xl text-forest-green mb-2">Need Childcare?</h3>
                        <p className="text-sm mb-4">I offer facility-based and travel care in Dover, NJ.</p>
                        <Link href="/contact" className="block w-full bg-forest-green text-white py-3 rounded-full font-hand text-xl hover:bg-forest-green/90 transition-colors">
                            Inquire Now
                        </Link>
                    </div>
                </aside>

            </div>
        </div>
    );
}
