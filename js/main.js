(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Smooth-ish anchor
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
  });

  if (reduceMotion) {
    document.querySelectorAll(".reveal").forEach(el => {
      el.style.opacity = 1;
      el.style.transform = "none";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  gsap.fromTo(".hero__img", { scale: 1.06 }, { scale: 1.0, duration: 1.4, ease: "power2.out" });

  // Parallax leve no hero
  const parallax = document.querySelector("[data-parallax]");
  if (parallax) {
    gsap.to(parallax, {
      yPercent: 8,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }

  // Reveal on scroll
  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      }
    });
  });

  // Header shadow a partir do scroll
  ScrollTrigger.create({
    start: 10,
    onUpdate: (self) => {
      const header = document.querySelector(".header");
      header.style.boxShadow = self.scroll() > 10 ? "0 10px 30px rgba(0,0,0,.06)" : "none";
    }
  });
})();
