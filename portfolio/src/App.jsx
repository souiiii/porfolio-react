import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const menu = useRef();
  // const logo = useRef();
  useEffect(function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: menu.current,
        start: "2150% top",
        end: "2350% top",
        scrub: true,
        markers: false,
      },
    });
    tl.to(".menu", {
      stroke: "#0D0D0D",
    });
  }, []);
  return (
    <div className="main">
      <div className="menuContainer">
        <svg
          ref={menu}
          className="menuu"
          width="40"
          height="30"
          viewBox="0 0 167 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="menu"
            d="M14 13.5H153"
            stroke="white"
            stroke-width="20"
            stroke-linecap="round"
          />
          <path
            className="menu"
            d="M14 74.5H110"
            stroke="white"
            stroke-width="20"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <Routes>
        <Route path="/" element={<Home menu={menu} />} />
      </Routes>
    </div>
  );
}

export default App;
