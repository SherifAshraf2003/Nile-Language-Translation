import type { Metadata } from "next";
import AboutUsSection from "@/components/AboutUsSection";

export const metadata: Metadata = {
  title: "About Nile Language Services",
  description:
    "Learn about Nile Language Services, Indiana's trusted provider of professional interpretation and translation services. Our story of connecting communities through language.",
  keywords: [
    "about Nile Language Services",
    "interpreter company Indiana",
    "translation company Indianapolis",
    "language services company Indiana",
    "certified interpreters Indiana",
    "professional interpretation services",
    "Indiana interpretation company",
    "language barrier solutions Indiana",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Nile Language Services",
    description:
      "Learn about Nile Language Services, Indiana's trusted provider of professional interpretation and translation services. Our story of connecting communities through language.",
    url: "/about",
    siteName: "Nile Language Services",
    type: "website",
    images: ["/logo.jpg"],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "About Nile Language Services",
    description:
      "Learn about Nile Language Services, Indiana's trusted provider of professional interpretation and translation services.",
    images: ["/logo.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutUsSection />
    </main>
  );
}
