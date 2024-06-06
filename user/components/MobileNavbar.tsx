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
const MobileNavbar = ({ landingPage }: { landingPage: boolean }) => {
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
      active: pathname === `/report`,
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
      <SheetTrigger className="">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden
         "
        >
          <Menu
            className={`${
              landingPage ? "text-white " : "dark:text-white text-black"
            }`}
          />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[25vw] h-screen pt-12 flex items-start justify-center absolute z-[100]"
      >
        <div className="flex flex-col  items-start justify-between gap-8 text-lg font-semibold  lg:hidden">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.label}
              className={cn(
                route.active
                  ? `text-black dark:text-white`
                  : `text-black/60 dark:text-muted-foreground`,
                `hover:bg-white/10 py-1.5 cursor-pointer  px-4 rounded-xl list-none`
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
