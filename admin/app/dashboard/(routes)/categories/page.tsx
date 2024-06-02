import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CategoryColumn, columns } from "./components/columns";
import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { truncateText } from "@/lib/utils";

const CategoryPage = async () => {
  const categories = await prismadb.category.findMany();
  const formattedCategories: CategoryColumn[] = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: truncateText(category.description, 130),
    createdAt: format(category.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="flex flex-col space-y-3 p-12 pt-6">
      <div className="flex items-center justify-between">
        <Heading
          title="Categories"
          description="Add or remove categories for laws or rules."
        />
        <Link href={"/dashboard/categories/new"}>
          <Button className="">
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </Link>
      </div>
      <Separator className="mb-4" />
      <DataTable
        searchKey="name"
        data={formattedCategories}
        columns={columns}
      />
    </div>
  );
};

export default CategoryPage;
