"use client";

import { useParams, useRouter } from "next/navigation";
import PackageForm from "@/components/package/PackageForm";

export default function EditPackagePage() {
  const params = useParams(); // ✅ ใช้แบบนี้
  const router = useRouter();

  const id = params.id as string;

  const mockData = {
    name: "Basic Cleaning",
    price: 500,
    duration: "2 ชั่วโมง",
    staff: 2,
  };

  const handleSubmit = (data: any) => {
    console.log("UPDATE:", id, data);
    router.push("/admin/packages");
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-black">
        Edit Package {id}
      </h1>

      <PackageForm
        initialData={mockData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}