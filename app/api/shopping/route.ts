import { NextResponse } from "next/server";
import { shoppingSections } from "@/lib/shopping";

export async function GET() {
  return NextResponse.json(shoppingSections);
}
