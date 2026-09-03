import {
  HiSparkles,
  HiBeaker,
  HiShieldCheck,
  HiUsers,
  HiClock,
  HiHome,
  HiBuildingOffice2,
} from "react-icons/hi2";

export const outdoorMaintenanceService = {
  hero: {
    title: "Outdoor Maintenance",

    subtitle:
      "Professional outdoor maintenance services designed to keep gardens, lawns and exterior spaces clean, attractive and well maintained all year round.",

    image: "/images/services/service-lawn-care.jpg",
  },

  intro: {
    title: "Professional Outdoor Maintenance",

    description:
      "A beautiful outdoor environment creates a positive first impression for homes and businesses. Our experienced team provides comprehensive outdoor maintenance services including lawn care, garden maintenance and exterior cleaning using professional equipment.",

    image: "/images/services/service-lawn-care.jpg",

    highlights: [
      "Professional Lawn Care",
      "Garden Maintenance",
      "Exterior Cleaning",
      "Reliable Scheduled Service",
    ],
  },

  included: {
    title: "What's Included",

    description:
      "Our outdoor maintenance service is tailored to keep every exterior area clean, healthy and visually appealing.",

    items: [
      {
        icon: <HiHome />,
        title: "Lawn Mowing",

        description:
          "Regular grass cutting with professional equipment to maintain a neat and healthy lawn.",
      },

      {
        icon: <HiSparkles />,
        title: "Garden Maintenance",

        description:
          "Trimming shrubs, removing weeds and maintaining flower beds for beautiful landscapes.",
      },

      {
        icon: <HiBuildingOffice2 />,
        title: "Outdoor Area Cleaning",

        description:
          "Cleaning patios, terraces and outdoor living spaces to remove dirt, leaves and debris.",
      },

      {
        icon: <HiBeaker />,
        title: "Pressure Washing",

        description:
          "High-pressure cleaning for driveways, sidewalks, walls and exterior surfaces.",
      },

      {
        icon: <HiShieldCheck />,
        title: "Landscape Care",

        description:
          "Routine maintenance to improve the appearance and health of outdoor landscapes.",
      },

      {
        icon: <HiUsers />,
        title: "Seasonal Maintenance",

        description:
          "Customized maintenance plans to keep outdoor spaces looking their best throughout every season.",
      },
    ],
  },

  whyChoose: {
    title: "Why Choose Clever Clean",

    subtitle:
      "We combine professional landscaping experience with reliable maintenance services to keep your outdoor spaces clean, safe and attractive.",

    items: [
      {
        icon: <HiUsers />,
        title: "Experienced Team",

        description:
          "Our skilled outdoor maintenance specialists deliver consistent and reliable service every visit.",
      },

      {
        icon: <HiSparkles />,
        title: "Professional Equipment",

        description:
          "We use commercial-grade equipment to achieve efficient and high-quality results.",
      },

      {
        icon: <HiShieldCheck />,
        title: "Attention to Detail",

        description:
          "Every lawn, garden and outdoor surface receives careful maintenance and inspection.",
      },

      {
        icon: <HiClock />,
        title: "Flexible Scheduling",

        description:
          "Choose one-time or recurring maintenance plans that fit your schedule.",
      },
    ],
  },

  process: {
    title: "Our Outdoor Maintenance Process",

    subtitle:
      "Every maintenance project follows a structured process to ensure excellent results and customer satisfaction.",

    items: [
      {
        step: "01",
        title: "Site Inspection",

        description:
          "We inspect your outdoor area and identify the required maintenance tasks.",
      },

      {
        step: "02",
        title: "Maintenance Planning",

        description:
          "Our team prepares the most suitable maintenance plan for your property.",
      },

      {
        step: "03",
        title: "Professional Service",

        description:
          "Lawn care, trimming, cleaning and maintenance are completed using professional equipment.",
      },

      {
        step: "04",
        title: "Quality Inspection",

        description:
          "Every completed area is carefully inspected to ensure premium quality standards.",
      },

      {
        step: "05",
        title: "Enjoy Your Outdoor Space",

        description:
          "Relax and enjoy a clean, beautiful and well-maintained outdoor environment.",
      },
    ],
  },

  faq: {
    title: "Frequently Asked Questions",

    subtitle:
      "Find answers to common questions about our outdoor maintenance services.",

    items: [
      {
        question: "How often should lawn maintenance be scheduled?",

        answer:
          "Most residential lawns benefit from weekly or bi-weekly maintenance depending on the season.",
      },

      {
        question: "Do you provide pressure washing services?",

        answer:
          "Yes. We offer professional pressure washing for driveways, sidewalks, patios and exterior walls.",
      },

      {
        question: "Can I request recurring maintenance?",

        answer:
          "Absolutely. We provide flexible weekly, bi-weekly and monthly maintenance plans.",
      },

      {
        question: "Do you bring your own equipment?",

        answer:
          "Yes. Our team arrives fully equipped with professional tools and equipment for every service.",
      },
    ],
  },

  cta: {
    title: "Transform Your Outdoor Space",

    description:
      "Let Clever Clean maintain your lawn, garden and outdoor areas with reliable, professional care. Contact us today for a free quotation.",

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