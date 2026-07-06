"use client";

import Image from "next/image";
import { PackageType } from "@/types/package";

interface Props {
  data: PackageType;
  isAdmin?: boolean;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function PackageCard({
  data,
  isAdmin = false,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 w-full bg-gray-100">
        <Image
          src={data.coverImage?.url || "/placeholder.png"}
          alt={data.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          unoptimized
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold text-[#183153]">
          {data.name}
        </h2>

        <div className="mt-3 space-y-2 text-sm text-gray-600">
          <div>
            ⏱ {data.minDurationHours} - {data.maxDurationHours} ชั่วโมง
          </div>

          <div>
            👥 {data.minStaff} - {data.maxStaff} คน
          </div>

          <div>
            💰 {data.price.toLocaleString()} บาท
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            ⭐ {data.rating ?? 5.0}
          </div>

          {!isAdmin ? (
            <button className="rounded-full bg-[#183153] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
              รายละเอียดเพิ่มเติม
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => onEdit?.(data.id)}
                className="rounded-xl bg-blue-500 px-4 py-2 text-sm text-white transition hover:opacity-80"
              >
                Edit
              </button>

              <button
                onClick={() => onDelete?.(data.id)}
                className="rounded-xl bg-red-500 px-4 py-2 text-sm text-white transition hover:opacity-80"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
