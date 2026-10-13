import Link from "next/link";

const contactItems = [
  {
    number: "01",
    title: "LINE Official",
    subtitle: "สอบถามบริการและจองคิว",
    value: "@crclean",
    href: "https://line.me/R/ti/p/@crclean",
    action: "แชทผ่าน LINE",
    external: true,
  },
  {
    number: "02",
    title: "TikTok",
    subtitle: "ติดตามผลงานและวิดีโอของเรา",
    value: "@crcleverclean",
    href: "https://www.tiktok.com/@crcleverclean",
    action: "ดู TikTok",
    external: true,
  },
  {
    number: "03",
    title: "Facebook",
    subtitle: "ติดตามข่าวสารและสอบถามข้อมูล",
    value: "ทำความสะอาดเชียงราย Clever Clean",
    href: "https://www.facebook.com/search/top?q=%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%94%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2%20Clever%20Clean",
    action: "ค้นหา Facebook",
    external: true,
  },
];

const phoneNumbers = [
  {
    name: "คุณแตง",
    number: "0851078396",
    href: "tel:0851078396",
  },
  {
    name: "คุณชิน",
    number: "0908916662",
    href: "tel:0908916662",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#183153]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#D9B06D]/10 blur-3xl" />
        <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D9B06D]">
            Contact Clever Clean
          </p>

          <h1 className="mt-5 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            ติดต่อเรา
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            ยินดีให้คำปรึกษาเกี่ยวกับบริการทำความสะอาด
            ติดต่อ Clever Clean ผ่านช่องทางที่คุณสะดวก
            หรือจองคิวบริการผ่าน LINE ได้โดยตรง
          </p>
        </div>
      </section>

      {/* Contact information */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B88D4B]">
            Get In Touch
          </p>

          <h2 className="mt-4 font-serif text-3xl text-[#183153] md:text-4xl">
            เราพร้อมดูแลคุณ
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-500 md:text-base">
            เลือกช่องทางติดต่อที่สะดวก
            ทีมงานของเราพร้อมให้ข้อมูลและประสานงานบริการ
          </p>
        </div>

        {/* Social channels */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item) => (
            <article
              key={item.number}
              className="group flex flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-[#B88D4B]">
                  {item.number}
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#183153]/5 text-lg font-semibold text-[#183153] transition-colors group-hover:bg-[#183153] group-hover:text-white">
                  ↗
                </span>
              </div>

              <h3 className="mt-8 font-serif text-2xl text-[#183153]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {item.subtitle}
              </p>

              <p className="mt-6 min-h-12 break-words text-base font-semibold leading-6 text-[#222222]">
                {item.value}
              </p>

              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-[#183153] px-5 py-3 text-sm font-semibold text-[#183153] transition-all duration-300 hover:bg-[#183153] hover:text-white"
              >
                {item.action}
                <span className="ml-2">↗</span>
              </a>
            </article>
          ))}
        </div>

        {/* Phone numbers */}
        <div className="mt-8 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B88D4B]">
                Call Us
              </p>

              <h2 className="mt-3 font-serif text-2xl text-[#183153] md:text-3xl">
                ติดต่อทางโทรศัพท์
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                สามารถโทรสอบถามรายละเอียดบริการได้โดยตรง
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {phoneNumbers.map((phone) => (
                <a
                  key={phone.number}
                  href={phone.href}
                  className="rounded-xl border border-black/5 bg-[#F9F9F7] p-6 transition-all duration-300 hover:border-[#D9B06D] hover:shadow-md"
                >
                  <p className="text-sm text-gray-500">{phone.name}</p>

                  <p className="mt-2 text-xl font-semibold tracking-wide text-[#183153]">
                    {phone.number}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-[#B88D4B]">
                    โทรออก <span aria-hidden="true">→</span>
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#183153]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9B06D]">
            Booking & Consultation
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl">
            ต้องการจองบริการทำความสะอาด?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            ติดต่อทีมงานผ่าน LINE เพื่อสอบถามรายละเอียด
            และประสานงานการจองคิวบริการ
          </p>

          <a
            href="https://line.me/R/ti/p/@crclean"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-[#D9B06D] px-9 py-4 text-sm font-semibold text-[#183153] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Booking ผ่าน LINE
            <span className="ml-2">↗</span>
          </a>

          <p className="mt-5 text-sm text-white/60">
            LINE ID: @crclean
          </p>
        </div>
      </section>
    </div>
  );
}