import {
  HiSparkles,
  HiBeaker,
  HiShieldCheck,
  HiUsers,
  HiClock,
  HiHome,
  HiBuildingOffice2,
} from "react-icons/hi2";

export const deepCleaningService = {
  hero: {
    title: "Deep Cleaning",

    subtitle:
      "Professional deep cleaning services designed to remove hidden dirt, bacteria and allergens from every corner of your home or workplace.",

    image: "/images/services/service-sofa-cleaning.jpg",
  },

  intro: {
    title: "Premium Deep Cleaning Solutions",

    description:
      "Our deep cleaning service goes beyond everyday cleaning by targeting hard-to-reach areas, stubborn stains and hidden contaminants. Using professional equipment and advanced cleaning techniques, we restore a healthier, fresher and more hygienic environment.",

    image: "/images/services/service-sofa-cleaning.jpg",

    highlights: [
      "Professional Deep Cleaning Specialists",
      "Advanced Cleaning Equipment",
      "Safe & Eco-Friendly Products",
      "Attention to Every Detail",
    ],
  },

  included: {
    title: "What's Included",

    description:
      "Our deep cleaning service covers every critical area to ensure a cleaner, healthier and more sanitary environment.",

    items: [
      {
        icon: <HiHome />,
        title: "Complete Room Cleaning",

        description:
          "Deep cleaning of walls, ceilings, furniture, corners and hard-to-reach areas often missed during routine cleaning.",
      },

      {
        icon: <HiSparkles />,
        title: "Carpet & Upholstery",

        description:
          "Professional cleaning of carpets, sofas and upholstered furniture to remove stains, dust and odors.",
      },

      {
        icon: <HiBeaker />,
        title: "Kitchen Sanitization",

        description:
          "Detailed cleaning of cabinets, appliances, countertops and grease removal for a hygienic cooking space.",
      },

      {
        icon: <HiShieldCheck />,
        title: "Bathroom Disinfection",

        description:
          "Complete sanitization of toilets, showers, sinks, mirrors and high-touch surfaces using professional disinfectants.",
      },

      {
        icon: <HiUsers />,
        title: "Dust Mite Removal",

        description:
          "Specialized cleaning of mattresses, pillows and fabric surfaces to reduce allergens and dust mites.",
      },

      {
        icon: <HiBuildingOffice2 />,
        title: "Ozone Sterilization",

        description:
          "Optional ozone treatment to eliminate bacteria, viruses and unpleasant odors from indoor environments.",
      },
    ],
  },

  whyChoose: {
    title: "Why Choose Our Deep Cleaning Service",

    subtitle:
      "Our experienced team combines professional equipment, advanced techniques and meticulous attention to detail to deliver exceptional cleaning results.",

    items: [
      {
        icon: <HiUsers />,
        title: "Experienced Specialists",

        description:
          "Professionally trained cleaners with extensive experience in residential and commercial deep cleaning.",
      },

      {
        icon: <HiSparkles />,
        title: "Outstanding Results",

        description:
          "Every surface is cleaned thoroughly to remove dirt, stains and hidden contaminants for a noticeably fresher environment.",
      },

      {
        icon: <HiShieldCheck />,
        title: "Safe Cleaning Products",

        description:
          "Eco-friendly and professional-grade cleaning products that are safe for children, pets and the environment.",
      },

      {
        icon: <HiClock />,
        title: "Reliable Service",

        description:
          "Flexible scheduling, punctual arrival and consistent service quality you can depend on.",
      },
    ],
  },

  process: {
    title: "Our Deep Cleaning Process",

    subtitle:
      "Every deep cleaning project follows a structured process to ensure maximum cleanliness and complete customer satisfaction.",

    items: [
      {
        step: "01",
        title: "Site Inspection",

        description:
          "We assess the property and identify areas requiring intensive cleaning.",
      },

      {
        step: "02",
        title: "Cleaning Plan",

        description:
          "Our specialists prepare a customized deep cleaning plan based on your requirements.",
      },

      {
        step: "03",
        title: "Deep Cleaning",

        description:
          "Professional equipment and specialized techniques are used to clean every detail thoroughly.",
      },

      {
        step: "04",
        title: "Final Inspection",

        description:
          "Each cleaned area is inspected to ensure it meets our premium quality standards.",
      },

      {
        step: "05",
        title: "Customer Satisfaction",

        description:
          "We review the completed work with you to ensure every expectation has been met.",
      },
    ],
  },

  faq: {
    title: "Frequently Asked Questions",

    subtitle:
      "Find answers to the most common questions about our deep cleaning services.",

    items: [
      {
        question: "What is included in deep cleaning?",

        answer:
          "Deep cleaning covers detailed cleaning of every room, furniture, kitchens, bathrooms, hidden corners and hard-to-reach areas beyond routine cleaning.",
      },

      {
        question: "How often should deep cleaning be performed?",

        answer:
          "We recommend deep cleaning every 3–6 months depending on property usage and environmental conditions.",
      },

      {
        question: "Do you provide carpet and sofa cleaning?",

        answer:
          "Yes. Our deep cleaning service can include professional carpet, sofa and upholstery cleaning upon request.",
      },

      {
        question: "Are the cleaning products safe?",

        answer:
          "Absolutely. We only use high-quality products that are effective, eco-friendly and safe for families, pets and employees.",
      },
    ],
  },

  cta: {
    title: "Need a Professional Deep Cleaning?",

    description:
      "Let Clever Clean restore your property with our comprehensive deep cleaning service. Contact us today for a free consultation and quotation.",

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