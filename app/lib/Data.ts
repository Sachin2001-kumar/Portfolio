import Portfolio from "@/public/Portfolio.png";
import TrackNSpend from "@/public/TrackNSpend.png";
import Droplix from "@/public/Droplix.png";
import ResumeX from "@/public/ResumeX.png";
import { CgWorkAlt } from "react-icons/cg";
import React from "react";

export const NAV_LINKS = [
  {
    name: "Home",
    hash: "#home",
  },

  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const ProjectData = [
  {
    title: "ResumeX",
    description:
      "Developed an AI-powered Resume Analyzer using React.js, TypeScript, and Zustand with SDK-based cloud integration for authentication, storage, and AI processing. Implemented client-side PDF-to-image conversion using PDF.js with SSR-safe dynamic imports for seamless browser-based resume rendering. Integrated structured prompt engineering and OCR workflows to enhance feedback accuracy by 12%. Optimized asynchronous file handling and state management, reducing response time by 15% while ensuring secure and scalable key-value data management.",
    tags: ["ReactJS", "TypeScript", "PDF.js", "Cloud AI SDK"],
    imageUrl: ResumeX,
    github: "https://github.com/Sachin2001-kumar/ResumeX",
    liveUrl: "https://resume-x-pied.vercel.app/",
  },
  {
    title: "Droplix",
    description:
      "Developed a secure image hosting platform using Next.js, ImageKit, Clerk, and PostgreSQL, achieving 99.9% uptime. Improved UX with a responsive Tailwind CSS + Hero UI design, reducing bounce rate by 20%. Boosted data access and image delivery speeds by 30% and 40% respectively through query optimization and CDN integration.",
    tags: ["NextJS", "PostgreSQL", "TailwindCSS", "Clerk", "ImageKit,"],
    imageUrl: Droplix,
    github: "https://github.com/Sachin2001-kumar/Droplix",
    liveUrl: "https://droplix.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "Created a Portfolio website for me with NextJS, TailwindCSS for styling, and Resend for email.",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "Framer-Motion"],
    imageUrl: Portfolio,
    github: "https://github.com/Sachin2001-kumar/Portfolio",
    liveUrl: "https://portfolio-7gpg.vercel.app/",
  },
  {
    title: "TrackNSpend",
    description:
      "Architected and developed a feature-rich Expense Tracker application using React.js, Node.js, Express.js and MongoDB. ",
    tags: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    imageUrl: TrackNSpend,
    github: "https://github.com/Sachin2001-kumar/TrackNSpend",
    liveUrl: "",
  },
];
export const skillsData = [
  "C++",
  "Java",
  "JavaScript",
  "TypeScript",
  "PostgreSQL",
  "Next.js",
  "TailwindCSS",
  "React.js",
  "Redux",
  "Node.js",
  "Express.js",
  "TurboRepo",
  "MongoDB",
  "Prisma",
  "Git",
  "Docker",
] as const;

export const experiencesData = [
  {
    position: "Software Engineer Intern",
    company: "Success Ladder Technologies",
    description:
      "As a Software Engineer Intern, I developed a responsive e-commerce site using HTML, CSS, Bootstrap, React.js, Next.js, and Angular. I integrated REST APIs for seamless data flow and collaborated with backend teams. Performance was improved by 20% through lazy loading and effective debugging.",
    icon: React.createElement(CgWorkAlt),
    timeline: "Feb, 2025 -May 2025",
  },
] as const;

export const educationData = [
  {
    institution: "Modern Institute Of Technology & Research Centre, Alwar",
    major: "Computer Science and Engineering",
    course: "B.Tech",
    duration: "2020 – 2024",
    score: "8.28 CGPA",
  },
  {
    institution: "Saraswati Senior Secondary School , Alwar",
    major: "PCM",
    course: "Class 12th",
    duration: "2017 – 2019",
    score: "75.60%",
  },
] as const;
