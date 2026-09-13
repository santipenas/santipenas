# 🌐 Santiago Penas — Personal Web Platform & AI Portfolio

> High-performance, modern personal presence and interactive engineering portfolio for **Santiago Penas** — AI Engineer, Data Scientist, and Specialist in Autonomous Agentic AI, Machine Learning, and Big Data.

Designed with a **Crystal Glassmorphism UI/UX**, interactive neural network canvas, dynamic project filtering and deep-dive modals, a working simulated **Agentic CLI Terminal (`santi-cli`)**, and a personal tech blog reader.

---

## 🚀 Quick Start (Using `uv`)

This project uses modern, zero-dependency web standards (HTML5, modular CSS3, and ES6+ modules) and runs locally via Python managed with [`uv`](https://docs.astral.sh/uv/):

### 1. Initialize and Activate Environment
```powershell
# Create the virtual environment using uv
uv venv

# Activate on Windows
.venv\Scripts\activate
```

### 2. Launch Local Dev Server
```powershell
uv run python -m http.server 8080
```
Open your browser at: **`http://localhost:8080`**

---

## 📂 Architecture & File Organization

```
Portfolio Santi/
├── index.html                   # Semantic HTML5 entry point, SEO metadata & JSON-LD
├── css/
│   ├── crystal-theme.css        # Color tokens, glassmorphism filters, ambient orbs
│   ├── components.css           # Navigation, cards, terminal, modals, forms
│   └── animations.css           # Keyframes, pulse effects, responsive breakpoints
├── js/
│   ├── data/
│   │   ├── projects-data.js     # Scalable catalog of portfolio projects & metrics
│   │   ├── skills-data.js       # Model-agnostic competencies matrix
│   │   ├── articles-data.js     # Tech thoughts & blog articles
│   │   └── experience-data.js   # Career milestones & high-concurrency background
│   ├── canvas-neural.js         # Real-time interactive neural particle network
│   ├── terminal.js              # Interactive Agentic CLI (santi-cli v1.0)
│   ├── projects.js              # Category filtering, live search & deep-dive modal
│   ├── blog.js                  # Dynamic article rendering & reader modal
│   ├── contact.js               # Copy email to clipboard & message dispatcher
│   └── main.js                  # ScrollSpy, skills grid, and application init
└── README.md                    # Project documentation & deployment guide
```

---

## 📈 Scalability: How to Add New Projects or Articles

The website is engineered with a **pure data-driven architecture**. You do not need to edit complex HTML templates to keep the portfolio up to date:

### Adding a New Project:
Open [`js/data/projects-data.js`](./js/data/projects-data.js) and add an entry:
```javascript
{
  id: 'my-new-agentic-tool',
  title: 'Autonomous Multi-Agent Scheduler',
  category: 'agentic', // 'agentic' | 'rag' | 'timeseries' | 'rl' | 'genai' | 'bigdata' | 'ml' | 'dl-nlp' | 'stats'
  badge: 'Production Tool',
  featured: false,
  tagline: 'High-throughput event coordination',
  description: 'Concise summary shown on the card...',
  fullDescription: 'Detailed technical explanation shown in the deep-dive modal...',
  highlights: [
    'Feature 1: Event-driven pub/sub architecture',
    'Feature 2: Automated rollback mechanism'
  ],
  stack: ['FastAPI', 'LangGraph', 'Docker', 'Pytest'],
  metrics: [
    { label: 'Latency', value: '< 40ms' },
    { label: 'Throughput', value: '10k req/s' }
  ],
  githubUrl: 'https://github.com/santipenas/my-repo',
  demoUrl: null
}
```
*The website will automatically calculate category counts, update search indices, render the project card, and link the modal.*

### Adding a New Article / Essay:
Open [`js/data/articles-data.js`](./js/data/articles-data.js) and add an entry:
```javascript
{
  id: 'my-new-tech-essay',
  category: 'agentic', // 'agentic' | 'data' | 'google' | 'telco' | 'mlops'
  categoryName: 'Agentic & AI Systems',
  title: 'State of Open Source AI Weights in Enterprise',
  date: 'September 2026',
  readTime: '5 min read',
  tags: ['LLMs', 'Open Source', 'Inference'],
  summary: 'Brief teaser shown on the card...',
  content: `
### Heading 1
Your article thoughts here with **bold text** and markdown sections!
  `
}
```

---

## 🌐 Instant Zero-Cost Deployment

Because the web application relies on pure, modern client-side standards:

- **GitHub Pages**:
  1. Push this repository to GitHub (e.g. `santipenas/santipenas.github.io` or `Portfolio-Santi-Penas`).
  2. Go to repository **Settings** → **Pages** → Deploy from branch `main` / root.
  3. Live in seconds at `https://santipenas.github.io` with zero hosting costs.
- **Vercel / Cloudflare Pages / Netlify**:
  - Connect your GitHub repository with zero configuration needed.

---

## 📬 Contact Coordinates
- **Email:** [penassantiago@gmail.com](mailto:penassantiago@gmail.com)
- **LinkedIn:** [linkedin.com/in/santiagopenas](https://www.linkedin.com/in/santiagopenas/)
- **GitHub:** [github.com/santipenas](https://github.com/santipenas)
