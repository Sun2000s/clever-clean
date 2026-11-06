
import { getTranslations } from "next-intl/server";

import { deepCleaningService } from "@/data/services/deepCleaning";

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

export default async function DeepCleaningPage() {
  const t = await getTranslations("ServicePages.deepCleaning");

  // ข้อมูลรายการบริการ
  const includedTexts = t.raw("included.items") as TextItem[];
  const includedItems = deepCleaningService.included.items.map(
    (item, index) => ({
      ...item,
      ...includedTexts[index],
    })
  );

  // เหตุผลที่ควรเลือกเรา
  const whyChooseTexts = t.raw("whyChoose.items") as TextItem[];
  const whyChooseItems = deepCleaningService.whyChoose.items.map(
    (item, index) => ({
      ...item,
      ...whyChooseTexts[index],
    })
  );

  // ขั้นตอนการทำความสะอาด
  const processItems = t.raw("process.items") as ProcessItem[];

  // คำถามที่พบบ่อย
  const faqItems = t.raw("faq.items") as FAQItem[];

  return (
    <>
      <ServiceHero
        {...deepCleaningService.hero}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <ServiceIntro
        {...deepCleaningService.intro}
        title={t("intro.title")}
        description={t("intro.description")}
        highlights={t.raw("intro.highlights") as string[]}
      />

      <ServiceIncluded
        {...deepCleaningService.included}
        title={t("included.title")}
        description={t("included.description")}
        items={includedItems}
      />

      <WhyChooseService
        {...deepCleaningService.whyChoose}
        title={t("whyChoose.title")}
        subtitle={t("whyChoose.subtitle")}
        items={whyChooseItems}
      />

      <ServiceProcess
        {...deepCleaningService.process}
        title={t("process.title")}
        subtitle={t("process.subtitle")}
        items={processItems}
      />

      <ServiceFAQ
        {...deepCleaningService.faq}
        title={t("faq.title")}
        subtitle={t("faq.subtitle")}
        items={faqItems}
      />

      <ServiceCTA
        {...deepCleaningService.cta}
        title={t("cta.title")}
        description={t("cta.description")}
      />
    </>
  );
}
