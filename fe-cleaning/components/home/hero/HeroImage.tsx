"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center"
    >
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
        <Image
          src="/images/hero/hero_modernhouseclean.jpg"
          alt="Modern Home"
          width={650}
          height={720}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Top Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute top-8 right-6 rounded-2xl bg-white/80 backdrop-blur-xl shadow-xl border border-white px-6 py-5"
      >
        <p className="text-sm text-gray-500">
          Happy Clients
        </p>

        <h2 className="mt-1 text-3xl font-bold text-primary">
          1000+
        </h2>
      </motion.div>

      {/* Floating Staff Card */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute -bottom-8 -left-10 hidden lg:block"
      >
        <div className="rounded-3xl border border-white bg-white/90 p-4 shadow-2xl backdrop-blur-xl">

          <Image
            src="/images/hero/hero_professionalStaff.jpg"
            alt="Professional Staff"
            width={300}
            height={300}
            className="rounded-2xl"
          />

          <h3 className="mt-4 text-lg font-semibold text-primary">
            Professional Staff
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Fully trained & trusted team
          </p>

        </div>
      </motion.div>

      {/* Decorative Circle */}
      <div className="absolute -z-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
    </motion.div>
  );
}