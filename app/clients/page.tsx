import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  Users, 
  Award, 
  Clock,
  Quote,
  ChevronRight,
  Star
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Clients",
  description: "Viskaan Associates serves prestigious clients including ISRO, HAL, BEL, IIMB, and leading corporates. Trusted by India's top organizations.",
};

const majorClients = [
  {
    name: "ISRO",
    fullName: "Indian Space Research Organisation",
    category: "Aerospace & Defense",
    duration: "15+ years",
    services: ["Facility Management", "Security Services", "Housekeeping"],
    testimonial: "Viskaan Associates has been our trusted partner for over 15 years. Their professional approach and commitment to excellence align perfectly with our standards.",
    contact: "Director, Admin & Services"
  },
  {
    name: "HAL",
    fullName: "Hindustan Aeronautics Limited",
    category: "Aerospace & Defense",
    duration: "12+ years",
    services: ["Security Services", "Facility Management", "Canteen Services"],
    testimonial: "The security services provided by Viskaan are exemplary. Their personnel are well-trained and maintain the high standards required for our sensitive operations.",
    contact: "GM, Security"
  },
  {
    name: "BEL",
    fullName: "Bharat Electronics Limited",
    category: "Defense Electronics",
    duration: "10+ years",
    services: ["Facility Management", "Manpower Supply", "Horticulture"],
    testimonial: "Viskaan's integrated facility management solutions have significantly improved our operational efficiency. Their team is responsive and professional.",
    contact: "DGM, Administration"
  },
  {
    name: "IIMB",
    fullName: "Indian Institute of Management Bangalore",
    category: "Education",
    duration: "8+ years",
    services: ["Housekeeping", "Horticulture", "Security Services"],
    testimonial: "The campus maintenance services by Viskaan have been outstanding. They understand the unique requirements of an educational institution.",
    contact: "Chief Administrative Officer"
  },
  {
    name: "Toshiba",
    fullName: "Toshiba Transmission & Distribution Systems",
    category: "Manufacturing",
    duration: "7+ years",
    services: ["Facility Management", "Security Services", "Canteen Services"],
    testimonial: "Viskaan Associates has been instrumental in maintaining our facility to international standards. Their ISO certification reflects in their service quality.",
    contact: "Head of Operations"
  },
  {
    name: "Bengaluru Metro",
    fullName: "Bangalore Metro Rail Corporation",
    category: "Infrastructure",
    duration: "5+ years",
    services: ["Security Services", "Housekeeping", "Facility Management"],
    testimonial: "Managing security and cleanliness for a public transportation system is challenging, but Viskaan has exceeded our expectations consistently.",
    contact: "Director, Operations"
  }
];

const otherClients = [
  { name: "Bosch", category: "Automotive" },
  { name: "CEAT Tyres", category: "Manufacturing" },
  { name: "Continental", category: "Automotive" },
  { name: "TVS Motors", category: "Automotive" },
  { name: "Infosys", category: "IT Services" },
  { name: "Wipro", category: "IT Services" },
  { name: "HCL Technologies", category: "IT Services" },
  { name: "Biocon", category: "Pharmaceutical" },
  { name: "Syngene", category: "Biotechnology" },
  { name: "ITC Hotels", category: "Hospitality" },
  { name: "Manipal Hospitals", category: "Healthcare" },
  { name: "Columbia Asia", category: "Healthcare" }
];

const industries = [
  { name: "Aerospace & Defense", count: 8, icon: Building2 },
  { name: "IT & Technology", count: 15, icon: Building2 },
  { name: "Manufacturing", count: 12, icon: Building2 },
  { name: "Healthcare", count: 10, icon: Building2 },
  { name: "Education", count: 6, icon: Building2 },
  { name: "Infrastructure", count: 5, icon: Building2 }
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Esteemed Clients
          </h1>
          <p className="text-xl max-w-3xl">
            Trusted by India's leading organizations across aerospace, defense, 
            technology, and corporate sectors for over 25 years.
          </p>
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">100+</div>
              <p className="text-gray-600 mt-2">Active Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">25+</div>
              <p className="text-gray-600 mt-2">Years of Trust</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">95%</div>
              <p className="text-gray-600 mt-2">Client Retention</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">50+</div>
              <p className="text-gray-600 mt-2">Long-term Contracts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Clients Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Our Major Clients</h2>
          <p className="section-subheading">
            Partnering with India's most prestigious organizations
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {majorClients.map((client, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-primary">
                        {client.name}
                      </h3>
                      <p className="text-sm text-gray-600">{client.fullName}</p>
                    </div>
                    <Award className="w-8 h-8 text-secondary" />
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {client.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {client.duration}
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Services Provided:</p>
                    <div className="flex flex-wrap gap-2">
                      {client.services.map((service, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <Quote className="w-6 h-6 text-gray-300 mb-2" />
                    <p className="text-sm text-gray-600 italic mb-2">
                      "{client.testimonial}"
                    </p>
                    <p className="text-xs text-gray-500">- {client.contact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Distribution */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Industries We Serve</h2>
          <p className="section-subheading">
            Diverse expertise across multiple sectors
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center gap-4 bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.count} clients</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Clients */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">More Trusted Partners</h2>
          <p className="section-subheading">
            Some of the other prestigious organizations we serve
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {otherClients.map((client, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200">
                <h3 className="font-heading font-semibold text-lg mb-1">{client.name}</h3>
                <p className="text-sm text-gray-600">{client.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Our Success Metrics</h2>
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-heading font-bold mb-4">Client Satisfaction</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Service Quality</span>
                      <span className="text-sm font-semibold">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Response Time</span>
                      <span className="text-sm font-semibold">96%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Overall Satisfaction</span>
                      <span className="text-sm font-semibold">97%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: '97%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-heading font-bold mb-4">Performance Indicators</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Contract Renewals</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Service Delivery</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Client References</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-accent' : 'fill-gray-300'} ${i < 4 ? 'text-accent' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
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
            Join Our Growing List of Satisfied Clients
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience the Viskaan difference with our professional facility management services
          </p>
          <Link href="/contact" className="btn-accent">
            Get Started Today
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
} 