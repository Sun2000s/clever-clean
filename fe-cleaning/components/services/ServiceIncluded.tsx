import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import IncludedCard from "./IncludedCard";

interface Item {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ServiceIncludedProps {
  title: string;
  description: string;
  items: Item[];
}

export default function ServiceIncluded({
  title,
  description,
  items,
}: ServiceIncludedProps) {
  const t = useTranslations("ServiceCommon");

  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="uppercase tracking-[6px] text-accent">
            {t("included")}
          </p>

          <h2 className="mt-4 font-heading text-4xl text-primary md:text-5xl">
            {title}
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            {description}
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <IncludedCard
              key={`${item.title}-${index}`}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}