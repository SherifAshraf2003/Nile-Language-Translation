import type { Metadata } from "next";
import JoinTeamSection from "@/components/JoinTeamSection";

export const metadata: Metadata = {
  title: "Join Our Team - Interpreter Opportunities",
  description:
    "Join Nile Language Services as a professional interpreter or translator. Work with a trusted Indiana company providing language services to businesses, courts, and communities.",
  keywords: [
    "interpreter jobs Indiana",
    "translator jobs Indiana",
    "language services careers",
    "interpreter employment Indiana",
    "translation jobs Indianapolis",
    "interpreter opportunities",
    "language professional jobs",
    "interpreter positions Indiana",
    "translation careers Indiana",
    "language services employment",
  ],
  alternates: {
    canonical: "/join-team",
  },
  openGraph: {
    title: "Join Our Team - Interpreter Opportunities",
    description:
      "Join Nile Language Services as a professional interpreter or translator. Work with a trusted Indiana company providing language services to businesses, courts, and communities.",
    url: "/join-team",
    siteName: "Nile Language Services",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Join Our Team - Interpreter Opportunities",
    description:
      "Join Nile Language Services as a professional interpreter or translator. Work with a trusted Indiana company providing language services to businesses, courts, and communities.",
  },
};

export default function JoinTeamPage() {
  return (
    <main>
      <JoinTeamSection />
    </main>
  );
}
