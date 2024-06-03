import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { description, images, vehicleNumber, latitude, longitude } = body;
    if (!description) {
      return new NextResponse("Description is Required", {
        status: 400,
        headers: corsHeaders,
      });
    }
    if (!images || !images.length) {
      return new NextResponse("Images are required", {
        status: 400,
        headers: corsHeaders,
      });
    }
    const report = await prismadb.report.create({
      data: {
        description,
        vehicleNumber,
        latitude,
        longitude,
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
      },
    });
    return NextResponse.json(report, { status: 200, headers: corsHeaders });
  } catch (error) {
    console.log("[REPORTS_POST]", error);
  }
}
