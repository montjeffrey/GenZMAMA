"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import WashiTape from "../ui/WashiTape";
import { AnimatePresence, motion } from "framer-motion";

type NavLink = {
    name: string;
    href: string;
    subLinks?: { name: string; href: string }[];
};

const navLinks: NavLink[] = [
    { name: "About Mrs. A", href: "/about" },
    {
        name: "Services",
        href: "/services",
        subLinks: [
            { name: "Services Overview", href: "/services" },
            { name: "Overnight Newborn Care", href: "/at-your-home/overnight-newborn-care" },
            { name: "Sleep Consulting", href: "/services/sleep-consulting" },
            { name: "Postpartum Doula", href: "/services/postpartum-doula" },
        ]
    },
    { name: "Mommy Blog", href: "/blog" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [desktopHoveredItem, setDesktopHoveredItem] = useState<string | null>(null);
    const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
    const desktopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (name: string) => {
        if (desktopTimeoutRef.current) clearTimeout(desktopTimeoutRef.current);
        setDesktopHoveredItem(name);
    };

    const handleMouseLeave = () => {
        desktopTimeoutRef.current = setTimeout(() => {
            setDesktopHoveredItem(null);
        }, 150);
    };

    // Close mobile menu completely on route change or when closed
    useEffect(() => {
        if (!isOpen) setActiveMobileMenu(null);
    }, [isOpen]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

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
                        <div
                            key={link.name}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(link.name)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                href={link.href}
                                className="transition-colors relative group hover:text-terracotta flex items-center gap-1 py-4"
                                aria-haspopup={link.subLinks ? "true" : undefined}
                                aria-expanded={link.subLinks ? desktopHoveredItem === link.name : undefined}
                                onFocus={() => setDesktopHoveredItem(link.name)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Escape') setDesktopHoveredItem(null);
                                }}
                            >
                                {link.name}
                                {link.subLinks && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("transition-transform duration-200 mt-0.5", desktopHoveredItem === link.name ? "rotate-180" : "")}><path d="m6 9 6 6 6-6" /></svg>
                                )}
                                <span className={cn(
                                    "absolute bottom-2 left-0 h-0.5 bg-terracotta transition-all",
                                    desktopHoveredItem === link.name && link.subLinks ? "w-full" : "w-0 group-hover:w-full"
                                )}></span>
                            </Link>

                            {/* Desktop Dropdown */}
                            {link.subLinks && (
                                <AnimatePresence>
                                    {desktopHoveredItem === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-[80%] -left-4 mt-2 w-64 bg-paper-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-warm-brown/10 overflow-hidden z-50"
                                            onMouseEnter={() => handleMouseEnter(link.name)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className="flex flex-col py-3">
                                                {link.subLinks.map((subLink) => (
                                                    <Link
                                                        key={subLink.name}
                                                        href={subLink.href}
                                                        className="px-6 py-2.5 text-warm-brown hover:bg-warm-brown/5 hover:text-terracotta transition-colors font-medium outline-none focus:bg-warm-brown/5 focus:text-terracotta relative group"
                                                        onClick={() => setDesktopHoveredItem(null)}
                                                        onFocus={() => setDesktopHoveredItem(link.name)}
                                                        onBlur={(e) => {
                                                            if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                                                                setDesktopHoveredItem(null);
                                                            }
                                                        }}
                                                    >
                                                        {subLink.name}
                                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-terracotta transition-all group-hover:h-1/2 rounded-r"></span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
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
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden absolute top-20 left-0 w-full bg-paper-white flex flex-col shadow-inner overflow-hidden"
                    >
                        <div className="relative w-full flex-1 pt-10 min-h-[60vh]">
                            <AnimatePresence initial={false} mode="popLayout">
                                {!activeMobileMenu ? (
                                    <motion.div
                                        key="main-menu"
                                        initial={{ x: "-100%", opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: "-50%", opacity: 0 }}
                                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                                        className="absolute inset-x-0 top-0 flex flex-col items-center gap-8 px-4"
                                    >
                                        {navLinks.map((link) => (
                                            <div key={link.name} className="flex flex-col items-center w-full">
                                                {link.subLinks ? (
                                                    <button
                                                        className="text-2xl font-hand text-warm-brown flex items-center justify-center gap-2 w-full py-3 px-4 active:bg-warm-brown/5 rounded-lg transition-colors"
                                                        onClick={() => setActiveMobileMenu(link.name)}
                                                    >
                                                        {link.name}
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1"><path d="m9 18 6-6-6-6" /></svg>
                                                    </button>
                                                ) : (
                                                    <Link
                                                        href={link.href}
                                                        className="text-2xl font-hand text-warm-brown py-3 px-4 w-full text-center active:bg-warm-brown/5 rounded-lg transition-colors"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                        <Link href="/contact" className="bg-terracotta text-white font-hand text-2xl px-8 py-3 rounded-full mt-4" onClick={() => setIsOpen(false)}>
                                            Inquire for Care
                                        </Link>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="sub-menu"
                                        initial={{ x: "100%", opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: "100%", opacity: 0 }}
                                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                                        className="absolute inset-x-0 top-0 flex flex-col items-center px-4"
                                    >
                                        <button
                                            className="text-xl font-hand text-warm-brown/60 flex items-center justify-center gap-1 w-full py-2 mb-6 active:bg-warm-brown/5 rounded-lg transition-colors"
                                            onClick={() => setActiveMobileMenu(null)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                            Back
                                        </button>

                                        <div className="w-full flex flex-col items-center">
                                            {/* Apple timer style overlay effect - closely stacked with large fonts */}
                                            {navLinks.find(l => l.name === activeMobileMenu)?.subLinks?.map((subLink, index) => (
                                                <motion.div
                                                    key={subLink.name}
                                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    transition={{ delay: index * 0.05 + 0.1, type: "spring", stiffness: 300, damping: 20 }}
                                                    className="w-full flex justify-center -my-1 relative z-10 hover:z-20"
                                                >
                                                    <Link
                                                        href={subLink.href}
                                                        className="text-3xl font-hand text-warm-brown py-4 px-6 w-[90%] text-center bg-paper-white/80 active:bg-warm-brown/10 rounded-2xl transition-all shadow-sm border border-warm-brown/10 backdrop-blur-md"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
}
