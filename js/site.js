(function () {
  var STORAGE_KEY = "jefferson-lang";

  var dict = {
    zh: {
      "meta.title": "程式遊俠 Jefferson",
      "meta.description": "程式遊俠 Jefferson — Backend / AI / App / Web 開發者作品集",
      "brand.name": "程式遊俠",
      "nav.toggle": "開啟選單",
      "nav.main": "主要選單",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.showcase": "Works",
      "nav.contact": "Contact",
      "hero.aria": "首頁介紹",
      "hero.media": "程式碼與紅色背光鍵盤",
      "hero.headline": "後端出身，持續探索 AI、App 與跨平台開發",
      "hero.ctaProjects": "查看專案",
      "about.label": "About",
      "about.title": "用程式在不同技術棧之間遊走",
      "about.p1":
        "我是 Jefferson，品牌「程式遊俠」代表我對技術的態度：以 Java / Spring Boot 後端為根基，也動手做 Python 工具與跨平台繪圖 App，並持續把 AI 能力接到實際產品裡。",
      "about.p2":
        "近期作品包含醫療營運 MCP 專案 CareOps、本機文件轉換服務 Doc2Any，以及用 React Native、Flutter、Python 實作的繪圖系列。",
      "projects.careops":
        "醫療營運 MCP：串接模擬 CareOS、OCR、合規與班表工具，並附 Test Console 瀏覽器檢查清單。",
      "about.focus": "Focus",
      "about.contact": "Contact",
      "skills.label": "Skills",
      "skills.title": "技術地圖",
      "skills.lead": "從後端 API 到行動端與本機工具，依實際專案整理。",
      "skills.backend": "Backend",
      "skills.languages": "Languages & Tools",
      "skills.app": "App & Frontend",
      "skills.product": "Product focus",
      "skills.tag.doc": "Document conversion",
      "skills.tag.local": "Local tooling",
      "skills.tag.ai": "AI integration",
      "skills.tag.api": "API design",
      "projects.label": "GitHub Projects",
      "projects.title": "開源與實驗專案",
      "projects.lead":
        '整理自我 <a class="text-link" href="https://github.com/Jefferson-Li?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a> 中有實質內容的公開倉庫。',
      "projects.filterAria": "專案分類",
      "projects.filter.all": "全部",
      "projects.filter.tool": "工具",
      "projects.filter.app": "App",
      "projects.filter.backend": "Backend",
      "projects.featured": "Featured",
      "projects.chip.tool": "Tool",
      "projects.doc2any": "本機文件轉換：PDF ↔ DOCX、圖片互轉，支援視覺保版與可編輯重建。",
      "projects.rnDrawing": "跨平台繪圖 App，支援 iOS / Android，可調整筆刷與顏色。",
      "projects.flutterDrawing": "Flutter 繪圖實作：自由繪製、選色、筆刷粗細與一鍵清除。",
      "projects.pyDrawing": "以 Tkinter 打造的簡潔桌面繪圖程式。",
      "projects.coindesk": "Spring Boot 整合 CoinDesk 匯率 API，含幣別維護與多支 REST 端點。",
      "projects.h2": "Spring Boot RESTful API，搭配 H2 的 CRUD 示範。",
      "projects.websocket": "即時通訊與 WebSocket 整合練習。",
      "projects.rabbitmq": "訊息佇列與非同步處理示範。",
      "showcase.label": "Selected Works",
      "showcase.title": "過往作品精選",
      "showcase.lead": "點擊畫面可放大預覽；有公開連結的作品可另外開啟網站或倉庫。",
      "showcase.zoom": "放大畫面",
      "showcase.openSite": "開啟網站",
      "showcase.careops.alt": "CareOps Test Console 畫面",
      "showcase.careops.zoomAria": "放大 CareOps Test Console 畫面",
      "showcase.doc2any.alt": "Doc2Any 網站畫面",
      "showcase.doc2any.zoomAria": "放大 Doc2Any 畫面",
      "showcase.audync.alt": "Audync App 畫面",
      "showcase.audync.zoomAria": "放大 Audync 畫面",
      "showcase.rn.alt": "React Native Drawing App 畫面",
      "showcase.rn.zoomAria": "放大 React Native Drawing 畫面",
      "showcase.flutter.alt": "Flutter Drawing App 畫面",
      "showcase.flutter.zoomAria": "放大 Flutter Drawing 畫面",
      "showcase.py.alt": "Python Drawing App 畫面",
      "showcase.py.zoomAria": "放大 Python Drawing 畫面",
      "showcase.funtutu.alt": "Funtutu 網站畫面",
      "showcase.funtutu.zoomAria": "放大 Funtutu 畫面",
      "showcase.jubaoge.name": "聚寶閣",
      "showcase.jubaoge.alt": "聚寶閣網站畫面",
      "showcase.jubaoge.zoomAria": "放大聚寶閣畫面",
      "contact.label": "Contact",
      "contact.title": "一起討論下一個專案",
      "contact.lead": "有合作、職缺或技術交流，歡迎寄信或上 GitHub 看看。",
      "contact.email": "寄信給我",
      "contact.github": "GitHub Profile",
      "footer.copy": "© 2019–2026 程式遊俠 Jefferson",
      "footer.built": "Built for GitHub Pages",
      "lightbox.aria": "作品畫面預覽",
      "lightbox.close": "關閉預覽"
    },
    en: {
      "meta.title": "Code Ranger Jefferson",
      "meta.description":
        "Code Ranger Jefferson — Backend / AI / App / Web developer portfolio",
      "brand.name": "Code Ranger",
      "nav.toggle": "Open menu",
      "nav.main": "Main navigation",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.showcase": "Works",
      "nav.contact": "Contact",
      "hero.aria": "Introduction",
      "hero.media": "Code editor and red backlit keyboard",
      "hero.headline":
        "Backend-first engineer exploring AI, apps, and cross-platform development",
      "hero.ctaProjects": "View projects",
      "about.label": "About",
      "about.title": "Building across stacks with a product mindset",
      "about.p1":
        "I'm Jefferson. “Code Ranger” is how I approach tech: grounded in Java / Spring Boot, while shipping Python tools and cross-platform drawing apps—and wiring AI into real products.",
      "about.p2":
        "Recent work includes CareOps (healthcare ops MCP), Doc2Any (local document converter), and drawing apps built with React Native, Flutter, and Python.",
      "projects.careops":
        "Healthcare ops MCP: mock CareOS, OCR, compliance and roster tools, plus a browser Test Console checklist.",
      "about.focus": "Focus",
      "about.contact": "Contact",
      "skills.label": "Skills",
      "skills.title": "Skill map",
      "skills.lead":
        "From backend APIs to mobile and local tooling—organized by real projects.",
      "skills.backend": "Backend",
      "skills.languages": "Languages & Tools",
      "skills.app": "App & Frontend",
      "skills.product": "Product focus",
      "skills.tag.doc": "Document conversion",
      "skills.tag.local": "Local tooling",
      "skills.tag.ai": "AI integration",
      "skills.tag.api": "API design",
      "projects.label": "GitHub Projects",
      "projects.title": "Open source & experiments",
      "projects.lead":
        'Substantial public repos from my <a class="text-link" href="https://github.com/Jefferson-Li?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>.',
      "projects.filterAria": "Project categories",
      "projects.filter.all": "All",
      "projects.filter.tool": "Tools",
      "projects.filter.app": "App",
      "projects.filter.backend": "Backend",
      "projects.featured": "Featured",
      "projects.chip.tool": "Tool",
      "projects.doc2any":
        "Local document conversion: PDF ↔ DOCX and image formats, with visual fidelity and editable rebuild modes.",
      "projects.rnDrawing":
        "Cross-platform drawing app for iOS / Android with brush and color controls.",
      "projects.flutterDrawing":
        "Flutter drawing app with freehand drawing, color picker, brush size, and clear canvas.",
      "projects.pyDrawing": "A clean desktop drawing app built with Python Tkinter.",
      "projects.coindesk":
        "Spring Boot integration with the CoinDesk FX API, including currency CRUD and multiple REST endpoints.",
      "projects.h2": "Spring Boot RESTful API demo with H2 CRUD.",
      "projects.websocket": "Realtime messaging practice with Spring Boot WebSocket.",
      "projects.rabbitmq": "Message queue and async processing demo with RabbitMQ.",
      "showcase.label": "Selected Works",
      "showcase.title": "Selected works",
      "showcase.lead":
        "Click a screenshot to enlarge. Where a public link exists, open the site or repository separately.",
      "showcase.zoom": "Enlarge",
      "showcase.openSite": "Open site",
      "showcase.careops.alt": "CareOps Test Console screenshot",
      "showcase.careops.zoomAria": "Enlarge CareOps Test Console screenshot",
      "showcase.doc2any.alt": "Doc2Any website screenshot",
      "showcase.doc2any.zoomAria": "Enlarge Doc2Any screenshot",
      "showcase.audync.alt": "Audync app screenshot",
      "showcase.audync.zoomAria": "Enlarge Audync screenshot",
      "showcase.rn.alt": "React Native Drawing App screenshot",
      "showcase.rn.zoomAria": "Enlarge React Native Drawing screenshot",
      "showcase.flutter.alt": "Flutter Drawing App screenshot",
      "showcase.flutter.zoomAria": "Enlarge Flutter Drawing screenshot",
      "showcase.py.alt": "Python Drawing App screenshot",
      "showcase.py.zoomAria": "Enlarge Python Drawing screenshot",
      "showcase.funtutu.alt": "Funtutu website screenshot",
      "showcase.funtutu.zoomAria": "Enlarge Funtutu screenshot",
      "showcase.jubaoge.name": "JuBaoGe",
      "showcase.jubaoge.alt": "JuBaoGe website screenshot",
      "showcase.jubaoge.zoomAria": "Enlarge JuBaoGe screenshot",
      "contact.label": "Contact",
      "contact.title": "Let's talk about the next project",
      "contact.lead":
        "For collaboration, roles, or tech chats—email me or check out GitHub.",
      "contact.email": "Email me",
      "contact.github": "GitHub Profile",
      "footer.copy": "© 2019–2026 Code Ranger Jefferson",
      "footer.built": "Built for GitHub Pages",
      "lightbox.aria": "Work screenshot preview",
      "lightbox.close": "Close preview"
    }
  };

  function t(lang, key) {
    return (dict[lang] && dict[lang][key]) || (dict.zh && dict.zh[key]) || key;
  }

  function applyLang(lang) {
    if (!dict[lang]) lang = "zh";
    document.documentElement.lang = lang === "en" ? "en" : "zh-Hant";
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(lang, key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = t(lang, key);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (!key) return;
      el.setAttribute("aria-label", t(lang, key));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (!key) return;
      var value = t(lang, key);
      el.setAttribute("alt", value);
      if (el.hasAttribute("data-alt")) el.setAttribute("data-alt", value);
    });

    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-content");
      if (!key) return;
      el.setAttribute("content", t(lang, key));
    });

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var active = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "zh" || saved === "en") return saved;
    } catch (e) {}
    var browser = (navigator.language || "").toLowerCase();
    if (browser.indexOf("zh") === 0) return "zh";
    return "en";
  }

  var currentLang = detectLang();
  applyLang(currentLang);

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = btn.getAttribute("data-set-lang");
      if (!next || next === currentLang) return;
      currentLang = next;
      applyLang(currentLang);
    });
  });

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
