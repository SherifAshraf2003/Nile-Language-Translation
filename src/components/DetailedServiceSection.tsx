"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, Building2, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import { motion, easeOut, easeInOut } from "framer-motion";

const DetailedServicesSection = () => {
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

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const mainServices = [
    {
      icon: MapPin,
      title: "Onsite Interpretation",
      subtitle: "Indiana Only",
      description:
        "Professional in-person interpretation services for medical, legal, and business settings.",
      features: [
        "Certified medical interpretation",
        "Legal and business settings",
        "Educational environments",
      ],
    },
    {
      icon: Globe,
      title: "Virtual Interpretation",
      subtitle: "Worldwide",
      description:
        "Remote interpretation via video for global consultations and online events.",
      features: [
        "Video remote interpretation (VRI)",
        "24/7 availability options",
        "Secure and confidential",
      ],
    },
    {
      icon: Phone,
      title: "Phone Interpretation",
      subtitle: "Worldwide",
      description:
        "Over-the-phone interpretation for quick consultations and urgent needs.",
      features: [
        "Phone interpretation (OPI)",
        "Instant availability",
        "Cost-effective solution",
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group"
              >
                <Card className="h-full shadow-2xl hover:shadow-3xl transition-all duration-500 bg-beige-dark backdrop-blur-sm overflow-hidden relative border-2 border-amber-500">
                  <CardContent className="p-8 sm:p-10 relative z-10 flex flex-col h-full">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <motion.div
                          className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#e3d7c6] rounded-2xl mr-3 sm:mr-4 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110"
                          variants={iconVariants}
                          whileHover={{
                            rotate: [0, -10, 10, 0],
                            transition: { duration: 0.6 },
                          }}
                        >
                          <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-black" />
                        </motion.div>
                        <div>
                          <motion.h3
                            className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary group-hover:text-[#8b9b78] transition-colors duration-300"
                            variants={textVariants}
                          >
                            {service.title}
                          </motion.h3>
                          <span className="inline-block bg-ochre text-text-inverse px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                            {service.subtitle}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base lg:text-lg text-text-secondary mb-4 sm:mb-6 leading-relaxed flex-grow">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-ochre mr-2 sm:mr-3 flex-shrink-0" />
                            <span className="text-xs sm:text-sm lg:text-base text-text-secondary">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full mt-auto border-ochre text-ochre hover:bg-ochre hover:text-text-inverse transition-colors duration-300"
                      >
                        <Link href="/services">Learn More</Link>
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
  );
};

export default DetailedServicesSection;
