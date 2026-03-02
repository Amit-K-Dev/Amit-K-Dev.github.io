"use strict";

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

window.addEventListener("scroll", function () {
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
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerEl.classList.remove("nav-open");
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
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 120) {
      current = section.getAttribute("id");
    }
  });

  navLinksAll.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/* ===================================== */
/* ===== SECTION SCROLL REVEAL ========= */
/* ===================================== */
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
/* =========== MODAL LOGIC ============= */
/* ===================================== */
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal-title");
const modalDescription = document.querySelector(".modal-description");
const modalClose = document.querySelector(".modal-close");

projectCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();

    const title = card.querySelector(".project-title").textContent;
    const description = card.querySelector(".project-text").textContent;

    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.classList.remove("hidden");
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.add("hidden");
});

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
  window.scrollTo({ top: 0, behavior: "smooth" });
});
