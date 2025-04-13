import { useRef } from "react";
import Hero from "../Componets/Hero";
import ScrollSections from "../Componets/ScrollSections";

function Home({ menu }) {
  const scroll = useRef();

  return (
    <div className="main2">
      <div className="hero-wrapper">
        <Hero menu={menu} scroll={scroll} />
      </div>
      <ScrollSections scroll={scroll} />
    </div>
  );
}

export default Home;
