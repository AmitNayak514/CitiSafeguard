import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH(
    req: NextRequest,
    { params }: { params: { reportId: string } }
){
    try{
        const body = await req.json();
        const { reportId } = body;

        if(!params.reportId){
            return new NextResponse("Needed report ID");
        }

        if(isApproved == false)
    }
    catch(error){

    }
}