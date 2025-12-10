export default function TornEdge({ position = "bottom", className }: { position?: "top" | "bottom", className?: string }) {
    // SVG pattern for torn edge
    return (
        <div className={`absolute left-0 w-full h-8 overflow-hidden z-10 ${position === "top" ? "top-0 rotate-180" : "bottom-0"} ${className}`}>
            <svg
                viewBox="0 0 1200 40"
                preserveAspectRatio="none"
                className="w-full h-full fill-white"
            >
                <path d="M0,0 Q30,5 60,0 T120,0 T180,0 T240,0 T300,0 T360,0 T420,0 T480,0 T540,0 T600,0 T660,0 T720,0 T780,0 T840,0 T900,0 T960,0 T1020,0 T1080,0 T1140,0 T1200,0 V40 H0 V0Z" opacity="0.5" />
                <path d="M0,10 Q30,15 60,10 T120,10 T180,10 T240,10 T300,10 T360,10 T420,10 T480,10 T540,10 T600,10 T660,10 T720,10 T780,10 T840,10 T900,10 T960,10 T1020,10 T1080,10 T1140,10 T1200,10 V40 H0 V10Z" />
            </svg>
        </div>
    );
}
