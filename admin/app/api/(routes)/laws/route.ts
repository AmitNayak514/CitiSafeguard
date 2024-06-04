import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    console.log(userId);
    const body = await req.json();
    const {
      name,
      categoryId,
      description,
      sections,
      firstOffenseFine,
      fine,
      imprisonment,
      applicableTo,
    } = body;
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    if (!categoryId) {
      return new NextResponse("CategoryID is required", { status: 400 });
    }
    if (!description) {
      return new NextResponse("Description is required", { status: 400 });
    }
    if (!sections) {
      return new NextResponse("Fill this section", { status: 400 });
    }
    if (!firstOffenseFine) {
      return new NextResponse("This section is required", { status: 400 });
    }
    if (!fine) {
      return new NextResponse("Fill the fine amount for this", { status: 400 });
    }
    if (!applicableTo) {
      return new NextResponse("This section is required", { status: 400 });
    }

    const law = await prismadb.laws.create({
      data: {
        name,
        categoryId,
        description,
        sections,
        fine,
        firstOffenseFine,
        imprisonment,
        applicableTo,
      },
    });
    return NextResponse.json(law);
  } catch (error) {
    console.log("[LAWS_POST]", error); //change it later
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const laws = await prismadb.laws.findMany({ include: { category: true } });
    console.log(laws);
    return NextResponse.json(laws);
  } catch (error) {
    console.log("[LAWS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

// export async function DELETE(
//   req: Request,
//   { params }: { params: { categoryId: string } }
// ) {
//   try{
//     const { userId } = auth();
//     if (!userId) {
//       return new NextResponse("Unauthenticated", { status: 401 });
//     }

//     if (!params.categoryId) {
//       return new NextResponse("Category ID is required", { status: 400 });
//     }

//     const categories = await prismadb.category.deleteMany({
//       where: {
//         id: params.categoryId,
//       },
//     });
//   }catch{

//   }
// }
