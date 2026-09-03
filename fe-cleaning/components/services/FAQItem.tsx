"use client";

import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <h3 className="text-lg font-semibold text-primary">
          {question}
        </h3>

        {open ? (
          <HiMinus className="text-2xl text-primary" />
        ) : (
          <HiPlus className="text-2xl text-primary" />
        )}
      </button>

      {open && (
        <div className="px-6 pb-6">
          <p className="leading-8 text-gray-600">
            {answer}
          </p>
        </div>
      )}

    </div>
  );
}