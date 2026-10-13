
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HeroImage() {
  const t = useTranslations("HeroImage");

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center"
    >
      {/* Main Image */}
      <div className="relative w-full max-w-[650px] overflow-hidden rounded-[32px] shadow-2xl">
        <Image
          src="/images/hero/hero_modernhouseclean.jpg"
          alt={t("happyClients")}
          width={650}
          height={720}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Happy Clients Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute right-3 top-5 rounded-2xl border border-white bg-white/80 px-4 py-4 shadow-xl backdrop-blur-xl sm:right-6 sm:top-8 sm:px-6 sm:py-5"
      >
        <p className="text-xs text-gray-500 sm:text-sm">
          {t("happyClients")}
        </p>

        <h2 className="mt-1 text-2xl font-bold text-primary sm:text-3xl">
          1000+
        </h2>
      </motion.div>

      {/* Professional Staff Card */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
        className="absolute -bottom-8 -left-4 hidden lg:block xl:-left-10"
      >
        <div className="rounded-3xl border border-white bg-white/90 p-4 shadow-2xl backdrop-blur-xl">
          <Image
            src="/images/hero/hero_professionalStaff.jpg"
            alt={t("professionalStaff")}
            width={300}
            height={300}
            sizes="300px"
            className="h-[180px] w-[240px] rounded-2xl object-cover xl:h-[200px] xl:w-[260px]"
          />

          <h3 className="mt-4 text-lg font-semibold text-primary">
            {t("professionalStaff")}
          </h3>

          <p className="mt-1 max-w-[260px] text-sm text-gray-500">
            {t("staffDescription")}
          </p>
        </div>
      </motion.div>

      {/* Decorative Background */}
      <div className="absolute -z-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
    </motion.div>
  );
}
