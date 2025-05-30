"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Users, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6"
            >
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">ISO 9001:2015 Certified</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Excellence in
              <span className="block text-[#FFB300]">Facility Management</span>
              Since 1998
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Trusted by India's leading corporates for comprehensive facility management, 
              security services, and manpower solutions. Serving 500+ clients across 
              diverse industries with a workforce of 10,000+ professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/services" className="btn-accent">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-[#003366]">
                Get Free Quote
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center sm:text-left"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#FFB300]">25+</div>
                <div className="text-sm text-gray-200">Years of Excellence</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center sm:text-left"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#FFB300]">500+</div>
                <div className="text-sm text-gray-200">Happy Clients</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center sm:text-left"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#FFB300]">10K+</div>
                <div className="text-sm text-gray-200">Workforce</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Placeholder for image */}
              <div className="w-full h-[600px] bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-24 h-24 text-white/50 mx-auto mb-4" />
                    <p className="text-white/50">Professional Team Image</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFB300] rounded-full opacity-20 blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#4CAF50] rounded-full opacity-20 blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
} 