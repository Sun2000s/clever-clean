import { outdoorMaintenanceService } from "@/data/services/outdoorMaintenance";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceIncluded from "@/components/services/ServiceIncluded";
import WhyChooseService from "@/components/services/WhyChooseService";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";

export default function OutdoorMaintenancePage() {
  return (
    <>
      <ServiceHero {...outdoorMaintenanceService.hero} />

      <ServiceIntro {...outdoorMaintenanceService.intro} />

      <ServiceIncluded {...outdoorMaintenanceService.included} />

      <WhyChooseService {...outdoorMaintenanceService.whyChoose} />

      <ServiceProcess {...outdoorMaintenanceService.process} />

      <ServiceFAQ {...outdoorMaintenanceService.faq} />

      <ServiceCTA {...outdoorMaintenanceService.cta} />
    </>
  );
}