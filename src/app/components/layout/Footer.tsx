import Link from "next/link";
import TornEdge from "@/app/components/ui/TornEdge";

export default function Footer() {
    return (
        <footer className="relative bg-forest-green text-paper-white pt-24 pb-12 mt-20">
            <TornEdge position="top" className="-mt-24" />
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <h2 className="text-4xl font-hand mb-2">The Gen Z Mama</h2>
                    <p className="font-sans opacity-80">Energetic, Fun Care that Feels Like Family.</p>
                </div>
                <div className="flex gap-4 font-sans font-bold">
                    <Link href="/services">Services</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Inquire</Link>
                </div>
                <div className="text-sm opacity-60">
                    © {new Date().getFullYear()} Yan's Childcare Services
                </div>
            </div>
        </footer>
    );
}
