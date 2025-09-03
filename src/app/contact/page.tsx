import type { Metadata } from "next";
import ContactUsPage from "@/components/ContactUsPage";

export const metadata: Metadata = {
  title: "Contact Nile Language Services",
  description:
    "Get in touch with Nile Language Services for professional interpretation and translation services in Indiana. Request a quote for onsite, virtual, or phone interpretation.",
  keywords: [
    "contact Nile Language Services",
    "interpreter quote Indiana",
    "translation services quote",
    "interpretation services contact",
    "get interpreter Indiana",
    "request interpreter services",
    "interpreter booking Indiana",
    "translation company contact",
    "interpreter services quote",
    "language services contact Indiana",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Nile Language Services",
    description:
      "Get in touch with Nile Language Services for professional interpretation and translation services in Indiana. Request a quote for onsite, virtual, or phone interpretation.",
    url: "/contact",
    siteName: "Nile Language Services",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Contact Nile Language Services",
    description:
      "Get in touch with Nile Language Services for professional interpretation and translation services in Indiana.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactUsPage />
    </main>
  );
}
