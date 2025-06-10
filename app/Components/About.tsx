"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "../lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-24 max-w-[45rem] text-justify leading-8 sm:mb-24 scroll-mt-28 px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 font-semibold">
        Hello, I am Sachin Kumar Dagar. My core skills are{" "}
        <span className="bg-red-400 font-bold">
          C++, Python, Next.js, MySQL
        </span>
        . I am also familiar with{" "}
        <span className="bg-blue-400 font-bold">PostgreSQL and Docker</span>.
      </p>
      <p>
        <span className="font-bold">
          When I&apos;m not coding. I enjoy watching
        </span>{" "}
        <span className="font-serif bg-orange-300">Movies</span>{" "}
        <span className="font-bold">and playing </span>
        <span className="font-serif  bg-orange-300">Cricket</span>.
      </p>
    </motion.section>
  );
};

export default About;
