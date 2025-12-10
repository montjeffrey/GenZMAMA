
import { sanityFetch } from "@/sanity/lib/client"
import Image from "next/image"
import Link from "next/link"
import { urlFor } from "@/sanity/lib/image"

const BLOG_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  mainImage,
  publishedAt,
  "excerpt": array::join(string::split((pt::text(body)), "")[0..200], "") + "..."
}`

interface Post {
    title: string
    slug: { current: string }
    mainImage: any
    publishedAt: string
    excerpt: string
}

export default async function BlogList() {
    const posts = await sanityFetch<Post[]>({ query: BLOG_QUERY, tags: ["post"] })

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <article key={post.slug.current} className="group relative flex flex-col items-start space-y-2">
                    {post.mainImage && (
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-stone-100 mb-4">
                            <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    )}
                    <h3 className="text-xl font-bold tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
                        <Link href={`/blog/${post.slug.current}`}>
                            <span className="absolute inset-0" />
                            {post.title}
                        </Link>
                    </h3>
                    <p className="text-stone-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                    </p>
                    <div className="text-xs text-stone-500 font-medium uppercase tracking-wider mt-auto pt-2">
                        {new Date(post.publishedAt).toLocaleDateString(undefined, {
                            dateStyle: "long"
                        })}
                    </div>
                </article>
            ))}
        </div>
    )
}
