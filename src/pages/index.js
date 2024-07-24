import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";
import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Technologies from "@/components/Tech/Technologies";
import { Section } from "@/styles/GlobalComponents";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Technologies />
      <Projects />


    </>
  );
}
