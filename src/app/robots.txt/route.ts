import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const robotsTxt = `User-agent: *
Allow: /

# Disallow framework & API routes
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Primary Sitemap (includes pages + blogs)
Sitemap: https://www.nlsindy.com/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
