"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PackageApi } from "@/types/package";

export default function PackageDetailPage() {
  const params = useParams();

  const packageId = params.packageId as string;

  const [packageItem, setPackageItem] =
    useState<PackageApi | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadPackage() {
      try {
        setLoading(true);
        setError(false);

        console.log("PACKAGE ID FROM URL:", packageId);

        const res = await fetch("/api/packages");

        if (!res.ok) {
          throw new Error("Failed to fetch packages");
        }

        const json = await res.json();

        const packages: PackageApi[] = json.data;

        console.log(
          "AVAILABLE PACKAGE IDS:",
          packages.map((item) => item.id)
        );

        const found = packages.find(
          (item) => item.id === Number(packageId)
        );

        console.log("SELECTED PACKAGE:", found);

        if (!found) {
          setError(true);
          return;
        }

        setPackageItem(found);
      } catch (error) {
        console.error("PACKAGE DETAIL ERROR:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (packageId) {
      loadPackage();
    }
  }, [packageId]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F9F9F7]">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#183153]" />

            <p className="mt-5 text-gray-500">
              กำลังโหลดแพ็กเกจ...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !packageItem) {
    return (
      <main className="min-h-screen bg-[#F9F9F7]">
        <div className="mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-sm font-medium uppercase tracking-[5px] text-accent">
            Package Not Found
          </p>

          <h1 className="mt-5 font-heading text-4xl text-primary">
            ไม่พบแพ็กเกจที่คุณกำลังค้นหา
          </h1>

          <p className="mt-5 leading-7 text-gray-500">
            กรุณากลับไปหน้า Packages และเลือกแพ็กเกจอีกครั้ง
          </p>

          <Link
            href="/packages"
            className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:bg-primary/90"
          >
            กลับไปหน้า Packages
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F9F9F7]">
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-primary"
          >
            ← Back to Packages
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Image */}
            <div className="relative h-[420px] overflow-hidden rounded-3xl bg-gray-100 shadow-xl md:h-[520px]">
              {packageItem.coverImageUrl ? (
                <Image
                  src={packageItem.coverImageUrl}
                  alt={packageItem.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-400">
                  ไม่มีรูปภาพ
                </div>
              )}
            </div>

            {/* Information */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[5px] text-accent">
                Cleaning Package
              </p>

              <h1 className="mt-4 font-heading text-5xl leading-tight text-primary md:text-6xl">
                {packageItem.name}
              </h1>

              <div className="mt-6 inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                ⭐ {packageItem.rating ?? 0}
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-500">
                  Starting from
                </p>

                <p className="mt-1 text-4xl font-bold text-primary">
                  ฿{packageItem.price.toLocaleString()}
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#F9F9F7] p-5">
                  <p className="text-sm text-gray-400">
                    Duration
                  </p>

                  <p className="mt-2 text-lg font-semibold text-primary">
                    {packageItem.minDurationHours} -{" "}
                    {packageItem.maxDurationHours} ชั่วโมง
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F9F9F7] p-5">
                  <p className="text-sm text-gray-400">
                    Cleaning Staff
                  </p>

                  <p className="mt-2 text-lg font-semibold text-primary">
                    {packageItem.minStaff} -{" "}
                    {packageItem.maxStaff} คน
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-xl sm:w-auto"
              >
                สอบถามแพ็กเกจนี้
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[5px] text-accent">
              About This Package
            </p>

            <h2 className="mt-4 font-heading text-4xl text-primary md:text-5xl">
              รายละเอียดแพ็กเกจ
            </h2>
          </div>

          <div className="mt-12 rounded-3xl border border-gray-100 bg-white p-8 shadow-lg md:p-12">
            <p className="leading-8 text-gray-600">
              {packageItem.description ||
                "แพ็กเกจบริการทำความสะอาดที่ออกแบบมาเพื่อให้พื้นที่ของคุณสะอาด เป็นระเบียบ และพร้อมใช้งาน"}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[5px] text-accent">
            Get Started
          </p>

          <h2 className="mt-4 font-heading text-4xl text-white md:text-5xl">
            Ready to Make Your Space Cleaner?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            ติดต่อทีม Clever Clean เพื่อสอบถามรายละเอียด
            และเลือกบริการที่เหมาะกับพื้นที่ของคุณ
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-4 font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            ติดต่อเรา
          </Link>
        </div>
      </section>
    </main>
  );
}