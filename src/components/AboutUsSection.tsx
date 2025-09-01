"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Users,
  Globe,
  Award,
  CircleDollarSign,
} from "lucide-react";
import Link from "next/link";
import { motion, easeOut, easeInOut } from "framer-motion";

const AboutUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Experienced & Professional",
      description:
        "certified & qualified  medical intetpreters who can deliver precise, unbiased, and culturally appropriate communication.",
      gradient: "from-yellow-500 to-amber-500",
      delay: 0.1,
    },
    {
      icon: Globe,
      title: "Flexible Services",
      description:
        "On-demand, 24/7, whether in-person, over-the-phone, or video remote.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2,
    },
    {
      icon: Users,
      title: "Reputation & Trust",
      description:
        "From hospitals to schools, law firms to conferences, we've built lasting relationships.",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      icon: CircleDollarSign,
      title: "Cost-Effectiveness",
      description:
        "Competitive, transparent pricing without hidden fees helps clients feel secure about their investment.",
      gradient: "from-red-500 to-pink-500",
      delay: 0.4,
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

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-beige-light via-beige-dark to-beige-light relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* About Us Header */}
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
            About Nile Language Services
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-16 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Story */}
          <motion.div variants={textVariants} className="group">
            <motion.h3
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-6 sm:mb-8 group-hover:text-ochre transition-colors duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our Story
            </motion.h3>
            <motion.div
              className="space-y-4 sm:space-y-6 text-text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.p
                className="text-base sm:text-lg lg:text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Founded in Indiana, NLS was created to meet the growing demand
                for high-quality interpretation that is both professional and
                approachable. We recognized that language barriers were
                preventing meaningful connections in critical moments.
              </motion.p>
              <motion.p
                className="text-base sm:text-lg lg:text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Like the Nile River—long, steady, and connecting cultures—our
                services help bridge communication gaps across communities and
                industries, ensuring every voice is heard clearly and
                professionally.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="group"
          >
            <motion.div
              className=" bg-amber-800  text-text-inverse rounded-3xl sm:rounded-4xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <motion.h3
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 group-hover:text-background transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Our Mission
                </motion.h3>
                <motion.p
                  className="text-sm sm:text-base lg:text-lg text-background/90 leading-relaxed mb-6 sm:mb-8 italic"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  &quot;To connect people through the power of language,
                  ensuring that communication barriers never prevent
                  understanding, access to services, or meaningful
                  connections.&quot;
                </motion.p>
                <motion.div
                  className="flex items-center space-x-3 text-sand-light"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-sm sm:text-base font-semibold">
                    Professional • Reliable • passionate
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Why Choose NLS */}
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
            Why Clients Choose NLS
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
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
                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0   opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <CardContent className="p-8 sm:p-10 relative z-10">
                      {/* Icon Container */}
                      <motion.div
                        className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#e3d7c6] rounded-2xl mb-6 sm:mb-8 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}
                        variants={iconVariants}
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.6 },
                        }}
                      >
                        <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-black" />
                      </motion.div>

                      {/* Title */}
                      <motion.h4
                        className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-4 sm:mb-6 text-center group-hover:text-[#8b9b78] transition-colors duration-300"
                        variants={textVariants}
                      >
                        {reason.title}
                      </motion.h4>

                      {/* Description */}
                      <motion.p
                        className="text-sm sm:text-base lg:text-lg text-text-secondary text-center leading-relaxed"
                        variants={textVariants}
                      >
                        {reason.description}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                className="bg-amber-800  hover:text-amber-300  hover:bg-amber-800  text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                size="lg"
                asChild
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                className="bg-amber-800  hover:text-amber-300  hover:bg-amber-800  text-white font-semibold shadow-xl hover:shadow-2xl min-w-[200px] transition-all duration-300 transform hover:scale-105"
                size="lg"
                asChild
              >
                <Link href="/about">Get A Quote</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
