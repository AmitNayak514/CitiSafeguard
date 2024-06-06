"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

const NavLinks = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { userId } = useAuth();
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
      href: "/report",
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
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <ul className="flex items-center gap-4 lg:gap-10">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.label}
          className={cn(
            route.active ? `font-bold text-black dark:text-white` : ``,
            `py-1.5 cursor-pointer px-2 rounded-xl list-none`
          )}
        >
          {route.label}
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
