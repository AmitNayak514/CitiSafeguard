import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Ban, Check, SearchCheck, X } from "lucide-react";
import { formatter } from "@/lib/utils";
import Graphs from "@/components/Graphs";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data3 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data4 = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const data5 = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

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
        <div className="pt-10">
          <Graphs
            data={data}
            data01={data01}
            data3={data3}
            data4={data4}
            data5={data5}
          />
        </div>
      </div>
    </div>
  );
}
