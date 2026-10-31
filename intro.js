"use strict";

/* Entry screen: shown once per browser session before the website.
   Just a logo, the tagline and an Enter button. Nothing is stored or sent. */
(function () {
  const gate = document.getElementById("introGate");
  if (!gate) return;

  try {
    if (sessionStorage.getItem("blackspireEntered") === "1") {
      gate.remove();
      return;
    }
  } catch (e) {}

  const button = document.getElementById("introEnter");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.body.classList.add("intro-lock");
  setTimeout(() => button.focus({ preventScroll: true }), reduce ? 0 : 1800);

  function enter() {
    try {
      sessionStorage.setItem("blackspireEntered", "1");
    } catch (e) {}
    gate.classList.add("leaving");
    document.body.classList.remove("intro-lock");
    setTimeout(() => gate.remove(), reduce ? 0 : 700);
    window.scrollTo(0, 0);
  }

  button.addEventListener("click", enter);
})();
