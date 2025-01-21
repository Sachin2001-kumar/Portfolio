"use client";
import { NAV_LINKS } from "@/app/lib/Data";
import Link from "next/link";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { useActiveSectionContext } from "../lib/Active";
import { useState } from "react";

export default function Header() {
  const { ActiveSection, setActiveSection } = useActiveSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="hidden sm:block fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none sm:border bg-blue-50 sm:bg-white bg-opacity-80 backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-xl"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <div className="sm:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="p-2 rounded-md bg-gray-200"
        >
          <span className="block w-5 h-[2px] bg-black mb-1"></span>
          <span className="block w-5 h-[2px] bg-black mb-1"></span>
          <span className="block w-5 h-[2px] bg-black"></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed top-10 right-0 w-72 sm:w-60 md:w-72 lg:w-96 z-30 shadow-lg p-4 space-y-3 rounded-xl"
          style={{ backgroundColor: "#EEEDEB", marginTop: "8px" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.hash}
              href={`/${link.hash}`}
              className="block text-lg font-semibold hover:text-green-400 transition"
              onClick={() => {
                setActiveSection(link.name);
                setIsMobileMenuOpen(false);
              }}
              passHref
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 sm:items-center">
        <ul className="flex w-[22rem] items-center justify-center gap-y-0.2 sm:gap-y-0 text-[0.9rem] font-bold text-gray-500 sm:w-[initial] ml-4 mr-4 sm:gap-5 sm:flex-nowrap">
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
                href={`/${link.hash}`}
                onClick={() => setActiveSection(link.name)}
                passHref
              >
                {link.name}
                {link.name === ActiveSection && (
                  <motion.span
                    className="bg-gray-200 rounded-xl absolute -z-10"
                    style={{ width: "120%", height: "70%", left: "-10%" }}
                    layoutId="ActiveSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
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
