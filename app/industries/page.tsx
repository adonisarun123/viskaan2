import { Metadata } from "next";
import Link from "next/link";
import { 
  Plane, 
  Building2, 
  GraduationCap, 
  Cpu, 
  Heart, 
  Factory,
  Briefcase,
  ShoppingBag,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Viskaan Associates provides specialized facility management solutions for aerospace, IT, manufacturing, healthcare, education, and more industries.",
};

const industries = [
  {
    icon: Plane,
    name: "Aerospace & Defense",
    description: "Specialized facility management for aerospace companies, defense establishments, and research centers with high-security requirements.",
    features: [
      "PSARA licensed security personnel",
      "Cleanroom maintenance",
      "Specialized waste management",
      "24/7 facility support"
    ],
    clients: ["ISRO", "HAL", "BEL", "NAL"],
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
  },
  {
    icon: Cpu,
    name: "IT & Electronics",
    description: "Comprehensive services for IT parks, tech companies, and electronics manufacturing units ensuring optimal operational efficiency.",
    features: [
      "Data center cleaning",
      "ESD-safe housekeeping",
      "Round-the-clock support",
      "Energy-efficient solutions"
    ],
    clients: ["Infosys", "Wipro", "TCS", "Tech Parks"],
    color: "text-indigo-600",
    bgColor: "bg-indigo-600/10",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Industrial facility management for manufacturing plants, factories, and production units with focus on safety and efficiency.",
    features: [
      "Industrial cleaning",
      "Machine area maintenance",
      "Waste segregation",
      "Safety compliance"
    ],
    clients: ["Bosch", "Toshiba", "L&T", "CEAT"],
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Tailored services for educational institutions including schools, colleges, universities, and research centers.",
    features: [
      "Campus maintenance",
      "Hostel housekeeping",
      "Garden maintenance",
      "Canteen services"
    ],
    clients: ["IIMB", "IISc", "Universities", "Schools"],
    color: "text-green-600",
    bgColor: "bg-green-600/10",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "Specialized facility management for hospitals, clinics, and healthcare facilities with focus on hygiene and compliance.",
    features: [
      "Hospital-grade cleaning",
      "Biomedical waste management",
      "Infection control",
      "24/7 emergency support"
    ],
    clients: ["Hospitals", "Clinics", "Labs", "Medical Centers"],
    color: "text-red-600",
    bgColor: "bg-red-600/10",
  },
  {
    icon: Building2,
    name: "Infrastructure",
    description: "Services for infrastructure projects, metro stations, airports, and large-scale construction sites.",
    features: [
      "Large area maintenance",
      "Public facility management",
      "Crowd management support",
      "Specialized cleaning"
    ],
    clients: ["Metro Rail", "Airports", "Bus Terminals", "Malls"],
    color: "text-gray-600",
    bgColor: "bg-gray-600/10",
  },
  {
    icon: Briefcase,
    name: "Government & PSUs",
    description: "Compliant facility management services for government offices, PSUs, and public sector organizations.",
    features: [
      "Tender compliance",
      "Government protocols",
      "Security clearance staff",
      "Statutory compliance"
    ],
    clients: ["Government Offices", "PSUs", "Banks", "Departments"],
    color: "text-purple-600",
    bgColor: "bg-purple-600/10",
  },
  {
    icon: ShoppingBag,
    name: "Retail & Commercial",
    description: "Services for shopping malls, retail chains, commercial complexes, and office buildings.",
    features: [
      "Customer area maintenance",
      "Escalator cleaning",
      "Parking management",
      "Facade cleaning"
    ],
    clients: ["Malls", "Retail Chains", "Office Buildings", "Showrooms"],
    color: "text-pink-600",
    bgColor: "bg-pink-600/10",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Industries We Serve
          </h1>
          <p className="text-xl max-w-3xl">
            Specialized facility management solutions tailored for diverse industry 
            verticals with deep domain expertise and compliance knowledge.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 ${industry.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <industry.icon className={`w-8 h-8 ${industry.color}`} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-heading font-bold mb-2">
                        {industry.name}
                      </h2>
                      <p className="text-gray-600 text-sm">
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Key Services:</h3>
                    <ul className="space-y-2">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Notable Clients:</span>{" "}
                      {industry.clients.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Why Industry Expertise Matters</h2>
          <p className="section-subheading">
            Each industry has unique requirements, compliance standards, and operational challenges
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Domain Knowledge</h3>
              <p className="text-gray-600">
                Deep understanding of industry-specific requirements, regulations, 
                and best practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Compliance Expertise</h3>
              <p className="text-gray-600">
                Knowledge of industry-specific compliance requirements and safety 
                standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Customized Solutions</h3>
              <p className="text-gray-600">
                Tailored service packages designed to meet specific industry 
                challenges and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Need Industry-Specific Facility Management?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our specialized solutions can transform your facility operations
          </p>
          <Link href="/contact" className="btn-accent">
            Get Industry-Specific Solution
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
} 