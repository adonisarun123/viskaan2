import { Metadata } from "next";
import Link from "next/link";
import { 
  Building, 
  Shield, 
  Car, 
  Users, 
  Trees, 
  Coffee,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive facility management services including security, manpower, drivers, horticulture, and canteen services.",
};

const services = [
  {
    icon: Building,
    title: "Facility Management",
    description: "End-to-end facility solutions including housekeeping, pest control, waste management, electrical, plumbing, and HVAC services.",
    features: [
      "Daily housekeeping & deep cleaning",
      "Technical maintenance services",
      "Pest control & sanitization",
      "Waste management & recycling"
    ],
    href: "/services/facility-management",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "PSARA licensed security personnel including guards, gunmen, supervisors, and advanced security solutions.",
    features: [
      "Trained security guards",
      "Armed gunmen services",
      "Security supervisors",
      "Access control systems"
    ],
    href: "/services/security-services",
    color: "text-red-600",
    bgColor: "bg-red-600/10",
  },
  {
    icon: Car,
    title: "Professional Drivers",
    description: "Well-trained and verified drivers for corporate executives, personal use, and logistics operations.",
    features: [
      "Executive chauffeurs",
      "Personal drivers",
      "Commercial vehicle operators",
      "Background verified"
    ],
    href: "/services/drivers",
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
  },
  {
    icon: Users,
    title: "Manpower Supply",
    description: "Skilled and unskilled workforce for various industrial and commercial requirements.",
    features: [
      "Loaders & packers",
      "Machine operators",
      "Office assistants",
      "General helpers"
    ],
    href: "/services/manpower-supply",
    color: "text-purple-600",
    bgColor: "bg-purple-600/10",
  },
  {
    icon: Trees,
    title: "Horticulture Services",
    description: "Complete garden and landscape maintenance services for corporate campuses and facilities.",
    features: [
      "Garden maintenance",
      "Landscaping design",
      "Vertical gardens",
      "Lawn care services"
    ],
    href: "/services/horticulture",
    color: "text-green-600",
    bgColor: "bg-green-600/10",
  },
  {
    icon: Coffee,
    title: "Canteen Services",
    description: "Hygienic food services with trained staff and FSSAI compliance for corporate cafeterias.",
    features: [
      "Trained chefs & staff",
      "FSSAI compliant",
      "Menu customization",
      "Pantry management"
    ],
    href: "/services/canteen-services",
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl max-w-3xl">
            Comprehensive facility management solutions tailored to meet your 
            organization's unique requirements with excellence and compliance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-6`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  
                  <h2 className="text-2xl font-heading font-bold mb-3">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-primary font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Why Choose Viskaan Associates?</h2>
          <p className="section-subheading">
            We deliver excellence through our integrated approach and commitment to quality
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-gray-600">Trained Workforce</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Need a Customized Service Package?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We can create a tailored solution combining multiple services to meet your specific requirements
          </p>
          <Link href="/contact" className="btn-accent">
            Get Custom Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
} 