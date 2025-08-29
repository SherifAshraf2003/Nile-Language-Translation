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

  const specializedServices = [
    {
      icon: Heart,
      title: "Medical Interpretation",
      description:
        "CCHI certified interpretation for hospitals, physical therapy, clinics, and social work.",
      color: "text-red-600",
    },
    {
      icon: Scale,
      title: "Legal Interpretation",
      description:
        "Professional interpretation for law firms, immigration proceedings, and court settings.",
      color: "text-blue-600",
    },
    {
      icon: Building2,
      title: "Business & Community",
      description:
        "Interpretation for conferences, job trainings, health fairs, and corporate meetings.",
      color: "text-green-600",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Comprehensive Interpretation Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Professional interpretation services tailored to meet your specific
            communication needs.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="shadow-card hover:shadow-lg transition-shadow duration-300 border-0"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-2xl mr-4">
                      <IconComponent className="h-8 w-8 text-text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">
                        {service.title}
                      </h3>
                      <span className="inline-block bg-stone-green text-text-inverse px-3 py-1 rounded-full text-sm font-medium">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-stone-green mr-3 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">
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

        {/* Specialized Services */}
        <div className="bg-beige rounded-3xl p-8 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Specialized Interpretation Areas
            </h3>
            <p className="text-text-secondary">
              Expert interpretation services for specific industries and
              contexts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-background rounded-2xl mb-4 mx-auto shadow-soft">
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3">
                    {service.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Language Availability */}
        <div className="bg-stone-green text-text-inverse rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Languages Available</h3>
          <p className="text-background/90 mb-6 max-w-2xl mx-auto">
            Currently offering Spanish interpretation with plans to expand into
            multiple languages soon. Our certified interpreters are trained in
            specialized terminology for medical, legal, and business contexts.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sand-light mb-6">
            <Globe className="h-5 w-5" />
            <span className="font-medium text-lg">
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
