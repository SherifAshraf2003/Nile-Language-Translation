import type { Metadata } from "next";
import AboutUsSection from "../components/AboutUsSection";
import ContactUsSection from "../components/ContactUsSection";
import DetailedServicesSection from "../components/DetailedServiceSection";
import HeroSection from "../components/HeroSection";
import ServiceHighlights from "../components/ServiceHighlights";
import BlogSection from "../components/BlogSection";

export const metadata: Metadata = {
  title: "Professional Translation & Interpretation Services in Indiana",
  description:
    "Nile Language Services provides certified onsite interpretation in Indiana and virtual interpretation worldwide. Medical, legal, business, and educational interpretation services.",
  keywords: [
    "translation services Indiana",
    "interpreter Indiana",
    "medical interpreter Indiana",
    "court interpreter Indiana",
    "business interpreter Indianapolis",
    "onsite interpretation Indiana",
    "virtual interpretation services",
    "document translation Indiana",
    "phone interpretation services",
    "certified interpreter Indiana",
    "language services Indianapolis",
    "interpreter services Fort Wayne",
    "interpreter services Evansville",
    "interpreter services South Bend",
    "interpreter services Bloomington",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Professional Translation & Interpretation Services in Indiana",
    description:
      "Certified onsite interpretation in Indiana and virtual interpretation worldwide. Medical, legal, business, and educational interpretation services.",
    url: "/",
    siteName: "Nile Language Services",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Nile Language Services - Professional Interpretation Services in Indiana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Translation & Interpretation Services in Indiana",
    description:
      "Certified onsite interpretation in Indiana and virtual interpretation worldwide. Medical, legal, business, and educational interpretation services.",
    images: ["/logo.jpg"],
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section - Main landing area with call-to-action */}
      <HeroSection />

      {/* Service Highlights - Overview of main services */}
      <ServiceHighlights />

      {/* About Us Section - Company story and mission */}
      <AboutUsSection />

      {/* Detailed Services Section - Comprehensive service breakdown */}
      <DetailedServicesSection />

      {/* Contact Us Section - Contact information and form */}
      <ContactUsSection />

      {/* Blog Section - Latest posts from Wisp */}
      <BlogSection />
    </main>
  );
}
