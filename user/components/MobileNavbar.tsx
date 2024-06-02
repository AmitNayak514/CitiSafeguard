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
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const MobileNavbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const routes = [
    {
      label: "Home",
      href: "/home",
      active: pathname === `/home`,
    },
    {
      label: "Laws",
      href: "/laws",
      active: pathname === `/laws`,
    },
    {
      label: "Reports",
      href: "/reports",
      active: pathname === `/reports`,
    },
    {
      label: "Documents",
      href: "/documents",
      active: pathname === `/documents`,
    },
    {
      label: "Community",
      href: "/community",
      active: pathname === `/community`,
    },
  ];

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
      <SheetContent
        side="left"
        className="w-[25vw] pt-12 flex items-start justify-center"
      >
        <div className="flex flex-col items-start justify-between gap-8 text-lg font-semibold  md:hidden">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.label}
              className={cn(
                route.active
                  ? `text-black dark:text-white`
                  : `text-muted-foreground`,
                `hover:bg-white/10 py-1.5 cursor-pointer px-4 rounded-xl list-none`
              )}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNavbar;
