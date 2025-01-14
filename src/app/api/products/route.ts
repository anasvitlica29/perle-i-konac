import { NextResponse } from "next/server";
import { getProducts } from "@/clients/contentfulClient";

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json({ products });
  } catch (e) {
    console.error(e);
    NextResponse.json({ error: "Failed to get products." }, { status: 500 });
  }
}
