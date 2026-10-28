import Link from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import PackageList from "@/components/package/PackageList";
import type { PackageApi, PackageType } from "@/types/package";

async function getFeaturedPackages(): Promise<PackageApi[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    console.error("NEXT_PUBLIC_API_URL is not configured");
    return [];
  }

  try {
    const res = await fetch(`${apiUrl}/packages`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch packages:", res.status);
      return [];
    }

    const json = await res.json();

    return Array.isArray(json.data) ? json.data.slice(0, 3) : [];
  } catch (error) {
    console.error("Error fetching featured packages:", error);
    return [];
  }
}

export default async function FeaturedPackage() {
  const t = await getTranslations("FeaturedPackage");
  const packages = await getFeaturedPackages();

  const mapped: PackageType[] = packages.map((item) => ({
    id: item.id,
    name: item.name,
    minDurationHours: item.minDurationHours,
    maxDurationHours: item.maxDurationHours,
    minStaff: item.minStaff,
    maxStaff: item.maxStaff,
    price: item.price,
    description: item.description ?? "",
    coverImage: {
      url: item.coverImageUrl ?? "",
      publicId: "",
    },
    galleryImages: [],
    highlights: [],
    benefits: [],
    rating: item.rating ?? 0,
    coverImageUrl: item.coverImageUrl ?? "",
  }));

  return (
    <section className="bg-[#F9F9F7] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#D9B06D] sm:text-sm sm:tracking-[5px]">
              {t("eyebrow")}
            </p>

            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-[#183153] sm:text-4xl md:text-5xl">
              {t("titleLine1")}
              <br className="hidden md:block" />
              <span className="md:inline"> {t("titleLine2")}</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:leading-8">
              {t("description")}
            </p>
          </div>

          <Link
            href="/packages"
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-[#183153]/20 px-6 py-3 font-semibold text-[#183153] transition-all duration-300 hover:border-[#183153] hover:bg-[#183153] hover:text-white"
          >
            {t("viewAll")}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Featured Packages */}
        <div className="mt-10 md:mt-16">
          {mapped.length > 0 ? (
            <PackageList packages={mapped} />
          ) : (
            <div className="rounded-3xl border border-gray-200 bg-white px-6 py-14 text-center">
              <h3 className="text-xl font-semibold text-[#183153]">
                {t("unavailableTitle")}
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-500">
                {t("unavailableDescription")}
              </p>

              <Link
                href="/packages"
                className="mt-6 inline-flex rounded-full bg-[#183153] px-7 py-3 font-semibold text-white transition hover:bg-[#24466D]"
              >
                {t("explore")}
              </Link>
            </div>
          )}
        </div>

        {/* Bottom Note */}
        <p className="mt-8 text-center text-sm leading-7 text-gray-500">
          {t("bottomNote")}
          <Link
            href="/contact"
            className="ml-1 font-semibold text-[#183153] underline decoration-[#D9B06D] underline-offset-4 hover:text-[#B88B45]"
          >
            {t("contactUs")}
          </Link>
        </p>
      </div>
    </section>
  );
}
