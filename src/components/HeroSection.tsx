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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-inverse mb-4 sm:mb-6 leading-tight">
          An Indiana Agency Breaking Language Barriers Through{" "}
          <span className="text-ochre">Interpretation</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-sand-light mb-6 sm:mb-8 font-medium">
          As the Nile connects lands, we connect voices.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
          <Button
            variant="hero"
            size="lg"
            asChild
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Button
            variant="hero-secondary"
            size="lg"
            asChild
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Intro Paragraph */}
        <div className="mt-8 sm:mt-12 max-w-3xl mx-auto">
          <p className="text-background/90 text-sm sm:text-base lg:text-lg leading-relaxed px-4">
            At Nile Language Services, we believe language should never be a
            barrier to communication. Based in Indiana, we provide onsite
            interpretation for hospitals, businesses, schools, law firms, and
            community events—while offering virtual interpretation worldwide.
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
