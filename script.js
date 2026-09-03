/* =====================================================
   KATIE FU — INTERACTIONS
   ===================================================== */

// 平滑滾動錨點監聽
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 滾動顯現動畫 (Intersection Observer)
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
  { threshold: 0.12 }
);

revealElements.forEach(element => {
  observer.observe(element);
});

// 導覽列滾動陰影與首圖微視差位移
const navbar = document.querySelector(".navbar");
const heroImage = document.getElementById("heroImage");

// 檢查本地是否已有 hero-bg.jpg，若有則自動載入為背景
const testHeroImg = new Image();
testHeroImg.src = "images/hero-bg.jpg";
testHeroImg.onload = () => {
  if (heroImage) {
    heroImage.style.backgroundImage = "url('images/hero-bg.jpg')";
  }
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 25px rgba(0, 0, 0, 0.08)";
  } else {
    navbar.style.boxShadow = "none";
  }

  const scrollPosition = window.scrollY;
  if (heroImage && scrollPosition < window.innerHeight) {
    heroImage.style.transform = `scale(1.03) translateY(${scrollPosition * 0.15}px)`;
  }
});
