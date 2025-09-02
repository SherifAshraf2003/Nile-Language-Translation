import { wisp } from "@/lib/wisp";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;

export default async function BlogsIndexPage() {
  const result = await wisp.getPosts({ limit: 24 });

  return (
    <main className="min-h-screen bg-gradient-to-br from-beige-light via-beige to-sand-light">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-desert-brown mb-6 leading-tight tracking-tight font-playfair">
            Our Blogs
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Insights, stories, and perspectives on language services,
            interpretation, and cultural connection
          </p>
        </div>

        {/* Posts Grid */}
        {!result.posts || result.posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft p-8 md:p-12 border border-sand/30 max-w-md mx-auto">
              <div className="w-16 h-16 bg-ochre-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-ochre"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-desert-brown mb-2">
                No Posts Yet
              </h3>
              <p className="text-muted-foreground">
                We&apos;re working on some great content. Please check back
                soon!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {result.posts?.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="aspect-[16/9] relative rounded-xl overflow-hidden ring-1 ring-sand/20 group-hover:ring-ochre/40 transition-all duration-300">
                    {post.image ? (
                      <Image
                        alt={post.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        src={post.image}
                        fill
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src="https://placehold.co/600x400"
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-ochre rounded-full"></div>
                    <span>
                      {Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }).format(new Date(post.publishedAt || post.updatedAt))}
                    </span>
                  </div>

                  <h2 className="font-playfair font-bold text-xl md:text-2xl text-desert-brown group-hover:text-ochre transition-colors duration-200 leading-tight">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.description}
                  </p>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag.id}
                          className="inline-block px-2 py-1 bg-ochre-light/20 text-ochre-dark text-xs font-medium rounded-full border border-ochre/20"
                        >
                          #{tag.name}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center text-ochre font-medium hover:text-ochre-dark transition-colors duration-200 group/link"
                  >
                    <span>Read more</span>
                    <svg
                      className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
