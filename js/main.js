/**
 * main.js — DOM 렌더링, 이벤트 핸들링, 스크롤 애니메이션
 * 
 * SITE_DATA (data.js)를 읽어 index.html의 빈 컨테이너에 콘텐츠를 주입합니다.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────────────────────────────
  // 1. 콘텐츠 렌더링
  // ─────────────────────────────────────────────

  renderHeader();
  renderHero();
  renderTechStack();
  renderProjects();
  renderTimeline();
  renderDetails();
  renderFooter();

  // ─────────────────────────────────────────────
  // 2. 기능 초기화
  // ─────────────────────────────────────────────

  initScrollReveal();
  initHeaderScroll();
  initMobileNav();
  initProgressiveDisclosure();
  initModal();


  // ============================================================
  // RENDER FUNCTIONS
  // ============================================================

  function renderHeader() {
    const logoEl = document.getElementById('header-logo');
    const navEl = document.getElementById('header-nav');
    if (!logoEl || !navEl) return;

    logoEl.textContent = SITE_DATA.meta.logoText;

    navEl.innerHTML = SITE_DATA.meta.navLinks
      .map(link => `<a href="#${link.targetId}">${link.label}</a>`)
      .join('');
  }

  function renderHero() {
    const { hero } = SITE_DATA;
    const section = document.getElementById('hero');
    if (!section) return;

    const tagEl = section.querySelector('[data-hero="tag"]');
    const titleEl = section.querySelector('[data-hero="title"]');
    const philEl = section.querySelector('[data-hero="philosophy"]');
    const descEl = section.querySelector('[data-hero="description"]');
    const contactsEl = section.querySelector('[data-hero="contacts"]');
    const ctaEl = section.querySelector('[data-hero="cta"]');

    if (tagEl) tagEl.textContent = hero.tag;
    if (titleEl) titleEl.textContent = hero.title;
    if (philEl) philEl.textContent = hero.philosophy;
    if (descEl) descEl.textContent = hero.description;

    if (contactsEl) {
      contactsEl.innerHTML = hero.contacts.map(c =>
        `<a href="${c.href}" class="contact-item" ${c.type === 'github' ? 'target="_blank" rel="noopener"' : ''}>
          <i class="${c.icon}"></i>${c.label}
        </a>`
      ).join('');
    }

    if (ctaEl) {
      ctaEl.innerHTML = `${hero.ctaText} <i class="fa-solid fa-chevron-down"></i>`;
    }
  }

  function renderTechStack() {
    const { techStack } = SITE_DATA;
    const titleEl = document.querySelector('#tech-stack [data-section="title"]');
    const gridEl = document.getElementById('tech-grid');
    if (!gridEl) return;

    if (titleEl) titleEl.textContent = techStack.sectionTitle;

    gridEl.innerHTML = techStack.items.map((tech, i) =>
      `<div class="tech-card reveal" style="transition-delay: ${i * 0.1}s">
        <div class="tech-name">${tech.name}</div>
        <div class="tech-desc">${tech.desc}</div>
      </div>`
    ).join('');
  }

  function renderProjects() {
    const { projects } = SITE_DATA;
    const titleEl = document.querySelector('#projects [data-section="title"]');
    const gridEl = document.getElementById('project-grid');
    if (!gridEl) return;

    if (titleEl) titleEl.textContent = projects.sectionTitle;

    gridEl.innerHTML = projects.items.map((proj, i) =>
      `<div class="project-card reveal" style="transition-delay: ${i * 0.1}s">
        <div class="project-image-wrap">
          <img
            src="${proj.image}"
            alt="${proj.title}"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          >
          <div class="project-icon-fallback" style="display:none; align-items:center; justify-content:center; width:100%; height:100%;">
            <i class="${proj.icon}"></i>
          </div>
        </div>
        <div class="project-body">
          <div class="project-title">${proj.title}</div>
          <div class="project-desc">${proj.desc}</div>
          <div class="project-tag">${proj.tag}</div>
        </div>
      </div>`
    ).join('');
  }

  function renderTimeline() {
    const { timeline } = SITE_DATA;
    const titleEl = document.querySelector('#timeline [data-section="title"]');
    const containerEl = document.getElementById('timeline-container');
    if (!containerEl) return;

    if (titleEl) titleEl.textContent = timeline.sectionTitle;

    containerEl.innerHTML = timeline.items.map((item, i) =>
      `<div class="timeline-item reveal" data-modal-id="${item.id}" style="transition-delay: ${i * 0.12}s">
        <div class="timeline-dot"></div>
        <div class="timeline-date">${item.date}</div>
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-summary">${item.summary}</div>
        <span class="timeline-hint">
          <i class="fa-solid fa-arrow-right"></i> 자세히 보기
        </span>
      </div>`
    ).join('');
  }

  function renderDetails() {
    const { details } = SITE_DATA;
    const titleEl = document.querySelector('#details [data-section="title"]');
    const frameEl = document.querySelector('#details .details-frame');
    if (!frameEl) return;

    if (titleEl) titleEl.textContent = details.sectionTitle;

    frameEl.innerHTML = `
      <div class="details-icon"><i class="fa-solid fa-circle-info"></i></div>
      <p>${details.placeholder}</p>
    `;
  }

  function renderFooter() {
    const el = document.getElementById('footer-text');
    if (el) el.textContent = SITE_DATA.footer.copyright;
  }


  // ============================================================
  // SCROLL REVEAL (Intersection Observer)
  // ============================================================

  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }


  // ============================================================
  // HEADER SCROLL EFFECT
  // ============================================================

  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle('scrolled', window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    });
  }


  // ============================================================
  // MOBILE NAV TOGGLE
  // ============================================================

  function initMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('header-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    // 링크 클릭 시 메뉴 닫기
    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
      }
    });
  }


  // ============================================================
  // PROGRESSIVE DISCLOSURE
  // ============================================================

  function initProgressiveDisclosure() {
    const ctaBtn = document.querySelector('[data-hero="cta"]');
    const detailsSection = document.getElementById('details');
    if (!ctaBtn || !detailsSection) return;

    ctaBtn.addEventListener('click', () => {
      detailsSection.classList.add('active');
      setTimeout(() => {
        detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    });
  }


  // ============================================================
  // MODAL SYSTEM
  // ============================================================

  function initModal() {
    const overlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('modal-close');
    if (!overlay || !modalContent || !closeBtn) return;

    // 타임라인 아이템 클릭
    document.addEventListener('click', (e) => {
      const timelineItem = e.target.closest('.timeline-item[data-modal-id]');
      if (!timelineItem) return;

      const modalId = timelineItem.dataset.modalId;
      const data = SITE_DATA.timeline.items.find(t => t.id === modalId);
      if (!data || !data.modal) return;

      modalContent.innerHTML = `
        <div class="modal-tag">${data.modal.tag}</div>
        <div class="modal-heading">${data.modal.heading}</div>
        <div class="modal-body">${data.modal.bodyHTML}</div>
      `;

      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    // 닫기
    const closeModal = () => {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeModal();
      }
    });
  }

});
