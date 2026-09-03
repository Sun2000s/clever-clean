import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("http://localhost:8080/packages", {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          message: "Failed to fetch packages",
        },
        {
          status: res.status,
        }
      );
    }

    const json = await res.json();

    return NextResponse.json(json);
  } catch (error) {
    console.error("PACKAGES PROXY ERROR:", error);

    return NextResponse.json(
      {
        message: "Cannot connect to backend",
      },
      {
        status: 500,
      }
    );
  }
}