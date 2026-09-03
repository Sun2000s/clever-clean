import { deepCleaningService } from "@/data/services/deepCleaning";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceIncluded from "@/components/services/ServiceIncluded";
import WhyChooseService from "@/components/services/WhyChooseService";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";

export default function DeepCleaningPage() {
  return (
    <>
      <ServiceHero {...deepCleaningService.hero} />

      <ServiceIntro {...deepCleaningService.intro} />

      <ServiceIncluded {...deepCleaningService.included} />

      <WhyChooseService {...deepCleaningService.whyChoose} />

      <ServiceProcess {...deepCleaningService.process} />

      <ServiceFAQ {...deepCleaningService.faq} />

      <ServiceCTA {...deepCleaningService.cta} />
    </>
  );
}