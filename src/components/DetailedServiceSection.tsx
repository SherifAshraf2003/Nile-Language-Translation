"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const DetailedServicesSection = () => {
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

        {/* Learn More Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our full range of interpretation services including onsite,
            virtual, and over-the-phone interpretation for medical, legal,
            business, and educational settings.
          </p>

          <Button
            variant="cta"
            size="lg"
            asChild
            className="text-white px-8 py-4 text-lg hover:scale-105 transition-transform duration-300"
          >
            <Link href="/services">Learn More About Our Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
