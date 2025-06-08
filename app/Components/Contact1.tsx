"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useSectionInView } from "../lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const iconStyle =
    "text-3xl sm:text-4xl text-blue-600 hover:text-blue-800 transition-transform hover:scale-110";

  return (
    <section
      ref={ref}
      id="contact"
      className="text-center mt-20 px-4 scroll-mt-28 mb-10"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        Let&apos;s Connect
      </h2>
      <p className="text-gray-900 mb-6 text-lg font-bold">
        You can reach out to me through any of the platforms below.
      </p>
      <div className="flex justify-center gap-8">
        <a
          href="https://github.com/Sachin2001-kumar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className={iconStyle} />
        </a>
        <a
          href="https://www.linkedin.com/in/sachin-kumar-dagar-a430521ba/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className={iconStyle} />
        </a>
        <a href="mailto:sachinkumardagar20001@gmail.com" aria-label="Email">
          <FaEnvelope className={iconStyle} />
        </a>
      </div>
    </section>
  );
}
