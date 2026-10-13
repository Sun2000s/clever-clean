
import { useTranslations } from "next-intl";
import Link from "@/i18n/navigation";

const LINE_URL = "https://line.me/R/ti/p/@crclean";

export default function HeroContent() {
  const t = useTranslations("HeroContent");

  return (
    <div className="space-y-8">
      <div className="inline-flex items-center rounded-full border border-accent/30 bg-white px-4 py-2 shadow-sm">
        <span className="text-sm font-medium text-primary">
          ✨ {t("badge")}
        </span>
      </div>

      <div className="space-y-4">
        <h1 className="font-heading text-5xl font-bold leading-tight text-primary lg:text-7xl">
          {t("title1")}
          <br />
          {t("title2")}
          <br />
          {t("title3")}
        </h1>

        <p className="max-w-xl text-lg leading-8 text-gray-600">
          {t("description")}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-[#244A73]"
        >
          {t("bookNow")}
        </a>

        <Link
          href="/packages"
          className="rounded-full border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
        >
          {t("viewPackages")}
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-xl text-yellow-500">
          ⭐⭐⭐⭐⭐
        </div>

        <div>
          <p className="font-semibold text-primary">
            {t("trusted")}
          </p>

          <p className="text-sm text-gray-500">
            {t("serviceTypes")}
          </p>
        </div>
      </div>
    </div>
  );
}
