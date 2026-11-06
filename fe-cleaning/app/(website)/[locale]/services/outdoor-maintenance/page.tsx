
import { getTranslations } from "next-intl/server";
import { outdoorMaintenanceService } from "@/data/services/outdoorMaintenance";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceIncluded from "@/components/services/ServiceIncluded";
import WhyChooseService from "@/components/services/WhyChooseService";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";

interface TextItem {
  title: string;
  description: string;
}

interface ProcessItem extends TextItem {
  step: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default async function OutdoorMaintenancePage() {
  const t = await getTranslations("ServicePages.outdoorMaintenance");

  const includedTexts = t.raw("included.items") as TextItem[];
  const includedItems = outdoorMaintenanceService.included.items.map((item, index) => ({
    ...item,
    ...includedTexts[index],
  }));

  const whyChooseTexts = t.raw("whyChoose.items") as TextItem[];
  const whyChooseItems = outdoorMaintenanceService.whyChoose.items.map((item, index) => ({
    ...item,
    ...whyChooseTexts[index],
  }));

  return (
    <>
      <ServiceHero
        {...outdoorMaintenanceService.hero}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <ServiceIntro
        {...outdoorMaintenanceService.intro}
        title={t("intro.title")}
        description={t("intro.description")}
        highlights={t.raw("intro.highlights") as string[]}
      />

      <ServiceIncluded
        {...outdoorMaintenanceService.included}
        title={t("included.title")}
        description={t("included.description")}
        items={includedItems}
      />

      <WhyChooseService
        {...outdoorMaintenanceService.whyChoose}
        title={t("whyChoose.title")}
        subtitle={t("whyChoose.subtitle")}
        items={whyChooseItems}
      />

      <ServiceProcess
        {...outdoorMaintenanceService.process}
        title={t("process.title")}
        subtitle={t("process.subtitle")}
        items={t.raw("process.items") as ProcessItem[]}
      />

      <ServiceFAQ
        {...outdoorMaintenanceService.faq}
        title={t("faq.title")}
        subtitle={t("faq.subtitle")}
        items={t.raw("faq.items") as FAQItem[]}
      />

      <ServiceCTA
        {...outdoorMaintenanceService.cta}
        title={t("cta.title")}
        description={t("cta.description")}
      />
    </>
  );
}
