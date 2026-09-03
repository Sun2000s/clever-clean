import Container from "@/components/ui/Container";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
}

export default function ServiceCTA({
  title,
  description,
  primaryButton,
  secondaryButton,
}: ServiceCTAProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-28">

      {/* Background Decoration */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="font-heading text-5xl text-white">
            {title}
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/80">
            {description}
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <Link
              href={primaryButton.href}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-accent
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                hover:scale-105
              "
            >
              {primaryButton.text}

              <HiArrowRight />
            </Link>

            <Link
              href={secondaryButton.href}
              className="
                rounded-full
                border
                border-white
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                hover:bg-white
                hover:text-primary
              "
            >
              {secondaryButton.text}
            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}