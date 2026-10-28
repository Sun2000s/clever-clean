import { officeCommercialService } from "@/data/services/officeCommercial";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceIncluded from "@/components/services/ServiceIncluded";
import WhyChooseService from "@/components/services/WhyChooseService";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";

export default function OfficeCommercialPage() {
  return (
    <>
      <ServiceHero {...officeCommercialService.hero} />

      <ServiceIntro {...officeCommercialService.intro} />

      <ServiceIncluded {...officeCommercialService.included} />

      <WhyChooseService {...officeCommercialService.whyChoose} />

      <ServiceProcess {...officeCommercialService.process} />

      <ServiceFAQ {...officeCommercialService.faq} />

      <ServiceCTA {...officeCommercialService.cta} />
    </>
  );
}