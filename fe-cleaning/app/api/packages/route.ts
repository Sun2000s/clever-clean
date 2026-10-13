
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      return NextResponse.json(
        { message: "NEXT_PUBLIC_API_URL is not configured" },
        { status: 500 }
      );
    }

    const res = await fetch(
      `${apiUrl.replace(/\/+$/, "")}/packages`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return NextResponse.json(
        { message: "Failed to fetch packages" },
        { status: res.status }
      );
    }

    const json = await res.json();

    return NextResponse.json(json);
  } catch (error) {
    console.error("PACKAGES PROXY ERROR:", error);

    return NextResponse.json(
      { message: "Cannot connect to backend" },
      { status: 500 }
    );
  }
}
