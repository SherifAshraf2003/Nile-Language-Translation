import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nlsindy.com"),
  title: {
    default: "Nile Language Services | Professional Interpretation in Indiana",
    template: "%s | Nile Language Services",
  },
  description:
    "Professional onsite and virtual interpretation services in Indiana. Nile Language Services connects voices across languages for businesses, courts, and communities.",
  keywords: [
    "Language Services Indiana",
    "Interpreter Indiana",
    "Court Interpreter",
    "Onsite Interpretation",
    "Virtual Interpretation",
    "Translation and Interpretation Indiana",
    "Business Interpreter Indianapolis",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nlsindy.com",
    title: "Nile Language Services | Professional Interpretation in Indiana",
    description:
      "Onsite & virtual interpretation across multiple languages in Indiana. Trusted by businesses, courts, and communities.",
    siteName: "Nile Language Services",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Nile Language Services - Connecting Voices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nile Language Services | Interpretation Across Languages",
    description:
      "Certified interpreters in Indiana. Onsite and virtual services across multiple languages.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nile Language Services",
    url: "https://www.nlsindy.com",
    telephone: ["+1 765-586-4317", "+1 765-532-4052"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "12175 Sunrise Circle",
      addressLocality: "Fishers",
      addressRegion: "IN",
      postalCode: "46038",
      addressCountry: "US",
    },
    image: "https://www.nlsindy.com/logo.jpg",
    sameAs: [],
    areaServed: ["Indiana", "United States", "Worldwide"],
    description:
      "Professional onsite and virtual interpretation services in Indiana. Certified & qualified interpreters for medical, legal, business, and community needs.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1 765-586-4317",
        contactType: "customer service",
        areaServed: ["US"],
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+1 765-532-4052",
        contactType: "customer service",
        areaServed: ["US"],
        availableLanguage: ["English"],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="sMA5svrCTUKcck-ChavFym5nDrEFdd3YH1hMjS6hp24"
        />
      </head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased scroll-smooth`}
      >
        {/* LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
