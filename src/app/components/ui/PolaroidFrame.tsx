import { cn } from "@/lib/utils";

interface PolaroidFrameProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    rotation?: number;
    caption?: React.ReactNode;
}

export default function PolaroidFrame({
    children,
    className,
    rotation = -2,
    caption,
    ...props
}: PolaroidFrameProps) {
    return (
        <div
            className={cn(
                "relative bg-white p-3 pb-12 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl",
                className
            )}
            style={{ transform: `rotate(${rotation}deg)` }}
            {...props}
        >
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                {children}
            </div>
            {caption && (
                <div className="absolute bottom-2 left-0 w-full text-center font-hand text-xl text-gray-700">
                    {caption}
                </div>
            )}
        </div>
    );
}
