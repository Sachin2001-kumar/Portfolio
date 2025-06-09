"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import SectionHeading from "./SectionHeading";
import { educationData } from "../lib/Data";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <section
      id="education"
      ref={ref}
      className="scroll-mt-24 px-4 py-10 text-black mb-24"
    >
      <SectionHeading>My Education</SectionHeading>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <VerticalTimeline layout="1-column-left" lineColor="#2563eb">
          {educationData.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "transparent",
                boxShadow: "none",
                padding: "0",
              }}
              contentArrowStyle={{ borderRight: "transparent" }}
              iconStyle={{ background: "#2563eb", color: "#fff" }}
              icon={<span style={{ fontSize: "1.5rem" }}>🎓</span>}
            >
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-[#f4f0d0] rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-2xl font-bold text-blue-900">
                  {edu.institution}
                </h3>
                <h4 className="text-xl font-semibold text-gray-900 mt-2">
                  {edu.course}
                </h4>
                <h5 className="text-lg font-semibold text-gray-800 mt-2">
                  {edu.major}
                </h5>
                <h5 className="text-md font-semibold text-gray-900 mt-2">
                  <strong>CGPA / Percentage :</strong> {edu.score}
                </h5>
                <h5 className="text-md font-semibold text-gray-900 mt-2">
                  {edu.duration}
                </h5>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
}
