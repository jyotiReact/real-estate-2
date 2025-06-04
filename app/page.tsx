import About from "@/components/sections/about-section";
import Contact from "@/components/sections/cta-section";
import Floorplan from "@/components/sections/floor-plan";
import Hero from "@/components/sections/hero";
import LatestNews from "@/components/sections/latest-news";
import Projects from "@/components/sections/projects";
import Property from "@/components/sections/property";
import Services from "@/components/sections/services";
import Stats from "@/components/sections/stats";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials-section";

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
