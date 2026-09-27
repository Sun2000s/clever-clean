import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "Residential Cleaning",
    category: "บ้านพักอาศัย",
    location: "Residential Property",
    description:
      "ผลงานการดูแลทำความสะอาดบ้านพักอาศัยแบบครบพื้นที่ โดยเน้นความสะอาด ความเป็นระเบียบ และรายละเอียดในทุกจุด",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
    services: [
      "ทำความสะอาดพื้นที่ทั่วไป",
      "ทำความสะอาดห้องน้ำ",
      "ทำความสะอาดห้องครัว",
      "ดูแลพื้นและพื้นผิวต่าง ๆ",
      "เก็บรายละเอียดพื้นที่โดยรวม",
    ],
  },
  {
    id: 2,
    title: "Office & Commercial Cleaning",
    category: "สำนักงานและธุรกิจ",
    location: "Commercial Office",
    description:
      "ดูแลความสะอาดพื้นที่สำนักงานเพื่อสร้างสภาพแวดล้อมที่สะอาด เป็นระเบียบ และเหมาะสำหรับการทำงาน",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
    services: [
      "ทำความสะอาดสำนักงาน",
      "ทำความสะอาดพื้นที่ส่วนกลาง",
      "ดูแลห้องประชุม",
      "ดูแลพื้นที่รับรอง",
      "ทำความสะอาดพื้นและกระจก",
    ],
  },
  {
    id: 3,
    title: "Deep Cleaning",
    category: "ทำความสะอาดครั้งใหญ่",
    location: "Residential Property",
    description:
      "งานทำความสะอาดเชิงลึกสำหรับพื้นที่ที่ต้องการการดูแลเป็นพิเศษ โดยเน้นการเก็บรายละเอียดในจุดที่ทำความสะอาดทั่วไปอาจเข้าไม่ถึง",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
    services: [
      "ทำความสะอาดเชิงลึก",
      "ทำความสะอาดซอกมุม",
      "ดูแลห้องน้ำและห้องครัว",
      "ทำความสะอาดพื้นผิว",
      "เก็บรายละเอียดหลังทำความสะอาด",
    ],
  },
  {
    id: 4,
    title: "Outdoor Maintenance",
    category: "พื้นที่ภายนอก",
    location: "Outdoor Area",
    description:
      "ดูแลพื้นที่ภายนอกให้สะอาด เป็นระเบียบ และพร้อมใช้งาน ทั้งพื้นที่ทางเดิน พื้นที่รอบอาคาร และพื้นที่ใช้งานภายนอก",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    services: [
      "ทำความสะอาดพื้นที่ภายนอก",
      "ดูแลทางเดิน",
      "ดูแลพื้นที่รอบอาคาร",
      "เก็บเศษใบไม้และสิ่งสกปรก",
      "จัดระเบียบพื้นที่",
    ],
  },
];

interface PageProps {
  params: Promise<{
    portfolioId: string;
  }>;
}

export default async function PortfolioDetailPage({
  params,
}: PageProps) {
  const { portfolioId } = await params;

  const portfolio = portfolioItems.find(
    (item) => String(item.id) === portfolioId
  );

  if (!portfolio) {
    return (
      <main className="min-h-screen bg-[#F9F9F7]">
        <section className="mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9B06D]">
            Portfolio
          </p>

          <h1 className="mt-4 font-serif text-4xl text-[#183153]">
            ไม่พบผลงาน
          </h1>

          <p className="mt-5 text-gray-500">
            ไม่พบข้อมูลผลงานที่คุณกำลังค้นหา
          </p>

          <Link
            href="/portfolio"
            className="mt-8 inline-flex rounded-full bg-[#183153] px-7 py-3.5 font-semibold text-white transition hover:bg-[#183153]/90"
          >
            กลับไปหน้าผลงาน
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F9F9F7]">
      {/* Back */}
      <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#183153] transition hover:text-[#D9B06D]"
        >
          <span>←</span>
          กลับไปหน้าผลงาน
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <img
              src={portfolio.image}
              alt={portfolio.title}
              className="aspect-[16/10] h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9B06D]">
              {portfolio.category}
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-tight text-[#183153] md:text-5xl">
              {portfolio.title}
            </h1>

            <div className="mt-6 h-px w-20 bg-[#D9B06D]" />

            <p className="mt-6 text-base leading-8 text-gray-600">
              {portfolio.description}
            </p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                Project Type
              </p>

              <p className="mt-2 font-medium text-[#222222]">
                {portfolio.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9B06D]">
              Service Details
            </p>

            <h2 className="mt-3 font-serif text-3xl text-[#183153] md:text-4xl">
              งานที่เราดูแล
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.services.map((service, index) => (
              <div
                key={service}
                className="rounded-xl border border-black/5 bg-[#F9F9F7] p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#183153] text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="pt-1 text-sm font-medium leading-6 text-[#222222]">
                    {service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Placeholder */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9B06D]">
            Before & After
          </p>

          <h2 className="mt-3 font-serif text-3xl text-[#183153] md:text-4xl">
            การเปลี่ยนแปลงที่เห็นได้ชัด
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500">
            ส่วนนี้เราจะนำรูป Before & After จริงของผลงานมาแสดงในขั้นตอนถัดไป
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="flex aspect-[16/10] items-center justify-center bg-gray-100">
              <span className="text-sm font-medium text-gray-400">
                Before Image
              </span>
            </div>

            <div className="p-5">
              <p className="text-sm font-semibold text-[#183153]">
                Before
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="flex aspect-[16/10] items-center justify-center bg-gray-100">
              <span className="text-sm font-medium text-gray-400">
                After Image
              </span>
            </div>

            <div className="p-5">
              <p className="text-sm font-semibold text-[#183153]">
                After
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#183153]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9B06D]">
            Clever Clean
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl">
            ต้องการให้พื้นที่ของคุณสะอาดแบบนี้?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70">
            ติดต่อเราเพื่อพูดคุยเกี่ยวกับพื้นที่ของคุณ
            และเลือกบริการที่เหมาะสมกับความต้องการ
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#D9B06D] px-8 py-4 text-sm font-semibold text-[#183153] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            ติดต่อ Clever Clean
          </Link>
        </div>
      </section>
    </main>
  );
}