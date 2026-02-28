import React from "react";
import Link from "next/link";
import { ModeToggle } from "../../../components/ui/mode-toggle";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-black/20 dark:border-white/10 rounded-2xl shadow-black/5 dark:shadow-black/20 transition-all duration-200 hover:bg-white/15 dark:hover:bg-black/15">
        <div className="px-6 py-4 flex justify-between items-center">
          <Link href={"/"} className="flex-1">
            <span
              className="font-bold text-2xl tracking-widest text-amber-300
            "
            >
              EatCode
            </span>
          </Link>

          <div className="flex flex-1 flex-row items-center justify-center gap-x-4">
            <Link href={'/problems'} className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-amber-600 cursor-pointer dark:hover:text-amber-400">
              Problems
            </Link>
            <Link href={'/profile'} className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-amber-600 cursor-pointer dark:hover:text-amber-400">
              Profile
            </Link>
          </div>


          <div className="flex items-end justify-end gap-4 flex-1 ">
            <ModeToggle/>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
