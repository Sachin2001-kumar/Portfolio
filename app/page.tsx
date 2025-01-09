import Image from "next/image";
import Intro from "./Components/Intro";
import About from "./Components/About";
import SectionDivider from "./Components/SectionDivider";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider/>
      <About/>
      <Skills/>
    </div>
  );
}
