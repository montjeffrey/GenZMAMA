export default function PaperTexture() {
    return (
        <svg className="pointer-events-none fixed isolate z-50 opacity-[0.2] mix-blend-multiply w-full h-full inset-0">
            <filter id="noiseFilter">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.8"
                    numOctaves="3"
                    stitchTiles="stitch"
                />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
    );
}
