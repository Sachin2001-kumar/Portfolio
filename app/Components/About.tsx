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
        Hello! I am Sachin Kumar Dagar, a passionate{" "}
        <span className="bg-yellow-300 font-bold">Software Engineer</span> with
        hands-on experience in building{" "}
        <span className="bg-green-300 font-bold">
          high-performance web applications
        </span>
        . I specialize in{" "}
        <span className="bg-blue-300 font-bold">
          C++, Python, Next.js, React.js, and MySQL
        </span>
        , and I’m also proficient with{" "}
        <span className="bg-purple-300 font-bold">
          PostgreSQL, MongoDB, and Docker
        </span>
        . I enjoy crafting{" "}
        <span className="bg-orange-300 font-bold">
          responsive and optimized applications
        </span>
        , integrating APIs for dynamic data, and delivering{" "}
        <span className="bg-yellow-300 font-bold">smooth user experiences</span>
        . Always eager to learn and grow, I thrive in{" "}
        <span className="bg-red-300 font-bold">collaborative environments</span>{" "}
        where I can contribute to meaningful projects.
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
