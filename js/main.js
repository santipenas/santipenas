/**
 * Santiago Penas - Main Application Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderSkillsSection();
  renderTimelineSection();
  initTerminalLauncher();
});

// Navigation & ScrollSpy
function initNavbar() {
  const toggleBtn = document.getElementById('nav-toggle-btn');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // ScrollSpy
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Render Skills Matrix dynamically
function renderSkillsSection() {
  const container = document.getElementById('skills-grid');
  const bannerContainer = document.getElementById('adaptability-banner-container');

  if (container && typeof SKILLS_DATA !== 'undefined') {
    container.innerHTML = '';

    SKILLS_DATA.disciplines.forEach(disc => {
      const card = document.createElement('div');
      card.className = 'glass-card skill-card';

      const competenciesList = disc.competencies.map(c => `
        <li class="competency-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${c}</span>
        </li>
      `).join('');

      const toolsList = disc.frameworksAndTools.map(t => `
        <span class="tool-tag">${t}</span>
      `).join('');

      card.innerHTML = `
        <div>
          <div class="skill-card-header">
            <div class="skill-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="14" x2="23" y2="14"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="14" x2="4" y2="14"></line>
              </svg>
            </div>
            <div>
              <h3 class="skill-card-title">${disc.title}</h3>
              <span class="glass-badge" style="color: var(--accent-cyan); font-size: 0.75rem;">Model-Agnostic Mastery</span>
            </div>
          </div>
          <p class="skill-card-desc">${disc.description}</p>
          <ul class="skill-competencies">
            ${competenciesList}
          </ul>
        </div>
        <div class="skill-tools-strip">
          ${toolsList}
        </div>
      `;

      container.appendChild(card);
    });
  }

  // Render Domain Adaptability Banner
  if (bannerContainer && typeof SKILLS_DATA !== 'undefined' && SKILLS_DATA.adaptabilityNotice) {
    const notice = SKILLS_DATA.adaptabilityNotice;
    bannerContainer.innerHTML = `
      <div class="adaptability-banner">
        <span class="banner-badge">🌐 ${notice.badge}</span>
        <h3 class="banner-title">${notice.title}</h3>
        <p class="banner-text">${notice.text}</p>
      </div>
    `;
  }
}

// Render Interactive Timeline
function renderTimelineSection() {
  const container = document.getElementById('experience-timeline');
  if (!container || typeof CAREER_EXPERIENCE === 'undefined') return;

  container.innerHTML = '';

  CAREER_EXPERIENCE.forEach(item => {
    const el = document.createElement('div');
    el.className = 'timeline-item';

    const achievementsHtml = item.achievements.map(a => `<li>${a}</li>`).join('');
    const skillsHtml = item.skillsUsed.map(s => `<span class="tool-tag">${s}</span>`).join('');

    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="glass-card timeline-card">
        <div class="timeline-role-row">
          <h3 class="timeline-role">${item.role}</h3>
          <span class="timeline-period">${item.period}</span>
        </div>
        <div class="timeline-org">${item.organization} • ${item.location} • <span style="color: var(--accent-emerald);">${item.badge}</span></div>
        <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.95rem;">${item.description}</p>
        <ul class="timeline-achievements" style="margin-bottom: 1.25rem;">
          ${achievementsHtml}
        </ul>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
          ${skillsHtml}
        </div>
      </div>
    `;

    container.appendChild(el);
  });
}

// Terminal launcher button in navbar
function initTerminalLauncher() {
  const navTerminalBtn = document.getElementById('btn-nav-terminal');
  const heroTerminalBtn = document.getElementById('btn-hero-terminal');
  const terminalInput = document.getElementById('terminal-input');

  function focusTerminal() {
    const termSection = document.getElementById('terminal-section');
    if (termSection) {
      termSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        if (terminalInput) terminalInput.focus();
      }, 600);
    }
  }

  if (navTerminalBtn) navTerminalBtn.addEventListener('click', focusTerminal);
  if (heroTerminalBtn) heroTerminalBtn.addEventListener('click', focusTerminal);
}
