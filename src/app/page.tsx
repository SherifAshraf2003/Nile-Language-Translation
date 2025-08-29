import AboutUsSection from "../components/AboutUsSection";
import ContactUsSection from "../components/ContactUsSection";
import DetailedServicesSection from "../components/DetailedServiceSection";
import HeroSection from "../components/HeroSection";
import JoinTeamSection from "../components/JoinTeamSection";
import ServiceHighlights from "../components/ServiceHighlights";

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

      {/* Join Team Section - Recruitment and team opportunities */}
      <JoinTeamSection />

      {/* Contact Us Section - Contact information and form */}
      <ContactUsSection />
    </main>
  );
}
