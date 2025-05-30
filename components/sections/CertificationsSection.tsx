"use client";

import { motion } from "framer-motion";
import { Award, Shield, CheckCircle, FileCheck } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    description: "Quality Management System certified for consistent service delivery",
    color: "text-blue-600",
    bgColor: "bg-blue-600/10"
  },
  {
    icon: Shield,
    title: "PSARA Licensed",
    description: "Private Security Agencies Regulation Act compliant security services",
    color: "text-red-600",
    bgColor: "bg-red-600/10"
  },
  {
    icon: FileCheck,
    title: "FSSAI Certified",
    description: "Food Safety and Standards Authority certified canteen services",
    color: "text-green-600",
    bgColor: "bg-green-600/10"
  },
  {
    icon: CheckCircle,
    title: "100% Compliance",
    description: "PF, ESI, GST, and all statutory compliance maintained",
    color: "text-purple-600",
    bgColor: "bg-purple-600/10"
  }
];

const complianceAreas = [
  "Provident Fund (PF) Registration",
  "ESI (Employee State Insurance)",
  "GST Registration & Filing",
  "Professional Tax",
  "Labour License",
  "Contract Labour License",
  "Minimum Wages Act",
  "Workmen Compensation",
  "Factory Act Compliance",
  "Fire Safety NOC",
  "Environmental Clearances",
  "POSH Compliance"
];

export default function CertificationsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Certifications & Compliance</h2>
          <p className="text-lg md:text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            ISO certified with complete statutory compliance, ensuring quality, 
            safety, and legal adherence in all our operations.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 ${cert.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className={`w-8 h-8 ${cert.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
            Complete Statutory Compliance
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="text-[#4CAF50] flex-shrink-0" size={20} />
                <span className="text-gray-700">{area}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
            Why Our Certifications Matter
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#003366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#003366]" />
              </div>
              <h4 className="font-semibold mb-2" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Risk Mitigation</h4>
              <p className="text-sm text-gray-600">
                Complete compliance protects your organization from legal risks and penalties
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#4CAF50]" />
              </div>
              <h4 className="font-semibold mb-2" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Quality Assurance</h4>
              <p className="text-sm text-gray-600">
                ISO certification ensures consistent, high-quality service delivery
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFB300]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-[#FFB300]" />
              </div>
              <h4 className="font-semibold mb-2" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Peace of Mind</h4>
              <p className="text-sm text-gray-600">
                Focus on your core business while we handle all compliance matters
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 