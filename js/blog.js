/**
 * Santiago Penas - Technical Articles & Blog Reader Modal
 * Dynamic topic filtering, rich markdown reader, and responsive cards
 */

(function initBlogSection() {
  const container = document.getElementById('blog-grid');
  const filtersContainer = document.getElementById('blog-filter-pills');
  const modalOverlay = document.getElementById('blog-modal-overlay');
  const modalCloseBtn = document.getElementById('blog-modal-close-btn');
  const modalContent = document.getElementById('blog-modal-content');

  if (!container || typeof TECH_ARTICLES === 'undefined') return;

  let activeCategory = 'all';

  const TOPIC_CATEGORIES = [
    { id: 'all', label: 'All Articles' },
    { id: 'agentic', label: 'Agentic & AI Systems' },
    { id: 'data', label: 'Data & Modern Mesh' },
    { id: 'google', label: 'Google Cloud & AI' },
    { id: 'telco', label: 'Telco & Networks' },
    { id: 'mlops', label: 'MLOps & Engineering' }
  ];

  function renderFilterPills() {
    if (!filtersContainer) return;
    filtersContainer.innerHTML = '';

    TOPIC_CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `blog-filter-btn ${cat.id === activeCategory ? 'active' : ''}`;
      
      const count = cat.id === 'all' 
        ? TECH_ARTICLES.length 
        : TECH_ARTICLES.filter(a => a.category === cat.id).length;

      btn.innerHTML = `
        <span>${cat.label}</span>
        <span class="blog-filter-count">${count}</span>
      `;

      btn.addEventListener('click', () => {
        activeCategory = cat.id;
        renderFilterPills();
        renderArticles();
      });

      filtersContainer.appendChild(btn);
    });
  }

  function renderArticles() {
    container.innerHTML = '';

    const filtered = activeCategory === 'all'
      ? TECH_ARTICLES
      : TECH_ARTICLES.filter(a => a.category === activeCategory);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <p>No essays found in this category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(art => {
      const card = document.createElement('div');
      card.className = 'glass-card blog-card';

      const tagsHtml = art.tags.slice(0, 3).map(t => `<span class="mini-tag">${t}</span>`).join('');

      card.innerHTML = `
        <div>
          <div class="blog-meta-row">
            <span class="blog-topic-badge">${art.categoryName || 'Technical Insight'}</span>
            <span style="color: var(--accent-cyan); font-family: var(--font-mono); font-size: 0.8rem;">${art.readTime}</span>
          </div>
          <h3 class="blog-card-title">${art.title}</h3>
          <p class="blog-card-summary">${art.summary}</p>
        </div>
        <div>
          <div style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono); margin-bottom: 0.85rem;">
            Published: ${art.date}
          </div>
          <div class="project-card-footer" style="padding-top: 0.75rem; border-top: 1px solid rgba(255, 255, 255, 0.06);">
            <div class="project-tags-preview">
              ${tagsHtml}
            </div>
            <span class="btn-read-article">
              Read Essay <span>→</span>
            </span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openArticleModal(art));
      container.appendChild(card);
    });
  }

  function formatMarkdown(content) {
    if (!content) return '';

    // Split into lines for structured block processing
    const lines = content.trim().split('\n');
    let html = '';
    let inList = false;
    let listType = 'ul';

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();

      // Horizontal rules
      if (line === '---') {
        if (inList) { html += `</${listType}>`; inList = false; }
        html += '<hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 2.25rem 0;">';
        continue;
      }

      // Headers
      if (line.startsWith('### ')) {
        if (inList) { html += `</${listType}>`; inList = false; }
        html += `<h3>${line.replace('### ', '')}</h3>`;
        continue;
      }
      if (line.startsWith('#### ')) {
        if (inList) { html += `</${listType}>`; inList = false; }
        html += `<h4 style="font-family: var(--font-heading); color: var(--text-primary); margin: 1.5rem 0 0.5rem 0; font-size: 1.15rem; font-weight: 600;">${line.replace('#### ', '')}</h4>`;
        continue;
      }

      // Blockquotes
      if (line.startsWith('> ')) {
        if (inList) { html += `</${listType}>`; inList = false; }
        html += `<blockquote>${line.replace('> ', '')}</blockquote>`;
        continue;
      }

      // Unordered lists
      if (line.startsWith('- ') || line.startsWith('* ')) {
        if (!inList) {
          listType = 'ul';
          html += '<ul>';
          inList = true;
        }
        let itemContent = line.replace(/^[-*]\s+/, '');
        html += `<li>${formatInline(itemContent)}</li>`;
        continue;
      }

      // Numbered lists
      if (/^\d+\.\s+/.test(line)) {
        if (!inList) {
          listType = 'ol';
          html += '<ol>';
          inList = true;
        }
        let itemContent = line.replace(/^\d+\.\s+/, '');
        html += `<li>${formatInline(itemContent)}</li>`;
        continue;
      }

      // If we were in a list and hit a normal line or empty line
      if (inList && line === '') {
        html += `</${listType}>`;
        inList = false;
        continue;
      }

      if (line !== '') {
        if (inList) { html += `</${listType}>`; inList = false; }
        html += `<p>${formatInline(line)}</p>`;
      }
    }

    if (inList) {
      html += `</${listType}>`;
    }

    return html;
  }

  function formatInline(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  function openArticleModal(art) {
    if (!modalOverlay || !modalContent) return;

    const formattedBody = formatMarkdown(art.content);

    modalContent.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.5rem;">
        <span class="blog-topic-badge" style="margin-bottom: 0;">${art.categoryName || 'Technical Insight'}</span>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span class="glass-badge" style="color: var(--accent-cyan); font-family: var(--font-mono); font-size: 0.8rem;">${art.date}</span>
          <span style="color: var(--text-muted); font-size: 0.85rem; font-family: var(--font-mono);">${art.readTime}</span>
        </div>
      </div>

      <h1 style="font-family: var(--font-heading); font-size: clamp(1.6rem, 3.5vw, 2.2rem); font-weight: 800; line-height: 1.25; margin-bottom: 1.5rem; color: #ffffff;">
        ${art.title}
      </h1>

      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; padding-bottom: 1.25rem; border-bottom: 1px solid rgba(255,255,255,0.08);">
        ${art.tags.map(t => `<span class="mini-tag" style="background: rgba(0, 240, 255, 0.1); color: var(--accent-cyan);">${t}</span>`).join('')}
      </div>

      <div class="article-body-content">
        ${formattedBody}
      </div>

      <div style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <div class="brand-avatar-badge" style="width: 44px; height: 44px; font-size: 1.05rem;">SP</div>
          <div>
            <div style="font-weight: 700; font-size: 0.98rem; color: #ffffff;">Santiago Penas</div>
            <div style="color: var(--text-muted); font-size: 0.82rem;">AI Engineer • Data Specialist • Multi-Agent Systems</div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <a href="CURATED_AI_RESEARCH_SOURCES.md" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 0.5rem 0.9rem; font-size: 0.82rem; text-decoration: none;">
            <span>Research Sources</span> ↗
          </a>
          <a href="#contact" onclick="document.getElementById('blog-modal-overlay').classList.remove('active'); document.body.style.overflow='';" class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.82rem; text-decoration: none;">
            <span>Discuss Essay</span> 💬
          </a>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeBlogModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeBlogModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeBlogModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeBlogModal();
    }
  });

  renderFilterPills();
  renderArticles();
})();
