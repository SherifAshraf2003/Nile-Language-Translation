import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Globe,
  Heart,
  Scale,
  Building2,
  GraduationCap,
  Pencil,
} from "lucide-react";
import Link from "next/link";

const ServiceHighlights = () => {
  const services = [
    {
      icon: MapPin,
      title: "Onsite Interpretation",
      description:
        "Professional in-person interpretation services throughout Indiana for hospitals, businesses, schools, and legal settings.",
      location: "Indiana Only",
    },
    {
      icon: Globe,
      title: "Virtual Interpretation",
      description:
        "Remote interpretation via phone (OPI) or video (VRI) for clients worldwide. Perfect for global businesses and online events.",
      location: "Worldwide",
    },
    {
      icon: Pencil,
      title: "Document Translation",
      description:
        "CCHI certified document translation for legal documents, personal documents, posters, books, brochures and much more. ",
      location: "Certified & Experienced",
    },
  ];

  const industries = [
    { icon: Heart, name: "Healthcare", color: "text-red-500" },
    { icon: Scale, name: "Legal", color: "text-blue-500" },
    { icon: Building2, name: "Business", color: "text-green-500" },
    { icon: GraduationCap, name: "Education", color: "text-purple-500" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-beige-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Cards */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
            Our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto px-4">
            We offer comprehensive interpretation services tailored to meet your
            specific communication needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="shadow-card hover:shadow-lg transition-shadow duration-300 border-0"
              >
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-hero rounded-2xl mb-4 sm:mb-6 mx-auto">
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-text-primary mb-3 sm:mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-text-secondary text-center mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-block bg-ochre text-text-inverse px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm lg:text-base font-medium">
                      {service.location}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Industries We Serve */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-6 sm:mb-8">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 sm:space-y-3"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-background rounded-full flex items-center justify-center shadow-soft">
                    <IconComponent
                      className={`h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 ${industry.color}`}
                    />
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-text-primary">
                    {industry.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
