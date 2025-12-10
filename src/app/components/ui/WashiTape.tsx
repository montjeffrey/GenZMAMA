import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

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
    // SVG Mask for jagged edges
    const tapeMask = "polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)"; // Simplified clip path, ideally SVG

    return (
        <div
            className={cn(washiTapeVariants({ color, pattern }), className)}
            style={{
                clipPath: "polygon(2% 0, 98% 1%, 100% 95%, 98% 100%, 2% 98%, 0% 5%)", // Rough shape
            }}
            {...props}
        >
            <div className="w-full h-full opacity-30 bg-white mix-blend-overlay animate-pulse-slow"></div>
        </div>
    );
}
