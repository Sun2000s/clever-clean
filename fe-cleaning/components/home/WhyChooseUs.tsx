import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import Link from "@/i18n/navigation";

import {
  HiOutlineBuildingOffice2,
  HiOutlineSparkles,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";

export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  const reasons = [
    {
      icon: HiOutlineBuildingOffice2,
      number: "01",
      title: t("reasons.space.title"),
      description: t("reasons.space.description"),
    },
    {
      icon: HiOutlineSparkles,
      number: "02",
      title: t("reasons.detail.title"),
      description: t("reasons.detail.description"),
    },
    {
      icon: HiOutlineClipboardDocumentCheck,
      number: "03",
      title: t("reasons.service.title"),
      description: t("reasons.service.description"),
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          {/* Section Introduction */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-accent sm:text-sm sm:tracking-[5px]">
              {t("eyebrow")}
            </p>

            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
              {t("titleLine1")}
              <br className="hidden sm:block" />
              <span className="sm:inline"> {t("titleLine2")}</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 md:mt-7">
              {t("description")}
            </p>

            <Link
              href="/#services"
              className="mt-8 inline-flex items-center gap-3 font-semibold text-primary transition-colors hover:text-[#B88B45]"
            >
              {t("button")}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Reasons Cards */}
          <div className="space-y-5">
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group flex gap-4 rounded-2xl border border-gray-100 bg-[#F9F9F7] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9B06D]/50 hover:shadow-lg sm:gap-5 sm:p-6 md:gap-7 md:p-8"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-xl text-accent transition-colors group-hover:bg-accent group-hover:text-primary sm:h-14 sm:w-14 sm:text-2xl">
                    <Icon />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold tracking-[3px] text-accent">
                      {item.number}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold leading-snug text-primary md:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
