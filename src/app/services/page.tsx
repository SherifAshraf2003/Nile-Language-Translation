"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Globe,
  Phone,
  Building2,
  CheckCircle,
  Clock,
  Users,
  Award,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";

const ServicesPage = () => {
  const detailedServices = [
    {
      icon: MapPin,
      title: "Onsite Interpretation",
      subtitle: "Indiana Only",
      description:
        "Professional in-person interpretation services for medical, legal, and business settings throughout Indiana.",
      features: [
        "Certified medical interpretation (CMI)",
        "Legal and court interpretation",
        "Business meetings and negotiations",
        "Educational conferences and workshops",
        "Community events and presentations",
        "Emergency and crisis situations",
      ],
      pricing: "Starting at $75/hour",
      duration: "Minimum 2 hours",
      process: [
        "Initial consultation and assessment",
        "Interpreter matching based on expertise",
        "On-site coordination and setup",
        "Professional interpretation services",
        "Post-service feedback and follow-up",
      ],
    },
    {
      icon: Globe,
      title: "Virtual Interpretation",
      subtitle: "Worldwide",
      description:
        "Remote interpretation via video for global consultations, meetings, and events.",
      features: [
        "Video remote interpretation (VRI)",
        "Real-time language support",
        "Multi-platform compatibility (Zoom, Teams, etc.)",
        "Secure and encrypted connections",
        "24/7 availability options",
        "Multi-language support",
      ],
      pricing: "Starting at $65/hour",
      duration: "Flexible scheduling",
      process: [
        "Platform setup and testing",
        "Secure connection establishment",
        "Real-time interpretation",
        "Technical support throughout",
        "Session recording (optional)",
      ],
    },
    {
      icon: Phone,
      title: "Phone Interpretation",
      subtitle: "Worldwide",
      description:
        "Over-the-phone interpretation for quick consultations and urgent needs.",
      features: [
        "Over-the-Phone Interpretation (OPI)",
        "Instant availability",
        "Cost-effective solution",
        "No video required",
        "Mobile and landline compatible",
        "Emergency response capable",
      ],
      pricing: "Starting at $55/hour",
      duration: "Per minute billing available",
      process: [
        "Direct dial or operator-assisted",
        "Immediate language matching",
        "Clear audio connection",
        "Professional interpretation",
        "Quality assurance monitoring",
      ],
    },
    {
      icon: Building2,
      title: "Document Translation",
      subtitle: "All Languages",
      description:
        "Professional translation of legal documents, medical records, and business materials.",
      features: [
        "Legal document translation",
        "Medical record translation",
        "Business document services",
        "Certificate and diploma translation",
        "Website and marketing materials",
        "Technical document translation",
      ],
      pricing: "Starting at $0.15/word",
      duration: "2-5 business days standard",
      process: [
        "Document assessment and quote",
        "Translation by certified professionals",
        "Quality assurance and editing",
        "Formatting and layout preservation",
        "Client review and approval",
        "Certified translation (when required)",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-beige-dark via-beige-light to-beige-dark relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-text-primary to-ochre bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive Services
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto px-4 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our full range of professional interpretation and
              translation services, designed to meet your communication needs
              with precision and cultural understanding.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-12 sm:gap-16 lg:gap-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {detailedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group"
                >
                  <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 bg-beige-dark backdrop-blur-sm overflow-hidden relative border-2 border-amber-500">
                    <CardContent className="p-8 sm:p-10 lg:p-12">
                      {/* Header */}
                      <div className="flex items-start mb-6 sm:mb-8">
                        <motion.div
                          className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#e3d7c6] rounded-2xl mr-4 sm:mr-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110"
                          whileHover={{
                            rotate: [0, -10, 10, 0],
                            transition: { duration: 0.6 },
                          }}
                        >
                          <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-black" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary group-hover:text-[#8b9b78] transition-colors duration-300">
                              {service.title}
                            </h2>
                            <span className="inline-block bg-ochre text-text-inverse px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm font-medium">
                              {service.subtitle}
                            </span>
                          </div>
                          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
                          What&apos;s Included:
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-start"
                            >
                              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ochre mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm sm:text-base text-text-secondary">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing & Duration */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-ochre/10 p-4 rounded-xl">
                          <div className="flex items-center mb-2">
                            <Star className="h-5 w-5 text-ochre mr-2" />
                            <span className="font-semibold text-text-primary">
                              Pricing
                            </span>
                          </div>
                          <p className="text-lg font-bold text-ochre">
                            {service.pricing}
                          </p>
                        </div>
                        <div className="bg-beige-light p-4 rounded-xl">
                          <div className="flex items-center mb-2">
                            <Clock className="h-5 w-5 text-text-primary mr-2" />
                            <span className="font-semibold text-text-primary">
                              Duration
                            </span>
                          </div>
                          <p className="text-base text-text-secondary">
                            {service.duration}
                          </p>
                        </div>
                      </div>

                      {/* Process */}
                      <div className="mb-8">
                        <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
                          Our Process:
                        </h3>
                        <div className="space-y-3">
                          {service.process.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-start">
                              <div className="flex items-center justify-center w-6 h-6 bg-ochre text-white rounded-full text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                                {stepIndex + 1}
                              </div>
                              <span className="text-sm sm:text-base text-text-secondary">
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="flex justify-center">
                        <Button
                          variant="cta"
                          size="lg"
                          asChild
                          className="bg-gradient-to-r from-ochre to-ochre/80 hover:from-ochre/90 hover:to-ochre shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        >
                          <Link href="/contact" className="flex items-center">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-beige-light via-beige-dark to-beige-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Why Choose Nile Language Services?
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
              Experience the difference with our certified professionals and
              commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Certified Professionals",
                description:
                  "All our interpreters are certified and experienced in their specialized fields.",
              },
              {
                icon: Shield,
                title: "Confidential & Secure",
                description:
                  "Complete confidentiality and HIPAA compliance for all your sensitive information.",
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description:
                  "Round-the-clock service for urgent interpretation needs and emergencies.",
              },
              {
                icon: Users,
                title: "Cultural Expertise",
                description:
                  "Deep understanding of cultural nuances and professional terminology.",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-ochre rounded-2xl mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-ochre text-text-inverse">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your interpretation and translation
              needs. We&apos;ll provide a customized solution that meets your
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                asChild
                className="bg-white text-ochre hover:bg-gray-100"
              >
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-ochre "
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
