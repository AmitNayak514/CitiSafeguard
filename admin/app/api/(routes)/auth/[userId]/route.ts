import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { string } from "zod";

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    if (!params.userId) {
      return new NextResponse("User ID not found", { status: 401 });
    }
    const user = await prismadb.user.findFirst({
      where: {
        userId: params.userId,
      },
    });
    return NextResponse.json(user?.civicPoints);
  } catch (err) {
    console.log(`[AUTH_GET]: `, err);
    return new NextResponse("Internal error", { status: 500 });
  }
}
