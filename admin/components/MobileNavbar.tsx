"use client";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger className="c">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden
         text-white"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="text-white hidden md:inline-block">
          <ul className="flex items-center gap-4 lg:gap-10">
            <li>
              <Link href="#">Cases</Link>
            </li>
            <li>
              <Link href="#">History</Link>
            </li>
            <li>
              <Link href="#">Reports</Link>
            </li>
            <li>
              <Link href="#">Documents</Link>
            </li>
            <li>
              <Link href="#">Users</Link>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileSidebar;
