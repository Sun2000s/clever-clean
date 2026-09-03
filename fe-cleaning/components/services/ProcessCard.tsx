interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
}

export default function ProcessCard({
  step,
  title,
  description,
}: ProcessCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center">

      {/* Number */}

      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-primary
          text-2xl
          font-bold
          text-white
          shadow-lg
        "
      >
        {step}
      </div>

      <h3 className="mt-6 text-xl font-bold text-primary">
        {title}
      </h3>

      <p className="mt-3 max-w-xs leading-7 text-gray-600">
        {description}
      </p>

    </div>
  );
}