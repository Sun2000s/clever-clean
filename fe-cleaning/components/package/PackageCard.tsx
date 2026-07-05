"use client";

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
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">

      {/* IMAGE */}
      <div className="w-full h-48 bg-gray-200">
        <img
          src={
            data.coverImageUrl ||
            "https://via.placeholder.com/500x300"
          }
          alt={data.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* TITLE */}
        <h2 className="text-xl font-bold text-orange-500">
          {data.name}
        </h2>

        {/* INFO */}
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

        {/* FOOTER */}
        <div className="flex items-center justify-between mt-6">

          {/* RATING */}
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            ⭐ {data.rating ?? 5.0}
          </div>

          {/* USER MODE */}
          {!isAdmin && (
            <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium transition">
              รายละเอียดเพิ่มเติม
            </button>
          )}

          {/* ADMIN MODE */}
          {isAdmin && (
            <div className="flex gap-2">

              <button
                onClick={() => onEdit?.(String(data.id))}
                className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm hover:opacity-80 transition"
              >
                Edit
              </button>

              <button
                onClick={() => onDelete?.(String(data.id))}
                className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm hover:opacity-80 transition"
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