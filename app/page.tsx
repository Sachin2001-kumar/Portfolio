import Image from "next/image";
import Intro from "./Components/Intro";
import About from "./Components/About";
import SectionDivider from "./Components/SectionDivider";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact1";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
