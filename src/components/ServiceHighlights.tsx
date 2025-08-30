import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Globe,
  Heart,
  Scale,
  Building2,
  GraduationCap,
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
      icon: Heart,
      title: "Medical Interpretation",
      description:
        "CCHI certified medical interpretation for hospitals, clinics, physical therapy sessions, and social work appointments.",
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
    <section className="py-20 bg-beige-light">
      <div className="container mx-auto px-4">
        {/* Service Cards */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Our Services
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We offer comprehensive interpretation services tailored to meet your
            specific communication needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="shadow-card hover:shadow-lg transition-shadow duration-300 border-0"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-2xl mb-6 mx-auto">
                    <IconComponent className="h-8 w-8 text-text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-center mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-block bg-ochre text-text-inverse px-3 py-1 rounded-full text-sm font-medium">
                      {service.location}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Industries We Serve */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-text-primary mb-8">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-soft">
                    <IconComponent className={`h-6 w-6 ${industry.color}`} />
                  </div>
                  <span className="text-sm font-medium text-text-primary">
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
