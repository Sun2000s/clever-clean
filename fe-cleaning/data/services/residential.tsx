import {
  HiHome,
  HiSparkles,
  HiBeaker,
  HiBuildingOffice2,
  HiUsers,
  HiShieldCheck,
  HiClock,

} from "react-icons/hi2";

export const residentialService = {
  hero: {
    title: "Residential Cleaning",

    subtitle:
      "Professional residential cleaning services for houses, condominiums and apartments. We create healthier, cleaner and more comfortable living spaces.",

    image: "/images/services/service-house-cleaning.jpg",
  },

  intro: {
    title: "Premium Residential Cleaning",

    description:
      "Our experienced team provides comprehensive residential cleaning services using professional equipment and eco-friendly products. Every room is cleaned with meticulous attention to detail, ensuring a spotless and healthy environment for your family.",

    image: "/images/services/service-house-cleaning.jpg",

    highlights: [
      "Experienced Professional Staff",
      "Eco-Friendly Cleaning Products",
      "Flexible Scheduling",
      "Attention to Every Detail",
    ],
  },

  included: {
    title: "What's Included",

    description:
      "Every residential cleaning service is carried out according to professional standards and customized to suit your home.",

    items: [
      {
        icon: <HiHome />,
        title: "Living Room",

        description:
          "Dusting furniture, vacuuming carpets and cleaning glass surfaces.",
      },

      {
        icon: <HiSparkles />,
        title: "Kitchen",

        description:
          "Cleaning countertops, sinks, cabinets and appliance exteriors.",
      },

      {
        icon: <HiBeaker />,
        title: "Bathroom",

        description:
          "Sanitizing toilets, showers, mirrors and wash basins.",
      },

      {
        icon: <HiBuildingOffice2 />,
        title: "Bedroom",

        description:
          "Dust removal, furniture cleaning and complete floor care.",
      },
    ],
  },

  whyChoose: {
    title: "Why Homeowners Choose Clever Clean",

    subtitle:
      "We deliver premium residential cleaning services with professional standards, trusted staff and attention to every detail.",

    items: [
      {
        icon: <HiUsers />,
        title: "Experienced Team",

        description:
          "Our professional cleaners are trained to deliver consistent quality in every visit.",
      },

      {
        icon: <HiSparkles />,
        title: "Attention to Detail",

        description:
          "Every room is cleaned carefully to ensure a spotless and comfortable living environment.",
      },

      {
        icon: <HiShieldCheck />,
        title: "Safe Cleaning Products",

        description:
          "We use environmentally friendly products that are safe for children and pets.",
      },

      {
        icon: <HiClock />,
        title: "Flexible Scheduling",

        description:
          "Book cleaning services at a time that fits your lifestyle and schedule.",
      },
    ],
  },

  process: {
    title: "Our Residential Cleaning Process",

    subtitle:
      "From your first inquiry to the final inspection, every step is carefully managed to ensure exceptional cleaning quality and complete customer satisfaction.",

    items: [
      {
        step: "01",
        title: "Site Assessment",

        description:
          "Our team reviews your property and prepares the most suitable cleaning plan.",
      },

      {
        step: "02",
        title: "Book Service",

        description:
          "Choose your preferred date and tell us about your cleaning requirements.",
      },

      {
        step: "03",
        title: "Professional Cleaning",

        description:
          "Experienced cleaners perform the service using professional equipment and safe products.",
      },

      {
        step: "04",
        title: "Quality Inspection",

        description:
          "Every area is inspected carefully to ensure it meets our premium quality standards.",
      },

      {
        step: "05",
        title: "Enjoy Your Home",

        description:
          "Relax and enjoy a fresh, clean and healthier living environment.",
      },
    ],
  },

  faq: {
    title: "Frequently Asked Questions",

    subtitle:
      "Here are answers to the most common questions about our residential cleaning service.",

    items: [
      {
        question: "How long does residential cleaning take?",

        answer:
          "The duration depends on the size and condition of your property. Most homes take between 2–6 hours.",
      },

      {
        question: "Do you provide cleaning equipment?",

        answer:
          "Yes. Our team brings all professional equipment and eco-friendly cleaning products.",
      },

      {
        question: "Are your cleaning products safe?",

        answer:
          "Absolutely. We use high-quality products that are safe for children, pets and the environment.",
      },

      {
        question: "Can I schedule recurring cleaning?",

        answer:
          "Yes. We offer weekly, bi-weekly and monthly cleaning plans to fit your needs.",
      },
    ],
  },

  cta: {
    title: "Ready for a Cleaner Home?",

    description:
      "Experience professional residential cleaning tailored to your needs. Contact Clever Clean today and let our experts transform your home into a cleaner, healthier and more comfortable living space.",

    primaryButton: {
      text: "Get Free Quote",
      href: "/contact",
    },

    secondaryButton: {
      text: "View All Services",
      href: "/services",
    },
  },

  
};