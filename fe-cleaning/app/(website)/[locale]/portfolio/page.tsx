import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "Residential Cleaning",
    category: "บ้านพักอาศัย",
    description:
      "ดูแลความสะอาดบ้านพักอาศัยอย่างละเอียด พร้อมใส่ใจทุกพื้นที่ของบ้าน",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Office & Commercial Cleaning",
    category: "สำนักงานและธุรกิจ",
    description:
      "สร้างสภาพแวดล้อมการทำงานที่สะอาด เป็นระเบียบ และดูเป็นมืออาชีพ",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Deep Cleaning",
    category: "ทำความสะอาดครั้งใหญ่",
    description:
      "ทำความสะอาดเชิงลึกสำหรับพื้นที่ที่ต้องการการดูแลเป็นพิเศษ",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Outdoor Maintenance",
    category: "พื้นที่ภายนอก",
    description:
      "ดูแลพื้นที่ภายนอกให้สะอาด สวยงาม และพร้อมใช้งานอยู่เสมอ",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F7]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#183153]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#D9B06D]">
              Our Portfolio
            </p>

            <h1 className="font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              ผลงานของเรา
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              ตัวอย่างผลงานการให้บริการทำความสะอาดของ Clever Clean
              ที่เราตั้งใจดูแลทุกพื้นที่ให้สะอาด เป็นระเบียบ และน่าใช้งาน
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D9B06D]">
              Selected Works
            </p>

            <h2 className="font-serif text-3xl text-[#222222] md:text-4xl">
              ผลงานที่เราใส่ใจ
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-gray-500 md:text-right">
            เราดูแลทั้งบ้านพักอาศัย สำนักงาน พื้นที่เชิงพาณิชย์
            งานทำความสะอาดเชิงลึก และพื้นที่ภายนอก
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#183153]">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-serif text-2xl text-[#183153]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {item.description}
                </p>

                <Link
                  href={`/portfolio/${item.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#183153] transition-colors hover:text-[#D9B06D]"
                >
                  ดูรายละเอียดผลงาน
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9B06D]">
            Need Cleaning Service?
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl text-[#183153] md:text-4xl">
            ให้เราเป็นผู้ดูแลความสะอาดของคุณ
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
            ติดต่อ Clever Clean เพื่อพูดคุยเกี่ยวกับพื้นที่
            และบริการที่เหมาะกับความต้องการของคุณ
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#183153] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#183153]/90 hover:shadow-lg"
          >
            ติดต่อเรา
          </Link>
        </div>
      </section>
    </main>
  );
}