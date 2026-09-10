/**
 * Santiago Penas - Curated Portfolio Projects Data
 * 
 * Scalable architecture: to add a new project, simply append a new object
 * to the `PORTFOLIO_PROJECTS` array. The UI will automatically register
 * categories, compute counts, update search indices, and render modals.
 */

const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects', icon: 'sparkles' },
  { id: 'agentic', label: 'Autonomous Agentic AI', icon: 'cpu' },
  { id: 'rl', label: 'Reinforcement Learning', icon: 'zap' },
  { id: 'genai', label: 'Generative AI & Chatbots', icon: 'bot' },
  { id: 'bigdata', label: 'Big Data & Distributed', icon: 'database' },
  { id: 'ml', label: 'Machine Learning & Risk', icon: 'trending-up' },
  { id: 'dl-nlp', label: 'Deep Learning & NLP', icon: 'network' },
  { id: 'stats', label: 'Stats, Math & Analytics', icon: 'bar-chart' }
];

const PORTFOLIO_PROJECTS = [
  // FLAGSHIP 1
  {
    id: 'google-adk-agentic-suite',
    title: 'Enterprise Agentic AI Suite (Google ADK)',
    category: 'agentic',
    badge: 'Enterprise Flagship',
    featured: true,
    tagline: 'Multi-Agent Autonomous Operations & Telemetry Remediation',
    description: 'A production-grade, stateful multi-agent system executing real-time telemetry analysis, SLA penalty modeling, causal graph traversal, and automated runbook remediations.',
    fullDescription: `An enterprise-ready, production-grade Agentic AI Suite implementing state-of-the-art autonomous agents tailored for high-stakes Cloud Infrastructure and Telecommunications operations. 
    
    Rather than simple one-shot LLM prompts, this system orchestrates dynamic tool-calling agents equipped with deterministic state machines, vector retrieval anti-hallucination guardrails, and automated remediation contracts compliant with international telecommunications benchmarks (3GPP TS 38.401 & TS 23.501).`,
    highlights: [
      '6 Specialized Autonomous Agents: Telco NOC Optimizer, Multimodal Incident Graph, Enterprise RAG Knowledge, SecOps Defense Swarm, Churn Data Analyst, and Geospatial RF Planner.',
      'Deterministic Graph State Machine: Breadth-first causal graph traversal across infrastructure topologies to isolate root causes (BGP route leaks, optical micro-bends).',
      'Real-Time SLA Penalty Engine: Calculates dollar-denominated contractual liability per minute of congestion and triggers automated Xn load balancing.',
      'Full CI/CD Verification: Accompanied by 39 comprehensive Pytest unit and integration tests verifying tool contracts and state transitions.',
      'Production Containerization: Fully containerized with Docker for seamless hybrid cloud portability.'
    ],
    stack: ['Autonomous Agents', 'Google ADK', 'State Machines', 'Gemini 2.5 Flash', 'FastAPI', 'Pydantic v2', 'NetworkX', 'Docker', 'Pytest (39/39 Passing)'],
    metrics: [
      { label: 'Verified Tests', value: '39 / 39' },
      { label: 'Autonomous Agents', value: '6 Coordinated' },
      { label: 'Architecture', value: 'Graph State Machine' },
      { label: 'Standard', value: '3GPP 5G Compliant' }
    ],
    architecture: `
      [ Ingest Live Telemetry / Alarms ]
                     │
                     ▼
       ┌───────────────────────────┐
       │   Telco NOC Optimizer     │──> Computes SLA Penalties ($/min)
       └─────────────┬─────────────┘
                     │ Triggers Causal Engine
                     ▼
       ┌───────────────────────────┐
       │ Multimodal Incident Graph │──> Breadth-First Fault Isolation
       └─────────────┬─────────────┘
                     │ Dispatches Sub-Agents
       ┌─────────────┴─────────────┐
       ▼                           ▼
  [ SecOps Swarm ]       [ Automated Remediation Runbook ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Agentic%20AI/adk_test_agent',
    demoUrl: null
  },

  // FLAGSHIP 2
  {
    id: 'telco-bs-energy-rl',
    title: 'Autonomous Green Base Station RL Controller',
    category: 'rl',
    badge: 'Autonomous RL',
    featured: true,
    tagline: 'O-RAN rApp Deep Reinforcement Learning for Dynamic Power Management',
    description: 'An industrial Deep RL agent (PPO) cutting 5G cellular transceiver energy consumption by 25-30% under strict 99.99% QoS constraints and zero dropped sessions.',
    fullDescription: `Radio Access Networks (RAN) account for 70-80% of total operator electrical power, historically forced to run 100% full transmission power 24/7/365 to guard against unpredictable traffic spikes. Heuristic sleep timers routinely fail during surge events, causing traffic drops and severe SLA penalties.
    
    This project formulates dynamic multi-sector base station sleep scheduling as a Markov Decision Process (MDP) and trains an industrial Proximal Policy Optimization (PPO) agent that dynamically shifts transceiver states between Active, Shallow Sleep, and Deep Sleep based on real-time traffic telemetry and inter-sector capacity buffers.`,
    highlights: [
      'Markov Decision Process (MDP) Formulation with custom multi-objective reward shaping balancing power conservation against strict QoS penalties.',
      'Farama Gymnasium 1.0.0 Environment modeled from real-world cell traffic profiles, circular hour/day encodings, and adjacent sector capacity.',
      '25-30% Reduction in electrical OPEX power consumption verified against baseline heuristic controllers.',
      '0 Dropped User Sessions & 99.99% QoS Compliance across heavy simulated traffic surges.',
      'Interactive Streamlit Simulation Dashboard allowing engineers to stress-test real-time surge scenarios and evaluate OPEX impact.'
    ],
    stack: ['Reinforcement Learning', 'Gymnasium 1.0.0', 'Stable-Baselines3 (PPO)', 'Markov Decision Process', 'Streamlit', 'Pandas', 'UV', 'Docker'],
    metrics: [
      { label: 'Energy Reduction', value: '25% - 30%' },
      { label: 'QoS Reliability', value: '99.99%' },
      { label: 'Session Drops', value: '0 Violations' },
      { label: 'Control Policy', value: 'PPO Continuous' }
    ],
    architecture: `
          [ 5G Macro Cell Site Tower (Sectors 1, 2, 3) ]
                               │
               Traffic Load, Active UEs, Hour-of-Day
                               ▼
        ┌──────────────────────────────────────────────┐
        │        Custom Farama Gymnasium Env           │
        └──────────────────────┬───────────────────────┘
                               │ State Vector
                               ▼
        ┌──────────────────────────────────────────────┐
        │    Stable-Baselines3 PPO Controller Agent    │
        └──────────────────────┬───────────────────────┘
                               │ Optimal Action Decision
                               ▼
             [ Discrete Power Mode per Sector ]
             • Active (1000W)
             • Shallow Sleep (500W)
             • Deep Sleep (50W)
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Reinforcement%20Learning/telco-bs-energy-saving',
    demoUrl: null
  },

  // FLAGSHIP 3
  {
    id: 'production-genai-swarms',
    title: 'Production Generative AI & Multi-Agent Swarms',
    category: 'genai',
    badge: 'Production Swarms',
    featured: true,
    tagline: 'Stateful Graph Swarms, Hybrid Semantic RAG & Autonomous Tool Calling',
    description: 'A comprehensive suite of production GenAI systems orchestrating LangGraph workflows, CrewAI multi-agent swarms, Pinecone hybrid vector search, and automated code triage.',
    fullDescription: `A production-ready suite of stateful generative AI applications and autonomous multi-agent swarms engineered to solve complex analytical workflows.
    
    Rather than basic chatbot wrappers, these systems incorporate stateful graph architectures, dynamic branching, fact-checking agents, automated codebase issue resolution via Haystack + Claude, and domain-specialized semantic RAG with hybrid keyword/dense search rerankers.`,
    highlights: [
      'LangGraph Multi-Agent Data Analysis: Stateful graph architecture orchestrating collaborative researcher, coder, and validation agents for automated exploratory data analysis.',
      'CrewAI Web Intelligence Swarm: Autonomous swarm coordinating scrapers, synthesis agents, and verification guardrails for market intelligence extraction.',
      'Haystack Autonomous Issue Resolver: Monitors repositories, triages incoming issue reports, performs semantic codebase retrieval, and synthesizes verified PR proposals.',
      'Enterprise Vector RAG: Low-latency semantic question-answering systems leveraging dense vector embeddings, metadata filtering, and hallucination reduction guardrails.',
      'Full-Stack Deployed Applications: Including PDF Summarizer on Hugging Face Spaces, Conversational RAG Streamlit App, and GPTourBA cultural conversational AI.'
    ],
    stack: ['LangGraph', 'CrewAI', 'Haystack', 'Vector Databases (Pinecone/Chroma)', 'Hybrid Search & Reranking', 'OpenAI / Claude / Gemini', 'FastAPI', 'Docker'],
    metrics: [
      { label: 'Deployed Apps', value: '4 Live Systems' },
      { label: 'Agent Coordination', value: 'Stateful Graphs' },
      { label: 'Retrieval Latency', value: '< 120ms P95' },
      { label: 'Search Strategy', value: 'Hybrid RAG + Rerank' }
    ],
    architecture: `
      [ User Query / Raw Documents ]
                     │
                     ▼
       ┌───────────────────────────┐
       │   LangGraph Orchestrator  │
       └──────┬─────────────┬──────┘
              ▼             ▼
       [ Research Agent ] [ Code Agent ]
              │             │
              └──────┬──────┘
                     ▼
       ┌───────────────────────────┐
       │  Fact-Checker & Guardrail │──> Verified Synthetic Output
       └───────────────────────────┘
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Generative%20AI%20Projects',
    demoUrl: null
  },

  // CHATBOT 1: GPTourBA
  {
    id: 'gptourba-conversational-ai',
    title: 'GPTourBA: Cultural & Tourism Conversational AI',
    category: 'genai',
    badge: 'Conversational AI',
    featured: false,
    tagline: 'Domain-Specialized Conversational Agent for Buenos Aires Urban Tourism',
    description: 'An intelligent conversational concierge combining prompt grounding, local geographic entities, and contextual personalization to deliver dynamic cultural itineraries.',
    fullDescription: `Designed as a domain-adapted conversational agent tailored to the rich cultural topography of Buenos Aires. Incorporates prompt grounding with curated local datasets (architecture, historic cafes, culinary neighborhoods) to handle open-ended user inquiries with authentic local context.`,
    highlights: [
      'Domain-adapted prompt orchestration delivering personalized spatial recommendations.',
      'Context-aware memory retaining user preferences across conversational turns.',
      'Grounding guardrails preventing geographic and historical hallucinations.'
    ],
    stack: ['OpenAI API', 'Prompt Engineering', 'Conversational Memory', 'Domain Grounding', 'Python'],
    metrics: [
      { label: 'Domain', value: 'Urban Tourism' },
      { label: 'Interaction', value: 'Multi-Turn Chat' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Building%20Chatbots',
    demoUrl: null
  },

  // CHATBOT 2: Conversational RAG
  {
    id: 'conversational-rag-streamlit',
    title: 'Interactive Multi-Document Conversational RAG',
    category: 'genai',
    badge: 'Interactive RAG',
    featured: false,
    tagline: 'Document Grounded Semantic Q&A with Source Span Citations',
    description: 'A full-stack Streamlit RAG application enabling users to converse with multi-format enterprise documents with semantic vector search and source attribution.',
    fullDescription: `Interactive document Q&A engine that ingests complex PDF and text documents, splits them with recursive character chunking, indexes embeddings in a local vector database, and executes conversational retrieval with verifiable citation spans.`,
    highlights: [
      'Interactive chat UI powered by Streamlit with real-time streaming response tokens.',
      'Strict source span verification to ensure grounded, verifiable answers.',
      'Configurable chunking and overlap strategies for diverse document layouts.'
    ],
    stack: ['Streamlit', 'LangChain', 'Vector Search', 'Embeddings', 'Python'],
    metrics: [
      { label: 'Deployment', value: 'Interactive UI' },
      { label: 'Grounding', value: 'Span Attribution' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Generative%20AI%20Projects',
    demoUrl: null
  },

  // BIG DATA 1
  {
    id: 'pyspark-common-crawl',
    title: 'Distributed Web-Scale Analysis with PySpark',
    category: 'bigdata',
    badge: 'PySpark Big Data',
    featured: true,
    tagline: 'Terabyte-Scale Distributed Querying over Common Crawl Extracts',
    description: 'Distributed data pipelines processing web-scale Common Crawl archives with PySpark RDDs and distributed DataFrames, optimizing shuffle partitions and execution plans.',
    fullDescription: `Common Crawl provides petabytes of open web data. This project architects distributed PySpark extract and aggregation pipelines that handle massive schema variations, high-throughput text tokenization, and distributed link topology extraction without cluster memory exhaustion.`,
    highlights: [
      'Optimized Spark Execution Plans with partition pruning, broadcast joins, and targeted caching.',
      'Distributed Schema Enforcement on semi-structured WARC and WET web extracts.',
      'Scalable Ingestion Pipelines designed to operate horizontally across distributed Spark clusters.'
    ],
    stack: ['Apache Spark', 'PySpark', 'Distributed DataFrames', 'Parquet', 'HDFS / Cloud Storage', 'Execution Tuning'],
    metrics: [
      { label: 'Data Scale', value: 'Web Scale' },
      { label: 'Framework', value: 'Apache Spark' },
      { label: 'Storage', value: 'Columnar Parquet' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/Big%20Data%20Projects/Analyze%20Common%20Crawl%20Data%20with%20PySpark.ipynb',
    demoUrl: null
  },

  // BIG DATA 2
  {
    id: 'wikipedia-clickstream-spark',
    title: 'Wikipedia Clickstream Big Data Graph Flow',
    category: 'bigdata',
    badge: 'Big Data Graphs',
    featured: false,
    tagline: 'Navigational Flow Graph Analysis over Millions of Click Transitions',
    description: 'PySpark SQL and distributed graph aggregation over millions of Wikipedia clickstream transitions, uncovering user navigation trajectories and authority clusters.',
    fullDescription: `Analyzes massive clickstream transaction records capturing article-to-article traversal behaviors. Uses PySpark SQL to model high-density transition matrices, identify central referrer nodes, and quantify information discovery dynamics across multilingual knowledge bases.`,
    highlights: [
      'Aggregated millions of origin-destination click transitions using distributed Spark SQL.',
      'Computed transition probability distributions and identifying high-centrality authority hubs.',
      'Formulated distributed graph traversal metrics scalable to petabyte web logs.'
    ],
    stack: ['PySpark SQL', 'Distributed Graph Analytics', 'Spark Optimization', 'Big Data Engineering'],
    metrics: [
      { label: 'Records Processed', value: 'Multi-Million' },
      { label: 'Engine', value: 'PySpark SQL' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/Big%20Data%20Projects/PySpark%20for%20Big%20Data.%20Analyzing%20Wikipedia%20Clickstream%20Data.ipynb',
    demoUrl: null
  },

  // ML & BANKING RISK 1
  {
    id: 'credit-risk-modeling',
    title: 'Credit Risk & Banking Supervised Learning',
    category: 'ml',
    badge: 'Risk Analytics',
    featured: true,
    tagline: 'Enterprise Default Prediction, Credit Scoring & Cost-Sensitive Optimization',
    description: 'End-to-end banking credit default modeling using Gradient Boosted Trees (XGBoost/LightGBM), cost-sensitive loss functions, precision-recall optimization, and risk tiering.',
    fullDescription: `In financial credit assessment, false negatives (granting credit to an entity that defaults) carry substantially higher financial cost than false positives. This project constructs rigorous predictive pipelines with LightGBM and XGBoost, applying custom probability calibration and cost-matrix threshold optimization to minimize expected monetary portfolio loss.`,
    highlights: [
      'Comprehensive Feature Engineering: Weight of Evidence (WoE) and Information Value (IV) analysis for variable screening.',
      'Cost-Sensitive Decision Boundaries: Realigned threshold cuts based on empirical bank charge-off costs.',
      'Interpretability & Audit Readiness: SHAP (SHapley Additive exPlanations) values to explain individual applicant risk scores for regulatory transparency.'
    ],
    stack: ['Scikit-Learn', 'LightGBM', 'XGBoost', 'SHAP Values', 'ROC-AUC / PR-AUC', 'Probability Calibration'],
    metrics: [
      { label: 'Loss Optimization', value: 'Cost-Matrix Aligned' },
      { label: 'Explainability', value: 'Full SHAP Audit' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/Machine%20Learning%20Projects/Credit%20Risk%20and%20Banking%20Machine%20Learning%20Project%20for%20Supervised%20Learning.ipynb',
    demoUrl: null
  },

  // ML 2: FRAUD SMOTE
  {
    id: 'fraud-detection-smote',
    title: 'Extreme Imbalance Credit Card Fraud Detection',
    category: 'ml',
    badge: 'Anomaly & Imbalance',
    featured: false,
    tagline: 'SMOTE Resampling & Precision-Recall Optimization on Skewed Financial Streams',
    description: 'Detection of fraudulent financial transactions occurring at <0.2% base rates, combining SMOTE oversampling, cost-sensitive logistic regression, and PR-AUC validation.',
    fullDescription: `Extreme class imbalance causes standard classification algorithms to collapse to the majority class. This project demonstrates resilient modeling strategies, contrasting SMOTE synthetic oversampling, Tomek link cleaning, and focal threshold tuning to maximize true positive discovery while suppressing operational false alarms.`,
    highlights: [
      'Precision-Recall AUC maximization on severely skewed transaction data.',
      'Synthetic minority oversampling (SMOTE) with validation strictly on untampered hold-out sets.',
      'Operational trade-off curves balancing manual analyst review overhead against missed fraud loss.'
    ],
    stack: ['Scikit-Learn', 'Imbalanced-Learn (SMOTE)', 'Logistic Regression', 'PR-AUC Analysis'],
    metrics: [
      { label: 'Target Imbalance', value: '< 0.2% Positive' },
      { label: 'Primary Metric', value: 'PR-AUC Maximized' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/Machine%20Learning%20Projects/Credit%20Card%20Fraud%20Detection%20using%20Logistic%20Regression.ipynb',
    demoUrl: null
  },

  // ML 3: Random Forest Income Classification
  {
    id: 'random-forest-income-census',
    title: 'Random Forest Income Classification & Demographic Segmentation',
    category: 'ml',
    badge: 'Ensemble Learning',
    featured: false,
    tagline: 'Socioeconomic Segmentation via Decision Forest Ensembles',
    description: 'Demographic and socioeconomic income bracket modeling utilizing Random Forest ensembles, non-linear feature interaction analysis, and tree-depth tuning.',
    fullDescription: `Predicts socioeconomic income tiers from complex multi-modal census indicators. Explores ensemble bagging variance reduction, feature importance gini index metrics, and tree pruning strategies to construct high-accuracy demographic segmentations.`,
    highlights: [
      'Ensemble bagging optimization reducing individual tree prediction variance.',
      'Gini importance extraction to isolate key demographic income indicators.',
      'Comparative evaluation against single CART decision trees and linear baselines.'
    ],
    stack: ['Scikit-Learn', 'Random Forest', 'Census Data', 'Feature Importance', 'Python'],
    metrics: [
      { label: 'Model', value: 'Random Forest' },
      { label: 'Task', value: 'Income Segmentation' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/Machine%20Learning%20Projects/Machine%20Learning%20Project.%20Random%20Forest%20Classification%20to%20predict%20income%20levels.ipynb',
    demoUrl: null
  },

  // ML 4: KNN Breast Cancer Biopsy
  {
    id: 'breast-cancer-biopsy-knn',
    title: 'Clinical Diagnostic Biopsy Classification (KNN)',
    category: 'ml',
    badge: 'Clinical Diagnostics',
    featured: false,
    tagline: 'Fine-Needle Aspirate Biopsy Classification with Distance Metric Tuning',
    description: 'Clinical diagnostic classification of breast masses into benign vs malignant tiers using K-Nearest Neighbors, distance metric scaling, and decision boundary calibration.',
    fullDescription: `Applies non-parametric K-Nearest Neighbors modeling to cellular biometric attributes derived from digitized biopsy images. Evaluates Euclidean vs Manhattan distance metrics, feature normalization strategies, and classification thresholds prioritizing medical recall.`,
    highlights: [
      'Distance metric sensitivity analysis under varying feature normalization regimes.',
      'High-recall decision thresholding to minimize false negative medical diagnostic error.',
      'Empirical cross-validation curve to determine the optimal neighborhood parameter K.'
    ],
    stack: ['Scikit-Learn', 'K-Nearest Neighbors', 'Medical Biometrics', 'Cross-Validation'],
    metrics: [
      { label: 'Domain', value: 'Oncology Diagnostics' },
      { label: 'Priority', value: 'Recall Maximized' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/Machine%20Learning%20Projects/Breast%20Cancer%20Classification%20Using%20K-Nearest%20Neighbors.ipynb',
    demoUrl: null
  },

  // DEEP LEARNING 1
  {
    id: 'hotel-booking-cancellations-dl',
    title: 'Deep Learning Hotel Cancellation Prediction',
    category: 'dl-nlp',
    badge: 'Neural Architectures',
    featured: false,
    tagline: 'Multi-Layer Neural Classification with Cost-Sensitive Loss Functions',
    description: 'Multi-layer perceptron neural architecture trained on reservation telemetry to predict customer booking cancellations, enabling dynamic revenue overbooking management.',
    fullDescription: `Hospitality revenues depend heavily on accurate forward overbooking forecasts. This deep learning implementation models intricate non-linear customer behaviors, lead times, deposit types, and historical changes via PyTorch/TensorFlow deep neural architectures with dropout regularization and batch normalization.`,
    highlights: [
      'Multi-layer deep neural network with dropout and batch normalization to prevent overfitting.',
      'Embedding layer representations for high-cardinality categorical variables.',
      'Direct revenue impact: enabling data-driven overbooking strategies without customer displacement risk.'
    ],
    stack: ['PyTorch', 'TensorFlow', 'Deep Neural Networks', 'Batch Normalization', 'Feature Embeddings'],
    metrics: [
      { label: 'Model', value: 'Deep Neural Net' },
      { label: 'Domain', value: 'Hospitality Revenue' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/Deep%20Learning%20%26%20Neural%20Network%20Projects/Data-Driven%20Hospitality.%20Predicting%20and%20Preventing%20Hotel%20Booking%20Cancellations%20.ipynb',
    demoUrl: null
  },

  // DEEP LEARNING 2: Forest Cover Type
  {
    id: 'forest-cover-type-dl',
    title: 'Forest Cover Type Classification with Neural Networks',
    category: 'dl-nlp',
    badge: 'Multi-Class Neural Nets',
    featured: false,
    tagline: 'Cartographic & Geological Multi-Class Softmax Classification',
    description: 'Neural network multi-class classification across 7 wilderness forest types using cartographic, elevation, hydrological, and soil telemetry features.',
    fullDescription: `Classifies forest cover types from strictly cartographic and geological variables (without aerial imagery). Implements deep feedforward neural architectures with multi-class softmax activations, cross-entropy optimization, and feature scaling.`,
    highlights: [
      '7-class multi-categorical softmax classification over 500k+ cartographic samples.',
      'Custom learning rate scheduling and early stopping protocols.',
      'Detailed evaluation across confusion matrices and per-class F1-scores.'
    ],
    stack: ['PyTorch', 'TensorFlow', 'Softmax Multi-Class', 'Geological Data', 'Python'],
    metrics: [
      { label: 'Classes', value: '7 Forest Types' },
      { label: 'Framework', value: 'PyTorch / TF' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/Deep%20Learning%20%26%20Neural%20Network%20Projects/Forest%20Cover%20Type%20Classification%20with%20Neural%20Networks.ipynb',
    demoUrl: null
  },

  // DEEP LEARNING 3: Heart Failure Risk
  {
    id: 'heart-failure-risk-neural',
    title: 'Predicting Heart Failure Risk via Neural Biometrics',
    category: 'dl-nlp',
    badge: 'Clinical Neural Nets',
    featured: false,
    tagline: 'Clinical Risk Prediction Utilizing Physiological Telemetry & Biomarkers',
    description: 'Neural classification of cardiovascular mortality risk using serum creatinine, ejection fraction, and physiological biometric records.',
    fullDescription: `Heart failure prediction utilizing clinical biomarkers. Demonstrates neural architecture design with specialized regularization, comparing decision thresholds against traditional cardiological scoring heuristics.`,
    highlights: [
      'Biomarker feature normalization and correlation analysis (serum creatinine, ejection fraction).',
      'Neural network sensitivity analysis across clinical demographic cohorts.',
      'Validation against standard clinical scoring benchmarks.'
    ],
    stack: ['Neural Networks', 'Clinical Biometrics', 'PyTorch / Scikit-Learn', 'Biostatistics'],
    metrics: [
      { label: 'Application', value: 'Cardiovascular Risk' },
      { label: 'Evaluation', value: 'Clinical Sensitivity' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/Deep%20Learning%20%26%20Neural%20Network%20Projects/Predicting%20Heart%20Failure%20Risk%20Using%20Machine%20Learning.%20A%20Neural%20Network%20Approach.ipynb',
    demoUrl: null
  },

  // NLP 1: Aspect TinyBERT
  {
    id: 'aspect-based-movie-tinybert',
    title: 'Aspect-Based Movie Classification with TinyBERT',
    category: 'dl-nlp',
    badge: 'Transformers & NLP',
    featured: true,
    tagline: 'Compact Transformer Fine-Tuning for Fine-Grained Aspect Sentiment',
    description: 'Fine-tuned distilled Transformer (TinyBERT) deployed with PyTorch and Hugging Face to perform granular aspect-level sentiment decomposition across critical movie review dimensions.',
    fullDescription: `Moving beyond binary sentiment classification, this project implements fine-grained aspect sentiment analysis. By fine-tuning a compact distilled Transformer (TinyBERT), the system extracts nuanced sentiment polarities mapped across specific narrative aspects (e.g., directing, cinematography, screenwriting, performance) with low inference latency.`,
    highlights: [
      'Fine-tuned distilled Transformer architecture achieving 94%+ of full BERT accuracy at 1/4 the compute footprint.',
      'Token classification and aspect extraction pipeline using Hugging Face Transformers and PyTorch.',
      'Optimized for low-latency edge inference and real-time review stream decomposition.'
    ],
    stack: ['PyTorch', 'Hugging Face Transformers', 'TinyBERT', 'Distillation', 'Token Classification'],
    metrics: [
      { label: 'Model Size', value: 'Distilled TinyBERT' },
      { label: 'Task', value: 'Aspect Sentiment' },
      { label: 'Inference', value: 'Low Latency Optimized' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/NLP%20%26%20%20LLM%C2%B4s%20%20Projects/Aspect-Based%20Classification%20for%20Movies%20with%20TinyBERT%2C%20Hugging%20Face%20Transformers%2C%20and%20PyTorch.ipynb',
    demoUrl: null
  },

  // NLP 2: Syntactic Patterns SpaCy
  {
    id: 'syntactic-patterns-spacy',
    title: 'Syntactic Grammatical Trees & Dependency Parsing',
    category: 'dl-nlp',
    badge: 'Linguistics & SpaCy',
    featured: false,
    tagline: 'Grammatical Tree Structures & Syntactic Style Signatures Across Classical Authors',
    description: 'Computational linguistics pipeline leveraging SpaCy for part-of-speech (POS) tagging and dependency graph parsing to uncover literary syntactic signatures.',
    fullDescription: `Explores the syntactic architecture of natural language texts. Implements rule-based and neural dependency parsers to construct grammatical dependency trees, measure clause complexity, and quantify stylistic syntactical fingerprints.`,
    highlights: [
      'Automated dependency tree parsing and part-of-speech tagging pipelines with SpaCy.',
      'Quantitative syntactic complexity metrics (tree depth, clause embedding density).',
      'Linguistic style signature extraction across diverse literary corpora.'
    ],
    stack: ['SpaCy', 'Dependency Parsing', 'POS Tagging', 'Linguistics', 'Python'],
    metrics: [
      { label: 'Discipline', value: 'Computational Linguistics' },
      { label: 'Engine', value: 'SpaCy NLP' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/NLP%20%26%20%20LLM%C2%B4s%20%20Projects/Exploring%20Syntactic%20Patterns%20in%20Classic%20Literature%20Using%20NLP.ipynb',
    demoUrl: null
  },

  // NLP 3: Mystery Friend Author Attribution
  {
    id: 'mystery-friend-authorship',
    title: 'Stylometric Author Identification (Mystery Friend)',
    category: 'dl-nlp',
    badge: 'Stylometry & Bayes',
    featured: false,
    tagline: 'Stylometric Text Attribution via Multinomial Naive Bayes & N-Grams',
    description: 'Authorship attribution system determining the creator of anonymous text snippets using Multinomial Naive Bayes, word/character n-grams, and TF-IDF representations.',
    fullDescription: `Solves the forensic authorship attribution challenge. Extracts authorial lexical frequencies, punctuation distributions, and character n-grams to classify authorship with high statistical certainty across classical literary styles.`,
    highlights: [
      'Multi-class stylometric feature engineering blending lexical diversity and n-gram signatures.',
      'Multinomial Naive Bayes probabilistic classification with Laplace smoothing.',
      'Robust performance on short, fragmented textual excerpts.'
    ],
    stack: ['Multinomial Naive Bayes', 'TF-IDF', 'Bag-of-Words', 'Stylometry', 'Scikit-Learn'],
    metrics: [
      { label: 'Methodology', value: 'Bayesian Stylometry' },
      { label: 'Task', value: 'Author Attribution' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/NLP%20%26%20%20LLM%C2%B4s%20%20Projects/Mystery%20Friend.%20Author%20Identification%20Using%20Multinomial%20Naive%20Bayes%20and%20NLP%20Techniques.ipynb',
    demoUrl: null
  },

  // STATS & A/B TESTING 1: Farmburg
  {
    id: 'farmburg-price-ab-test',
    title: 'Farmburg Price Optimization A/B Experimentation',
    category: 'stats',
    badge: 'A/B Experimentation',
    featured: true,
    tagline: 'Multi-Variant Pricing Elasticity Hypothesis Testing & Revenue Modeling',
    description: 'Rigorous multi-variant A/B experiment analyzing price elasticity across $0.99, $1.99, and $4.99 price tiers using Chi-Square and Binomial tests to maximize overall expected revenue.',
    fullDescription: `Determining optimal product pricing requires navigating the fundamental trade-off between conversion rate volume and per-transaction revenue. This experiment conducts rigorous statistical hypothesis testing across randomized user cohorts, controlling family-wise error rates and deriving the exact price point that maximizes gross revenue.`,
    highlights: [
      'Chi-Square Goodness-of-Fit and Pairwise Binomial Tests to evaluate statistical conversion lifts.',
      'Statistical Power and Sample Size verification to eliminate false discovery risks.',
      'Mathematical revenue expectation curves balancing elasticity against total customer lifetime value.'
    ],
    stack: ['Statistical Hypothesis Testing', 'Chi-Square Test', 'Binomial Distribution', 'SciPy', 'Revenue Modeling'],
    metrics: [
      { label: 'Methodology', value: 'Chi-Square & Binomial' },
      { label: 'Confidence', value: '99% Significant' },
      { label: 'Optimization', value: 'Max Gross Revenue' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/Statistics%2C%20Testing%20and%20AB%20Testing%20Projects/Testing%20Analysis%20for%20Price%20Optimization.%20Farmburg%27s%20AB%20Test.ipynb',
    demoUrl: null
  },

  // DATA ANALYTICS & EDA: E-Commerce Funnel
  {
    id: 'ecommerce-funnel-analytics',
    title: 'E-Commerce Funnel & Multi-Stage Cohort Analytics',
    category: 'stats',
    badge: 'Funnel Optimization',
    featured: false,
    tagline: 'Granular Cohort Analysis & Conversion Drop-Off Point Discovery',
    description: 'End-to-end customer conversion funnel modeling identifying user attrition stages from homepage impression to final checkout transaction.',
    fullDescription: `Analyzes digital commerce session telemetry to map multi-step purchase funnels. Discovers friction points, calculates step-by-step conversion probabilities, and models customer retention across behavioral acquisition cohorts.`,
    highlights: [
      'Session-level transaction funnel mapping across multi-page purchase steps.',
      'Cohort retention matrices identifying critical drop-off transition steps.',
      'Data-driven recommendations for checkout flow UX optimization.'
    ],
    stack: ['Pandas', 'Funnel Analysis', 'Cohort Analysis', 'Seaborn', 'Data Analytics'],
    metrics: [
      { label: 'Objective', value: 'Funnel Optimization' },
      { label: 'Output', value: 'Drop-Off Mitigation' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/Data%20Analytics%20%26%20Descriptive%20Statistics/E-Commerce%20Funnel%20Basic%20Analysis.ipynb',
    demoUrl: null
  },

  // DATA ANALYTICS: Flight Delay EDA
  {
    id: 'flight-delay-patterns-eda',
    title: 'Aviation Flight Delays & Congestion Pattern Analytics',
    category: 'stats',
    badge: 'Exploratory Analytics',
    featured: false,
    tagline: 'Multivariate Visualization & Temporal Bottleneck Extraction',
    description: 'Exploratory data analysis identifying systemic aviation congestion drivers, temporal weather impacts, carrier-specific scheduling buffers, and route delays.',
    fullDescription: `Deep exploratory analysis over massive domestic flight records. Combines missing data imputation, outlier diagnostics, and multivariate kernel density visualizations to isolate the structural drivers of airport hub congestion and departure cascading delays.`,
    highlights: [
      'Uncovered cascading delay propagations across interconnected hub airport networks.',
      'Temporal decomposition analyzing seasonal and diurnal delay frequency peaks.',
      'Robust outlier detection and missing data handling strategies.'
    ],
    stack: ['Pandas', 'Matplotlib', 'Seaborn', 'Exploratory Data Analysis', 'Statistical EDA'],
    metrics: [
      { label: 'Domain', value: 'Commercial Aviation' },
      { label: 'Method', value: 'Multivariate EDA' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/Data%20Science%20%26%20Exploratory%20Data%20Analysis/Data%20Flight%20Analysis.ipynb',
    demoUrl: null
  },

  // MATH & OPTIMIZATION
  {
    id: 'limit-derivative-math',
    title: 'Derivative Limits & Vector Space Foundations',
    category: 'stats',
    badge: 'Mathematical Foundations',
    featured: false,
    tagline: 'Computational Verification of Infinitesimal Calculus & Vector Projections',
    description: 'First-principles computational explorations of infinitesimal limits, tangent secants, continuous differentiability, and multi-dimensional vector space projections for ML.',
    fullDescription: `Machine learning and optimization algorithms are fundamentally grounded in multivariate calculus and linear algebra. This project explores the formal mathematical machinery under the hood of gradient-based optimization: epsilon-delta limit convergence, finite difference approximations, and multi-dimensional vector projections.`,
    highlights: [
      'First-principles visualization of secant-to-tangent convergence in infinitesimal calculus.',
      'Vector algebra implementations: inner/cross products, orthonormal bases, and hyperplane projections.',
      'Core theoretical grounding for custom loss function gradients and backpropagation.'
    ],
    stack: ['Multivariate Calculus', 'Linear Algebra', 'NumPy', 'Matplotlib', 'Mathematical Proofs'],
    metrics: [
      { label: 'Discipline', value: 'Calculus & Vectors' },
      { label: 'Application', value: 'ML Optimization' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/Algebra%20and%20Math%20Projects/Limit%20Definition%20of%20the%20Derivative%20Exploration.ipynb',
    demoUrl: null
  }
];
