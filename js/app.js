gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".hero-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",
        end: "820",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    ".skills_wrapper",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".skills_wrapper",
        start: "center",
        end: "850",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    ".bottom1",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".bottom1",
        start: "center",
        end: "250",
        scrub: true,
      },
    }
  );
}
