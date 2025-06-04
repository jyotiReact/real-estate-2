import About from "@/components/sections/about-section";
import Floorplan from "@/components/sections/floor-plan";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Property from "@/components/sections/property";
import Services from "@/components/sections/services";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Property />
      <Projects />
      <Floorplan />
      {/* <Stats />
      <Team />
      <Testimonials /> */}
      {/* <LatestNews /> */}
      {/* <Contact /> */}
    </>
  );
}
