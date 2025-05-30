import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 gradient-primary text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
          Ready to Transform Your Facility Management?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Get a customized facility management solution for your organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-accent">
            Get Free Consultation
          </Link>
          <Link href="/services" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-[#003366]">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
} 