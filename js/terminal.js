/**
 * Santiago Penas - Interactive Agentic CLI Terminal (santi-cli v1.0)
 * 
 * Demonstrates an authentic autonomous agent interface where visitors can query
 * Santiago's background, skills, flagship projects, and simulate an agentic trace.
 */

(function initAgenticTerminal() {
  const body = document.getElementById('terminal-body');
  const input = document.getElementById('terminal-input');
  const chips = document.querySelectorAll('.terminal-chip');
  if (!body || !input) return;

  const COMMANDS = {
    help: () => `Available commands in santi-cli:
  • whoami      - Overview of Santiago Penas and engineering philosophy
  • skills      - Core competencies & model/tooling agnosticism
  • flagship    - Inspect the 3 enterprise flagship engineering suites
  • agent-run   - Execute a simulated autonomous multi-agent reasoning trace
  • experience  - Mission-critical background & petabyte-scale telemetry
  • contact     - Get direct contact channels & social coordinates
  • clear       - Clean the terminal output screen`,

    whoami: () => `[IDENTITY] Santiago Penas — AI Engineer & Data Lover
• Specialization: Autonomous Agentic AI, Reinforcement Learning, Big Data & Machine Learning.
• Driving Belief: "Simplicity is prerequisite for reliability" — Edsger W. Dijkstra.
• Approach: Product thinking paired with Spec-Driven Development (SDD), Docker parity, and rigorous mathematical verification.
• Adaptability: Currently leading mission-critical AI/ML projects in Telecommunications, with deep capacity to master and lead data transformations in ANY industry (Fintech, Health, E-commerce, Cloud).`,

    skills: () => `[CORE COMPETENCIES & TOOLING AGNOSTICISM]
1. Autonomous Agentic AI: Stateful graph state machines, tool-calling contracts, anti-hallucination guardrails (Google ADK, LangGraph, CrewAI, PydanticAI).
2. Model Agnosticism: Expert integration of Gemini, OpenAI, Claude, LLaMA, DeepSeek, and local OSS weights.
3. Big Data & Distributed Scale: Terabyte/Petabyte telemetry, PySpark execution plans, Spark SQL, partitioned streaming.
4. Reinforcement Learning: MDP formulation, PPO/DQN algorithms, Farama Gymnasium 1.0.0, multi-objective reward shaping.
5. Machine Learning & Risk: Cost-sensitive loss matrices, SMOTE extreme imbalance, SHAP explainability, A/B testing & statistical power sizing.
6. MLOps & Production Standards: Docker containerization, Spec-Driven Development (SDD), uv package management, 100% Pytest test suites.`,

    flagship: () => `[ENTERPRISE FLAGSHIP SUITES]
1. Google ADK 2.8.0 Enterprise Agentic Suite
   - 6 Autonomous Agents (Telco NOC Optimizer, Multimodal Incident Graph, SecOps Swarm)
   - 39/39 verified passing tests, Dockerized, 3GPP SLA penalty modeling.
2. Autonomous Green Base Station RL Controller (O-RAN rApp)
   - Farama Gymnasium + Stable-Baselines3 (PPO) cutting power consumption 25-30%.
   - 99.99% QoS carrier-grade compliance with 0 dropped user sessions.
3. Production Generative AI, LangGraph & Swarms
   - Stateful multi-agent swarms, CrewAI intelligence, Haystack automated issue resolution, and deployed apps.
Type 'projects' or scroll down to explore all 15+ curated repositories.`,

    'agent-run': () => `[AUTONOMOUS MULTI-AGENT TRACE INITIATED]
[00.01s] [Supervisor] Ingested raw telemetry anomaly trace [Sector_3_Congestion: 94.2%].
[00.04s] [NOC Optimizer] Formulating mitigation contract: target SLA penalty = $0/min.
[00.09s] [Incident Graph] Traversing DAG topology... Isolated root cause: Fiber optical micro-bend on Hub-B.
[00.15s] [SecOps Swarm] Verified perimeter policy integrity — no external intrusion detected.
[00.22s] [Controller Agent] Executing safe tool: load_balance_xn(target_sector="Sector_1", buffer_margin=0.28).
[00.29s] [Verification Guardrail] Congestion reduced to 42.1%. Zero dropped sessions.
[00.32s] [Status: SUCCESS] Autonomous mitigation completed in 320ms without human escalation.`,

    experience: () => `[EXPERIENCE HIGHLIGHTS]
• Current: AI Engineer & Data/ML Project Lead at Telecom Argentina.
  - Managing petabyte streaming telemetry, 5G RAN power scheduling, automated NOC incident isolation under strict SLAs.
• Past: Python Developer & Data Scientist at Tuten.
  - Engineered high-throughput Python backends, data extraction pipelines, and machine learning models.
• Track Record: Proven engineering in Banking Risk, Fraud Detection (SMOTE), PySpark Common Crawl big data processing, Aspect Transformers (TinyBERT), and rigorous A/B experimentation.
• Universal Value: High-concurrency, big data telemetry discipline directly applicable to any data-intensive enterprise domain.`,

    contact: () => `[DIRECT CHANNELS]
• Email:    penassantiago@gmail.com
• LinkedIn: https://www.linkedin.com/in/santiagopenas/
• GitHub:   https://github.com/santipenas
• Repo:     https://github.com/santipenas/Portfolio-Santi-Penas
Feel free to reach out for high-impact AI engineering, agentic architecture, or technical leadership roles.`
  };

  function appendLine(text, isOutput = false, isAccent = false) {
    const line = document.createElement('div');
    line.className = `terminal-line ${isOutput ? 'output' : ''} ${isAccent ? 'accent' : ''}`;
    line.textContent = text;
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
  }

  function handleCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    appendLine(`santi@ai-engine:~$ ${rawCmd}`);

    if (cmd === 'clear') {
      body.innerHTML = '';
      appendLine('Terminal cleared. Type "help" for available commands.', true, true);
      return;
    }

    if (COMMANDS[cmd]) {
      const result = COMMANDS[cmd]();
      appendLine(result, true);
    } else {
      appendLine(`Command not found: "${rawCmd}". Type "help" to view valid commands.`, true);
    }
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value;
      input.value = '';
      handleCommand(val);
    }
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        input.value = '';
        handleCommand(cmd);
      }
    });
  });
})();
