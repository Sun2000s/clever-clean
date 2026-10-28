
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

    const baseUrl = apiUrl.replace(/\/+$/, "");
    const backendUrl = `${baseUrl}/packages`;

    console.log("[PACKAGES PROXY] Backend URL:", backendUrl);

    const res = await fetch(backendUrl, {
      cache: "no-store",
    });

    const responseText = await res.text();

    console.log("[PACKAGES PROXY] Status:", res.status);

    if (!res.ok) {
      console.error(
        "[PACKAGES PROXY] Backend error:",
        responseText
      );

      return NextResponse.json(
        { message: "Failed to fetch packages" },
        { status: res.status }
      );
    }

    let json: unknown;

    try {
      json = JSON.parse(responseText);
    } catch {
      console.error(
        "[PACKAGES PROXY] Invalid JSON:",
        responseText
      );

      return NextResponse.json(
        { message: "Backend returned invalid JSON" },
        { status: 502 }
      );
    }

    // ตรวจข้อมูลก่อนส่งกลับ Frontend
    const packages = Array.isArray(json)
      ? json
      : json &&
          typeof json === "object" &&
          "data" in json &&
          Array.isArray(json.data)
        ? json.data
        : [];

    console.log("[PACKAGES PROXY] First package:", packages[0]);

    if (packages[0]) {
      console.log("[PACKAGES PROXY] Description:", packages[0].description);
      console.log("[PACKAGES PROXY] Highlights:", packages[0].highlights);
      console.log("[PACKAGES PROXY] Benefits:", packages[0].benefits);
    }

    // ส่ง Response ต้นฉบับกลับไป ไม่เปลี่ยนโครงสร้างข้อมูล
    return NextResponse.json(json);
  } catch (error) {
    console.error("[PACKAGES PROXY ERROR]", error);

    return NextResponse.json(
      { message: "Cannot connect to backend" },
      { status: 500 }
    );
  }
}

/*
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
  */
