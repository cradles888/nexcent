import { news } from "./information/news"
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ "news": news }, { status: 200 });
}