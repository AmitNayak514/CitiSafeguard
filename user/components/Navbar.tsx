"use client";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ui/mode-toggle";

interface NavbarProps {
  displayButton?: boolean;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ displayButton, className }) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="border-b border-gray-400/30 dark:border-gray-50/15">
      <div
        className={cn(
          `space-x-8 backdrop-blur-sm flex z-[100] w-[96%] mx-auto px-2  py-4 justify-between items-center`,
          className
        )}
      >
        <div
          className={`text-black dark:text-white ${
            displayButton ? "text-white" : ""
          }`}
        >
          <Link href="/" className="text-3xl font-bold">
            CitiSafeguard
          </Link>
        </div>
        <div
          className={`text-black dark:text-white hidden md:inline-block  ${
            displayButton ? "text-white" : ""
          }`}
        >
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
          {displayButton && (
            <Button
              // href="/dashboard"
              className="relative cursor-pointer items-center gap-4 inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-offset-0 "
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Get Started
              </span>
            </Button>
          )}
          <MobileNavbar />
          {!displayButton && <ModeToggle />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
