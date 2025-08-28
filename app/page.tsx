import Intro from "./Components/Intro";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact1";
import Projects from "./Components/Projects";
import Experience from "./Components/Exprience";
import Education from "./Components/Education";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      <Intro />
      <div className="bg-yellow-200 h-[45rem] w-[40rem]"></div>
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
