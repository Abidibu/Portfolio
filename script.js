/**
 * Abigiya Tigistu — Portfolio (vanilla JS)
 * Mobile menu, smooth scroll, year
 */
(function () {
  "use strict";

  var menuBtn = document.getElementById("menu-btn");
  var drawer = document.getElementById("nav-drawer");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function closeMenu() {
    if (!menuBtn || !drawer) return;
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
    drawer.classList.remove("open");
    document.body.classList.remove("menu-open");
  }

  function openMenu() {
    if (!menuBtn || !drawer) return;
    menuBtn.classList.add("open");
    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.setAttribute("aria-label", "Close menu");
    drawer.classList.add("open");
    document.body.classList.add("menu-open");
  }

  if (menuBtn && drawer) {
    menuBtn.addEventListener("click", function () {
      if (drawer.classList.contains("open")) closeMenu();
      else openMenu();
    });

    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* Smooth scroll for in-page anchors */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      var offset = 64;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });
})();
