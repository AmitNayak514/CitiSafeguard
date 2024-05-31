import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const LawPage: React.FC = () => {
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
      <Separator />
    </div>
  );
};

export default LawPage;
