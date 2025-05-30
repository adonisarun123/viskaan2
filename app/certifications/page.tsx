import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Award, 
  Shield, 
  CheckCircle, 
  FileCheck,
  Building,
  Users,
  Briefcase,
  Clock
} from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications & Compliance",
  description: "Viskaan Associates - ISO certified, PSARA licensed, and fully compliant with all statutory requirements. Your trusted facility management partner.",
};

const certifications = [
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    icon: Award,
    description: "Internationally recognized certification for quality management systems, ensuring consistent service delivery and customer satisfaction.",
    benefits: [
      "Standardized processes across all operations",
      "Continuous improvement framework",
      "Enhanced customer satisfaction",
      "Reduced operational errors"
    ]
  },
  {
    title: "PSARA Licensed",
    subtitle: "Private Security Agencies Regulation Act",
    icon: Shield,
    description: "Government approved license for providing security services, ensuring legal compliance and professional standards.",
    benefits: [
      "Legally authorized security services",
      "Trained and verified security personnel",
      "Regular government audits",
      "Enhanced client confidence"
    ]
  },
  {
    title: "FSSAI Certified",
    subtitle: "Food Safety and Standards Authority of India",
    icon: FileCheck,
    description: "Certification for food safety standards in our canteen services, ensuring hygienic and quality food services.",
    benefits: [
      "Safe and hygienic food preparation",
      "Quality ingredients and processes",
      "Regular health inspections",
      "Compliance with food safety laws"
    ]
  }
];

const compliances = [
  {
    title: "PF & ESI Registration",
    icon: Users,
    description: "Fully compliant with Provident Fund and Employee State Insurance regulations for all eligible employees.",
    details: [
      "Timely PF deposits for all employees",
      "ESI coverage for medical benefits",
      "Regular compliance audits",
      "Online access for employees"
    ]
  },
  {
    title: "GST Compliance",
    icon: Building,
    description: "Registered under Goods and Services Tax, ensuring transparent billing and tax compliance.",
    details: [
      "GST invoicing for all services",
      "Timely tax filing and payments",
      "Input tax credit benefits for clients",
      "Transparent pricing structure"
    ]
  },
  {
    title: "Labour Law Compliance",
    icon: Briefcase,
    description: "Adherence to all labour laws including minimum wages, working hours, and safety regulations.",
    details: [
      "Minimum wages compliance",
      "Proper working hour regulations",
      "Safety equipment and training",
      "Regular labour law audits"
    ]
  },
  {
    title: "Statutory Compliance",
    icon: Clock,
    description: "Complete compliance with all statutory requirements including shops & establishments, professional tax, etc.",
    details: [
      "Shops & Establishments registration",
      "Professional tax registration",
      "Contract labour licenses",
      "All state-specific compliances"
    ]
  }
];

export default function CertificationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Certifications & Compliance
          </h1>
          <p className="text-xl max-w-3xl">
            Your assurance of quality, safety, and legal compliance. 
            We maintain the highest standards in facility management services.
          </p>
        </div>
      </section>

      {/* Our Certifications */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Our Certifications</h2>
          <p className="section-subheading">
            Industry-recognized certifications that validate our commitment to excellence
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <cert.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  {cert.title}
                </h3>
                <p className="text-lg font-semibold text-secondary mb-4">
                  {cert.subtitle}
                </p>
                <p className="text-gray-600 mb-6">
                  {cert.description}
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {cert.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Compliance Standards</h2>
          <p className="section-subheading">
            100% compliant with all statutory and regulatory requirements
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {compliances.map((compliance, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <compliance.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-heading font-bold mb-2">
                      {compliance.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {compliance.description}
                    </p>
                    <ul className="space-y-2">
                      {compliance.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Compliance Matters */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Why Our Compliance Matters to You</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Legal Protection</h3>
              <p className="text-gray-600">
                Our compliance shields you from legal liabilities and ensures smooth operations 
                without regulatory hurdles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                ISO certification guarantees consistent, high-quality services that meet 
                international standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Employee Welfare</h3>
              <p className="text-gray-600">
                Our compliance ensures fair treatment, benefits, and safety for all employees 
                working at your premises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audit & Verification */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Regular Audits & Verification</h2>
          <p className="section-subheading">
            We maintain transparency through regular internal and external audits
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-heading font-bold mb-4">Internal Audits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Monthly compliance checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Quarterly performance reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Annual management reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Continuous improvement tracking</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-heading font-bold mb-4">External Audits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>ISO surveillance audits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Government compliance checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Client-specific audits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Third-party verifications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Partner with a Fully Compliant Service Provider
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience peace of mind with our certified and compliant facility management services
          </p>
          <Link href="/contact" className="btn-accent">
            Request Compliance Documents
          </Link>
        </div>
      </section>
    </>
  );
} 