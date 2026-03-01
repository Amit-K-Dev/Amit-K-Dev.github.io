"use strict";

const texts = [
  "Data Analyst",
  "SQL Specialist",
  "Power BI Developer",
  "Dashboard Builder",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
      setTimeout(type, 300);
    }, 1500);
  } else {
    setTimeout(type, 80);
  }
})();
