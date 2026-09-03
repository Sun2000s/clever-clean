import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi2";

interface ServiceIntroProps {
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export default function ServiceIntro({
  title,
  description,
  image,
  highlights,
}: ServiceIntroProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Image */}

        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          <Image
            src={image}
            alt={title}
            width={700}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}

        <div>

          <p className="font-semibold uppercase tracking-[6px] text-accent">
            About This Service
          </p>

          <h2 className="mt-5 font-heading text-5xl text-primary">
            {title}
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            {description}
          </p>

          <div className="mt-10 space-y-5">

            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <HiCheckCircle className="text-2xl text-success" />

                <span className="text-lg">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}