import Container from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function PortfolioPreview() {
  const t = useTranslations("PortfolioPreview");

  return (
    <section className="overflow-hidden bg-[#F9F9F7] py-24 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#183153] px-6 py-16 text-center md:px-16 md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D9B06D]/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[5px] text-[#D9B06D]">
              {t("eyebrow")}
            </p>

            <h2 className="mt-5 font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
              {t("title")}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              {t("description")}
            </p>

            <Link
              href="/portfolio"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-[#D9B06D] px-8 py-4 font-semibold text-[#183153] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              {t("button")}
              <span className="ml-3" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}