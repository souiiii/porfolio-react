// import { useRef } from "react";
import { useRef } from "react";
import Hero from "../Componets/Hero";
import ScrollSections from "../Componets/ScrollSections";
import Testimonials from "../Componets/Testimonials";

function Home({ scrolls, spacer, menu, project, testimonialSec }) {
  const background2 = useRef(null);
  return (
    <div className="main2">
      <div className="hero-wrapper">
        <Hero scrolls={scrolls} background2={background2} menu={menu} />
      </div>
      <div ref={testimonialSec} className="testimonialSectionWrapper">
        <Testimonials background2={background2} />
      </div>
      <div ref={scrolls} className="scrollSectionWrapper">
        <ScrollSections spacer={spacer} project={project} scrolls={scrolls} />
      </div>
    </div>
  );
}

export default Home;
