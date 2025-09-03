import { Services } from "@/components/ServicesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Interpretation & Translation Services",
  description:
    "Comprehensive interpretation services: onsite interpretation in Indiana, virtual interpretation worldwide, phone interpretation, and document translation. Certified interpreters for medical, legal, and business needs.",
  keywords: [
    "onsite interpretation Indiana",
    "virtual interpretation services",
    "phone interpretation services",
    "document translation services",
    "medical interpreter Indiana",
    "court interpreter Indiana",
    "business interpreter Indiana",
    "certified interpreter services",
    "video remote interpretation",
    "over the phone interpretation",
    "legal document translation",
    "medical document translation",
    "business document translation",
    "interpreter services Indianapolis",
    "interpreter services Fort Wayne",
    "interpreter services Evansville",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Professional Interpretation & Translation Services",
    description:
      "Comprehensive interpretation services: onsite interpretation in Indiana, virtual interpretation worldwide, phone interpretation, and document translation.",
    url: "/services",
    siteName: "Nile Language Services",
    type: "website",
    locale: "en_US",
    images: ["/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Interpretation & Translation Services",
    description:
      "Comprehensive interpretation services: onsite interpretation in Indiana, virtual interpretation worldwide, phone interpretation, and document translation.",
    images: ["/logo.jpg"],
  },
};
export default function ServicesPage() {
  return <Services />;
}
