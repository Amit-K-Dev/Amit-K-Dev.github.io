"use strict";

document.documentElement.style.scrollBehavior = "smooth";

/* ===================================== */
/* ========== PAGE FADE IN ============= */
/* ===================================== */

window.addEventListener("load", () => {
  document.querySelector(".page-wrapper").classList.add("loaded");
});

const texts = [
  "Data Analyst",
  "SQL Specialist",
  "Power BI Developer",
  "Dashboard Builder",
  "Python",
];

let count = 0;
let index = 0;

const type = function () {
  const currentText = texts[count];
  document.querySelector("#typing").textContent = currentText.slice(0, ++index);

  if (index === currentText.length) {
    setTimeout(() => {
      index = 0;
      count = (count + 1) % texts.length;
    }, 1500);
  }
  setTimeout(type, 100);
};

type();

/* ===================================== */
/* ====== STICKY NAV ON SCROLL ========= */
/* ===================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ===================================== */
/* ===== MOBILE NAV TOGGLE ============= */
/* ===================================== */

const btnMobileNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnMobileNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  document.body.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerEl.classList.remove("nav-open");
  });
});

/* ===================================== */
/* ===== SMOOTH NAVIGATION SCROLL ====== */
/* ===================================== */

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = this.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* ===================================== */
/* ===== ACTIVE NAV LINK ON SCROLL ===== */
/* ===================================== */

const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinksAll.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* ===================================== */
/* ===== SECTION SCROLL REVEAL ========= */
/* ===================================== */

// Run scroll reveal only on homepage
if (!document.body.classList.contains("project-page")) {
  const allSections = document.querySelectorAll(".section");

  const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.add("reveal");
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  allSections.forEach((section) => {
    sectionObserver.observe(section);
  });
}

/* ===================================== */
/* ===== STAGGER PROJECT CARDS ========= */
/* ===================================== */

const projectSection = document.querySelector("#projects");
const projectCards = document.querySelectorAll(".project-card");

const revealCards = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  projectCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("card-reveal");
    }, index * 150); // 150ms stagger
  });

  observer.unobserve(projectSection);
};

const projectObserver = new IntersectionObserver(revealCards, {
  root: null,
  threshold: 0.2,
});

projectObserver.observe(projectSection);

/* ===================================== */
/* ===== FOOTER REAVEAL OBSERVER ======= */
/* ===================================== */

const footerEl = document.querySelector(".footer");

const footerObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    footerEl.classList.add("footer-reveal");
    observer.unobserve(entry.target);
  },
  { threshold: 0.2 },
);

footerObserver.observe(footerEl);

/* ===================================== */
/* =========== DYNAMC YEAR ============= */
/* ===================================== */

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/* ===================================== */
/* =========== BACK TO TOP ============= */
/* ===================================== */

const btnTop = document.querySelector(".btn-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* ===================================== */
/* ==== SCROLL PROGRESS INDICATOR ====== */
/* ===================================== */

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;

  progressBar.style.width = progress + "%";
});

/* ===================================== */
/* =========== SKILLS STATS ============ */
/* ===================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    counters.forEach((counter) => {
      const target = +counter.dataset.target;
      let count = 0;
      const increment = target / 40;

      const update = () => {
        count += increment;
        if (count < target) {
          counter.textContent = Math.ceil(count);
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      };

      update();
    });

    observer.disconnect();
  },
  { threshold: 0.3 },
);

counterObserver.observe(document.querySelector(".skills-section"));
