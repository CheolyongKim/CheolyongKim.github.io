// ============================================================
// main.js — umanodesign 클론 인터랙션
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  render();
  initNav();
  initHeroWordRotation();
  initHeroScrollEffect();
  initStickyTextReveal();
  initScrollReveal();
  initAccordion();
  initMobileNav();


  // ────────────────────────────────────────
  // RENDER
  // ────────────────────────────────────────

  function render() {
    var D = SITE_DATA;

    // Nav
    var navLogo = document.getElementById('nav-logo');
    var navLinks = document.getElementById('nav-links');
    var navMobile = document.getElementById('nav-mobile');
    if (navLogo) navLogo.textContent = D.nav.logo;
    if (navLinks) {
      navLinks.innerHTML = D.nav.links.map(function (l) {
        return '<a href="#' + l.id + '">' + l.label + '</a>';
      }).join('');
    }
    if (navMobile) {
      navMobile.innerHTML = D.nav.links.concat([{ label: D.nav.ctaLabel, id: D.nav.ctaId }])
        .map(function (l) {
          return '<a href="#' + l.id + '">' + l.label + '</a>';
        }).join('');
    }

    // Hero
    var heroTitle = document.getElementById('hero-title');
    var heroSub = document.getElementById('hero-sub');

    if (heroTitle) {
      heroTitle.innerHTML =
        '<span class="line-wrap"><span class="line-inner">' + D.hero.titleTop + '</span></span>' +
        '<span class="line-wrap"><span class="line-inner">' + D.hero.titleBottom + '</span></span>';
    }

    if (heroSub) {
      heroSub.innerHTML =
        D.hero.rotatingPrefix + ' ' +
        '<span class="rotating-word" id="rotating-word">' +
          '<strong>' + D.hero.rotatingWords[0] + '</strong>' +
        '</span>' +
        ' ' + D.hero.rotatingSuffix;
    }

    // Sticky text
    var stickyP = document.getElementById('sticky-paragraph');
    if (stickyP) {
      stickyP.innerHTML = D.stickyText.words.map(function (w) {
        return '<span class="sw">' + w + '</span>';
      }).join(' ');
    }

    // Tech
    var techLabel = document.getElementById('tech-label');
    var techGrid = document.getElementById('tech-grid');
    if (techLabel) techLabel.textContent = D.tech.label;
    if (techGrid) {
      techGrid.innerHTML = D.tech.items.map(function (t, i) {
        return '<div class="tech-card" data-delay="' + (i * 100) + '">' +
               '<div class="tech-icon"><i class="' + t.icon + '"></i></div>' +
               '<div class="tech-name">' + t.name + '</div>' +
               '<div class="tech-desc">' + t.desc + '</div></div>';
      }).join('');
    }

    // Projects
    var projLabel = document.getElementById('projects-label');
    var projGrid = document.getElementById('project-grid');
    if (projLabel) projLabel.textContent = D.projects.label;
    if (projGrid) {
      projGrid.innerHTML = D.projects.items.map(function (p, i) {
        return '<div class="project-card" data-delay="' + (i * 80) + '">' +
               '<div class="project-thumb">' +
                 '<img src="' + p.image + '" alt="' + p.title + '" ' +
                   'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
                 '<div class="fallback-icon" style="display:none"><i class="' + p.icon + '"></i></div>' +
               '</div>' +
               '<div class="project-body">' +
                 '<div class="project-title">' + p.title + '</div>' +
                 '<div class="project-desc">' + p.desc + '</div>' +
                 '<div class="project-tag">' + p.tag + '</div>' +
               '</div></div>';
      }).join('');
    }

    // Timeline / Accordion
    var tlH = document.getElementById('tl-heading');
    var tlS = document.getElementById('tl-subtext');
    var acc = document.getElementById('accordion');
    if (tlH) tlH.textContent = D.timeline.heading;
    if (tlS) tlS.textContent = D.timeline.subtext;
    if (acc) {
      acc.innerHTML = D.timeline.items.map(function (item, i) {
        return '<div class="acc-item" data-idx="' + i + '">' +
               '<button class="acc-trigger">' +
                 '<div class="acc-icon">' +
                   '<svg viewBox="0 0 24 24" fill="none">' +
                     '<line x1="8" y1="12" x2="16" y2="12" class="horiz"></line>' +
                     '<line x1="12" y1="8" x2="12" y2="16" class="vert"></line>' +
                   '</svg>' +
                 '</div>' +
                 '<span class="acc-question">' + item.q + '</span>' +
               '</button>' +
               '<div class="acc-body">' +
                 '<div class="acc-answer">' + item.a + '</div>' +
               '</div></div>';
      }).join('');
    }

    // Contact
    var cH = document.getElementById('contact-heading');
    var cG = document.getElementById('contact-grid');
    if (cH) cH.textContent = D.contact.heading;
    if (cG) {
      cG.innerHTML = D.contact.items.map(function (c) {
        return '<div class="contact-row">' +
               '<p class="contact-label">' + c.label + '</p>' +
               '<a class="contact-value" href="' + c.href + '"' +
               (c.href.indexOf('http') === 0 ? ' target="_blank" rel="noopener"' : '') +
               '>' + c.value + '</a></div>';
      }).join('');
    }

    // Footer
    var ft = document.getElementById('footer-text');
    if (ft) ft.textContent = D.footer.copy;
  }


  // ────────────────────────────────────────
  // NAV — scroll-direction hide/show
  // ────────────────────────────────────────

  function initNav() {
    var nav = document.getElementById('site-nav');
    if (!nav) return;
    var lastY = 0;
    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var y = window.scrollY;
          if (y > 120) {
            if (y > lastY + 5) nav.classList.add('nav-hidden');
            else if (y < lastY - 5) nav.classList.remove('nav-hidden');
          } else {
            nav.classList.remove('nav-hidden');
          }
          lastY = y;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }


  // ────────────────────────────────────────
  // HERO WORD ROTATION  (umanodesign 패턴)
  // ────────────────────────────────────────

  function initHeroWordRotation() {
    var words = SITE_DATA.hero.rotatingWords;
    var idx = 0;
    var wordEl = document.querySelector('#rotating-word strong');
    var wrapEl = document.getElementById('rotating-word');
    if (!wordEl || !wrapEl) return;

    // 초기 너비 설정
    wrapEl.style.width = wordEl.offsetWidth + 'px';

    setInterval(function () {
      wordEl.classList.add('hidden');
      setTimeout(function () {
        idx = (idx + 1) % words.length;
        wordEl.textContent = words[idx];
        wrapEl.style.width = wordEl.offsetWidth + 'px';
        wordEl.classList.remove('hidden');
      }, 250);
    }, 1800);
  }


  // ────────────────────────────────────────
  // HERO SCROLL EFFECT — corner rounding + parallax
  // (umanodesign: borderBottomLeftRadius, marginLeft/Right on scroll)
  // ────────────────────────────────────────

  function initHeroScrollEffect() {
    var heroBg = document.getElementById('hero-bg');
    if (!heroBg) return;

    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      var r = Math.min(1, y / 200);

      // 스크롤할수록 양 옆 마진 + 하단 코너 라운딩
      heroBg.style.marginLeft = (r * 12) + 'px';
      heroBg.style.marginRight = (r * 12) + 'px';
      heroBg.style.borderBottomLeftRadius = (r * 42) + 'px';
      heroBg.style.borderBottomRightRadius = (r * 42) + 'px';
    }, { passive: true });
  }


  // ────────────────────────────────────────
  // STICKY TEXT REVEAL  (word-by-word color on scroll)
  // ────────────────────────────────────────

  function initStickyTextReveal() {
    var section = document.getElementById('sticky-text');
    if (!section) return;

    var words = section.querySelectorAll('.sw');
    var total = words.length;
    var darkColor = getComputedStyle(document.documentElement).getPropertyValue('--black').trim();
    var lightColor = '#d5d3cd';

    window.addEventListener('scroll', function () {
      var rect = section.getBoundingClientRect();
      var scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      var progress = Math.max(0, Math.min(1, -rect.top / scrollable));

      for (var i = 0; i < total; i++) {
        var start = i / total;
        var end = (i + 1) / total;
        var alpha = Math.max(0, Math.min(1, (progress - start * 0.85) / (end - start + 0.04)));

        if (alpha >= 1) {
          words[i].style.color = darkColor;
        } else if (alpha <= 0) {
          words[i].style.color = lightColor;
        } else {
          words[i].style.color = 'color-mix(in srgb, ' + darkColor + ' ' + Math.round(alpha * 100) + '%, ' + lightColor + ')';
        }
      }
    }, { passive: true });
  }


  // ────────────────────────────────────────
  // SCROLL REVEAL — IntersectionObserver for cards
  // ────────────────────────────────────────

  function initScrollReveal() {
    var cards = document.querySelectorAll('.tech-card, .project-card');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
          setTimeout(function () {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    cards.forEach(function (el) { observer.observe(el); });

    // Section labels
    var labels = document.querySelectorAll('.section-label');
    var labelObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          labelObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    labels.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      labelObs.observe(el);
    });
  }


  // ────────────────────────────────────────
  // ACCORDION  (umanodesign FAQ 패턴)
  // ────────────────────────────────────────

  function initAccordion() {
    var acc = document.getElementById('accordion');
    if (!acc) return;

    var openIdx = -1;

    acc.addEventListener('click', function (e) {
      var trigger = e.target.closest('.acc-trigger');
      if (!trigger) return;

      var item = trigger.closest('.acc-item');
      var idx = parseInt(item.getAttribute('data-idx'), 10);
      var body = item.querySelector('.acc-body');
      var answer = item.querySelector('.acc-answer');

      // 같은 걸 누르면 닫기
      if (openIdx === idx) {
        item.classList.remove('open');
        body.style.maxHeight = '0';
        openIdx = -1;
        return;
      }

      // 기존 열린 것 닫기
      var prev = acc.querySelector('.acc-item.open');
      if (prev) {
        prev.classList.remove('open');
        prev.querySelector('.acc-body').style.maxHeight = '0';
      }

      // 새로 열기
      item.classList.add('open');
      body.style.maxHeight = (answer.offsetHeight + 16) + 'px';
      openIdx = idx;
    });
  }


  // ────────────────────────────────────────
  // MOBILE NAV TOGGLE
  // ────────────────────────────────────────

  function initMobileNav() {
    var toggle = document.getElementById('nav-toggle');
    var menu = document.getElementById('nav-mobile');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });

    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') menu.classList.remove('open');
    });
  }

});