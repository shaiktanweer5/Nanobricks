(function () {
  "use strict";
  // =========================
  // Mobile Navigation Toggle
  // =========================
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const navbar = document.querySelector("#navbar");
  if (mobileNavToggle && navbar) {
    mobileNavToggle.addEventListener("click", function () {
      navbar.classList.toggle("navbar-mobile");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });
  }
  // =========================
  // Back To Top Button
  // =========================
  const backtotop = document.querySelector(".back-to-top");
  if (backtotop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    });
  }
  // =========================
  // Loader Hide After Page Load
  // =========================
  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(function () {
        loader.style.display = "none";
      }, 500);
    }
  });
})();
