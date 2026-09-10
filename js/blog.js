/**
 * Santiago Penas - Technical Articles & Blog Reader Modal
 */

(function initBlogSection() {
  const container = document.getElementById('blog-grid');
  const modalOverlay = document.getElementById('blog-modal-overlay');
  const modalCloseBtn = document.getElementById('blog-modal-close-btn');
  const modalContent = document.getElementById('blog-modal-content');

  if (!container || typeof TECH_ARTICLES === 'undefined') return;

  function renderArticles() {
    container.innerHTML = '';

    TECH_ARTICLES.forEach(art => {
      const card = document.createElement('div');
      card.className = 'glass-card blog-card';

      const tagsHtml = art.tags.map(t => `<span class="mini-tag">${t}</span>`).join('');

      card.innerHTML = `
        <div>
          <div class="blog-meta-row">
            <span>${art.date}</span>
            <span style="color: var(--accent-cyan);">${art.readTime}</span>
          </div>
          <h3 class="blog-card-title">${art.title}</h3>
          <p class="blog-card-summary">${art.summary}</p>
        </div>
        <div class="project-card-footer">
          <div class="project-tags-preview">
            ${tagsHtml}
          </div>
          <span class="btn-read-article">
            Read Essay <span>→</span>
          </span>
        </div>
      `;

      card.addEventListener('click', () => openArticleModal(art));
      container.appendChild(card);
    });
  }

  function openArticleModal(art) {
    if (!modalOverlay || !modalContent) return;

    // Convert simple markdown headings and bold text to HTML
    let formattedBody = art.content
      .replace(/### (.*?)\n/g, '<h3 style="font-family: var(--font-heading); color: #ffffff; margin: 1.5rem 0 0.75rem 0; font-size: 1.35rem;">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--text-primary); font-weight: 600;">$1</strong>')
      .replace(/---/g, '<hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 2rem 0;">')
      .replace(/\n\n/g, '</p><p style="margin-bottom: 1.25rem; line-height: 1.75; color: var(--text-secondary); font-size: 1.02rem;">');

    modalContent.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
        <span class="glass-badge" style="color: var(--accent-cyan); font-family: var(--font-mono);">${art.date}</span>
        <span style="color: var(--text-muted); font-size: 0.85rem; font-family: var(--font-mono);">${art.readTime}</span>
      </div>

      <h1 style="font-family: var(--font-heading); font-size: clamp(1.6rem, 3.5vw, 2.2rem); font-weight: 800; line-height: 1.25; margin-bottom: 1.5rem; color: #ffffff;">
        ${art.title}
      </h1>

      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; padding-bottom: 1.25rem; border-bottom: 1px solid rgba(255,255,255,0.08);">
        ${art.tags.map(t => `<span class="mini-tag" style="background: rgba(0, 240, 255, 0.1); color: var(--accent-cyan);">${t}</span>`).join('')}
      </div>

      <div class="article-body-content">
        <p style="margin-bottom: 1.25rem; line-height: 1.75; color: var(--text-secondary); font-size: 1.02rem;">
          ${formattedBody}
        </p>
      </div>

      <div style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div class="brand-avatar-badge" style="width: 40px; height: 40px;">SP</div>
          <div>
            <div style="font-weight: 700; font-size: 0.95rem;">Santiago Penas</div>
            <div style="color: var(--text-muted); font-size: 0.8rem;">AI Engineer & Data Specialist</div>
          </div>
        </div>
        <a href="#contact" onclick="document.getElementById('blog-modal-overlay').classList.remove('active'); document.body.style.overflow='';" class="btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">
          Discuss Article 💬
        </a>
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

  renderArticles();
})();
