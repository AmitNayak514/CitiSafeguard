import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { categoryId: string } }
) {
    try{
        const { userId } = auth();
        const body = await req.json();
        const {name, description} = body;


        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 401 });
          }
        if (!params.categoryId) {
            return new NextResponse("Category ID is required", { status: 400 });
        }
        if(!description){
            return new NextResponse("Description is required", { status: 400 })
        }

        const category = await prismadb.category.updateMany({
            where:{
                id: params.categoryId,
            },
            data: {
                name,
                description,
              },
        })
        return NextResponse.json(category);
    }catch(error){
        console.log("[CATEGORY_PATCH]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export async function DELETE(
    req:Request,
    { params }: { params: { categoryId: string } }
) {
    try{
        const userId = auth();
        if(!userId){
            return new NextResponse("Unauthenticated", { status: 401 });
        }
        if(params.categoryId){
            return new NextResponse("Category ID is required", {status: 400});
        }

        const category = await prismadb.category.deleteMany({
            where: {
                id: params.categoryId,
              },
        })

        return NextResponse.json(category);
    }catch(error){
        console.log("[CATEGORY_DELETE]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export async function GET(
    req :Request,
    { params }: { params: { categoryId: string } }
) {
    try{
        const category = await prismadb.category.findUnique({
            where: {
                id: params.categoryId,
            }
        })
        return NextResponse.json(category);
    }catch(error){
        console.log("CATEGORY_GET", error);
        return  NextResponse.json("Internal server error", {status: 500});
    }
}