"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const iconStyle =
    "text-4xl sm:text-5xl text-blue-700 hover:text-blue-900 transition duration-300 transform hover:-translate-y-1";

  return (
    <section ref={ref} id="contact" className=" py-16 px-4 scroll-mt-28">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading> Let&apos;s Connect </SectionHeading>

        <motion.p
          className="text-lg sm:text-xl font-semibold text-gray-900 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Feel free to reach out to me through any of the platforms below.
        </motion.p>

        <motion.div
          className="flex justify-center items-center gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/Sachin2001-kumar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition"
          >
            <FaGithub className={iconStyle} />
          </a>

          <a
            href="https://www.linkedin.com/in/sachin-kumar-dagar-a430521ba/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition"
          >
            <FaLinkedin className={iconStyle} />
          </a>

          <a
            href="mailto:sachinkumardagar20001@gmail.com"
            aria-label="Email"
            className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition"
          >
            <FaEnvelope className={iconStyle} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
