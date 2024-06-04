import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const revalidate = 0;

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
    const {
      description,
      images,
      vehicleNumber,
      latitude,
      longitude,
      userId,
      userName,
      lawId,
    } = body;
    if (!description) {
      return new NextResponse("Description is Required", {
        status: 400,
        headers: corsHeaders,
      });
    }
    if (!lawId) {
      return new NextResponse("Law ID is Required", {
        status: 400,
        headers: corsHeaders,
      });
    }
    if (!userId) {
      return new NextResponse("User ID is Required", {
        status: 400,
        headers: corsHeaders,
      });
    }
    if (!userName) {
      return new NextResponse("User Name is Required", {
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
        userId,
        vehicleNumber,
        latitude,
        longitude,
        userName,
        lawId: lawId,
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
