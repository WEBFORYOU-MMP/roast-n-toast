import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone_number, message, email, authorized } = body;

    if (!name || !phone_number || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name,
      phone_number,
      message,
      email: email || null,
      status: "Not Contacted",
      authorized: !!authorized,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
