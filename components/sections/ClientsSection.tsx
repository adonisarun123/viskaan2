"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const clients = [
  "ISRO", "BEL", "HAL", "IIMB", "Toshiba", "Bosch", 
  "CEAT", "Metro Rail", "L&T", "Wipro", "Infosys", "TCS"
];

const testimonials = [
  {
    quote: "Viskaan Associates has been our facility management partner for over 10 years. Their professionalism and attention to detail is exceptional.",
    author: "Director of Operations",
    company: "Leading Aerospace Company"
  },
  {
    quote: "The integrated facility services provided by Viskaan have significantly improved our operational efficiency and reduced costs.",
    author: "Facility Manager",
    company: "IT Park Bangalore"
  },
  {
    quote: "Their security services are top-notch. We trust them completely with our campus security and access control systems.",
    author: "Head of Administration",
    company: "Educational Institution"
  }
];

export default function ClientsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Our Trusted Clients</h2>
          <p className="text-lg md:text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Serving India's leading corporates and institutions across diverse sectors 
            with excellence and commitment.
          </p>
        </motion.div>

        {/* Client Logos Marquee */}
        <div className="mb-16 overflow-hidden">
          <motion.div
            animate={{
              x: [0, -100 * clients.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex space-x-16"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center"
              >
                <span className="text-gray-600 font-semibold">{client}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#003366]/10" />
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#003366] rounded-2xl p-8 lg:p-12"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold text-[#FFB300] mb-2">500+</div>
              <div className="text-sm">Active Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFB300] mb-2">95%</div>
              <div className="text-sm">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFB300] mb-2">10+</div>
              <div className="text-sm">Industry Sectors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFB300] mb-2">25+</div>
              <div className="text-sm">Years of Trust</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 