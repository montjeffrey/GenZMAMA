"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import WashiTape from "../ui/WashiTape";

const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About Yan", href: "/about" },
    { name: "Mommy Blog", href: "/blog" },
    { name: "Reviews", href: "/reviews" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-40 bg-paper-white/90 backdrop-blur-sm border-b-2 border-dashed border-warm-brown/20 h-20">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="relative group">
                    <h1 className="text-3xl font-hand font-bold text-terracotta transform group-hover:scale-105 transition-transform">
                        The Gen Z Mama
                    </h1>
                    <WashiTape color="forest" className="w-24 h-6 -top-4 -left-2 rotate-[-5deg] opacity-60 z-[-1]" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 font-sans font-semibold text-warm-brown">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:text-terracotta transition-colors relative group">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link href="/contact" className="bg-terracotta text-white font-hand text-xl px-6 py-2 rounded-full shadow-md hover:bg-terracotta/90 hover:-rotate-2 transition-all block">
                        Inquire for Care
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-warm-brown" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "Close" : "Menu"}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-paper-white h-screen flex flex-col items-center gap-8 pt-10 shadow-inner">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-2xl font-hand text-warm-brown" onClick={() => setIsOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className="bg-terracotta text-white font-hand text-2xl px-8 py-3 rounded-full mt-4" onClick={() => setIsOpen(false)}>
                        Inquire for Care
                    </Link>
                </div>
            )}
        </nav>
    );
}
