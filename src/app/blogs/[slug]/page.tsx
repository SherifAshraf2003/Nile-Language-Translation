import type { Metadata } from "next";
import { wisp } from "@/lib/wisp";
import Link from "next/link";

interface Params {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = await wisp.getPost(slug);

  if (!result.post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const { title, description, publishedAt, createdAt, updatedAt, tags, image } =
    result.post;
  const publishedDate = publishedAt || createdAt;
  const modifiedDate = updatedAt || publishedAt || createdAt;

  // Create a rich description if none exists
  const richDescription =
    description ||
    `Read "${title}" - insights and perspectives on language services, interpretation, and cultural connection from Nile Language Services.`;

  // Extract tag names for keywords
  const tagNames = tags?.map((tag) => tag.name) || [];
  const keywords = [
    "language services",
    "interpretation",
    "translation",
    "Indiana interpreter",
    "professional interpretation",
    ...tagNames,
  ];

  return {
    title,
    description: richDescription,
    keywords,
    alternates: {
      canonical: `/blogs/${slug}`,
    },
    openGraph: {
      title,
      description: richDescription,
      url: `/blogs/${slug}`,
      siteName: "Nile Language Services",
      type: "article",
      locale: "en_US",
      publishedTime: publishedDate
        ? new Date(publishedDate).toISOString()
        : undefined,
      modifiedTime: modifiedDate
        ? new Date(modifiedDate).toISOString()
        : undefined,
      authors: ["Nile Language Services"],
      tags: tagNames,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [
            {
              url: "/logo.jpg",
              width: 1200,
              height: 630,
              alt: `${title} - Nile Language Services Blog`,
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: richDescription,
      images: image ? [image] : ["/logo.jpg"],
    },
    other: {
      ...(publishedDate && {
        "article:published_time": new Date(publishedDate).toISOString(),
      }),
      ...(modifiedDate && {
        "article:modified_time": new Date(modifiedDate).toISOString(),
      }),
      "article:author": "Nile Language Services",
      "article:section": "Language Services",
      ...(tagNames.length > 0 && { "article:tag": tagNames.join(", ") }),
    },
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const result = await wisp.getPost(slug);
  if (!result.post) return null;
  const { title, publishedAt, createdAt, content, tags } = result.post;

  // Generate structured data for the blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: content
      ? content.replace(/<[^>]*>/g, "").substring(0, 200) + "..."
      : "",
    image: result.post.image || "https://www.nlsindy.com/logo.jpg",
    author: {
      "@type": "Organization",
      name: "Nile Language Services",
      url: "https://www.nlsindy.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Nile Language Services",
      logo: {
        "@type": "ImageObject",
        url: "https://www.nlsindy.com/logo.jpg",
      },
    },
    datePublished: publishedAt || createdAt,
    dateModified: publishedAt || createdAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.nlsindy.com/blogs/${slug}`,
    },
    ...(tags &&
      tags.length > 0 && {
        keywords: tags.map((tag) => tag.name).join(", "),
      }),
  };

  // Generate breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.nlsindy.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.nlsindy.com/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://www.nlsindy.com/blogs/${slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-beige-light via-beige to-sand-light">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Breadcrumb Navigation */}
        <div className="max-w-4xl mx-auto mb-6">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-ochre transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-ochre transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{title}</span>
          </nav>
        </div>

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

          {/* Related Posts Section */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-desert-brown mb-6 text-center">
              Related Posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* You can enhance this later to show actual related posts based on tags or categories */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-sand/20 hover:border-ochre/40 transition-all duration-300">
                <h4 className="font-semibold text-desert-brown mb-2">
                  Professional Interpretation Services
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about our comprehensive interpretation services across
                  Indiana and worldwide.
                </p>
                <Link
                  href="/services"
                  className="text-ochre hover:text-ochre-dark font-medium text-sm transition-colors"
                >
                  Read More →
                </Link>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-sand/20 hover:border-ochre/40 transition-all duration-300">
                <h4 className="font-semibold text-desert-brown mb-2">
                  About Our Team
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover the story behind Nile Language Services and our
                  mission.
                </p>
                <Link
                  href="/about"
                  className="text-ochre hover:text-ochre-dark font-medium text-sm transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Back to Blogs Link */}
          <div className="mt-12 md:mt-16 text-center">
            <Link
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
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
