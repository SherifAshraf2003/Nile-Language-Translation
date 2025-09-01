import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-ochre-light/50  py-8 sm:py-12">
      <div className="container mx-auto text-black px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="h-6 w-6 sm:h-8 sm:w-8 bg-sand rounded-full"></div>
              <span className="text-lg sm:text-xl font-bold">
                Nile Language Services
              </span>
            </div>
            <p className="text-sm sm:text-base  mb-4 sm:mb-6 max-w-md">
              As the Nile connects lands, we connect voices. Professional
              interpretation services bridging communication gaps across
              communities and industries.
            </p>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>info@nlsindy.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Based in Indiana</span>
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

        <div className="border-t border-background/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm ">
          <p>&copy; 2024 Nile Language Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
