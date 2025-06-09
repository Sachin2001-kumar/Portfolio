"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "../lib/Data";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-14 px-4 mb-24 text-black"
    >
      <SectionHeading>Experience</SectionHeading>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <VerticalTimeline lineColor="#8fc7e8">
          {experiencesData.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#d1fae5",
                color: "#000",
                borderTop: "4px solid #3b82f6",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                padding: 0,
              }}
              contentArrowStyle={{ borderRight: "7px solid #d1fae5" }}
              date={exp.timeline}
              iconStyle={{ background: "#8fc7e8", color: "#fff" }}
              icon={<span style={{ fontSize: "1.5rem" }}>{exp.icon}</span>}
            >
              <div className="transition duration-300 ease-in-out p-5 rounded hover:bg-green-200 hover:shadow-xl">
                <h3 className="text-2xl font-bold">
                  <span className="bg-yellow-300">{exp.position}</span>
                </h3>
                <h4 className="text-lg font-semibold text-gray-950 mb-2">
                  {exp.company}
                </h4>
                <h6 className="text-gray-700 font-bold text-md">
                  {exp.description}
                </h6>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
}
