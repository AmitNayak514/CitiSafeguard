import { MenuIcon } from "lucide-react";
import Link from "next/link";
import MobileSidebar from "./MobileNavbar";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="">
      <div className="absolute backdrop-blur-sm top-0 left-0 right-0 flex z-[100] w-[96%] mx-auto px-2  py-4 justify-between items-center">
        <div className="text-black dark:text-white">
          <p className="text-3xl font-bold">CitiSafeguard</p>
        </div>
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
          <MobileSidebar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
