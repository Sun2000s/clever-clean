
import Link from "next/link";

const LINE_URL = "https://line.me/R/ti/p/@crclean";

export default function ContactCTA() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-3xl bg-[#F9F9F7] p-8 md:flex-row md:items-center md:p-12 lg:p-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B88D4B]">
            LET&apos;S TALK
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#183153] md:text-5xl">
            Ready for a Cleaner Space?
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600">
            ติดต่อ Clever Clean เพื่อสอบถามบริการ
            ดูรายละเอียดแพ็กเกจ และนัดหมายทำความสะอาด
            ผ่านช่องทางที่คุณสะดวก
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-4 sm:w-auto sm:flex-row md:flex-col">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#183153] px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#24466D]"
          >
            Booking ผ่าน LINE <span className="ml-3">↗</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#183153]/20 px-8 py-4 font-semibold text-[#183153] transition hover:border-[#D9B06D] hover:bg-white"
          >
            ช่องทางติดต่อทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
}
