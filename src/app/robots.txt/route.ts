import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.nlsindy.com/sitemap.xml

# Host
Host: https://www.nlsindy.com`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
