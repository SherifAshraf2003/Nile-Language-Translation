import { wisp } from "@/lib/wisp";

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const result = await wisp.getPost(slug);
  const title = result.post?.title ?? "Blog Post";
  const description = result.post?.description ?? undefined;
  return {
    title,
    description,
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const result = await wisp.getPost(slug);
  if (!result.post) return null;
  const { title, publishedAt, createdAt, content, tags } = result.post;

  return (
    <main className="min-h-screen bg-gradient-to-br from-beige-light via-beige to-sand-light">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-desert-brown mb-6 leading-tight tracking-tight font-playfair">
              {title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-sm md:text-base text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-ochre rounded-full"></div>
                <span>
                  {Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(publishedAt || createdAt))}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft p-6 md:p-8 lg:p-12 border border-sand/30">
            <div
              className="prose prose-lg lg:prose-xl mx-auto prose-headings:text-desert-brown prose-headings:font-playfair prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-ochre prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-strong:text-desert-brown prose-blockquote:border-l-ochre prose-blockquote:bg-ochre-light/20 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground prose-hr:border-sand"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </div>

          {/* Tags Section */}
          {tags && tags.length > 0 && (
            <div className="mt-8 md:mt-12 text-center">
              <div className="inline-flex flex-wrap justify-center gap-2 md:gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="inline-block px-3 py-1.5 bg-ochre-light/30 text-ochre-dark font-medium text-sm rounded-full border border-ochre/20 hover:bg-ochre-light/50 transition-colors duration-200"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blogs Link */}
          <div className="mt-12 md:mt-16 text-center">
            <a
              href="/blogs"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-ochre to-ochre-dark text-white font-medium rounded-lg hover:from-ochre-dark hover:to-ochre transition-all duration-300 shadow-soft hover:shadow-card transform hover:-translate-y-0.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back to All Posts</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
