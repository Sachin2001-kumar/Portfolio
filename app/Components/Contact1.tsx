"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "../lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const iconWrapper =
    "relative flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md hover:shadow-xl transition-all duration-300 group";

  const iconStyle =
    "text-3xl text-gray-800 group-hover:text-white transition duration-300 relative z-10";

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="py-16 px-6 scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Heading */}
        <SectionHeading> Let&apos;s Connect </SectionHeading>

        <motion.p
          className="text-lg sm:text-xl font-medium text-gray-700 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          I’d love to connect! Reach out to me on any of these platforms.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center items-center gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* GitHub */}
          <motion.a
            href="https://github.com/Sachin2001-kumar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconWrapper}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Glow ring */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-500"></span>
            <FaGithub className={iconStyle} />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/sachin-kumar-dagar-a430521ba/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconWrapper}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition duration-500"></span>
            <FaLinkedin className={iconStyle} />
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:sachinkumardagar20001@gmail.com"
            aria-label="Email"
            className={iconWrapper}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 to-red-400 opacity-0 group-hover:opacity-100 transition duration-500"></span>
            <FaEnvelope className={iconStyle} />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
