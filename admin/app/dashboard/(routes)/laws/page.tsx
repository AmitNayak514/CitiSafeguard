import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DataTable } from "@/components/ui/data-table";
import prismadb from "@/lib/prismadb";
import { LawColumn, columns } from "./components/columns";
import { formatter } from "@/lib/utils";
import { format } from "date-fns";
import { truncateText } from "@/lib/utils";

const LawPage: React.FC = async () => {
  const laws = await prismadb.laws.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const formattedLaws: LawColumn[] = laws.map((law) => ({
    id: law.id,
    name: law.name,
    description: truncateText(law.description, 50),
    sections: law.sections,
    fine: formatter.format(law.fine),
    firstOffenseFine: law.firstOffenseFine
      ? formatter.format(law.firstOffenseFine)
      : formatter.format(law.fine),
    category: law.category.name,
    applicableTo: law.applicableTo,
    createdAt: format(law.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex flex-col space-y-3 p-12 pt-6">
      <div className="flex items-center justify-between">
        <Heading title="Laws" description="Add or remove laws or rules." />
        <Link href={"/dashboard/laws/new"}>
          <Button className="">
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </Link>
      </div>
      <Separator className="mb-4" />
      <DataTable searchKey="name" data={formattedLaws} columns={columns} />
    </div>
  );
};

export default LawPage;
