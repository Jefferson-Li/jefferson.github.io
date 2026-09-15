(function () {
  var nav = document.getElementById("siteNav");
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (anchor) {
      anchor.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
    );
    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  var filterButtons = document.querySelectorAll(".filter-btn");
  var projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.getAttribute("data-filter") || "all";
      filterButtons.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      projectItems.forEach(function (item) {
        var category = item.getAttribute("data-category");
        var show = filter === "all" || category === filter;
        item.hidden = !show;
      });
    });
  });

  var lightbox = document.getElementById("lightbox");
  var lightboxImage = document.getElementById("lightboxImage");

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImage || !src) return;
    lightboxImage.src = src;
    lightboxImage.alt = alt || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImage) return;
    lightbox.hidden = true;
    lightboxImage.removeAttribute("src");
    lightboxImage.alt = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-full]").forEach(function (el) {
    el.addEventListener("click", function () {
      openLightbox(el.getAttribute("data-full"), el.getAttribute("data-alt"));
    });
  });

  if (lightbox) {
    lightbox.querySelectorAll("[data-close-lightbox]").forEach(function (el) {
      el.addEventListener("click", closeLightbox);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeLightbox();
  });
})();
