// useEffect(function () {
// const tll = gsap.timeline({ repeat: -1, yoyo: true });
// tll
// .to([textContainerr.current, logo.current], {
// x: "10px",
// y: "-4px",
// duration: 4,
// ease: "sine.inOut",
// })
// .to([textContainerr.current, logo.current], {
// x: "-10px",
// y: "4px",
// duration: 4,
// ease: "sine.inOut",
// })
// .to([textContainerr.current, logo.current], {
// x: "10px",
// y: "4px",
// duration: 4,
// ease: "sine.inOut",
// })
// .to([textContainerr.current, logo.current], {
// x: "-10px",
// y: "-4px",
// duration: 4,
// ease: "sine.inOut",
// });
// }, []);

// const t = gsap.timeline({ repeat: -1, yoyo: true });

    // t.to(background.current, {
    //   x: "-10px",
    //   y: "4px",
    //   duration: 4,
    //   ease: "sine.inOut",
    // })
    //   .to(background.current, {
    //     x: "10px",
    //     y: "-4px",
    //     duration: 4,
    //     ease: "sine.inOut",
    //   })
    //   .to(background.current, {
    //     x: "-10px",
    //     y: "-4px",
    //     duration: 4,
    //     ease: "sine.inOut",
    //   })
    //   .to(background.current, {
    //     x: "10px",
    //     y: "4px",
    //     duration: 4,
    //     ease: "sine.inOut",
    //   });

// useEffect(function () {
// gsap.to(spinner.current, {
// rotate: 720,
// duration: 4,
// ease: "sine.inOut",
// yoyo: true,
// repeat: -1,
// });
// const tl = gsap.timeline({ repeat: -1 });
// tl.to(planet.current, {
// rotate: 20,
// delay: 4,
// duration: 0.2,
// ease: "back.out(1.7)",
// })
// .to(planet.current, {
// rotate: 0,
// duration: 0.2,
// ease: "back.out(1, 1.7)",
// })
// .to(planet.current, {
// rotate: 15,
// duration: 0.25,
// ease: "back.out(1, 1.7)",
// })
// .to(planet.current, {
// rotate: 0,
// duration: 0.25,
// ease: "back.out(1, 1.7)",
// });
// }, []);

// useEffect(() => {
// const t = gsap.timeline({ repeat: -1, yoyo: true });
// const tll = gsap.timeline({
// scrollTrigger: {
// trigger: log.current,
// start: "-30% top",
// end: "3000% top",
// scrub: true,
// markers: true,
// },
// });
// tll.to(log.current, {
// rotate: 180,
// });
// t.to(background.current, {
// x: "-12px",
// y: "6px",
// duration: 5,
// ease: "sine.inOut",
// })
// .to(background.current, {
// x: "8px",
// y: "-5px",
// duration: 4.8,
// ease: "sine.inOut",
// })
// .to(background.current, {
// x: "-9px",
// y: "-7px",
// duration: 5.2,
// ease: "sine.inOut",
// })
// .to(background.current, {
// x: "6px",
// y: "5px",
// duration: 5,
// ease: "sine.inOut",
// });
// }, []);

// useEffect(() => {
// const tll = gsap.timeline({ repeat: -1, yoyo: true });

// tll
// .to([textContainerr.current, logo.current], {
// x: "12px",
// y: "-6px",
// duration: 5,
// ease: "sine.inOut",
// })
// .to([textContainerr.current, logo.current], {
// x: "-8px",
// y: "5px",
// duration: 4.8,
// ease: "sine.inOut",
// })
// .to([textContainerr.current, logo.current], {
// x: "9px",
// y: "7px",
// duration: 5.2,
// ease: "sine.inOut",
// })
// .to([textContainerr.current, logo.current], {
// x: "-6px",
// y: "-5px",
// duration: 5,
// ease: "sine.inOut",
// });
// }, []);

// useEffect(function () {
// const tl = gsap.timeline({
// scrollTrigger: {
// trigger: scroll.current,
// start: "top bottom",
// end: "20% bottom",
// scrub: true,
// markers: true,
// },
// });
// tl.to([scroll.current, rocket.current], {
// translateY: "-100vh",
// ease: "sine",
// });
// }, []);

<!--


{/* <img
          ref={rocket}
          className={styles.rocket}
          src="../assets/svg/rocket.svg"
          alt=""
        /> */} -->

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
}
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
        .to([log.current, menu.current, spinner.current, planet.current, planet.underline], {
          opacity: 1,
          duration: 0.4,
          ease: "powerInOut",
          stagger: 0.2,
        })

    },
    [menu]

);
