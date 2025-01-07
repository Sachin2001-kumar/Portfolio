import Image from "next/image";
import Intro from "./Components/Intro";
import About from "./Components/About";

export default function Home() {
  return (
    <div>
      <Intro/>
      <About/>
    </div>
  );
}
