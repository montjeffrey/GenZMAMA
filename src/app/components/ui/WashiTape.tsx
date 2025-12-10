"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const washiTapeVariants = cva(
    "absolute h-12 w-48 opacity-90 shadow-sm rotate-[-2deg]",
    {
        variants: {
            color: {
                terracotta: "bg-terracotta/80",
                forest: "bg-forest-green/80",
                brown: "bg-warm-brown/60",
                beige: "bg-[#E6E6CA]/90",
            },
            pattern: {
                none: "",
                dots: "bg-[url('/assets/dots.svg')]", // Placeholder for pattern
                lines: "bg-[url('/assets/lines.svg')]",
            }
        },
        defaultVariants: {
            color: "terracotta",
            pattern: "none",
        },
    }
);

interface WashiTapeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">, VariantProps<typeof washiTapeVariants> { }

export default function WashiTape({ className, color, pattern, ...props }: WashiTapeProps) {
    // SVG Mask for jagged edges - using clip path for now
    return (
        <motion.div
            className={cn(washiTapeVariants({ color, pattern }), className, "hover:shadow-md cursor-pointer transition-shadow")}
            style={{
                clipPath: "polygon(2% 0, 98% 1%, 100% 95%, 98% 100%, 2% 98%, 0% 5%)", // Rough shape
            }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            {...(props as any)}
        >
            <div className="w-full h-full opacity-30 bg-white mix-blend-overlay animate-pulse-slow"></div>
        </motion.div>
    );
}
