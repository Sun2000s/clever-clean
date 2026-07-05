"use client";

import PackageForm from "@/components/package/PackageForm";
import { useRouter } from "next/navigation";

export default function CreatePackagePage() {
  const router = useRouter();

  const handleSubmit = async (
    data: any
  ) => {
    try {
      const res = await fetch(
        "http://localhost:8080/packages/create",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error(
          "Failed to create package"
        );
      }

      const result =
        await res.json();

      console.log(
        "PACKAGE CREATED:",
        result
      );

      router.push(
        "/admin/packages"
      );

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-black">
        Create Package
      </h1>

      <PackageForm
        onSubmit={handleSubmit}
      />
    </div>
  );
}


/*
"use client";

import PackageForm from "@/components/package/PackageForm";
import { useRouter } from "next/navigation";

export default function CreatePackagePage() {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    console.log("CREATE:", data);

    // TODO: call API
    router.push("/admin/packages");
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-black">Create Package</h1>

      <PackageForm onSubmit={handleSubmit} />
    </div>
  );
}
*/