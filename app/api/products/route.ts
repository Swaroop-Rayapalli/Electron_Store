import { NextResponse } from "next/server";
import { products } from "@/lib/data";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get("featured");

    let filteredProducts = products;

    if (featured === "true") {
        // Return first 4 products as featured, just like in page.tsx
        filteredProducts = products.slice(0, 4);
    }

    return NextResponse.json(filteredProducts);
}
