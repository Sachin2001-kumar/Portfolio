import Newsflow from "@/app/Public/Newsflow.png";
import Portfolio from "@/app/Public/Portfolio.png";
import TrackNSpend from "@/app/Public/TrackNSpend.png";

export const NAV_LINKS = [
  {
    name: "Home",
    hash: "#Home",
  },
  {
    name: "About",
    hash: "#About",
  },
  {
    name: "Project",
    hash: "#Project",
  },
  {
    name: "Skills",
    hash: "#Skills",
  },
  {
    name: "Contact ",
    hash: "#Contact",
  },
];
export const ProjectData = [
  {
    title: "Portfolio",
    description:
      "Created a Portfolio website for me with NextJS, TailwindCSS for styling, and Resend for email.",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "Framer-Motion"],
    imageUrl: Portfolio,
    github: "https://github.com/Sachin2001-kumar/Portfolio",
    liveUrl: "",
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
