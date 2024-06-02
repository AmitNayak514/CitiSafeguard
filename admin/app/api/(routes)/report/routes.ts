import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { description, images, vehicleNumber, latitude, longitude } = body;
    if (!description) {
      return new NextResponse("Description is Required", { status: 400 });
    }
    if (!images || !images.length) {
      return new NextResponse("Images are required", { status: 400 });
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
    return NextResponse.json(report);
  } catch (error) {
    console.log("[REPORTS_POST]", error);
  }
}
