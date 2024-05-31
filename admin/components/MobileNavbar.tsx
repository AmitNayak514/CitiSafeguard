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
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const MobileNavbar: React.FC = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const routes = [
    {
      label: "Overview",
      href: "/",
      active: pathname === `/`,
    },
    {
      label: "Laws",
      href: "/dashboard/laws",
      active: pathname === `/dashboard/history`,
    },
    {
      label: "Reports",
      href: "/dashboard/reports",
      active: pathname === `/dashboard/history`,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      active: pathname === `/dashboard/history`,
    },
    {
      label: "History",
      href: "/dashboard/history",
      active: pathname === `/dashboard/history`,
    },
  ];
  return (
    <Sheet>
      <SheetTrigger className="c">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden
         text-black dark:text-white"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[35vh]">
        <div className="text-white pt-10  md:hidden">
          <ul className="flex flex-col items-center justify-between gap-8 text-lg font-semibold  md:hidden">
            {routes.map((route) => (
              <Link
                href={route.href}
                key={route.label}
                className={cn(
                  route.active
                    ? "text-black dark:text-white"
                    : "text-muted-foreground",
                  `hover:bg-white/10 py-1.5 cursor-pointer px-4 rounded-xl list-none`
                )}
              >
                {route.label}
              </Link>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNavbar;
