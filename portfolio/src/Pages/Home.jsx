// import { useRef } from "react";
import Hero from "../Componets/Hero";
import ScrollSections from "../Componets/ScrollSections";

function Home({ scrolls, menu }) {
  return (
    <div className="main2">
      <div className="hero-wrapper">
        <Hero scrolls={scrolls} menu={menu} />
      </div>
      <ScrollSections scrolls={scrolls} />
    </div>
  );
}

export default Home;
