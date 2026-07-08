import Image from "next/image";
import { ReactNode } from "react";
import { HiArrowRight } from "react-icons/hi2";
import Link from "next/link";

interface ServiceCategoryCardProps {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
  services: string[];
  href: string;
}

export default function ServiceCategoryCard({
  image,
  icon,
  title,
  description,
  services,
  href,
}: ServiceCategoryCardProps){
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}

      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}

      <div className="p-8">

        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary transition group-hover:bg-primary group-hover:text-white">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-primary">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          {description}
        </p>

        <div className="mt-8 space-y-3">
          {services.map((service) => (
            <div
              key={service}
              className="flex items-center gap-3"
            >
              <div className="h-2 w-2 rounded-full bg-accent" />

              <span>{service}</span>
            </div>
          ))}
        </div>

        <Link
            href={href}
            className="
                mt-8
                inline-flex
                items-center
                gap-2
                font-semibold
                text-primary
                transition-all
                group-hover:gap-4
            "
            >
            Learn More
            <HiArrowRight />
            </Link>

      </div>

    </div>
  );
}