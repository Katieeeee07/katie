/* =====================================================
   KATIE AU — INTERACTIONS
   ===================================================== */


/* ===============================
   Smooth Scroll
================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});


/* ===============================
   Scroll Reveal Animation
================================ */

const revealElements =
  document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


revealElements.forEach(element => {

  observer.observe(element);

});


/* ===============================
   Navbar Effect
================================ */

const navbar =
  document.querySelector(".navbar");


window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.boxShadow =
      "0 5px 25px rgba(0,0,0,0.08)";

  } else {

    navbar.style.boxShadow = "none";

  }

});


/* ===============================
   Hero Parallax
================================ */

const heroImage =
  document.querySelector(".hero-image");


window.addEventListener("scroll", () => {

  const scrollPosition =
    window.scrollY;

  if (scrollPosition < window.innerHeight) {

    heroImage.style.transform =
      `scale(1.03) translateY(${scrollPosition * 0.15}px)`;

  }

});