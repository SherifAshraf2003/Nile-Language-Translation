import AboutUsSection from "../components/AboutUsSection";
import ContactUsSection from "../components/ContactUsSection";
import DetailedServicesSection from "../components/DetailedServiceSection";
import HeroSection from "../components/HeroSection";
import ServiceHighlights from "../components/ServiceHighlights";
import BlogSection from "../components/BlogSection";

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

      {/* Blog Section - Latest posts from Wisp */}
      <BlogSection />

      {/* Contact Us Section - Contact information and form */}
      <ContactUsSection />
    </main>
  );
}
