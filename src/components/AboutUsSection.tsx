import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Globe, Award } from "lucide-react";
import Link from "next/link";

const AboutUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Certified & Experienced",
      description:
        "CCHI nationally certified & qualified Spanish medical interpreter and Bridging the Gap (BTG) trained.",
    },
    {
      icon: Globe,
      title: "Flexible Services",
      description:
        "Onsite interpretation in Indiana or virtual interpretation worldwide.",
    },
    {
      icon: Users,
      title: "Trusted by Organizations",
      description:
        "From hospitals to schools, law firms to conferences, we've built lasting relationships.",
    },
  ];

  return (
    <section className="py-20 bg-beige-light">
      <div className="container mx-auto px-4">
        {/* About Us Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            About Nile Language Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our mission is simple: to connect people through the power of
            language.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Founded in Indiana, NLS was created to meet the growing demand
                for high-quality interpretation that is both professional and
                approachable. We recognized that language barriers were
                preventing meaningful connections in critical moments.
              </p>
              <p>
                Like the Nile River—long, steady, and connecting cultures—our
                services help bridge communication gaps across communities and
                industries, ensuring every voice is heard clearly and
                professionally.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-ochre text-text-inverse rounded-3xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-background/90 leading-relaxed mb-6">
              &quot;To connect people through the power of language, ensuring
              that communication barriers never prevent understanding, access to
              services, or meaningful connections.&quot;
            </p>
            <div className="flex items-center space-x-2 text-sand-light">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">
                Professional • Reliable • Compassionate
              </span>
            </div>
          </div>
        </div>

        {/* Why Choose NLS */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-text-primary mb-8">
            Why Clients Choose NLS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-lg transition-shadow duration-300 border-0"
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-2xl mb-4 mx-auto">
                      <IconComponent className="h-8 w-8 text-text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-text-primary mb-3">
                      {reason.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-ochre" size="lg" asChild>
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
