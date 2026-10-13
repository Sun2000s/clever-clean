import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import {
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineClock,
} from "react-icons/hi2";

export default function Trusted() {
  const t = useTranslations("Trusted");

  const trustItems = [
    {
      icon: HiOutlineShieldCheck,
      title: t("professionalTitle"),
      description: t("professionalDescription"),
    },
    {
      icon: HiOutlineSparkles,
      title: t("qualityTitle"),
      description: t("qualityDescription"),
    },
    {
      icon: HiOutlineUserGroup,
      title: t("flexibleTitle"),
      description: t("flexibleDescription"),
    },
    {
      icon: HiOutlineClock,
      title: t("bookingTitle"),
      description: t("bookingDescription"),
    },
  ];

  return (
    <section className="mt-8 border-y border-gray-100 bg-white py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F9F9F7] text-2xl text-[#D9B06D] transition-all duration-300 group-hover:bg-[#183153] group-hover:text-white">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-base font-semibold text-[#183153] md:text-lg">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
