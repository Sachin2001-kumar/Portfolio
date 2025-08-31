"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { ProjectData } from "@/app/lib/Data";
import Project from "./Project";
import { useSectionInView } from "@/app/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section ref={ref} id="projects" className="scroll-mt-24 mb-24">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {ProjectData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
