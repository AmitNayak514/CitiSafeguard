import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { reportId: string } }
) {
  try {
    const body = await req.json();
    console.log(body);
    const { action, userId, userPoints } = body;
    if (!params.reportId) {
      return new NextResponse("Needed report ID", { status: 400 });
    }
    if (!userId) {
      return new NextResponse("User Id is required", { status: 401 });
    }
    if (!action) {
      return new NextResponse("Action is required", { status: 400 });
    }
    if (!userPoints) {
      return new NextResponse("User Points is required", { status: 400 });
    }
    if (action === "approved") {
      const reports = await prismadb.report.update({
        where: {
          userId,
          id: params.reportId,
        },
        data: {
          isApproved: true,
        },
      });
      const updatedPoints = Number(userPoints) + 3;
      console.log(updatedPoints);
      const points = await prismadb.user.update({
        where: {
          userId,
        },
        data: {
          civicPoints: updatedPoints,
        },
      });
      return NextResponse.json(reports);
    } else if (action === "rejected") {
      const reports = await prismadb.report.update({
        where: {
          userId,
          id: params.reportId,
        },
        data: {
          isRejected: true,
        },
      });
      return NextResponse.json(reports);
    }
    return new NextResponse(null, { status: 404 });
  } catch (error) {
    // console.log(`[REPORT_PATCH]: `, error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
