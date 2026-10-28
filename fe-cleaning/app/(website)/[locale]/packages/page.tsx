
import { getTranslations } from "next-intl/server";
import Link from "@/i18n/navigation";
import PackageList from "@/components/package/PackageList";
import { PackageApi, PackageType } from "@/types/package";

async function getPackages(): Promise<PackageApi[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured");
  }

  const res = await fetch(`${apiUrl}/packages`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch packages");
  }

  const json = await res.json();

  return json.data ?? [];
}

export default async function PackagesPage() {
  const t = await getTranslations("Packages");
  const packages = await getPackages();

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
    <main className="bg-[#F9F9F7]">
      {/* Page Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-28">
          <p className="text-sm font-medium uppercase tracking-[6px] text-accent">
            {t("eyebrow")}
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl font-heading text-5xl leading-tight text-primary md:text-6xl">
            {t("heroTitle")}
            <br className="hidden md:block" />
            {t("heroTitleLine2")}
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            {t("heroDescription")}
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[5px] text-accent">
                {t("choosePlan")}
              </p>

              <h2 className="mt-3 font-heading text-4xl text-primary md:text-5xl">
                {t("sectionTitle")}
              </h2>
            </div>

            <p className="max-w-md leading-7 text-gray-500 md:text-right">
              {t("sectionDescription")}
            </p>
          </div>

          <PackageList packages={mapped} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[6px] text-accent">
            {t("ctaEyebrow")}
          </p>

          <h2 className="mt-5 font-heading text-4xl leading-tight text-white md:text-5xl">
            {t("ctaTitle")}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            {t("ctaDescription")}
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 font-semibold text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {t("contactUs")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
