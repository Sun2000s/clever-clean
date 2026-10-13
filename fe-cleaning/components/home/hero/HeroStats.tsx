
import { useTranslations } from "next-intl";

export default function HeroStats() {
  const t = useTranslations("HeroStats");

  const stats = [
    { number: "1000+", label: t("happyClients") },
    { number: "35+", label: t("experience") },
    { number: "24/7", label: t("support") },
  ];

  return (
    <section className="mt-10 pb-8 sm:mt-12 md:mt-16 md:pb-0">
      <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex min-w-0 flex-col items-center justify-center rounded-xl bg-white px-2 py-5 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl sm:px-4 sm:py-6 lg:rounded-3xl lg:p-8"
          >
            <h2 className="whitespace-nowrap text-xl font-bold text-primary sm:text-2xl md:text-3xl lg:text-4xl">
              {item.number}
            </h2>

            <p className="mt-2 text-[10px] leading-tight text-gray-500 sm:text-xs md:mt-3 md:text-sm lg:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
