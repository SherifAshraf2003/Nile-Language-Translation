"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import Video from "next-video";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
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
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  const backgroundVariants = {
    hidden: {
      scale: 1.1,
      opacity: 0.8,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: easeOut,
      },
    },
  };

  const renderBrokenText = (text: string) => {
    const brokenStyles = [
      {
        transform: "rotate(-3deg) translateY(-2px) skewX(-2deg)",
        textShadow:
          "2px 2px 0px rgba(0,0,0,0.8), 1px 1px 2px rgba(255,255,255,0.2)",
      },
      {
        transform: "rotate(2deg) translateX(1px) translateY(1px) skewX(1deg)",
        textShadow:
          "2px 2px 0px rgba(0,0,0,0.8), -1px -1px 2px rgba(255,255,255,0.1)",
      },
      {
        transform: "rotate(-1.5deg) translateY(2px) skewY(-1deg)",
        textShadow:
          "2px 2px 0px rgba(0,0,0,0.8), 1px -1px 2px rgba(255,255,255,0.15)",
      },
      {
        transform:
          "rotate(2.5deg) translateX(-1px) translateY(-1px) skewX(-1deg)",
        textShadow:
          "2px 2px 0px rgba(0,0,0,0.8), -1px 1px 2px rgba(255,255,255,0.1)",
      },
      {
        transform: "rotate(-2deg) translateY(1px) translateX(1px) skewY(1deg)",
        textShadow:
          "2px 2px 0px rgba(0,0,0,0.8), 1px 1px 2px rgba(255,255,255,0.2)",
      },
      {
        transform: "rotate(1.8deg) translateX(-1px) skewX(1.5deg)",
        textShadow:
          "2px 2px 0px rgba(0,0,0,0.8), -1px -1px 2px rgba(255,255,255,0.15)",
      },
      {
        transform:
          "rotate(-1deg) translateY(-1px) translateX(0.5px) skewY(-1.5deg)",
        textShadow:
          "2px 2px 0px rgba(0,0,0,0.8), 1px -1px 2px rgba(255,255,255,0.1)",
      },
      {
        transform:
          "rotate(2.2deg) translateX(0.5px) translateY(1px) skewX(-0.5deg)",
        textShadow:
          "2px 2px 0px rgba(0,0,0,0.8), -1px 1px 2px rgba(255,255,255,0.2)",
      },
    ];

    return text.split("").map((letter, index) => (
      <span
        key={index}
        style={{
          fontFamily:
            "var(--font-broken-glass), 'BrokenGlassFallback', 'Courier New', monospace",
          fontSize: "1.2em",
          fontWeight: "normal",
          color: "white",
          display: "inline-block",
          position: "relative",
          ...brokenStyles[index % brokenStyles.length],
        }}
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Video Background with next-video optimization */}
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: easeOut }}
        >
          <Video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero.mp4" type="video/mp4" />
          </Video>
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Floating particles */}
          <motion.div
            className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-32 w-3 h-3 bg-white/15 rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/3 w-2 h-2 bg-white/25 rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-3 h-3 bg-white/20 rounded-full"
            animate={{
              y: [0, -18, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 sm:mb-10 md:mb-12 leading-tight tracking-tight"
          variants={itemVariants}
        >
          An Indiana Agency<br className="hidden sm:block"></br>
          {renderBrokenText("Breaking")} Language Barriers
          <br className="hidden sm:block"></br>Through Interpretation
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-ochre mb-10 sm:mb-12 md:mb-16 font-medium max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          As the Nile connects lands, we connect voices.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center mb-12 sm:mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              variant="hero"
              size="lg"
              asChild
              className="text-lg text-white sm:text-xl md:text-2xl px-10 sm:px-12 md:px-16 py-5 sm:py-6 md:py-8 bg-amber-800 hover:bg-amber-800/80 hover:text-amber-500 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              variant="hero"
              size="lg"
              asChild
              className="text-lg text-white sm:text-xl md:text-2xl px-10 sm:px-12 md:px-16 py-5 sm:py-6 md:py-8 bg-amber-800 hover:bg-amber-800/80 hover:text-amber-500 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
