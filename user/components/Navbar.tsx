import { MenuIcon } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import Points from "@/components/Points";
import { cn } from "@/lib/utils";
import Link from "next/link";
import NavLinks from "./NavLinks";
import getPoints from "@/actions/get-points";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

interface NavbarProps {
  displayButton?: boolean;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = async ({ displayButton, className }) => {
  const { userId } = auth();
  if (!userId) return null;
  const points = await getPoints(userId);
  console.log(points);
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
          className={`text-black/60 dark:text-muted-foreground hidden lg:inline-block  ${
            displayButton ? "text-white" : ""
          }`}
        >
          <NavLinks />
        </div>
        <div className="flex items-center gap-4">
          {displayButton && (
            <Link href="/home">
              <Button className="relative cursor-pointer items-center gap-4 inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-offset-0 ">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Get Started
                </span>
              </Button>
            </Link>
          )}
          {!displayButton && (
            <div className="flex items-center gap-3">
              <Points points={points} />
              <ModeToggle />
              <UserButton afterSignOutUrl="/sign-in" />
            </div>
          )}
          <MobileNavbar landingPage={displayButton || false} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
