import {
  HiHome,
  HiSparkles,
  HiBeaker,
  HiBuildingOffice2,
  HiUsers,
  HiShieldCheck,
  HiClock,

} from "react-icons/hi2";

export const officeCommercialService = {
  hero: {
    title: "Office & Commercial Cleaning",

    subtitle:
      "Professional cleaning solutions for offices, retail stores, restaurants and commercial properties. Maintain a clean, healthy and productive workplace with Clever Clean.",

    image: "/images/services/service-office-cleaning.jpg",
  },

  intro: {
    title: "Professional Commercial Cleaning",

    description:
      "We provide reliable office and commercial cleaning services tailored to businesses of every size. From daily maintenance to scheduled deep cleaning, our experienced team ensures every workspace remains clean, hygienic and welcoming.",

    image: "/images/services/service-office-cleaning.jpg",

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
      "Comprehensive commercial cleaning solutions designed to maintain professional business environments.",

    items: [
      {
      icon: <HiBuildingOffice2 />,
      title: "Office Areas",

        description:
          "Cleaning workstations, desks, furniture, glass partitions and flooring to maintain a productive workspace.",
      },

      {
        icon: <HiUsers />,
        title: "Meeting Rooms",

        description:
          "Sanitizing meeting tables, chairs, presentation areas and shared equipment for every business meeting.",
      },

      {
        icon: <HiSparkles />,
        title: "Reception & Lobby",

        description:
          "Keeping reception counters, waiting areas and entrance spaces spotless to create a great first impression.",
      },

      {
        icon: <HiBeaker />,
        title: "Pantry & Kitchen",

        description:
          "Cleaning countertops, sinks, microwaves, refrigerators and common kitchen facilities for a hygienic break area.",
      },

      {
        icon: <HiClock />,
        title: "Common Areas",

        description:
          "Routine cleaning of corridors, elevators, stairways and shared spaces to keep your workplace looking professional.",

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
    title: "Our Commercial Cleaning Process",

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
    title: "Keep Your Workplace Spotless",

    description:
      "Partner with Clever Clean for reliable commercial cleaning services that create healthier and more productive workplaces.",

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