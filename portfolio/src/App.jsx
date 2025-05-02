import Lenis from "lenis";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // const menu = useRef();
  const scrolls = useRef(null);
  const project = useRef(null);
  const menu1 = useRef(null);
  const menu2 = useRef(null);
  const menu = useRef(null);
  const spacer = useRef(null);
  const testimonialSec = useRef(null);
  // const logo = useRef();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update(); // Sync ScrollTrigger with Lenis
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const t = gsap.timeline({
      scrollTrigger: {
        trigger: spacer.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        markers: false,
      },
    });

    // t.fromTo(
    //   testimonialSec.current,
    //   { opacity: 0, scale: 1.1 },
    //   { opacity: 1, ease: "power1.inOut", scale: 1 }
    // );

    // Pinned element setup
    ScrollTrigger.create({
      trigger: scrolls.current, // scroll container
      start: "top top",
      end: "bottom top",
      pin: testimonialSec.current, // the element to pin
      pinSpacing: false, // optional, prevents extra space from being added
      markers: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  useEffect(function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrolls.current,
        start: "-3% top",
        end: "top top",
        scrub: true,
        markers: false,
      },
    });
    tl.to([menu1.current, menu2.current], {
      stroke: "#0D0D0D",
    });

    // const animation = gsap.fromTo(
    //   testimonialSec.current,
    //   { opacity: 1 },
    //   { opacity: 1, ease: "linear" }
    // );
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
            ref={menu1}
            className="menu"
            d="M14 13.5H153"
            stroke="white"
            stroke-width="20"
            stroke-linecap="round"
          />
          <path
            ref={menu2}
            className="menu"
            d="M14 74.5H110"
            stroke="white"
            stroke-width="20"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              spacer={spacer}
              menu={menu}
              testimonialSec={testimonialSec}
              scrolls={scrolls}
              project={project}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
