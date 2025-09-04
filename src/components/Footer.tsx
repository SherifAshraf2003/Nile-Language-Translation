import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-ochre-light/50  py-8 sm:py-12">
      <div className="container mx-auto text-black px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <img
                src="/logo.svg"
                alt="Nile Language Services Logo"
                className="h-20 w-auto  md:h-40 lg:h-64"
              />
              {/* <span className="text-lg sm:text-xl font-bold text-[#3E7A7F] ">
                Nile Language Services
              </span> */}
            </div>
            <p className="text-sm sm:text-base  mb-4 sm:mb-6 max-w-md">
              As the Nile connects lands, we connect voices. Professional
              interpretation services bridging communication gaps across
              communities and industries.
            </p>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <a href="mailto:info@nlsindy.com" className="hover:underline">
                  info@nlsindy.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Indianapolis, Indiana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Indianapolis, Indiana
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <div className="flex flex-col">
                  <a href="tel:+17655864317" className="hover:underline">
                    +1 (765) 586-4317
                  </a>
                  <a href="tel:+17655324052" className="hover:underline">
                    +1 (765) 532-4052
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/about"
                  className=" hover:text-background transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className=" hover:text-background transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/join-team"
                  className=" hover:text-background transition-colors"
                >
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className=" hover:text-background transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                {/* Pay with PayPal moved to standalone CTA section below */}
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm ">
              <li>Onsite Interpretation</li>
              <li>Virtual Interpretation</li>
              <li>Medical Interpretation</li>
              <li>Legal Interpretation</li>
              <li>Business Interpretation</li>
            </ul>
          </div>
        </div>

        {/* Standalone PayPal CTA */}
        <div className="mt-8 sm:mt-10">
          <div className=" border border-background/20 rounded-lg px-4 py-6 sm:px-6 sm:py-8 flex items-center justify-center text-center">
            <Link
              href="https://www.paypal.com/paypalme/nilelanguageservices"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-md shadow-md bg-[#0070BA] hover:bg-[#005EA6] transition-colors duration-200"
            >
              <Image
                src="/PayPal-logo.svg"
                alt="Pay with PayPal"
                width={24}
                height={24}
                className="mr-2"
              />
              Pay with PayPal
            </Link>
          </div>
        </div>

        <div className="border-t border-background/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm ">
          <p>&copy; 2025 Soar-ny. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
