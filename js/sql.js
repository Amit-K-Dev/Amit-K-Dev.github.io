"use strict";

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

// Copy SQL Code Buttons
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const code = btn.parentElement.querySelector("code").innerText;

    navigator.clipboard.writeText(code);

    btn.innerHTML = "Copied!";

    setTimeout(() => {
      btn.innerHTML = `<ion-icon name="clipboard-outline"></ion-icon> Copy SQL`;
    }, 1500);
  });
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
