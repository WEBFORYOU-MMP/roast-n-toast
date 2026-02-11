import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { passcode } = body;

    if (passcode === process.env.STAFF_PASSCODE) {
      const response = NextResponse.json({ success: true });
      response.cookies.set("staff_session", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 8, // 8 hours
        path: "/",
      });
      return response;
    }

    return NextResponse.json({ error: "Invalid passcode" }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
