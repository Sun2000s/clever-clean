import Image from "next/image";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function ServiceHero({
  title,
  subtitle,
  image,
}: ServiceHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-4 uppercase tracking-[6px] text-accent">
              Clever Clean
            </p>

            <h1 className="font-heading text-5xl font-bold leading-tight text-white lg:text-7xl">
              {title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
              {subtitle}
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <button className="rounded-full bg-accent px-8 py-4 font-semibold text-primary transition hover:scale-105">
                Get Free Quote
              </button>

              <button className="rounded-full border border-white px-8 py-4 text-white transition hover:bg-white hover:text-primary">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}