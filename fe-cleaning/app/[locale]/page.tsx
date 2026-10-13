
import Hero from "@/components/home/Hero";
import Trusted from "@/components/home/Trusted";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedPackage from "@/components/home/FeaturedPackages";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Trust & Service Highlights */}
      <Trusted />

      {/* 3. Our Services */}
      <Services />

      {/* 4. Why Choose Clever Clean */}
      <WhyChooseUs />

      {/* 5. Featured Cleaning Packages */}
      <FeaturedPackage />

      {/* 6. Portfolio Preview */}
      <PortfolioPreview />

      {/* 7. Contact & Booking */}
      <ContactCTA />
    </>
  );
}


/*
import Hero from "@/components/home/Hero";
import Trusted from "@/components/home/Trusted";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <Services />
      <WhyChooseUs />
    </>
  );
}
*/