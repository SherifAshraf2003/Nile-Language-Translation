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

          {/* Popup - Bottom sheet on mobile, centered modal on desktop */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
            className="fixed inset-x-0 bottom-0 z-50 sm:inset-0 sm:flex sm:items-center sm:justify-center sm:p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-beige-light rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-lg max-h-[90vh] sm:max-h-[85vh] overflow-hidden border-2 border-amber-500/30 flex flex-col"
            >
              {/* Header */}
              <div className="bg-amber-800 px-4 sm:px-6 py-4 sm:py-5 relative flex-shrink-0">
                <button
                  onClick={handleDecline}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white/70 hover:text-white transition-colors p-1"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-white">
                      Privacy Notice
                    </h2>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Nile Language Services LLC
                    </p>
                  </div>
                </div>
              </div>

              {/* Content - Scrollable */}
              <div className="px-4 sm:px-6 py-4 sm:py-6 overflow-y-auto flex-1">
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  We value your privacy. By using our website, you agree to our
                  use of cookies and data collection practices as outlined in
                  our Privacy Policy.
                </p>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  We collect information to provide and improve our
                  interpretation services, communicate with you, and ensure
                  website functionality.
                </p>

                <p className="text-xs sm:text-sm text-text-muted mb-3 sm:mb-4">
                  <strong>We do NOT sell your personal information.</strong>{" "}
                  Your data is used solely for service delivery and improving
                  your experience.
                </p>

                <p className="text-xs sm:text-sm text-text-muted mb-4 sm:mb-6">
                  No mobile information will be shared with third
                  parties/affiliates for marketing/promotional purposes. All
                  other categories exclude text messaging originator opt-in data
                  and consent; this information will not be shared with any
                  third parties.
                </p>

                <Link
                  href="/privacy-policy"
                  className="text-amber-700 hover:text-amber-600 font-medium underline underline-offset-2 text-xs sm:text-sm"
                  onClick={handleAccept}
                >
                  Read our full Privacy Policy →
                </Link>
              </div>

              {/* Actions - Fixed at bottom */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 flex flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0 border-t border-amber-200/30 sm:border-t-0">
                <Button
                  onClick={handleAccept}
                  className="flex-1 bg-amber-800 hover:bg-amber-700 text-white font-semibold py-2.5 sm:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                >
                  Accept & Continue
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  className="flex-1 border-2 border-amber-800/30 text-amber-800 hover:bg-amber-800/10 font-semibold py-2.5 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base"
                >
                  Decline
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PrivacyConsentPopup;
