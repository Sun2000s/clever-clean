
import { getTranslations } from "next-intl/server";
import { residentialService } from "@/data/services/residential";

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

export default async function ResidentialPage() {
  const t = await getTranslations("ServicePages.residential");

  const includedTexts = t.raw("included.items") as TextItem[];
  const includedItems = residentialService.included.items.map((item, index) => ({
    ...item,
    ...includedTexts[index],
  }));

  const whyChooseTexts = t.raw("whyChoose.items") as TextItem[];
  const whyChooseItems = residentialService.whyChoose.items.map((item, index) => ({
    ...item,
    ...whyChooseTexts[index],
  }));

  return (
    <>
      <ServiceHero
        {...residentialService.hero}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <ServiceIntro
        {...residentialService.intro}
        title={t("intro.title")}
        description={t("intro.description")}
        highlights={t.raw("intro.highlights") as string[]}
      />

      <ServiceIncluded
        {...residentialService.included}
        title={t("included.title")}
        description={t("included.description")}
        items={includedItems}
      />

      <WhyChooseService
        {...residentialService.whyChoose}
        title={t("whyChoose.title")}
        subtitle={t("whyChoose.subtitle")}
        items={whyChooseItems}
      />

      <ServiceProcess
        {...residentialService.process}
        title={t("process.title")}
        subtitle={t("process.subtitle")}
        items={t.raw("process.items") as ProcessItem[]}
      />

      <ServiceFAQ
        {...residentialService.faq}
        title={t("faq.title")}
        subtitle={t("faq.subtitle")}
        items={t.raw("faq.items") as FAQItem[]}
      />

      <ServiceCTA
        {...residentialService.cta}
        title={t("cta.title")}
        description={t("cta.description")}
      />
    </>
  );
}
