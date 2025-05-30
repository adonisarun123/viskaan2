import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <IndustriesSection />
      <ClientsSection />
      <CertificationsSection />
      <CTASection />
    </>
  );
}
