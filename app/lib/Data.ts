import Newsflow from "@/Public/Newsflow.png";
import Portfolio from "@/Public/Portfolio.png";
import TrackNSpend from "@/Public/TrackNSpend.png";
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
    name: "Education",
    hash: "#education",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const ProjectData = [
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
  {
    title: "NewsFlow",
    description:
      "Designed and developed an interactive news application using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: Newsflow,
    github: "https://github.com/Sachin2001-kumar/NewsFlow-Web",
    liveUrl: "",
  },
];
export const skillsData = [
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "PostgreSQL",
  "Next.js",
  "TailwindCSS",
  "React.js",
  "Recoil",
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
