"use client";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ui/mode-toggle";
import { UserButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  const pathname = usePathname();
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
    <div className="">
      <div className="flex space-x-2 items-center justify-between py-4 px-3.5 border-b dark:border-neutral-50/50 border-neutral-300">
        <div className="text-neutral-950/80 dark:text-white">
          <Link href={`/`} className="text-3xl font-bold">
            CitiSafeguard
          </Link>
        </div>
        <div className="text-black hidden md:flex mr-auto dark:text-white">
          <ul className="flex items-center gap-2  md:gap-4 lg:gap-10">
            {routes.map((route) => (
              <Link
                href={route.href}
                key={route.label}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  route.active
                    ? "text-black dark:text-white"
                    : "text-muted-foreground"
                )}
              >
                {route.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="ml-auto gap-6 flex items-center">
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
