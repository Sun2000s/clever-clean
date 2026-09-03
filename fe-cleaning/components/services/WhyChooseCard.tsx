import { ReactNode } from "react";

interface WhyChooseCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function WhyChooseCard({
  icon,
  title,
  description,
}: WhyChooseCardProps) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-gray-100
        bg-white
        p-8
        shadow-lg
        transition-all
        duration-500
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
          transition-all
          duration-300
          group-hover:bg-primary
          group-hover:text-white
        "
      >
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-primary">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
}