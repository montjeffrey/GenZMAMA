
import { PortableText } from "@portabletext/react"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

const ptComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <div className="my-8">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
                        <Image
                            src={urlFor(value).fit('max').auto('format').url()}
                            alt={value.alt || ' '}
                            fill
                            className="object-contain"
                        />
                    </div>
                    {value.caption && (
                        <p className="text-center text-stone-500 text-sm mt-2 italic font-sans">
                            {value.caption}
                        </p>
                    )}
                </div>
            )
        }
    },
    block: {
        h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-10 mb-4 text-stone-800">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-8 mb-4 text-stone-800">{children}</h3>,
        h4: ({ children }: any) => <h4 className="text-xl font-bold mt-6 mb-3 text-stone-800">{children}</h4>,
        blockquote: ({ children }: any) => <blockquote className="border-l-4 border-amber-500 pl-4 italic my-6 text-stone-700">{children}</blockquote>,
        normal: ({ children }: any) => <p className="mb-4 leading-relaxed text-lg text-stone-700">{children}</p>,
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-700">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal pl-6 mb-4 space-y-2 text-stone-700">{children}</ol>,
    }
}

export default function BlogPost({ content }: { content: any }) {
    return (
        <div className="prose prose-stone prose-lg max-w-none">
            <PortableText value={content} components={ptComponents} />
        </div>
    )
}
