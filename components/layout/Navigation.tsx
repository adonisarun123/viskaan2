"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Facility Management", href: "/services/facility-management" },
      { name: "Security Services", href: "/services/security-services" },
      { name: "Drivers", href: "/services/drivers" },
      { name: "Manpower Supply", href: "/services/manpower-supply" },
      { name: "Horticulture", href: "/services/horticulture" },
      { name: "Canteen Services", href: "/services/canteen-services" },
    ],
  },
  { name: "Industries", href: "/industries" },
  { name: "Certifications", href: "/certifications" },
  { name: "Clients", href: "/clients" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-lg py-4"
          : "bg-white/95 backdrop-blur-sm py-6"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-primary">
                Viskaan Associates
              </h1>
              <p className="text-xs text-neutral-dark">Facility Management Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-1",
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-neutral-dark hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-neutral-dark hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="hidden sm:flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+91 98765 43210</span>
            </a>
            
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-neutral-dark hover:bg-neutral/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 border-t pt-4"
            >
              <div className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-2 rounded-lg font-medium transition-colors duration-200",
                        isActive(item.href)
                          ? "text-primary bg-primary/10"
                          : "text-neutral-dark hover:text-primary hover:bg-primary/5"
                      )}
                      onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-neutral-dark hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 btn-primary mt-4"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 