import Image from "next/image";
import { PackageType } from "@/types/package";

interface Props {
  data: PackageType;
}

export default function PackageCard({ data }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition">
      
      {/* Image */}
      <div className="relative w-full h-48 rounded-xl overflow-hidden">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h2 className="text-xl font-bold text-orange-500">
          {data.name}
        </h2>

        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-2">
          <span>⏱ {data.duration}</span>
          <span>👥 {data.staff}</span>
          <span>💰 {data.price.toLocaleString()} บาท</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            ⭐ {data.rating.toFixed(1)}
          </div>

          <button className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm hover:bg-teal-600">
            รายละเอียดเพิ่มเติม
          </button>
        </div>
      </div>
    </div>
  );
}