
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      return NextResponse.json(
        { message: "NEXT_PUBLIC_API_URL is not configured" },
        { status: 500 }
      );
    }

    const { id } = await params;

    console.log("[PACKAGE DETAIL PROXY] ID:", id);

    const response = await fetch(
      `${apiUrl.replace(/\/+$/, "")}/packages/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const result = await response.json();

    console.log("[PACKAGE DETAIL PROXY] Status:", response.status);
    console.log("[PACKAGE DETAIL PROXY] Data:", result);

    return NextResponse.json(result, {
      status: response.status,
    });
  } catch (error) {
    console.error("[PACKAGE DETAIL PROXY ERROR]:", error);

    return NextResponse.json(
      { message: "Cannot connect to backend" },
      { status: 500 }
    );
  }
}
