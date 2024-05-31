import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    console.log(userId);
    const body = await req.json();
    const { name, description } = body;
    //   if (!userId) {
    //     return new NextResponse("Unauthenticated", { status: 401 });
    //   }
    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    if (!description) {
      return new NextResponse("Description is required", { status: 400 });
    }
    const category = await prismadb.category.create({
      data: {
        name,
        description,
      },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_POST]", error); //change it later
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const laws = await prismadb.laws.findMany({});
    return NextResponse.json(laws);
  } catch (error) {
    console.log("[CATEGORY_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
