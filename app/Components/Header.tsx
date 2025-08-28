"use client";

import React from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/app/lib/Data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/app/lib/Active";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/app/ui/menubar";
import { MenuIcon } from "lucide-react";

export default function Header() {
  const { ActiveSection, setActiveSection } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Main nav background */}
      <motion.div
        className="hidden sm:block fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none sm:border bg-blue-50 sm:bg-white bg-opacity-80 backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-xl"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      {/* Mobile menu */}
      <div className="flex justify-end">
        <div className="sm:hidden">
          <Menubar className="bg-transparent border-none h-20">
            <MenubarMenu>
              <MenubarTrigger>
                <MenuIcon size={40} />
              </MenubarTrigger>
              <MenubarContent className="bg-blue-50 font-bold mr-2 border-r-8">
                {NAV_LINKS.map((link) => (
                  <Link key={link.hash} href={link.hash}>
                    <MenubarItem className="p-4 w-[75vw]">
                      {link.name}
                    </MenubarItem>
                  </Link>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>

      {/* Desktop nav items */}
      <nav className="hidden sm:flex fixed top-[0.15rem] left-1/2 h-50 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[48rem] items-center justify-center gap-y-0.5 sm:gap-y-0 text-[0.9rem] font-bold text-gray-500 sm:w-[initial] ml-4 mr-4 sm:gap-5 sm:flex-nowrap">
          {NAV_LINKS.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-[0.9vh] py-3 hover:text-gray-950 transition",
                  {
                    "text-gray-950": ActiveSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                }}
              >
                {link.name}

                {link.name === ActiveSection && (
                  <motion.span
                    className="bg-blue-200 rounded-xl absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
