import { Button } from "@/components/ui/button";
import heroImage from "../../public/nile-river.jpg";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Nile River flowing peacefully"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-text-inverse mb-6">
          Professional Interpretation Services in Indiana & Beyond
        </h1>
        <p className="text-xl md:text-2xl text-sand-light mb-8 font-medium">
          As the Nile connects lands, we connect voices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="hero"
            size="lg"
            asChild
            className="text-lg px-8 py-4"
          >
            <Link href="/services">Book an Interpreter</Link>
          </Button>
          <Button
            variant="hero-secondary"
            size="lg"
            asChild
            className="text-lg px-8 py-4"
          >
            <Link href="/join-team">Join Our Team</Link>
          </Button>
        </div>

        {/* Intro Paragraph */}
        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-background/90 text-lg leading-relaxed">
            At Nile Language Services (NLS), we believe language should never be
            a barrier to communication. Based in Indiana, we provide onsite
            Spanish interpretation for hospitals, businesses, schools, law
            firms, and community events—while offering virtual interpretation
            worldwide.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
