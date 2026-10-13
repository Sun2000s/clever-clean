
import Container from "@/components/ui/Container";
import {
  HiOutlineBuildingOffice2,
  HiOutlineSparkles,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";

const reasons = [
  {
    icon: HiOutlineBuildingOffice2,
    number: "01",
    title: "Solutions for Every Space",
    description:
      "ดูแลพื้นที่ได้หลากหลาย ทั้งบ้าน คอนโด สำนักงาน และอาคารเชิงพาณิชย์",
  },
  {
    icon: HiOutlineSparkles,
    number: "02",
    title: "Attention to Detail",
    description:
      "ให้ความสำคัญกับรายละเอียดและความเรียบร้อย เพื่อให้พื้นที่สะอาดน่าใช้งาน",
  },
  {
    icon: HiOutlineClipboardDocumentCheck,
    number: "03",
    title: "Service That Fits You",
    description:
      "เลือกประเภทบริการให้เหมาะกับพื้นที่และความต้องการของลูกค้าได้",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[5px] text-accent">
              WHY CLEVER CLEAN
            </p>

            <h2 className="mt-5 font-heading text-4xl font-bold leading-tight text-primary md:text-5xl">
              A Cleaner Space.
              <br />
              A Better Everyday.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600">
              ทุกพื้นที่มีความต้องการแตกต่างกัน Clever Clean
              จึงมุ่งเน้นการให้บริการทำความสะอาดที่เหมาะสม
              พร้อมใส่ใจคุณภาพและประสบการณ์ของลูกค้า
              ตั้งแต่การสอบถามไปจนถึงการให้บริการ
            </p>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-3 font-semibold text-primary transition-colors hover:text-[#B88B45]"
            >
              Explore Our Services
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="space-y-5">
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group flex gap-5 rounded-2xl border border-gray-100 bg-[#F9F9F7] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9B06D]/50 hover:shadow-lg md:gap-7 md:p-8"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-2xl text-accent transition-colors group-hover:bg-accent group-hover:text-primary">
                    <Icon />
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[3px] text-accent">
                      {item.number}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-primary md:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
