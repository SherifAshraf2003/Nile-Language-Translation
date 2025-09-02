"use client";
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
        </div>

        {/* Learn More Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-base sm:text-lg lg:text-xl text-amber-800 mb-8 max-w-2xl mx-auto leading-relaxed">
            At Nile Language Services, we believe language should never be a
            barrier to communication. Based in Indiana, we provide onsite
            interpretation for hospitals, businesses, schools, law firms, and
            community events - while offering virtual interpretation worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
