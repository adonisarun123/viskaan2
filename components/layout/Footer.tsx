import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "Facility Management", href: "/services/facility-management" },
    { name: "Security Services", href: "/services/security-services" },
    { name: "Drivers", href: "/services/drivers" },
    { name: "Manpower Supply", href: "/services/manpower-supply" },
    { name: "Horticulture", href: "/services/horticulture" },
    { name: "Canteen Services", href: "/services/canteen-services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Certifications", href: "/certifications" },
    { name: "Clients", href: "/clients" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#003366] font-bold text-xl">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                  Viskaan Associates
                </h3>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Leading facility management and manpower services company with over 25 years of excellence in serving corporate India.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFB300] flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-300">
                  #1234, 5th Floor, Tower A<br />
                  Business Park, Bengaluru<br />
                  Karnataka 560001
                </span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 text-[#FFB300]" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@viskaanassociates.com"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 text-[#FFB300]" />
                  info@viskaanassociates.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Viskaan Associates. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 