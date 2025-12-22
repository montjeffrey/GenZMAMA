import { cn } from "@/lib/utils";

interface PolaroidFrameProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    rotation?: number;
    caption?: React.ReactNode;
    fitContent?: boolean;
}

export default function PolaroidFrame({
    children,
    className,
    rotation = -2,
    caption,
    fitContent = false,
    ...props
}: PolaroidFrameProps) {
    return (
        <div
            className={cn(
                "relative bg-white p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col",
                className
            )}
            style={{ transform: `rotate(${rotation}deg)` }}
            {...props}
        >
            <div className={cn("relative overflow-y-auto shrink-0 scrollbar-thin", fitContent ? "" : "aspect-[4/5] bg-gray-100")}>
                {children}
            </div>
            {caption && (
                <div className="pt-4 pb-2 text-center font-hand text-xl text-gray-700 mt-auto">
                    {caption}
                </div>
            )}
        </div>
    );
}
