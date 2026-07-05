"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PackageList from "@/components/package/PackageList";
import { PackageType } from "@/types/package";

export default function AdminPackagesPage() {
  const router = useRouter();

  const [packages, setPackages] = useState<PackageType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPackages = async () => {
    try {
      const res = await fetch("http://localhost:8080/packages");

      if (!res.ok) {
        throw new Error("Failed to fetch packages");
      }

      const result = await res.json();

      setPackages(result.data);
    } catch (error) {
      console.error("FETCH PACKAGES ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleEdit = (id: string) => {
    router.push(`/admin/packages/${id}`);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this package?")) return;

    try {
      const res = await fetch(
        `http://localhost:8080/packages/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      // โหลดข้อมูลใหม่
      fetchPackages();
    } catch (error) {
      console.error("DELETE ERROR:", error);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        Loading packages...
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-black">
            Packages
          </h1>

          <p className="text-gray-500 text-sm">
            Manage your cleaning packages
          </p>
        </div>

        <button
          onClick={() =>
            router.push("/admin/packages/create")
          }
          className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-80"
        >
          + Create Package
        </button>
      </div>

      {/* Package List */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <PackageList
          packages={packages}
          isAdmin
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}