
import Link from "next/link";
import PackageList from "@/components/package/PackageList";
import { PackageApi, PackageType } from "@/types/package";

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
    <section className="bg-[#F9F9F7] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[5px] text-[#D9B06D]">
              OUR PACKAGES
            </p>

            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-[#183153] md:text-5xl">
              Find Your Perfect
              <br className="hidden md:block" />
              Cleaning Package
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
              เลือกแพ็กเกจทำความสะอาดที่เหมาะกับบ้าน สำนักงาน
              และพื้นที่ของคุณ พร้อมสอบถามรายละเอียดเพิ่มเติมกับทีมงาน
              Clever Clean
            </p>
          </div>

          <Link
            href="/packages"
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-[#183153]/20 px-6 py-3 font-semibold text-[#183153] transition-all duration-300 hover:border-[#183153] hover:bg-[#183153] hover:text-white"
          >
            View All Packages
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Featured Packages */}
        <div className="mt-12 md:mt-16">
          {mapped.length > 0 ? (
            <PackageList packages={mapped} />
          ) : (
            <div className="rounded-3xl border border-gray-200 bg-white px-6 py-14 text-center">
              <h3 className="text-xl font-semibold text-[#183153]">
                Packages Are Temporarily Unavailable
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                ขออภัย ขณะนี้ไม่สามารถโหลดข้อมูลแพ็กเกจได้
                กรุณาเข้าชมอีกครั้งหรือติดต่อทีมงานเพื่อสอบถามรายละเอียด
              </p>

              <Link
                href="/packages"
                className="mt-6 inline-flex rounded-full bg-[#183153] px-7 py-3 font-semibold text-white transition hover:bg-[#24466D]"
              >
                Explore Packages
              </Link>
            </div>
          )}
        </div>

        {/* Bottom Note */}
        <p className="mt-8 text-center text-sm leading-7 text-gray-500">
          ต้องการบริการที่เหมาะกับพื้นที่ของคุณโดยเฉพาะ?
          <Link
            href="/contact"
            className="ml-1 font-semibold text-[#183153] underline decoration-[#D9B06D] underline-offset-4 hover:text-[#B88B45]"
          >
            ติดต่อเราได้เลย
          </Link>
        </p>
      </div>
    </section>
  );
}
