// import { useRef } from "react";
import Hero from "../Componets/Hero";
import ScrollSections from "../Componets/ScrollSections";
import Testimonials from "../Componets/Testimonials";

function Home({ scrolls, spacer, menu, project, testimonialSec }) {
  return (
    <div className="main2">
      <div className="hero-wrapper">
        <Hero scrolls={scrolls} menu={menu} />
      </div>
      <div ref={testimonialSec} className="testimonialSectionWrapper">
        <Testimonials />
      </div>
      <div ref={scrolls} className="scrollSectionWrapper">
        <ScrollSections spacer={spacer} project={project} scrolls={scrolls} />
      </div>
    </div>
  );
}

export default Home;
