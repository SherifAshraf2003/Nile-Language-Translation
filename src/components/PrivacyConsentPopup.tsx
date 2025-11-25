"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PrivacyConsentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted privacy policy
    const hasAccepted = localStorage.getItem("privacyPolicyAccepted");
    if (!hasAccepted) {
      // Small delay before showing popup for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("privacyPolicyAccepted", "true");
    localStorage.setItem("privacyPolicyAcceptedDate", new Date().toISOString());
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Still hide the popup but don't store acceptance
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={handleDecline}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-beige-light rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border-2 border-amber-500/30">
              {/* Header */}
              <div className="bg-amber-800 px-6 py-5 relative">
                <button
                  onClick={handleDecline}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Privacy Notice
                    </h2>
                    <p className="text-white/80 text-sm">
                      Nile Language Services LLC
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-6">
                <p className="text-text-secondary leading-relaxed mb-4">
                  We value your privacy. By using our website, you agree to our
                  use of cookies and data collection practices as outlined in
                  our Privacy Policy.
                </p>

                <p className="text-text-secondary leading-relaxed mb-4">
                  We collect information to provide and improve our
                  interpretation services, communicate with you, and ensure
                  website functionality.
                </p>

                <p className="text-sm text-text-muted mb-6">
                  <strong>We do NOT sell your personal information.</strong>{" "}
                  Your data is used solely for service delivery and improving
                  your experience.
                </p>

                <Link
                  href="/privacy-policy"
                  className="text-amber-700 hover:text-amber-600 font-medium underline underline-offset-2 text-sm"
                  onClick={handleAccept}
                >
                  Read our full Privacy Policy →
                </Link>
              </div>

              {/* Actions */}
              <div className="px-6 pb-6 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAccept}
                  className="flex-1 bg-amber-800 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Accept & Continue
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  className="flex-1 border-2 border-amber-800/30 text-amber-800 hover:bg-amber-800/10 font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Decline
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PrivacyConsentPopup;
