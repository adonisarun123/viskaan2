import { Metadata } from "next";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Viskaan Associates - 25+ years of excellence in facility management services.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Viskaan Associates
          </h1>
          <p className="text-xl max-w-3xl">
            Leading the facility management industry with 25+ years of excellence, 
            innovation, and unwavering commitment to quality service delivery.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Your Trusted Facility Management Partner
              </h2>
              <p className="text-gray-600 mb-4">
                Established in 1998, Viskaan Associates has grown to become one of 
                India's most trusted facility management companies. With a workforce 
                of over 10,000 professionals, we serve 500+ prestigious clients 
                across diverse industries.
              </p>
              <p className="text-gray-600 mb-6">
                Our comprehensive service portfolio, ISO certifications, and complete 
                statutory compliance make us the preferred choice for organizations 
                seeking reliable facility management solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary" />
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary" />
                  <span>PSARA Licensed Security Services</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary" />
                  <span>100% Statutory Compliance</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-500">Company Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be India's most preferred facility management partner, setting 
                benchmarks in service quality, innovation, and customer satisfaction.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                Delivering comprehensive facility solutions that enhance operational 
                efficiency, ensure compliance, and create optimal work environments 
                for our clients.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Our Values</h3>
              <p className="text-gray-600">
                Integrity, Excellence, Innovation, Customer Focus, Employee Welfare, 
                and Environmental Responsibility guide every aspect of our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Our Journey</h2>
          <p className="section-subheading">
            Key milestones in our 25+ year journey of excellence
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { year: "1998", title: "Company Founded", description: "Started operations with a vision to transform facility management in India" },
              { year: "2005", title: "ISO Certification", description: "Achieved ISO 9001 certification, setting quality benchmarks" },
              { year: "2010", title: "Major Expansion", description: "Expanded services to include security, horticulture, and canteen services" },
              { year: "2015", title: "10,000+ Workforce", description: "Crossed 10,000 employees milestone serving 300+ clients" },
              { year: "2023", title: "Industry Leader", description: "Recognized as one of India's top facility management companies" },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-1">
                    {milestone.year} - {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 