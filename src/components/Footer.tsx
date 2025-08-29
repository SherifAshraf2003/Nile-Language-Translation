import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-stone-green text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-sand rounded-full"></div>
              <span className="text-xl font-bold">Nile Language Services</span>
            </div>
            <p className="text-background/90 mb-6 max-w-md">
              As the Nile connects lands, we connect voices. Professional
              interpretation services bridging communication gaps across
              communities and industries.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@nlsindy.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Based in Indiana</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/join-team"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Onsite Interpretation</li>
              <li>Virtual Interpretation</li>
              <li>Medical Interpretation</li>
              <li>Legal Interpretation</li>
              <li>Business Interpretation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2024 Nile Language Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
