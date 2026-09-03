import PackageList from "@/components/package/PackageList";
import { PackageApi, PackageType } from "@/types/package";

async function getPackages(): Promise<PackageApi[]> {
  const res = await fetch("http://localhost:8080/packages", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch packages");
  }

  const json = await res.json();

  console.log("PACKAGES API:", json);
  console.log("PACKAGES DATA:", json.data);

  return json.data ?? [];
}

export default async function PackagesPage() {
  const packages = await getPackages();

  console.log("PACKAGES BEFORE MAP:", packages);

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

  console.log("PACKAGES AFTER MAP:", mapped);

  return (
    <main className="bg-[#F9F9F7]">
      {/* Page Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-28">
          <p className="text-sm font-medium uppercase tracking-[6px] text-accent">
            Our Packages
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl font-heading text-5xl leading-tight text-primary md:text-6xl">
            Cleaning Packages Designed
            <br className="hidden md:block" />
            for Your Space
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            เลือกแพ็กเกจบริการทำความสะอาดที่เหมาะกับบ้าน
            สำนักงาน และพื้นที่ของคุณ
            พร้อมทีมงานมืออาชีพที่ใส่ใจในทุกรายละเอียด
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[5px] text-accent">
                Choose Your Plan
              </p>

              <h2 className="mt-3 font-heading text-4xl text-primary md:text-5xl">
                Our Cleaning Packages
              </h2>
            </div>

            <p className="max-w-md leading-7 text-gray-500 md:text-right">
              ทุกแพ็กเกจสามารถสอบถามรายละเอียดเพิ่มเติม
              เพื่อเลือกบริการที่เหมาะกับความต้องการของคุณ
            </p>
          </div>

          <PackageList packages={mapped} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[6px] text-accent">
            Need Something More?
          </p>

          <h2 className="mt-5 font-heading text-4xl leading-tight text-white md:text-5xl">
            Need a Customized Cleaning Plan?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            หากพื้นที่หรือความต้องการของคุณไม่ตรงกับแพ็กเกจที่มี
            สามารถติดต่อทีม Clever Clean
            เพื่อออกแบบบริการที่เหมาะกับคุณได้
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 font-semibold text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              ติดต่อเรา
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}