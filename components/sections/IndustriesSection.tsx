"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Plane, 
  Building2, 
  GraduationCap, 
  Cpu, 
  Heart, 
  Factory,
  Briefcase,
  ShoppingBag
} from "lucide-react";

const industries = [
  { icon: Plane, name: "Aerospace & Defense", count: "20+", color: "text-blue-600", bgColor: "bg-blue-600/10" },
  { icon: Briefcase, name: "Government & PSUs", count: "30+", color: "text-purple-600", bgColor: "bg-purple-600/10" },
  { icon: Cpu, name: "IT & Electronics", count: "50+", color: "text-indigo-600", bgColor: "bg-indigo-600/10" },
  { icon: Factory, name: "Manufacturing", count: "40+", color: "text-orange-600", bgColor: "bg-orange-600/10" },
  { icon: Building2, name: "Infrastructure", count: "25+", color: "text-gray-600", bgColor: "bg-gray-600/10" },
  { icon: GraduationCap, name: "Education", count: "35+", color: "text-green-600", bgColor: "bg-green-600/10" },
  { icon: Heart, name: "Healthcare", count: "15+", color: "text-red-600", bgColor: "bg-red-600/10" },
  { icon: ShoppingBag, name: "Retail", count: "20+", color: "text-pink-600", bgColor: "bg-pink-600/10" },
];

export default function IndustriesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Industries We Serve</h2>
          <p className="section-subheading">
            Specialized facility management solutions tailored for diverse industry verticals 
            with deep domain expertise and compliance knowledge.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 ${industry.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className={`w-8 h-8 ${industry.color}`} />
                </div>
                <h3 className="font-heading font-semibold text-gray-800 mb-2">
                  {industry.name}
                </h3>
                <p className="text-2xl font-bold text-primary">
                  {industry.count}
                </p>
                <p className="text-sm text-gray-600 mt-1">Clients Served</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/industries" className="btn-primary">
            Explore All Industries
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 