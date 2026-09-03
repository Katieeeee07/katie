/* =====================================================
   KATIE FU — INTERACTIONS
   ===================================================== */

// 平滑滾動錨點監聽
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 滾動元素顯現動畫 (Intersection Observer)
const revealElements = document.querySelectorAll(".reveal");

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

// 導覽列陰影與 Hero 首頁視差滾動效果
const navbar = document.querySelector(".navbar");
const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {
  // 導覽列滾動陰影
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";
  } else {
    navbar.style.boxShadow = "none";
  }

  // 首圖微視差位移
  const scrollPosition = window.scrollY;
  if (heroImage && scrollPosition < window.innerHeight) {
    heroImage.style.transform = `scale(1.03) translateY(${scrollPosition * 0.15}px)`;
  }
});
