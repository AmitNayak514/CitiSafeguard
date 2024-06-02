import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export const revalidate = 0;

const LawsCard = ({ data }: { data: any }) => {
  return (
    <div>
      {data.map((law: any) => (
        <Card
          key={law.id}
          className=" border mb-10 dark:bg-neutral-950/10 border-gray-400/30 dark:border-gray-50/20"
        >
          <Accordion
            collapsible
            type="single"
            className="w-full h-full border-none border-b-0 outline-none space-y-2"
          >
            <AccordionItem value="hello">
              <AccordionTrigger className="md:mx-6 mx-2 font-bold text-lg md:text-xl lg:text-2xl">
                {law?.name}
              </AccordionTrigger>
              <AccordionContent className="md:mx-9 mx-2 mt-0 text-lg text-black/85 dark:text-white space-y-4">
                <p className="">
                  <span className="">Section </span>: {law?.sections}
                </p>
                <p>Description : {law?.description}</p>
                <p>Category : {law?.category?.name}</p>
                <p>Fine : {law?.fine}</p>
                <p>First Offense Fine : {law?.firstOffenseFine}</p>
                <p>Imprisonment : {law?.imprisonment}</p>
                <p>Applicable To : {law?.applicableTo}</p>
              </AccordionContent>
              <AccordionContent className="p-3.5 flex items-center border-t border-gray-400/30 dark:border-gray-50/20 bg-gray-300/10 dark:bg-neutral-950/40 ">
                <div className="mx-2 md:mx-6 flex-wrap md:flex-nowrap flex items-center justify-between w-full h-full ">
                  <p className="text-gray-[#666]/10 tracking-wide dark:text-gray-[#666]/10 text-sm flex items-center gap-1 ">
                    Learn more about{" "}
                    <span className="text-[#0070F3] flex items-center gap-1 cursor-pointer hover:underline">
                      {law.name} <ExternalLink className="w-3 h-3" />
                    </span>
                  </p>
                  <Button>Report</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      ))}
    </div>
  );
};

export default LawsCard;
