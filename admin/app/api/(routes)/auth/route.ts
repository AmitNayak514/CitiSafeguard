import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, userName } = body;
    if (!userId) {
      return new NextResponse("User ID is required", { status: 401 });
    }
    if (!userName) {
      return new NextResponse("User Name is required", { status: 401 });
    }
    const user = await prismadb.user.findFirst({
      where: {
        userId,
      },
    });
    if (user) {
      return new NextResponse("User Exists", { status: 204 });
    } else {
      const user = await prismadb.user.create({
        data: {
          userId,
          userName,
        },
      });
      return NextResponse.json(user);
    }
  } catch (error) {
    console.log("[USER_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
