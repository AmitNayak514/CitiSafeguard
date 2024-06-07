import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

type ReportAction = "approve" | "reject";



export default async function handleReport(req: Request, action: ReportAction) {
    if (req.method !== "POST") {
        return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
    }

    const { reportId } = await req.json();
    if (!reportId) {
        return new Response("Missing report ID", { status: 400 });
    }

    try{
        const updateData = action === "approve" ? { isApproved: true } : { isRejected: true };

        const report = await prismadb.report.update({
            where: { id: reportId },
            data: updateData,
        });


    }catch{
        return NextResponse.json({ error: "Failed to update report" }, { status: 500 });
    }
  }
  