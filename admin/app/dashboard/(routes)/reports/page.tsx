import React from "react";
import handleReport from "@/app/api/(routes)/handleReport/route";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface Report {
  id: string;
  userId: string;
  userName: string;
  lawId: string;
  description: string;
  vehicleNumber?: string;
  images: { id: string; url: string }[];
  latitude?: number;
  longitude?: number;
  createdAt: string;
  updatedAt: string;
  isApproved?: boolean;
  isRejected?: boolean;
}

const ReportPage: React.FC = async () => {
  const reports = await prismadb.report.findMany({
    where: {
      isApproved: false,
      isRejected: false,
    },
    include: {
      images: true,
    },
  });

  const handleReportAction = async (reportId: string, action: "approve" | "reject") => {
    const response = await fetch("/api/handleReport", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reportId }),
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.error("Failed to update report");
    }
  };

  const isVideo = (url: string) => {
    const videoExtensions = ["mp4", "avi", "mov", "wmv", "flv", "mkv"];
    const extension = url.split(".").pop();
    return videoExtensions.includes(extension?.toLowerCase() || "");
  };

  return (
    <div className="flex flex-col space-y-3 p-12 pt-6">
      <div className="flex items-center justify-between">
        <Heading
          title="Reports"
          description="Approve or Reject reports after verifying"
        />
      </div>
      <Separator />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {reports.map((report) => (
          <Card key={report.id} className="">
            <CardHeader className="flex items-center justify-center">
              <h1 className="text-wrap text-lg">{report.lawId}</h1>
            </CardHeader>
            <CardContent className="text-lg h-96 text-[#333] flex flex-col items-start dark:text-white space-y-3">
              <CardDescription className="text-[#333] dark:text-white">
                Username: {report.userName}
              </CardDescription>
              <CardDescription className="text-[#333] dark:text-white">
                Description: {report.description}
              </CardDescription>
              {report.latitude && report.longitude && (
                <CardDescription className="text-[#333] dark:text-white">
                  Location: ({report.latitude}, {report.longitude})
                </CardDescription>
              )}
              <CardContent>
                <h1>Evidence Submitted:</h1>
                {report.images.map((image) => (
                  <Link
                    href={image.url}
                    key={image.id}
                    className="relative w-[200px] h-[200px]"
                  >
                    {isVideo(image.url) ? (
                      <video className="object-cover w-full h-full" autoPlay>
                        <source src={image.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="relative w-[200px] h-[200px]">
                        <Image
                          fill
                          className="object-cover"
                          alt="Image"
                          src={image.url}
                        />
                      </div>
                    )}
                  </Link>
                ))}
              </CardContent>
            </CardContent>
            <CardFooter className="flex items-center px-6 justify-between">
              <Button onClick={() => handleReportAction(report.id, "approve")}>Approve</Button>
              <Button onClick={() => handleReportAction(report.id, "reject")} variant={"destructive"}>Reject</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReportPage;
