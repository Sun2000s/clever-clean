
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import type { PackageApi, HighlightItem } from "@/types/package";

type PackageDetailData = PackageApi & {
  highlights?: HighlightItem[];
  benefits?: string[];
};

export default function PackageDetailPage() {
  const t = useTranslations("PackageDetail");
  const params = useParams<{ locale: string; packageId: string }>();
  const packageId = params.packageId;

  const [item, setItem] = useState<PackageDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadPackage() {
      try {
        setLoading(true);
        setError(false);

        console.log("[PackageDetail] packageId:", packageId);

        const res = await fetch("/api/packages", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`API returned ${res.status}`);
        }

        const json = await res.json();

        console.log("[PackageDetail] API response:", json);

        // รองรับทั้ง response แบบ { data: [...] }
        // และ response ที่เป็น array โดยตรง
        const packages: PackageDetailData[] = Array.isArray(json)
          ? json
          : Array.isArray(json.data)
            ? json.data
            : [];

        console.log("[PackageDetail] package list:", packages);

        const found = packages.find(
          (p) => String(p.id) === String(packageId)
        );

        console.log("[PackageDetail] selected package:", found);
        console.log("[PackageDetail] description:", found?.description);
        console.log("[PackageDetail] highlights:", found?.highlights);
        console.log("[PackageDetail] benefits:", found?.benefits);

        if (!found) {
          if (!cancelled) setError(true);
          return;
        }

        if (!cancelled) setItem(found);
      } catch (err) {
        console.error("[PackageDetail] load failed:", err);
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (packageId) loadPackage();

    return () => {
      cancelled = true;
    };
  }, [packageId]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F9F9F7]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#183153]" />
          <p className="mt-5 text-gray-500">{t("loading")}</p>
        </div>
      </main>
    );
  }

  if (error || !item) {
    return (
      <main className="min-h-screen bg-[#F9F9F7]">
        <div className="mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-sm uppercase tracking-[5px] text-accent">
            {t("notFoundLabel")}
          </p>
          <h1 className="mt-5 font-heading text-4xl text-primary">
            {t("notFoundTitle")}
          </h1>
          <p className="mt-5 text-gray-500">
            {t("notFoundDescription")}
          </p>
          <Link
            href="/packages"
            className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 font-semibold text-white"
          >
            {t("backToPackages")}
          </Link>
        </div>
      </main>
    );
  }

  const highlights = Array.isArray(item.highlights)
    ? item.highlights
    : [];

  const benefits = Array.isArray(item.benefits)
    ? item.benefits
    : [];

  return (
    <main className="bg-[#F9F9F7]">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <Link
            href="/packages"
            className="text-sm text-gray-500 hover:text-primary"
          >
            ← {t("backLink")}
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative h-[360px] overflow-hidden rounded-3xl bg-gray-100 shadow-xl sm:h-[420px] md:h-[520px]">
              {item.coverImageUrl ? (
                <Image
                  src={item.coverImageUrl}
                  alt={item.name}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-400">
                  {t("noImage")}
                </div>
              )}
            </div>

            <div>
              <p className="text-sm uppercase tracking-[5px] text-accent">
                {t("packageLabel")}
              </p>

              <h1 className="mt-4 font-heading text-4xl text-primary md:text-6xl">
                {item.name}
              </h1>

              <div className="mt-6 inline-flex rounded-full bg-green-50 px-4 py-2 text-sm text-green-700">
                ⭐ {item.rating ?? 0}
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-500">{t("startingFrom")}</p>
                <p className="mt-1 text-4xl font-bold text-primary">
                  {item.currency === "THB" || !item.currency
                    ? "฿"
                    : `${item.currency} `}
                  {Number(item.price ?? 0).toLocaleString()}
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#F9F9F7] p-5">
                  <p className="text-sm text-gray-400">{t("duration")}</p>
                  <p className="mt-2 font-semibold text-primary">
                    {item.minDurationHours}–{item.maxDurationHours}{" "}
                    {t("hours")}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F9F9F7] p-5">
                  <p className="text-sm text-gray-400">{t("staff")}</p>
                  <p className="mt-2 font-semibold text-primary">
                    {item.minStaff}–{item.maxStaff} {t("people")}
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:bg-primary/90"
              >
                {t("inquire")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Description from API */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[5px] text-accent">
              {t("aboutLabel")}
            </p>
            <h2 className="mt-4 font-heading text-3xl text-primary md:text-5xl">
              {t("descriptionTitle")}
            </h2>
          </div>

          <div className="mt-10 rounded-3xl border border-gray-100 bg-white p-8 shadow-lg md:p-12">
            <p className="whitespace-pre-line leading-8 text-gray-600">
              {item.description?.trim() || t("defaultDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights from API */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[5px] text-accent">
              {t("packageLabel")}
            </p>
            <h2 className="mt-4 font-heading text-3xl text-primary md:text-4xl">
              {t("highlightsTitle")}
            </h2>
          </div>

          {highlights.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {highlights.map((highlight, index) => (
                <article
                  key={`${highlight.header}-${index}`}
                  className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-primary">
                    {highlight.header}
                  </h3>
                  {Array.isArray(highlight.bullets) &&
                    highlight.bullets.length > 0 && (
                      <ul className="mt-5 space-y-3">
                        {highlight.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3 leading-7 text-gray-600">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-8 text-center text-sm text-gray-500">
              {params.locale === "th"
                ? "API ยังไม่มีข้อมูลจุดเด่นสำหรับแพ็กเกจนี้"
                : "No package highlights were returned by the API."}
            </p>
          )}
        </div>
      </section>

      {/* Benefits from API */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[5px] text-accent">
              Clever Clean
            </p>
            <h2 className="mt-4 font-heading text-3xl text-primary md:text-4xl">
              {t("benefitsTitle")}
            </h2>
          </div>

          {benefits.length > 0 ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={`${benefit}-${index}`}
                  className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 font-semibold text-green-700">
                    ✓
                  </span>
                  <p className="leading-7 text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-8 text-center text-sm text-gray-500">
              {params.locale === "th"
                ? "API ยังไม่มีข้อมูลสิทธิประโยชน์สำหรับแพ็กเกจนี้"
                : "No package benefits were returned by the API."}
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm uppercase tracking-[5px] text-accent">
            {t("ctaLabel")}
          </p>
          <h2 className="mt-4 font-heading text-3xl text-white md:text-5xl">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            {t("ctaDescription")}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-4 font-semibold text-primary transition hover:-translate-y-1 hover:shadow-xl"
          >
            {t("contactUs")}
          </Link>
        </div>
      </section>
    </main>
  );
}
