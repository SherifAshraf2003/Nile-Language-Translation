import { NextRequest, NextResponse } from "next/server";
import { wisp } from "@/lib/wisp";

export async function GET(request: NextRequest) {
  const baseUrl = "https://www.nlsindy.com";

  try {
    // Fetch all blog posts from Wisp
    const result = await wisp.getPosts({ limit: 1000 });
    const posts = result.posts || [];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${posts
  .map((post) => {
    const lastModified =
      post.updatedAt || post.publishedAt || post.createdAt || new Date();

    return `  <url>
    <loc>${baseUrl}/blogs/${post.slug}</loc>
    <lastmod>${new Date(lastModified).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Error generating blog sitemap:", error);

    // Fallback → return an empty sitemap
    const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;

    return new NextResponse(emptySitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
}
