"use client";

import { useSectionInView } from "../lib/hooks";
import { useActiveSectionContext } from "../lib/Active";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-24 max-w-[50rem] text-center sm:mb-24 scroll-mt-[100rem] mt-16 sm:mt-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          ></motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.7,
              stiffness: 125,
              delay: 0.1,
            }}
          ></motion.span>
          <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-semibold !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-justify">
              <div className="font-bold">Hello, </div>
              <div className="font-bold">I&apos;m Sachin Kumar Dagar</div>
              <div className="font-bold text-lg inline-block">
                I am a <span className="bg-green-400">Software Developer</span>
              </div>
            </div>
          </motion.h1>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-semibold"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Link
              href="#contact"
              className="group bg-gray-800 text-white px-5 py-3 flex items-center gap-5 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-600 active:scale-105 transition"
              onClick={() => {
                setActiveSection("Contact");
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
            <a
              className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
              href="/Sachin.pdf"
              download
            >
              Resume{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
            <a
              className="bg-white p-4 text-gray-600 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
              href="https://github.com/Sachin2001-kumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>
            <a
              className="bg-white p-4 text-gray-600 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
              href="https://www.linkedin.com/in/sachin-kumar-dagar-a430521ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
