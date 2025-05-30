import { Metadata } from "next";
import { CheckCircle, Wrench, Users, Shield, Building } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facility Management Services",
  description: "Comprehensive facility management solutions including housekeeping, pest control, waste management, and technical services.",
};

export default function FacilityManagementPage() {
  const services = [
    {
      title: "Housekeeping Services",
      items: [
        "Daily cleaning and maintenance",
        "Deep cleaning services",
        "Specialized floor care",
        "Washroom management",
        "Pantry management",
      ],
    },
    {
      title: "Technical Services",
      items: [
        "Electrical maintenance",
        "Plumbing services",
        "HVAC maintenance",
        "Fire safety systems",
        "Equipment maintenance",
      ],
    },
    {
      title: "Pest Control",
      items: [
        "Regular pest management",
        "Termite control",
        "Rodent control",
        "Mosquito control",
        "Sanitization services",
      ],
    },
    {
      title: "Waste Management",
      items: [
        "Waste segregation",
        "Recycling programs",
        "Biomedical waste handling",
        "E-waste management",
        "Composting solutions",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Facility Management Services
          </h1>
          <p className="text-xl max-w-3xl">
            End-to-end facility management solutions designed to create clean, 
            safe, and efficient work environments for your organization.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Complete Facility Solutions Under One Roof
              </h2>
              <p className="text-gray-600 mb-6">
                Our integrated facility management services combine technical expertise 
                with operational excellence to deliver comprehensive solutions that 
                optimize your facility operations, reduce costs, and ensure compliance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" />
                  <span>ISO 9001:2015 certified processes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" />
                  <span>Trained and certified professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" />
                  <span>24/7 emergency support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" />
                  <span>Technology-enabled service delivery</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
              <Building className="w-32 h-32 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Our Service Categories</h2>
          <p className="section-subheading">
            Comprehensive facility management services tailored to your needs
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((category, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-heading font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Why Choose Our Facility Management?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">One-Stop Solution</h3>
              <p className="text-gray-600">
                All facility services under one contract, single point of contact, 
                and integrated service delivery.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Trained professionals with industry certifications and continuous 
                skill development programs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Compliance Assured</h3>
              <p className="text-gray-600">
                100% statutory compliance with all labor laws, safety standards, 
                and environmental regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Transform Your Facility Management Today
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Get a customized facility management solution designed for your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent">
              Request a Proposal
            </Link>
            <Link href="/contact" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-secondary">
              Schedule Site Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 