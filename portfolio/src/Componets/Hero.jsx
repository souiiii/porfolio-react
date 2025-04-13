import styles from "./Hero.module.css";
import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Hero({ menu }) {
  const spinner = useRef(null);
  const planet = useRef(null);
  const underline = useRef(null);
  const background = useRef(null);
  const logo = useRef(null);
  const log = useRef(null);
  const textContainerr = useRef(null);
  const href1 = useRef(null);
  const href2 = useRef(null);
  const href3 = useRef(null);
  const href4 = useRef(null);
  const href5 = useRef(null);
  const href6 = useRef(null);
  const href7 = useRef(null);
  const infoCard = useRef(null);
  useEffect(
    function () {
      const tllScroll = gsap.timeline({
        scrollTrigger: {
          trigger: menu.current,
          start: "-30% top",
          end: "3000% top",
          scrub: true,
          markers: false,
        },
      });
      tllScroll.to(background.current, {
        opacity: 0,
        ease: "power1.inOut",
      });
    },
    [menu]
  );

  useEffect(
    function () {
      const t = gsap.timeline();
      const h1 = new SplitType(
        [
          href1.current,
          href2.current,
          href3.current,
          href4.current,
          href5.current,
          href6.current,
          href7.current,
        ],
        {
          types: "chars",
        }
      );
      t.set([spinner.current, planet.current], {
        opacity: 0,
        y: 125,
      })
        .set(infoCard.current, { opacity: 0, y: 80 })
        .set(h1.chars, { y: 125 })
        .to(h1.chars, {
          y: 0,
          stagger: 0.03,
          delay: 0.4,
          ease: "power1.inOut",
          duration: 0.1,
        })
        .to(
          infoCard.current,
          {
            opacity: 1,
            duration: 0.5,
            y: 0,
            ease: "power1.inOut",
          },
          "-=0.4"
        )

        .to(
          [spinner.current, planet.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.1,
            ease: "power1.inOut",
            stagger: 0.4,
          },
          "-=1.2"
        )
        .set([log.current, menu.current], { opacity: 0 })
        .to(
          [
            log.current,
            menu.current,
            spinner.current,
            planet.current,
            underline.current,
          ],
          {
            opacity: 1,
            duration: 0.4,
            ease: "powerInOut",
            stagger: 0.2,
          }
        );
    },
    [menu]
  );

  useEffect(() => {
    gsap.to(spinner.current, {
      rotate: 720,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(planet.current, {
      rotate: 20,
      delay: 4,
      duration: 0.2,
      ease: "back.out(1.7)",
    })
      .to(planet.current, {
        rotate: 0,
        duration: 0.2,
        ease: "back.out(1, 1.7)",
      })
      .to(planet.current, {
        rotate: 15,
        duration: 0.25,
        ease: "back.out(1, 1.7)",
      })
      .to(planet.current, {
        rotate: 0,
        duration: 0.25,
        ease: "back.out(1, 1.7)",
      });
    tl.seek(2.6);

    const tllScroll = gsap.timeline({
      scrollTrigger: {
        trigger: log.current,
        start: "-30% top",
        end: "3000% top",
        scrub: true,
        markers: false,
      },
    });
    tllScroll.to(log.current, {
      rotate: 180,
    });

    const backgroundTl = gsap.timeline({ repeat: -1, yoyo: true });
    backgroundTl
      .to(background.current, {
        x: "-12px",
        y: "6px",
        duration: 5,
        ease: "sine.inOut",
      })
      .to(background.current, {
        x: "8px",
        y: "-5px",
        duration: 4.8,
        ease: "sine.inOut",
      })
      .to(background.current, {
        x: "-9px",
        y: "-7px",
        duration: 5.2,
        ease: "sine.inOut",
      })
      .to(background.current, {
        x: "6px",
        y: "5px",
        duration: 5,
        ease: "sine.inOut",
      });

    const textLogoTl = gsap.timeline({ repeat: -1, yoyo: true });
    textLogoTl
      .to([textContainerr.current, logo.current], {
        x: "12px",
        y: "-6px",
        duration: 5,
        ease: "sine.inOut",
      })
      .to([textContainerr.current, logo.current], {
        x: "-8px",
        y: "5px",
        duration: 4.8,
        ease: "sine.inOut",
      })
      .to([textContainerr.current, logo.current], {
        x: "9px",
        y: "7px",
        duration: 5.2,
        ease: "sine.inOut",
      })
      .to([textContainerr.current, logo.current], {
        x: "-6px",
        y: "-5px",
        duration: 5,
        ease: "sine.inOut",
      });
  }, []);

  return (
    <div ref={background} className={styles.heroSection}>
      <nav ref={logo} className={styles.nav}>
        <div className={`${styles.logoContainer}`}>
          <img
            ref={log}
            className={styles.logo}
            src="../assets/imgpng/Logo.png"
            alt=""
          />
        </div>
      </nav>
      <div className={styles.main}>
        <div ref={textContainerr} className={styles.textContainer}>
          <div className={`${styles.heading} ${styles.h1} `}>
            <span ref={href2}>Designs&nbsp;</span>
            <img
              ref={spinner}
              className={styles.star}
              src="../assets/svg/star.svg"
              alt=""
            />
            <span ref={href3}>&nbsp;that</span> <br />
            <span ref={href4}>tell </span>
            <span ref={href5} className={styles.purpleHeading}>
              stories
            </span>{" "}
            <img
              className={styles.planet}
              ref={planet}
              src="../assets/svg/planet-saturn.svg"
              alt=""
            />
          </div>
          <div ref={infoCard} className={styles.infoContainer}>
            <h2 className={styles.secHeading}>
              hi, i am <span className={styles.secHeadPurp}>shahid</span>
            </h2>
            <p className={styles.infoDesc}>
              I am a web developer and designer based in India who crafts sleek,
              scalable, and user-focused digital experiences.
            </p>
          </div>
          <div className={`${styles.heading} ${styles.h2}`}>
            <span ref={href6}>and look</span> <br />{" "}
            <div>
              <span ref={href7} className={styles.stylizedText}>
                Beautiful
              </span>
              <br />
              <img
                className={styles.underline}
                ref={underline}
                src="../assets/svg/needleunderline1.svg"
                alt="Description"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
