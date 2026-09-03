/*
import { ReactNode } from "react";
import IncludedCard from "./IncludedCard";

interface Item {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ServiceIncludedProps {
  title: string;
  description: string;
  items: Item[];
}
export default function ServiceIncluded({
  title,
  description,
  items,
}: ServiceIncludedProps) {
  console.log(items);

  return (
    <div>
      <h1>{title}</h1>

      {items.map((item) => (
        <div key={item.title}>{item.title}</div>
      ))}
    </div>
  );
}
  */

import { ReactNode } from "react";
import IncludedCard from "./IncludedCard";

interface Item {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ServiceIncludedProps {
  title: string;
  description: string;
  items: Item[];
}

export default function ServiceIncluded({
  title,
  description,
  items,
}: ServiceIncludedProps) {
  return (
    <section className="bg-secondary py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="uppercase tracking-[6px] text-accent">
            Included
          </p>

          <h2 className="mt-4 font-heading text-5xl text-primary">
            {title}
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            {description}
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {items.map((item) => (
            <IncludedCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
  