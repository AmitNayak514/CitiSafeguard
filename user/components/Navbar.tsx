"use client";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const routes = [
    {
      label: "Cases",
      href: "/cases",
    },
    {
      label: "History",
      href: "/history",
    },
    {
      label: "Reports",
      href: "/reports",
    },
    {
      label: "Documents",
      href: "/documents",
    },
    {
      label: "Community",
      href: "/community",
    },
  ];

  return (
    <div className="">
      <div className="absolute backdrop-blur-sm top-0 left-0 right-0 flex z-[100] w-[96%] mx-auto px-2  py-4 justify-between items-center">
        <div className="text-white dark:text-white">
          <Link href="/" className="text-3xl font-bold">
            CitiSafeguard
          </Link>
        </div>
        <div className="text-white hidden md:inline-block">
          <ul className="flex items-center gap-4 lg:gap-10">
            {routes.map((route) => (
              <Link
                href={route.href}
                key={route.label}
                className={cn(
                  pathname === route.href ? `font-bold` : ``,
                  `py-1.5 cursor-pointer px-2 rounded-xl list-none`
                )}
              >
                {route.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Button
            // href="/dashboard"
            className="relative cursor-pointer items-center gap-4 inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-offset-0 "
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Dashboard
            </span>
          </Button>
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
