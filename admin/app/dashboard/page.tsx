import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Ban, Check, SearchCheck, X } from "lucide-react";
import { formatter } from "@/lib/utils";

export default function Home() {
  const { userId } = auth();
  if (!userId) redirect(`/sign-in`);
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-3 p-12 pt-6">
        <Heading title="Dashboard" description="Overview of your application" />
        <Separator />
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 pt-3 gap-8">
          <Card className="shadow-2xl shadow-neutral-600/20">
            <CardHeader className="flex flex-col">
              <SearchCheck className="bg-green-500 rounded-full font-bold text-white h-8 w-8 p-1" />
              <h2 className="font-bold dark:text-white text-gray-700 text-xl">
                Verified Violations
              </h2>
              <p className="text-muted-foreground dark:text-white text-xs">
                Number of violations confirmed
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10</div>
            </CardContent>
          </Card>
          <Card className="shadow-2xl shadow-neutral-600/20">
            <CardHeader className="flex flex-col ">
              <Ban className="bg-red-500  rounded-full font-bold text-white h-8 w-8 p-1" />
              <h2 className="font-bold dark:text-white text-gray-700  text-xl">
                Reported Violations
              </h2>
              <p className="text-muted-foreground dark:text-white text-xs">
                Total number of violations reported
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatter.format(100)}</div>
            </CardContent>
          </Card>
          <Card className="shadow-2xl shadow-neutral-600/20">
            <CardHeader className="flex flex-col">
              <Check className="bg-green-500 rounded-full font-bold text-white h-8 w-8 p-1" />
              <h2 className="font-bold dark:text-white text-gray-700 text-xl">
                Correct Reports
              </h2>
              <p className="text-muted-foreground dark:text-white text-xs">
                Number of correct violation reported
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">200</div>
            </CardContent>
          </Card>
          <Card className="shadow-2xl shadow-neutral-600/20">
            <CardHeader className="flex flex-col">
              <X className="bg-red-500 rounded-full  font-bold text-white h-8 w-8 p-1" />
              <h2 className="font-bold text-gray-700 dark:text-white text-xl">
                Incorrect Violations
              </h2>
              <p className="text-muted-foreground dark:text-white text-xs">
                Number of incorrect violations reported
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1000</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
