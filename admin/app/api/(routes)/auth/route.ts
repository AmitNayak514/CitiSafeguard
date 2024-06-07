import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId } = body;
    if (!userId) {
      return new NextResponse("User ID is required", {
        status: 401,
        headers: corsHeaders,
      });
    }

    const user = await prismadb.user.findFirst({
      where: {
        userId,
      },
    });

    if (user) {
      return new NextResponse(null, {
        status: 204,
        headers: corsHeaders,
      });
    } else {
      const newUser = await prismadb.user.create({
        data: {
          userId,
        },
      });
      return NextResponse.json(newUser, { headers: corsHeaders });
    }
  } catch (error) {
    console.log("[AUTH_POST]", error);
    return new NextResponse("Internal error", {
      status: 500,
      headers: corsHeaders,
    });
  }
}
