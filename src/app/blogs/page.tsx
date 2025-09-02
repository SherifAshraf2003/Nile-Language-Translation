import { wisp } from "@/lib/wisp";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;

export default async function BlogsIndexPage() {
  const result = await wisp.getPosts({ limit: 24 });

  return (
    <main className="container mx-auto px-4 md:px-6 lg:px-8 my-12 md:my-20">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
        All Blog Posts
      </h1>
      {(!result.posts || result.posts.length === 0) && (
        <p className="text-muted-foreground">
          No posts yet. Please check back soon.
        </p>
      )}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {result.posts?.map((post) => (
          <article key={post.id} className="break-words">
            <Link href={`/blogs/${post.slug}`}>
              <div className="aspect-[16/9] relative rounded-lg overflow-hidden ring-1 ring-muted">
                {post.image ? (
                  <Image
                    alt={post.title}
                    className="object-cover"
                    src={post.image}
                    fill
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="https://placehold.co/600x400"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </Link>
            <div className="grid grid-cols-1 gap-3 mt-4">
              <h2 className="font-sans font-semibold tracking-tighter text-primary text-xl md:text-2xl">
                <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
              </h2>
              <div className="text-sm italic tracking-tighter text-muted-foreground">
                {(post.publishedAt || post.updatedAt).toLocaleString()}
              </div>
              <p className="leading-relaxed line-clamp-3 text-muted-foreground">
                {post.description}
              </p>
              <div className="text-sm text-muted-foreground">
                {post.tags.map((tag) => (
                  <span key={tag.id} className="mr-2">
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
