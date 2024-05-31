import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
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
      <Separator />
    </div>
  );
};

export default CategoryPage;
