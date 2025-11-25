"use client";

import { motion, easeOut } from "framer-motion";
import { Shield, Mail, Phone, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      content: [
        "Personal information such as your name, phone number, email address, and other contact details.",
        "Service-related information provided voluntarily by clients and interpreters.",
        "Technical data such as IP address, browser type, and usage details through standard analytics tools.",
      ],
    },
    {
      id: 2,
      title: "How We Use Your Information",
      content: [
        "Provide interpretation and translation services.",
        "Communicate with clients, interpreters, and partners.",
        "Improve website functionality and user experience.",
        "Maintain administrative, operational, and security purposes.",
      ],
    },
    {
      id: 3,
      title: "We Do NOT Sell Consumer Personal Information",
      content: [
        "We do not share, sell, or disclose personal information to third parties for marketing or lead-generation purposes.",
        "If we ever needed to share information for operational reasons (e.g., scheduling interpreters), we ensure it is used strictly for service delivery and confidentiality is maintained.",
      ],
      isSingleParagraph: true,
    },
    {
      id: 4,
      title: "How We Protect Your Information",
      content: [
        "We implement industry-standard administrative, technical, and physical safeguards to protect your data.",
      ],
      isSingleParagraph: true,
    },
    {
      id: 5,
      title: "Cookies and Tracking",
      content: [
        "Our website may use cookies to improve service quality and analytics. Users can disable cookies through their browser settings at any time.",
      ],
      isSingleParagraph: true,
    },
    {
      id: 6,
      title: "Your Rights",
      intro: "Depending on your location, you may have the right to:",
      content: [
        "Access, update, or delete your personal information.",
        "Opt out of communications.",
        "Request a copy of the information we hold about you.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-beige-light via-beige-dark to-beige-light">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-ochre/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-amber-800 rounded-2xl mb-8 shadow-xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            >
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-text-secondary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Last updated: November 2025
            </motion.p>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 sm:pb-28 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Introduction */}
            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-lg border border-amber-200/50 mb-8"
              variants={itemVariants}
            >
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                <span className="font-semibold text-text-primary">
                  Nile Language Services LLC
                </span>{" "}
                (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, and safeguard your information
                when you use our website, services, or contact us.
              </p>
            </motion.div>

            {/* Policy Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-lg border border-amber-200/50 mb-8"
                variants={itemVariants}
              >
                {/* Section Header */}
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-amber-800 text-white rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl shadow-md">
                    {section.id}
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary pt-1 sm:pt-2">
                    {section.title}
                  </h2>
                </div>

                {/* Section Content */}
                {section.intro && (
                  <p className="text-text-secondary text-base sm:text-lg mb-4 ml-14 sm:ml-16">
                    {section.intro}
                  </p>
                )}

                {section.isSingleParagraph ? (
                  <div className="space-y-4 ml-14 sm:ml-16">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-text-secondary text-base sm:text-lg leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-3 ml-14 sm:ml-16">
                    {section.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-text-secondary text-base sm:text-lg"
                      >
                        <ChevronRight className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}

            {/* Contact Us Section */}
            <motion.div
              className="bg-amber-800 rounded-3xl p-8 sm:p-10 shadow-xl overflow-hidden relative"
              variants={itemVariants}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-700/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-900/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

              <div className="relative z-10">
                {/* Section Header */}
                <div className="flex items-start gap-4 mb-8">
                  <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 text-white rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl shadow-md backdrop-blur-sm">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white pt-1 sm:pt-2">
                    Contact Us
                  </h2>
                </div>

                <p className="text-white/90 text-base sm:text-lg mb-8 ml-14 sm:ml-16">
                  If you have any questions regarding this Privacy Policy,
                  please contact us:
                </p>

                <div className="ml-14 sm:ml-16 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    Nile Language Services LLC
                  </h3>

                  <div className="space-y-3">
                    <a
                      href="mailto:info@nlsindy.com"
                      className="flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-base sm:text-lg">
                        info@nlsindy.com
                      </span>
                    </a>

                    <a
                      href="tel:+17655886470"
                      className="flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="text-base sm:text-lg">
                        (765) 588-6470
                      </span>
                    </a>

                    <a
                      href="https://nlsindy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <Globe className="w-5 h-5" />
                      </div>
                      <span className="text-base sm:text-lg">nlsindy.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Back to Home Link */}
            <motion.div className="text-center mt-12" variants={itemVariants}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-600 font-semibold text-lg transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
