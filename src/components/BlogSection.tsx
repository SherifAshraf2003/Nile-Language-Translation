import { wisp } from "@/lib/wisp";
import Image from "next/image";
import Link from "next/link";

export default async function BlogSection() {
  const result = await wisp.getPosts({ limit: 6 });

  if (!result.posts || result.posts.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 my-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Latest from our Blog
        </h2>
        <Link href="/blogs" className="text-primary hover:underline">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-2">
        {result.posts.map((post) => (
          <div className="break-words" key={post.id}>
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
            <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
              <h3 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
                <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
              </h3>
              <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
                {(post.publishedAt || post.updatedAt).toLocaleString()}
              </div>
              <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
                {post.description}
              </div>
              <div className="text-sm text-muted-foreground">
                {post.tags.map((tag) => (
                  <div key={tag.id} className="mr-2 inline-block">
                    #{tag.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
