/**
 * Santiago Penas - Projects Dynamic Rendering, Search & Deep-Dive Modal
 */

(function initProjectsShowcase() {
  const container = document.getElementById('projects-grid');
  const pillsContainer = document.getElementById('category-filter-pills');
  const searchInput = document.getElementById('projects-search-input');
  const modalOverlay = document.getElementById('project-modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContent = document.getElementById('project-modal-content');

  if (!container || !pillsContainer) return;

  let activeCategory = 'all';
  let searchQuery = '';

  // Render Category Filter Pills with counts
  function renderFilterPills() {
    pillsContainer.innerHTML = '';

    PROJECT_CATEGORIES.forEach(cat => {
      const count = cat.id === 'all' 
        ? PORTFOLIO_PROJECTS.length 
        : PORTFOLIO_PROJECTS.filter(p => p.category === cat.id).length;

      const pill = document.createElement('button');
      pill.className = `filter-pill ${cat.id === activeCategory ? 'active' : ''}`;
      pill.setAttribute('data-category', cat.id);
      pill.innerHTML = `<span>${cat.label}</span> <span style="opacity: 0.6; font-size: 0.75rem;">(${count})</span>`;

      pill.addEventListener('click', () => {
        activeCategory = cat.id;
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        renderProjects();
      });

      pillsContainer.appendChild(pill);
    });
  }

  // Render Projects Grid
  function renderProjects() {
    container.innerHTML = '';

    const filtered = PORTFOLIO_PROJECTS.filter(proj => {
      const matchesCat = (activeCategory === 'all' || proj.category === activeCategory);
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q || 
        proj.title.toLowerCase().includes(q) ||
        proj.description.toLowerCase().includes(q) ||
        proj.tagline.toLowerCase().includes(q) ||
        proj.stack.some(s => s.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">No projects found matching "${searchQuery}"</p>
          <p style="font-size: 0.9rem;">Try clearing your search query or selecting another category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'glass-card project-card';
      card.setAttribute('data-id', proj.id);

      const metricsHtml = proj.metrics ? `
        <div class="project-metrics-grid">
          ${proj.metrics.slice(0, 2).map(m => `
            <div class="project-metric-item">
              <span class="metric-label">${m.label}</span>
              <span class="metric-value">${m.value}</span>
            </div>
          `).join('')}
        </div>
      ` : '';

      const tagsHtml = proj.stack.slice(0, 3).map(tag => `<span class="mini-tag">${tag}</span>`).join('');

      card.innerHTML = `
        <div>
          <div class="project-card-badge-row">
            <span class="project-card-badge">${proj.badge || 'Project'}</span>
            ${proj.featured ? '<span class="glass-badge" style="color: var(--accent-amber); border-color: rgba(245, 158, 11, 0.3);">★ Spotlight</span>' : ''}
          </div>
          <h3 class="project-card-title">${proj.title}</h3>
          <p class="project-card-tagline">${proj.tagline || ''}</p>
          <p class="project-card-desc">${proj.description}</p>
          ${metricsHtml}
        </div>
        <div class="project-card-footer">
          <div class="project-tags-preview">
            ${tagsHtml}
          </div>
          <span class="btn-explore-project">
            Deep Dive <span>→</span>
          </span>
        </div>
      `;

      card.addEventListener('click', () => openProjectModal(proj));
      container.appendChild(card);
    });
  }

  // Open Project Modal
  function openProjectModal(proj) {
    if (!modalOverlay || !modalContent) return;

    const highlightsHtml = proj.highlights ? `
      <div style="margin: 1.5rem 0;">
        <h4 style="color: var(--text-primary); margin-bottom: 0.75rem; font-family: var(--font-heading);">Key Engineering Highlights:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem;">
          ${proj.highlights.map(h => `
            <li style="color: var(--text-secondary); font-size: 0.92rem; padding-left: 1.2rem; position: relative;">
              <span style="position: absolute; left: 0; color: var(--accent-cyan);">▸</span>
              ${h}
            </li>
          `).join('')}
        </ul>
      </div>
    ` : '';

    const architectureHtml = proj.architecture ? `
      <div style="margin: 1.5rem 0;">
        <h4 style="color: var(--text-primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">System Architecture & Execution Flow:</h4>
        <pre class="modal-architecture-box">${proj.architecture.trim()}</pre>
      </div>
    ` : '';

    const fullStackHtml = `
      <div style="margin: 1.5rem 0;">
        <h4 style="color: var(--text-primary); margin-bottom: 0.75rem; font-family: var(--font-heading);">Tooling & Framework Matrix:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${proj.stack.map(s => `<span class="glass-badge" style="color: var(--accent-cyan);">${s}</span>`).join('')}
        </div>
      </div>
    `;

    const metricsFullHtml = proj.metrics ? `
      <div class="project-metrics-grid" style="grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); margin: 1.5rem 0;">
        ${proj.metrics.map(m => `
          <div class="project-metric-item">
            <span class="metric-label">${m.label}</span>
            <span class="metric-value">${m.value}</span>
          </div>
        `).join('')}
      </div>
    ` : '';

    modalContent.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
        <span class="project-card-badge">${proj.badge || 'Project'}</span>
        ${proj.featured ? '<span class="glass-badge" style="color: var(--accent-amber);">★ Enterprise Flagship</span>' : ''}
      </div>
      <h2 style="font-family: var(--font-heading); font-size: 1.85rem; font-weight: 800; color: #ffffff; margin-bottom: 0.4rem;">
        ${proj.title}
      </h2>
      <p style="color: var(--accent-cyan); font-weight: 500; font-size: 1rem; margin-bottom: 1.5rem;">
        ${proj.tagline || ''}
      </p>

      <div style="color: var(--text-secondary); font-size: 0.98rem; line-height: 1.7; margin-bottom: 1.5rem;">
        ${proj.fullDescription || proj.description}
      </div>

      ${metricsFullHtml}
      ${highlightsHtml}
      ${architectureHtml}
      ${fullStackHtml}

      <div style="display: flex; align-items: center; gap: 1rem; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(255, 255, 255, 0.1);">
        ${proj.githubUrl ? `
          <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
            <span>View GitHub Repository</span> <span>↗</span>
          </a>
        ` : ''}
        ${proj.demoUrl ? `
          <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
            <span>Launch Live App</span> <span>↗</span>
          </a>
        ` : ''}
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  renderFilterPills();
  renderProjects();
})();
