import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceIncluded from "@/components/services/ServiceIncluded";
import WhyChooseService from "@/components/services/WhyChooseService";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";

import { residentialService } from "@/data/services/residential";

export default function ResidentialPage() {
  return (
    <>
      <ServiceHero {...residentialService.hero} />

      <ServiceIntro {...residentialService.intro} />

      <ServiceIncluded {...residentialService.included} />

      <WhyChooseService {...residentialService.whyChoose} />

      <ServiceProcess {...residentialService.process} />

      <ServiceFAQ {...residentialService.faq} />

      <ServiceCTA {...residentialService.cta} />
    </>
  );
}