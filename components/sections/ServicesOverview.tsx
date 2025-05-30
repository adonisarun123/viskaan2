"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Building, 
  Shield, 
  Car, 
  Users, 
  Trees, 
  Coffee,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Facility Management",
    description: "Comprehensive facility solutions including housekeeping, pest control, waste management, and technical services.",
    href: "/services/facility-management",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "PSARA licensed security personnel, gunmen, supervisors with advanced training and compliance.",
    href: "/services/security-services",
    color: "text-red-600",
    bgColor: "bg-red-600/10",
  },
  {
    icon: Car,
    title: "Professional Drivers",
    description: "Trained commercial and personal drivers for executives, families, and logistics operations.",
    href: "/services/drivers",
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
  },
  {
    icon: Users,
    title: "Manpower Supply",
    description: "Skilled and unskilled workforce including loaders, packers, machine operators, and office assistants.",
    href: "/services/manpower-supply",
    color: "text-purple-600",
    bgColor: "bg-purple-600/10",
  },
  {
    icon: Trees,
    title: "Horticulture Services",
    description: "Complete garden maintenance, landscaping, vertical gardens, and lawn care solutions.",
    href: "/services/horticulture",
    color: "text-green-600",
    bgColor: "bg-green-600/10",
  },
  {
    icon: Coffee,
    title: "Canteen Services",
    description: "Hygienic food services with trained chefs, kitchen staff, and FSSAI compliance.",
    href: "/services/canteen-services",
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Our Core Services</h2>
          <p className="section-subheading">
            Delivering excellence across diverse facility management verticals with 
            specialized teams and proven methodologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className="block h-full">
                <div className="card h-full flex flex-col group hover:border-primary/20 transition-all duration-300">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 