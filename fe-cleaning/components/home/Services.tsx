import Container from "@/components/ui/Container";
import ServiceCategoryCard from "./services/ServiceCategoryCard";

import {
  HiHome,
  HiBuildingOffice2,
  HiSparkles,
  HiSun,
} from "react-icons/hi2";

const serviceCategories = [
  {
    image: "/images/services/service-house-cleaning.jpg",

    href: "/services/residential",

    icon: <HiHome />,

    title: "Residential Cleaning",

    description:
      "Professional cleaning solutions designed to keep your home fresh, hygienic and comfortable every day.",

    services: [
      "House Cleaning",
      "Condominium Cleaning",
      "Move-in / Move-out Cleaning",
    ],
  },

  {
    image: "/images/services/service-office-cleaning.jpg",
    href: "/services/office-commercial",

    icon: <HiBuildingOffice2 />,

    title: "Office & Commercial",

    description:
      "Reliable cleaning services for offices, commercial buildings and contract cleaning projects.",

    services: [
      "Office Cleaning",
      "Commercial Cleaning",
      "Contract Cleaning",
    ],
  },

  {
    image: "/images/services/service-sofa-cleaning.jpg",
    href: "/services/deep-cleaning",

    icon: <HiSparkles />,

    title: "Deep Cleaning",

    description:
      "Specialized cleaning services using professional equipment for healthier living spaces.",

    services: [
      "Carpet Cleaning",
      "Sofa Cleaning",
      "Dust Mite Removal",
      "Ozone Sterilization",
    ],
  },

  {
    image: "/images/services/service-lawn-care.jpg",
    href: "/services/outdoor-maintenance",

    icon: <HiSun />,

    title: "Outdoor Maintenance",

    description:
      "Professional outdoor cleaning and landscape maintenance services for homes and businesses.",

    services: [
      "Grass Cutting",
      "Garden Maintenance",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28"
    >
      <Container>

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[6px] text-accent">
            OUR SERVICES
          </p>

          <h2 className="mt-5 font-heading text-5xl font-bold leading-tight text-primary lg:text-6xl">
            Complete Cleaning Solutions
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            From residential homes to commercial buildings,
            Clever Clean provides complete cleaning and maintenance
            solutions — all in one place.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {serviceCategories.map((category) => (
            <ServiceCategoryCard
                key={category.title}
                image={category.image}
                icon={category.icon}
                title={category.title}
                description={category.description}
                services={category.services}
                href={category.href}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}