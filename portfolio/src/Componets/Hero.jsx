import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroSection}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="../assets/imgpng/Logo.png" alt="" />
        </div>
        <div className={styles.menuContainer}>
          <img
            className={styles.menu}
            src="../assets/imgpng/menuButton.png"
            alt=""
          />
        </div>
      </nav>
      <div className={styles.main}>
        <div className={styles.textContainer}>
          <div className={`${styles.heading} ${styles.h1} `}>
            Designs&nbsp;
            <img className={styles.star} src="../assets/svg/star.svg" alt="" />
            &nbsp;that <br />
            tell <span className={styles.purpleHeading}>stories</span>{" "}
            <img
              className={styles.planet}
              src="../assets/svg/planet-saturn.svg"
            />
          </div>
          <div className={styles.infoContainer}>
            <h2 className={styles.secHeading}>
              hi, i am <span className={styles.secHeadPurp}>shahid</span>
            </h2>
            <p className={styles.infoDesc}>
              I am a web developer and designer based in India who crafts sleek,
              scalable, and user-focused digital experiences.
            </p>
          </div>
          <div className={`${styles.heading} ${styles.h2}`}>
            and look <br />{" "}
            <div>
              <span className={styles.stylizedText}>Beautiful</span>
              <br />
              <img
                className={styles.underline}
                src="../assets/svg/needleunderline1.svg"
                alt="Description"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rocketContainer}>
        <img className={styles.rocket} src="../assets/svg/rocket.svg" alt="" />
      </div>
    </div>
  );
}

export default Hero;
