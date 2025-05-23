import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./ScrollSections.module.css";
import Project from "./Project";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

function ScrollSections({ project, spacer }) {
  const rocket = useRef();

  useEffect(function () {
    const tl = gsap.timeline();

    tl.to(
      rocket.current,
      {
        y: -100,
        duration: 0.3,
        opacity: 1,
        ease: "power.inOut",
      },
      "+=1.8"
    ).to(rocket.current, {
      y: -60,
      duration: 0.3,
      ease: "power.inOut",
    });
  }, []);
  return (
    <div className={styles.scrollSection}>
      <svg
        ref={rocket}
        className={styles.rocket}
        fill="#d9d9d9"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="800px"
        height="800px"
        viewBox="0 0 584.23 584.23"
        xml:space="preserve"
      >
        <g>
          <g>
            <path
              d="M472.926,461.678l-75.658-67.626c11.934-58.141,15.988-140.072,2.906-199.436C375.465,81.014,300.496,4.514,300.496,4.514
                  C298.277,1.989,295.14,0.612,292.08,0c-3.06,0-6.196,1.377-8.415,3.902c0,0-74.817,76.5-99.603,189.949
                  c-13.005,59.517-8.95,141.449,2.907,199.436l-75.659,67.626c-10.327,9.256-7.573,16.83,6.426,16.83h91.341l83.079,0.535h83.08
                  h91.341C480.347,478.508,483.331,470.935,472.926,461.678z"
            />
            <path
              d="M187.045,498.551c0.382,28.458,23.638,51.408,52.402,51.408c1.989,0,3.749-0.153,5.584-0.307
                  c7.038,19.508,25.321,33.584,47.047,34.578c21.727-0.994,39.934-15.146,47.048-34.578c1.836,0.153,3.749,0.307,5.585,0.307
                  c28.688,0,51.943-22.95,52.402-51.408H292.08H187.045z"
            />
          </g>
        </g>
      </svg>
      <div ref={project} className={styles.projectSectionWrapper}>
        <div className={styles.projectSection}>
          <Project name="" pic="" lr={1}></Project>
          <Project
            name="Omnifood"
            pic="../../assets/imgpng/websiteomnifood.png"
            lr={2}
          >
            Omnifood is a food delivery website, designed to help users find the
            right diet for them with AI.
          </Project>
          <Project
            name="Omnifood"
            pic="../../assets/imgpng/websiteomnifood.png"
            lr={3}
          >
            Omnifood is a food delivery website, designed to help users find the
            right diet for them with AI.
          </Project>
          <Project
            name="Omnifood"
            pic="../../assets/imgpng/websiteomnifood.png"
            lr={4}
          >
            Omnifood is a food delivery website, designed to help users find the
            right diet for them with AI.
          </Project>
        </div>
      </div>
      <div ref={spacer} className={styles.spacerDiv}></div>
      <div className={styles.footerSectionWrapper}>
        <Footer />
      </div>
    </div>
  );
}

export default ScrollSections;
