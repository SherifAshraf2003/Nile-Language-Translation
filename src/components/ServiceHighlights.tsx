"use client";
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
  Phone,
} from "lucide-react";
import Link from "next/link";
import { motion, easeOut, easeInOut } from "framer-motion";

const ServiceHighlights = () => {
  const services = [
    {
      icon: MapPin,
      title: "Onsite Interpretation",
      description:
        "Professional in-person interpretation services throughout Indiana for hospitals, businesses, schools, and legal settings.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1,
      serviceId: "onsite-interpretation",
    },
    {
      icon: Globe,
      title: "Virtual Interpretation",
      description:
        "NLS provides both scheduled and on-demand video interpretation services.",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2,
      serviceId: "virtual-interpretation",
    },
    {
      icon: Pencil,
      title: "Document Translation",
      description:
        "Document translation for legal documents, personal documents, posters, books, brochures and much more.",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.3,
      serviceId: "document-translation",
    },
    {
      icon: Phone,
      title: "Phone Interpretation",
      description:
        "NLS provides both scheduled and on-demand telephone interpretation services.",
      gradient: "from-orange-500 to-red-500",
      delay: 0.4,
      serviceId: "phone-interpretation",
    },
  ];

  const industries = [
    { icon: Heart, name: "Healthcare", color: "text-red-500" },
    { icon: Scale, name: "Legal", color: "text-blue-500" },
    { icon: Building2, name: "Business", color: "text-green-500" },
    { icon: GraduationCap, name: "Education", color: "text-purple-500" },
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

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-beige-dark via-beige-light to-beige-dark relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-6 sm:mb-8 bg-gradient-to-r from-text-primary to-ochre bg-clip-text "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We offer comprehensive interpretation services tailored to meet your
            specific communication needs with precision and cultural
            understanding.
          </motion.p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
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
                <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500  bg-beige-dark backdrop-blur-sm overflow-hidden relative border-2 border-amber-500">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0  opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <CardContent className="p-8 sm:p-10 lg:p-12 relative z-10 flex flex-col justify-between h-full">
                    {/* Icon Container */}
                    <motion.div
                      className={`flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-[#e3d7c6] rounded-3xl mb-6 sm:mb-8 mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110`}
                      variants={iconVariants}
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.6 },
                      }}
                    >
                      <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-black" />
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-4 sm:mb-6 text-center  group-hover:text-ochre transition-colors duration-300"
                      variants={titleVariants}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-base sm:text-lg lg:text-xl text-text-secondary text-center mb-6 leading-relaxed"
                      variants={descriptionVariants}
                    >
                      {service.description}
                    </motion.p>

                    {/* Learn More Button */}
                    <motion.div
                      className="text-center"
                      variants={buttonVariants}
                    >
                      <Link
                        href={`/services#${service.serviceId}`}
                        className="inline-block bg-gradient-to-r from-ochre to-ochre/80 text-text-inverse px-6 py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-ochre/90 hover:to-ochre"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Industries Section */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Industries We Serve
          </motion.h3>
          <motion.div
            className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-4 group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-amber-800  rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-ochre/10 group-hover:to-transparent"
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.6 },
                    }}
                  >
                    <IconComponent
                      className={`h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white group-hover:scale-110 transition-transform duration-300`}
                    />
                  </motion.div>
                  <span className="text-sm sm:text-base lg:text-lg font-semibold text-text-primary group-hover:text-ochre transition-colors duration-300">
                    {industry.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="cta"
              size="lg"
              asChild
              className="bg-gradient-to-r from-ochre to-ochre/80 hover:from-ochre/90 hover:to-ochre shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
