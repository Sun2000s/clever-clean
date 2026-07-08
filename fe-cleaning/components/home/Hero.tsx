import Container from "@/components/ui/Container";
import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";
import HeroStats from "./hero/HeroStats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">

      {/* Background */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />

      <Container>

        <div className="grid min-h-[90vh] items-center gap-16 py-16 lg:grid-cols-2 lg:py-24">

          <HeroContent />

          <HeroImage />

        </div>

        <HeroStats />

      </Container>

    </section>
  );
}