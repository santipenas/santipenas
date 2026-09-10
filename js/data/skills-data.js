/**
 * Santiago Penas - Comprehensive Skills & Core Competencies Matrix
 * 
 * Emphasizes foundational principles, versatility, and transferable mastery across
 * any enterprise data ecosystem (Telecommunications, Finance, E-Commerce, Tech, Health).
 */

const SKILLS_DATA = {
  overview: {
    title: "Core Engineering Competencies & Tooling Agnosticism",
    summary: "Proven ability to design, architect, and deliver robust AI and Data platforms in high-concurrency, petabyte-scale streaming environments under strict enterprise SLAs. Fluent across the entire cognitive architecture lifecycle, with deep mathematical foundations and strong product thinking."
  },

  disciplines: [
    {
      id: "agentic-systems",
      title: "Autonomous Agentic AI & Cognitive Systems",
      icon: "cpu",
      color: "from-cyan-500 to-blue-600",
      description: "Moving far beyond static LLM completions into stateful, autonomous multi-agent swarms equipped with deterministic state machines, tool-calling, and verified guardrails.",
      competencies: [
        "Autonomous Multi-Agent Swarm Orchestration",
        "Deterministic State Machine Design (DAGs & Cyclic Graphs)",
        "Tool Execution Contracts & Safe Sandboxing",
        "Anti-Hallucination Guardrails & Citation Attribution",
        "Persistent Memory Architectures & Dynamic Context Windows",
        "Model-Agnostic LLM Routing (Gemini, OpenAI, Claude, LLaMA, DeepSeek, Local OSS)"
      ],
      frameworksAndTools: [
        "Google ADK", "LangGraph", "CrewAI", "PydanticAI", "Haystack", "AutoGen", "Instructor"
      ]
    },
    {
      id: "big-data-scale",
      title: "Big Data, High-Concurrency & Streaming",
      icon: "database",
      color: "from-blue-500 to-indigo-600",
      description: "Mastery in processing massive telemetry, web-scale crawls, and distributed logs. Proven under Telco-grade scale where petabyte streaming and strict SLA guarantees are standard.",
      competencies: [
        "Distributed Execution Tuning (Partitioning, Broadcast Joins, Shuffle Optimization)",
        "Petabyte-Scale Telemetry & Log Ingestion",
        "High-Concurrency Data Pipeline Architecture",
        "Distributed Graph Analysis & Transition Flow Modeling",
        "Columnar Storage & Schema Enforcement (Parquet, Arrow, Delta)"
      ],
      frameworksAndTools: [
        "Apache Spark (PySpark)", "Spark SQL", "Distributed RDDs", "Parquet", "HDFS / Cloud Object Stores"
      ]
    },
    {
      id: "reinforcement-learning",
      title: "Reinforcement Learning & Dynamic Control",
      icon: "zap",
      color: "from-emerald-500 to-teal-600",
      description: "Formulating complex physical, digital, and resource allocation problems into Markov Decision Processes (MDPs) to achieve continuous autonomous optimization.",
      competencies: [
        "Markov Decision Process (MDP) Formalization (State/Action/Reward)",
        "Multi-Objective Reward Shaping under Strict Operational Penalties",
        "Continuous & Discrete Control Policies (PPO, DQN, A2C)",
        "Custom Gym/Gymnasium Simulation Environment Engineering",
        "O-RAN rApp / Automated Infrastructure Resource Control"
      ],
      frameworksAndTools: [
        "Farama Gymnasium 1.0.0", "Stable-Baselines3", "PyTorch RL", "Streamlit Simulators"
      ]
    },
    {
      id: "machine-learning-risk",
      title: "Machine Learning, Risk Modeling & Stats",
      icon: "trending-up",
      color: "from-amber-500 to-orange-600",
      description: "Translating ambiguous business challenges into rigorous supervised, unsupervised, and cost-sensitive mathematical models with audit-ready explainability.",
      competencies: [
        "Cost-Sensitive Loss Optimization (Asymmetric Penalties)",
        "Extreme Class Imbalance Resampling (SMOTE, Focal Loss, PR-AUC)",
        "Explainable AI (SHAP Values, Feature Importances, Partial Dependence)",
        "Multi-Variant A/B Testing & Statistical Hypothesis Testing",
        "Statistical Power Sizing & Minimum Detectable Effect (MDE) Estimation"
      ],
      frameworksAndTools: [
        "Scikit-Learn", "LightGBM", "XGBoost", "CatBoost", "Statsmodels", "SciPy", "Pandas", "Polars"
      ]
    },
    {
      id: "deep-learning-nlp",
      title: "Deep Learning & Transformer Architectures",
      icon: "network",
      color: "from-purple-500 to-pink-600",
      description: "Building neural representations from foundational multi-layer perceptrons to fine-tuned compact Transformers for edge and server workloads.",
      competencies: [
        "Transformer Fine-Tuning & Knowledge Distillation (TinyBERT, BERT)",
        "Aspect-Based Sentiment Decomposition & Token Classification",
        "Multi-Layer Neural Architectures & Custom Loss Formulation",
        "Dense Vector Embeddings & Hybrid Keyword/Dense Search Rerankers"
      ],
      frameworksAndTools: [
        "PyTorch 2.x", "Hugging Face Transformers", "TensorFlow / Keras", "Pinecone", "ChromaDB", "FAISS"
      ]
    },
    {
      id: "mlops-devops-sdd",
      title: "MLOps, Spec-Driven Development & Containerization",
      icon: "shield-check",
      color: "from-rose-500 to-red-600",
      description: "Engineering rigor ensuring zero-defect deployments, full reproducibility, and rock-solid production container lifecycle management.",
      competencies: [
        "Spec-Driven Development (SDD) & Contract-First Architecture",
        "Deterministic Docker Containerization & Environment Parity",
        "Enterprise Automated Testing (Pytest Happy Paths, Edge Cases, Fault Injection)",
        "Modern Fast Tooling & Lockfile Packaging (UV, Pydantic v2)",
        "High-Performance REST & Async APIs (FastAPI)"
      ],
      frameworksAndTools: [
        "Docker", "uv", "Pydantic v2", "FastAPI", "Pytest", "Git / GitHub Actions CI/CD", "Ruff"
      ]
    }
  ],

  adaptabilityNotice: {
    badge: "Domain-Agnostic Adaptability",
    title: "From Mission-Critical Telco to Any High-Consequence Data Domain",
    text: "While currently applying these principles in the Telecommunications industry—managing petabyte telemetry streams, multi-sector 5G RAN power scheduling, and automated NOC fault isolation under tight SLAs—my foundational engineering strengths are universal. The exact same disciplines of high-concurrency data wrangling, stateful agentic autonomy, and cost-sensitive optimization apply seamlessly to Fintech Risk, E-commerce Personalization, Supply Chain Logistics, Health-tech, and Enterprise SaaS."
  }
};
