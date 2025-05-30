import { Metadata } from "next";
import Link from "next/link";
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  Heart,
  Award,
  Clock,
  MapPin,
  Send,
  CheckCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Viskaan Associates - Build your career with India's leading facility management company.",
};

const openPositions = [
  {
    title: "Facility Manager",
    location: "Bangalore",
    type: "Full-time",
    experience: "5-8 years",
    department: "Operations",
    description: "Lead facility operations for corporate clients, manage teams, ensure service quality."
  },
  {
    title: "Security Supervisor",
    location: "Multiple Locations",
    type: "Full-time",
    experience: "3-5 years",
    department: "Security Services",
    description: "Supervise security personnel, conduct training, ensure compliance with PSARA regulations."
  },
  {
    title: "Housekeeping Supervisor",
    location: "Bangalore",
    type: "Full-time",
    experience: "2-4 years",
    department: "Housekeeping",
    description: "Manage housekeeping teams, quality control, client coordination."
  },
  {
    title: "HR Executive",
    location: "Head Office - Bangalore",
    type: "Full-time",
    experience: "2-3 years",
    department: "Human Resources",
    description: "Recruitment, employee relations, payroll management, compliance."
  },
  {
    title: "Business Development Manager",
    location: "Bangalore",
    type: "Full-time",
    experience: "5-7 years",
    department: "Sales",
    description: "New client acquisition, relationship management, proposal development."
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive medical coverage for you and your family"
  },
  {
    icon: Award,
    title: "Performance Bonus",
    description: "Attractive incentives based on individual and team performance"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear career progression path with regular promotions"
  },
  {
    icon: Users,
    title: "Training Programs",
    description: "Regular skill development and certification programs"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible working hours and leave policies"
  },
  {
    icon: Briefcase,
    title: "PF & Gratuity",
    description: "Retirement benefits as per government norms"
  }
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Build Your Career with Viskaan
          </h1>
          <p className="text-xl max-w-3xl">
            Join our team of 10,000+ professionals and be part of India's leading 
            facility management company. We offer growth, learning, and opportunities 
            to make a difference.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Why Join Viskaan Associates?</h2>
          <p className="section-subheading">
            We believe our employees are our greatest asset. Here's what makes 
            Viskaan a great place to work.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Current Openings</h2>
          <p className="section-subheading">
            Explore opportunities across various departments and locations
          </p>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.experience}
                      </span>
                    </div>
                    <p className="text-gray-700">{position.description}</p>
                    <div className="mt-2">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {position.department}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Link 
                      href={`/careers/apply?position=${encodeURIComponent(position.title)}`}
                      className="btn-primary"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Don't see a suitable position? We're always looking for talented individuals.
            </p>
            <Link href="/contact" className="btn-secondary">
              Send Your Resume
              <Send className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">What Our Employees Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 italic mb-4">
                "Working at Viskaan has been a transformative experience. The company 
                truly invests in employee growth and provides excellent career opportunities."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Rajesh Kumar</p>
                <p className="text-sm text-gray-600">Facility Manager, 5 years</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 italic mb-4">
                "The work culture here is amazing. Management is supportive, and there's 
                always something new to learn. I've grown both professionally and personally."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Priya Sharma</p>
                <p className="text-sm text-gray-600">HR Manager, 3 years</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 italic mb-4">
                "Viskaan provides job security and growth opportunities. The training 
                programs have helped me develop new skills and advance in my career."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Mohammed Ali</p>
                <p className="text-sm text-gray-600">Security Supervisor, 7 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Application Process</h2>
          <p className="section-subheading">
            Simple and transparent hiring process
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: "1", title: "Apply Online", description: "Submit your application through our website or job portals" },
                { step: "2", title: "Initial Screening", description: "Our HR team reviews your profile and shortlists candidates" },
                { step: "3", title: "Interview Process", description: "Technical and HR rounds to assess your skills and fit" },
                { step: "4", title: "Document Verification", description: "Background verification and document submission" },
                { step: "5", title: "Job Offer", description: "Receive offer letter and join the Viskaan family" },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {index < 4 && (
                    <div className="absolute left-6 mt-12 w-0.5 h-16 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Journey with Us?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join our team and be part of a company that values growth, innovation, and excellence
          </p>
          <Link href="/contact" className="btn-accent">
            Apply Now
            <Send className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
} 