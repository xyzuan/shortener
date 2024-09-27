import { getDirectLink } from "@/services/shortlink";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { shortCode: string } }
) {
  const { shortCode } = params;
  try {
    const response = await getDirectLink(shortCode);
    if (response.status >= 400) {
      return NextResponse.json(
        { error: `Short link with code ${shortCode} not found` },
        { status: response.status }
      );
    }
    return NextResponse.redirect(response.data.longUrl);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch short link" },
      { status: 500 }
    );
  }
}
