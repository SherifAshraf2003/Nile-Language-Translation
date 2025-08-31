import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Globe,
  Heart,
  Scale,
  Building2,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const DetailedServicesSection = () => {
  const mainServices = [
    {
      icon: MapPin,
      title: "Onsite Interpretation",
      subtitle: "Indiana Only",
      description:
        "Professional in-person interpretation for hospitals, businesses, schools, law firms, conferences, and community events.",
      features: [
        "Certified medical interpretation",
        "Legal and business settings",
        "Educational environments",
        "Community events",
      ],
    },
    {
      icon: Globe,
      title: "Virtual Interpretation",
      subtitle: "Worldwide",
      description:
        "Remote interpretation via phone (OPI) or video (VRI) for global businesses, online events, and consultations.",
      features: [
        "Phone interpretation (OPI)",
        "Video remote interpretation (VRI)",
        "24/7 availability options",
        "Secure and confidential",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-beige-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
            Comprehensive Interpretation Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Professional interpretation services tailored to meet your specific
            communication needs.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="shadow-card hover:shadow-lg transition-shadow duration-300 border-0"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-hero rounded-2xl mr-3 sm:mr-4">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary">
                        {service.title}
                      </h3>
                      <span className="inline-block bg-ochre text-text-inverse px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-text-secondary mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-ochre mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-xs sm:text-sm lg:text-base text-text-secondary">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Language Availability */}
        <div className="bg-ochre text-text-inverse rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Languages Available
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-background/90 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Currently offering Spanish interpretation with plans to expand into
            multiple languages soon. Our certified interpreters are trained in
            specialized terminology for medical, legal, and business contexts.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sand-light mb-4 sm:mb-6">
            <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base lg:text-lg font-medium">
              Spanish (Medical Certified)
            </span>
          </div>
          <Button variant="hero" size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
