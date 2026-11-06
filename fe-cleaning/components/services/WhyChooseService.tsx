import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import WhyChooseCard from "./WhyChooseCard";

interface Item {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyChooseServiceProps {
  title: string;
  subtitle: string;
  items: Item[];
}

export default function WhyChooseService({
  title,
  subtitle,
  items,
}: WhyChooseServiceProps) {
  const t = useTranslations("ServiceCommon");

  return (
    <section className="bg-secondary py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[6px] text-accent">
            {t("whyChooseUs")}
          </p>

          <h2 className="mt-5 font-heading text-4xl text-primary md:text-5xl">
            {title}
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {items.map((item, index) => (
            <WhyChooseCard
              key={`${item.title}-${index}`}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}