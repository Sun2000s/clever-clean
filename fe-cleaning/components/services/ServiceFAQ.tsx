import Container from "@/components/ui/Container";
import FAQItem from "./FAQItem";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title: string;
  subtitle: string;
  items: FAQ[];
}

export default function ServiceFAQ({
  title,
  subtitle,
  items,
}: ServiceFAQProps) {
  return (
    <section className="bg-secondary py-24">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[6px] text-accent">
            FAQ
          </p>

          <h2 className="mt-5 font-heading text-5xl text-primary">
            {title}
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            {subtitle}
          </p>

        </div>

        <div className="mx-auto mt-20 max-w-4xl space-y-6">

          {items.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}