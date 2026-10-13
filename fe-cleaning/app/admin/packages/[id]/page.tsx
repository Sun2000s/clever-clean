"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import PackageForm from "@/components/package/PackageForm";

export default function EditPackagePage() {
  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);

  const [initialData, setInitialData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // ดึงข้อมูล Package จริงจาก API
  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!apiUrl) {
          throw new Error("NEXT_PUBLIC_API_URL is not configured");
        }

        if (!Number.isFinite(id) || id <= 0) {
          throw new Error("Invalid package ID");
        }

        const res = await fetch(
          `${apiUrl.replace(/\/+$/, "")}/packages/${id}`,
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch package");
        }

        const result = await res.json();

        // รองรับทั้งกรณีข้อมูลอยู่ใน result.data
        // และกรณี API ส่งข้อมูล Package กลับมาโดยตรง
        const packageData = result.data ?? result;

        setInitialData(packageData);
      } catch (error) {
        console.error("FETCH PACKAGE ERROR:", error);
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Failed to load package"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [id]);

  // อัปเดต Package ด้วย API POST /packages/update
  const handleSubmit = async (data: any) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured");
      }

      const res = await fetch(
        `${apiUrl.replace(/\/+$/, "")}/packages/update`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            id,
          }),
        }
      );

      const result = await res.json();

      if (!res.ok || result.data !== true) {
        throw new Error(
          result.message || "Failed to update package"
        );
      }

      alert("Package updated successfully!");
      router.push("/admin/packages");
    } catch (error) {
      console.error("UPDATE PACKAGE ERROR:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to update package"
      );
    }
  };

  if (loading) {
    return (
      <div className="py-10 text-center text-gray-500">
        Loading package...
      </div>
    );
  }

  if (errorMessage || !initialData) {
    return (
      <div className="py-10 text-center">
        <p className="text-red-600">
          {errorMessage || "Package not found"}
        </p>

        <button
          onClick={() => router.push("/admin/packages")}
          className="mt-4 rounded-lg bg-black px-4 py-2 text-white"
        >
          Back to Packages
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold text-black">
        Edit Package {id}
      </h1>

      <PackageForm
        initialData={initialData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
