const stats = [
  {
    number: "1000+",
    label: "Happy Clients",
  },
  {
    number: "35+",
    label: "Years Experience",
  },
  {
    number: "24/7",
    label: "Customer Support",
  },
];

export default function HeroStats() {
  return (
    <section className="mt-16">
      <div className="grid grid-cols-3 gap-6">

        {stats.map((item) => (
          <div
            key={item.label}
            className="
              rounded-3xl
              bg-white
              p-8
              text-center
              shadow-lg
              transition
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            <h2 className="text-4xl font-bold text-primary">
              {item.number}
            </h2>

            <p className="mt-3 text-gray-500">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}