import Container from "@/components/ui/Container";
import ServiceCategoryCard from "./services/ServiceCategoryCard";
import { useTranslations } from "next-intl";

import {
  HiHome,
  HiBuildingOffice2,
  HiSparkles,
  HiSun,
} from "react-icons/hi2";

export default function Services() {
  const t = useTranslations("Services");

  const serviceCategories = [
    {
      image: "/images/services/service-house-cleaning.jpg",
      href: "/services/residential",
      icon: <HiHome />,
      title: t("residential.title"),
      description: t("residential.description"),
      services: [
        t("residential.services.house"),
        t("residential.services.condo"),
        t("residential.services.move"),
      ],
    },
    {
      image: "/images/services/service-office-cleaning.jpg",
      href: "/services/office-commercial",
      icon: <HiBuildingOffice2 />,
      title: t("office.title"),
      description: t("office.description"),
      services: [
        t("office.services.office"),
        t("office.services.commercial"),
        t("office.services.contract"),
      ],
    },
    {
      image: "/images/services/service-sofa-cleaning.jpg",
      href: "/services/deep-cleaning",
      icon: <HiSparkles />,
      title: t("deep.title"),
      description: t("deep.description"),
      services: [
        t("deep.services.carpet"),
        t("deep.services.sofa"),
        t("deep.services.dustMite"),
        t("deep.services.ozone"),
      ],
    },
    {
      image: "/images/services/service-lawn-care.jpg",
      href: "/services/outdoor-maintenance",
      icon: <HiSun />,
      title: t("outdoor.title"),
      description: t("outdoor.description"),
      services: [
        t("outdoor.services.grass"),
        t("outdoor.services.garden"),
      ],
    },
  ];

  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[4px] text-accent sm:tracking-[6px]">
            {t("eyebrow")}
          </p>

          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-6xl">
            {t("title")}
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
            {t("description")}
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          {serviceCategories.map((category) => (
            <ServiceCategoryCard
              key={category.href}
              image={category.image}
              icon={category.icon}
              title={category.title}
              description={category.description}
              services={category.services}
              href={category.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
