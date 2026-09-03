import Container from "@/components/ui/Container";
import WhyChooseCard from "./WhyChooseCard";

import {
  HiShieldCheck,
  HiSparkles,
  HiUsers,
  HiClock,
} from "react-icons/hi2";

interface Item {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyChooseServiceProps {
  title: string;
  subtitle: string;
  items: Item[];
}

const defaultItems = [
  {
    icon: <HiUsers />,
    title: "Professional Team",
    description:
      "Highly trained cleaning professionals delivering consistent and reliable service.",
  },
  {
    icon: <HiSparkles />,
    title: "Premium Equipment",
    description:
      "Professional-grade tools and modern cleaning techniques for outstanding results.",
  },
  {
    icon: <HiShieldCheck />,
    title: "Safe Products",
    description:
      "Eco-friendly cleaning products that are safe for children, pets and the environment.",
  },
  {
    icon: <HiClock />,
    title: "Reliable Schedule",
    description:
      "Flexible appointments with punctual arrival and dependable service every time.",
  },
];

export default function WhyChooseService({
  title,
  subtitle,
  items = defaultItems,
}: WhyChooseServiceProps) {
  return (
    <section className="bg-secondary py-24">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[6px] text-accent">
            Why Choose Us
          </p>

          <h2 className="mt-5 font-heading text-5xl text-primary">
            {title}
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            {subtitle}
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {items.map((item) => (
            <WhyChooseCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}