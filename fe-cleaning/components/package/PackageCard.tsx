"use client";

import Image from "next/image";
import Link from "next/link";
import { PackageType } from "@/types/package";

interface Props {
  data: PackageType;
  isAdmin?: boolean;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export default function PackageCard({
  data,
  isAdmin = false,
  onEdit,
  onDelete,
}: Props) {

  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        <Image
          src={data.coverImage?.url || "/placeholder.png"}
          alt={data.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          unoptimized
        />

        <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-sm font-medium text-gray-700 shadow-md">
          ⭐ {data.rating ?? 5.0}
        </div>
      </div>

      <div className="p-7">
        <h2 className="font-heading text-2xl text-primary">
          {data.name}
        </h2>

        <p className="mt-3 line-clamp-2 leading-7 text-gray-600">
          {data.description}
        </p>

        <div className="mt-5">
          <span className="text-sm text-gray-500">
            Starting from
          </span>

          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-3xl font-bold text-primary">
              ฿{data.price.toLocaleString()}
            </span>

            <span className="text-sm text-gray-500">
              / package
            </span>
          </div>
        </div>

        <div className="mt-6 space-y-3 border-y border-gray-100 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              ⏱
            </span>

            <div>
              <p className="text-xs text-gray-400">
                Duration
              </p>

              <p className="font-medium text-gray-700">
                {data.minDurationHours} - {data.maxDurationHours} ชั่วโมง
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              👥
            </span>

            <div>
              <p className="text-xs text-gray-400">
                Cleaning Staff
              </p>

              <p className="font-medium text-gray-700">
                {data.minStaff} - {data.maxStaff} คน
              </p>
            </div>
          </div>
        </div>

        {!isAdmin ? (
          <Link
            href={`/packages/${data.id}`}
            className="mt-6 flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
          >
            รายละเอียดเพิ่มเติม
          </Link>
        ) : (
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => onEdit?.(data.id)}
              className="flex-1 rounded-xl bg-blue-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Edit
            </button>

            <button
              type="button"
              onClick={() => onDelete?.(data.id)}
              className="flex-1 rounded-xl bg-red-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}