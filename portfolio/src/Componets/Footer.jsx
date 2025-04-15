import { useEffect, useRef } from "react";
import styles from "./Footer.module.css";
import gsap from "gsap";

function Footer() {
  const catchLine1 = useRef(null);
  const catchLine2 = useRef(null);
  const catchLine3 = useRef(null);

  useEffect(function () {
    const tween = gsap.to(
      [catchLine1.current, catchLine2.current, catchLine3.current],
      {
        xPercent: -100,
        repeat: -1,
        duration: 5,
        ease: "linear",
      }
    );
    return () => tween.kill();
  }, []);
  return (
    <div className={styles.footerSection}>
      <div className={styles.divCatchLine}>
        <div ref={catchLine1} className={styles.footerCatchLine}>
          Your <span className={styles.fclPurple}>vision</span>, My{" "}
          <span className={styles.fclPurple}>design</span>.&nbsp;
        </div>
        <div ref={catchLine2} className={styles.footerCatchLine}>
          Your <span className={styles.fclPurple}>vision</span>, My{" "}
          <span className={styles.fclPurple}>design</span>.&nbsp;
        </div>
        <div ref={catchLine3} className={styles.footerCatchLine}>
          Your <span className={styles.fclPurple}>vision</span>, My{" "}
          <span className={styles.fclPurple}>design</span>.&nbsp;
        </div>
      </div>
      <div className={styles.footerBody}>
        <ul className={styles.socials}>
          <li className={styles.socialLinkItem}>
            <a className={styles.socialLink} href="#">
              Instagram
              <svg
                className={styles.arrowsvg}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M10.2083 10.2082H22.7296L7.71896 25.2188L9.78105 27.2809L24.7917 12.2703V24.7915H27.7083V7.2915H10.2083V10.2082Z"
                  fill="#D9D9D9"
                />
              </svg>
            </a>
          </li>
          <li className={styles.socialLinkItem}>
            <a className={styles.socialLink} href="#">
              Reddit
              <svg
                className={styles.arrowsvg}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M10.2083 10.2082H22.7296L7.71896 25.2188L9.78105 27.2809L24.7917 12.2703V24.7915H27.7083V7.2915H10.2083V10.2082Z"
                  fill="#D9D9D9"
                />
              </svg>
            </a>
          </li>
          <li className={styles.socialLinkItem}>
            <a className={styles.socialLink} href="#">
              Youtube
              <svg
                className={styles.arrowsvg}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M10.2083 10.2082H22.7296L7.71896 25.2188L9.78105 27.2809L24.7917 12.2703V24.7915H27.7083V7.2915H10.2083V10.2082Z"
                  fill="#D9D9D9"
                />
              </svg>
            </a>
          </li>
          <li className={styles.socialLinkItem}>
            <a className={styles.socialLink} href="#">
              Github
              <svg
                className={styles.arrowsvg}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M10.2083 10.2082H22.7296L7.71896 25.2188L9.78105 27.2809L24.7917 12.2703V24.7915H27.7083V7.2915H10.2083V10.2082Z"
                  fill="#D9D9D9"
                />
              </svg>
            </a>
          </li>
        </ul>
        <p className={styles.endNote}>
          I’m currently available for new work, let me know if you need a
          product designer. I’d love to talk about the next big thing!
        </p>
        <p className={styles.email}>wudonno@gmail.com</p>
        <p className={styles.tag}>
          @Crafted by <span className={styles.tagPurple}>Shahid</span>
        </p>
        <p className={styles.topButton}>&uarr; Back to top</p>
      </div>
    </div>
  );
}

export default Footer;
