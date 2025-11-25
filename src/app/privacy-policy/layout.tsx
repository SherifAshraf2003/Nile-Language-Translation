import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Nile Language Services LLC collects, uses, and protects your personal information. Read our comprehensive privacy policy.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Nile Language Services",
    description:
      "Learn how Nile Language Services LLC collects, uses, and protects your personal information.",
    url: "/privacy-policy",
    siteName: "Nile Language Services",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

