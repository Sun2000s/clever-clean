import { ReactNode } from "react";

interface IncludedCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function IncludedCard({
  icon,
  title,
  description,
}: IncludedCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-gray-100
        bg-white
        p-8
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-primary/10
          text-3xl
          text-primary
        "
      >
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-primary">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
}