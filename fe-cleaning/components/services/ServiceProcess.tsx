import Container from "@/components/ui/Container";
import ProcessCard from "./ProcessCard";

interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  title: string;
  subtitle: string;
  items: ProcessItem[];
}

export default function ServiceProcess({
  title,
  subtitle,
  items,
}: ServiceProcessProps) {
  return (
    <section className="bg-white py-24">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[6px] text-accent">
            Our Process
          </p>

          <h2 className="mt-5 font-heading text-5xl text-primary">
            {title}
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            {subtitle}
          </p>

        </div>

        <div className="relative mt-20">

          {/* Desktop Line */}

          <div
            className="
              absolute
              left-0
              right-0
              top-10
              hidden
              h-1
              bg-primary/10
              lg:block
            "
          />

          <div className="grid gap-12 lg:grid-cols-5">

            {items.map((item) => (
              <ProcessCard
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
              />
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}