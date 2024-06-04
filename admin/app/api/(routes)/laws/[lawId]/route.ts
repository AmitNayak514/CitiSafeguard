import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(
      req: Request,
      { params }: { params: { lawId: string } }
    ) {
      try{
        const { userId } = auth();
        if (!userId) {
          return new NextResponse("Unauthenticated", { status: 401 });
        }
    
        if (!params.lawId) {
          return new NextResponse("Law ID is required", { status: 400 });
        }
    
        const law = await prismadb.category.deleteMany({
          where: {
            id: params.lawId,
          },
        });

        return NextResponse.json(law);
      } catch (error) {
            console.log("[LAWS_DELETE]", error);
            return new NextResponse("Internal Server Error", { status: 500 });
      }
    }
    

    export async function GET(
        req:Request,
        { params }: { params: { lawId: string } }
    ) {
        try{
            const law = await prismadb.laws.findUnique({
                where: {
                    id: params.lawId,
                }
            })
            return NextResponse.json(law);
        }catch (error) {
            console.log("[LAW_GET]", error);
            return new NextResponse("Internal Server Error", { status: 500 });
        }
    }

    export async function  PATCH(
        req: Request,
        { params }: { params: { lawId: string } }
    ) {
        try{
            const { userId } = auth();
            const body = await req.json();
            const {name} = body;

            if (!userId) {
                return new NextResponse("Unauthenticated", { status: 401 });
              }

            if (!params.lawId) {
                return new NextResponse("Law ID is required", { status: 400 });
              }
            const laws = await prismadb.category.updateMany({
                where: {
                  id: params.lawId,
                },
                data: {
                  name,
                },
            });
            console.log(laws);
            return NextResponse.json(laws);
        }catch(error){
            console.log("[LAWS_PATCH]", error);
            return new NextResponse("Internal Server Error", { status: 500 });
        }
    }