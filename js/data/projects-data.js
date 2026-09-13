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
  { id: 'rag', label: 'Advanced RAG & Retrieval', icon: 'search' },
  { id: 'timeseries', label: 'Time Series & Forecasting', icon: 'activity' },
  { id: 'rl', label: 'Reinforcement Learning', icon: 'zap' },
  { id: 'genai', label: 'Generative AI & Chatbots', icon: 'bot' },
  { id: 'bigdata', label: 'Big Data & Distributed', icon: 'database' },
  { id: 'ml', label: 'Machine Learning & Risk', icon: 'trending-up' },
  { id: 'dl-nlp', label: 'Deep Learning & NLP', icon: 'network' },
  { id: 'stats', label: 'Stats, Math & Analytics', icon: 'bar-chart' }
];

const PORTFOLIO_PROJECTS = [
  // ==========================================
  // AGENTIC AI - MASTER FLAGSHIP SUITE
  // ==========================================
  {
    id: 'google-adk-agentic-suite',
    title: 'Enterprise Agentic AI Suite (Google ADK)',
    category: 'agentic',
    badge: 'Enterprise Flagship',
    featured: true,
    tagline: '6 Autonomous Agent Systems for Cloud Infrastructure, NOC & SecOps',
    description: 'A production-grade multi-agent suite executing real-time telemetry analysis, SLA penalty calculation, causal DAG traversal, and automated runbook remediations.',
    fullDescription: `An enterprise-ready, production-grade Agentic AI Suite implementing state-of-the-art autonomous agents tailored for high-stakes Cloud Infrastructure, Cybersecurity, and Telecommunications operations.
    
    Rather than simple one-shot LLM prompts, this suite features 6 completely isolated, standalone autonomous agent applications equipped with deterministic state machines, vector retrieval anti-hallucination guardrails, and automated remediation contracts compliant with international telecommunications benchmarks (3GPP TS 38.401 & TS 23.501).`,
    highlights: [
      '6 Standalone Autonomous Agent Applications: Telco NOC Optimizer, Multimodal Incident Graph, Enterprise RAG Knowledge Agent, SecOps Defense Swarm, Churn Data Analyst, and Geospatial RF Planner.',
      'Deterministic Graph State Machines: Breadth-first causal graph traversal across infrastructure topologies to isolate root causes (BGP route leaks, optical micro-bends).',
      'Real-Time SLA Penalty Engine: Calculates dollar-denominated contractual liability per minute of congestion and triggers automated Xn load balancing.',
      'Full CI/CD Verification: Accompanied by 39 comprehensive Pytest unit and integration tests verifying tool contracts and state transitions.',
      'Production Containerization: Fully packaged with hermetic uv environments and Docker for seamless hybrid cloud portability.'
    ],
    stack: ['Google ADK 2.9.0', 'Gemini 2.5 Flash', 'State Machines', 'NetworkX', 'FastAPI', 'Pydantic v2', 'Docker', 'Pytest (39/39 Passing)'],
    metrics: [
      { label: 'Verified Tests', value: '39 / 39' },
      { label: 'Standalone Agents', value: '6 Projects' },
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
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Agentic%20AI',
    demoUrl: null
  },

  // AGENTIC PROJECT 1: Telco NOC Optimizer
  {
    id: 'telco-noc-optimizer',
    title: 'Telco NOC Optimizer (Google ADK)',
    category: 'agentic',
    badge: 'Autonomous NOC Agent',
    featured: false,
    tagline: '5G/LTE RAN Operations, SLA Penalty Estimation & 3GPP Remediation',
    description: 'Autonomous reactive agent monitoring real-time gNodeB telemetry, evaluating enterprise SLA liability risks, verifying 3GPP specifications, and executing closed-loop mitigations over Xn-AP.',
    fullDescription: `Acts as an autonomous Tier-3 NOC Reliability Engineer protecting mission-critical 5G/LTE radio access infrastructure. The agent continuously monitors PRB utilization, user counts, and latency, detects threshold breaches, checks 3GPP standards (TS 38.401, TS 23.501, TS 38.331), models dollar-denominated contractual liability per minute of congestion, and autonomously triggers closed-loop network mitigations.`,
    highlights: [
      'Real-time gNodeB telemetry monitoring across PRB utilization, active UEs, and latency percentiles.',
      'Deterministic SLA penalty engine calculating financial liability per minute of unmitigated degradation.',
      '3GPP specification verification (TS 38.401, TS 23.501, TS 38.331) before mitigation execution.',
      'Safe closed-loop mitigation actions including load_balance_xn and carrier_aggregation_steer.'
    ],
    stack: ['Google ADK 2.9.0', 'Gemini 2.5 Flash', '3GPP Standards', 'FastAPI', 'Pydantic v2', 'Pytest'],
    metrics: [
      { label: 'Standard', value: '3GPP TS 38.401' },
      { label: 'Mitigation', value: 'Closed-Loop Xn-AP' },
      { label: 'SLA Engine', value: 'Dollar-Denominated' },
      { label: 'Model', value: 'Gemini 2.5 Flash' }
    ],
    architecture: `
      [ gNodeB Telemetry Stream ]
                  │
                  ▼
        ┌───────────────────┐
        │ Anomaly Evaluator │──> Triggered when PRB > 85%
        └─────────┬─────────┘
                  ▼
        ┌───────────────────┐
        │ SLA Penalty Model │──> Liability: $500 - $2,500/min
        └─────────┬─────────┘
                  ▼
        ┌───────────────────┐
        │  3GPP Compliance  │──> Verifies TS 38.401 / TS 23.501
        └─────────┬─────────┘
                  ▼
        [ Closed-Loop Mitigation: load_balance_xn ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Agentic%20AI/telco_noc_optimizer',
    demoUrl: null
  },

  // AGENTIC PROJECT 2: Multimodal Incident Graph
  {
    id: 'multimodal-incident-graph',
    title: 'Multimodal Incident Graph (Google ADK)',
    category: 'agentic',
    badge: 'Graph State Machine',
    featured: false,
    tagline: 'Causal DAG Root Cause Isolation & Automated SRE Runbooks',
    description: 'Production-grade graph topology analysis, breadth-first search (BFS) causal root cause isolation, syslog anomaly ingestion, and automated runbook execution for 5G core incidents.',
    fullDescription: `Triages distributed outages by modeling network infrastructure as a causal directed acyclic graph (DAG). Moving through deterministic state transitions (INVESTIGATING → ROOT_CAUSE_ISOLATED → VERIFIED_RESOLVED), the agent traces fault propagation across physical and logical dependencies, parses unstructured syslog anomalies, and executes automated remediation runbooks.`,
    highlights: [
      'Network infrastructure causal DAG modeling with NetworkX.',
      'Breadth-first search (BFS) algorithm to isolate true root causes from symptom alarms.',
      'Automated operational runbooks (RB-BGP-RESET-01, RB-OPTICAL-SWITCHOVER).',
      'Unstructured syslog anomaly parsing extracting IP, interface, and error code entities.'
    ],
    stack: ['Google ADK 2.9.0', 'Gemini 2.5 Flash', 'NetworkX (BFS)', 'State Machine', 'Syslog Parsing', 'Pytest'],
    metrics: [
      { label: 'Topology Engine', value: 'NetworkX Causal DAG' },
      { label: 'Search Strategy', value: 'Breadth-First (BFS)' },
      { label: 'Resolution', value: 'Automated Runbooks' },
      { label: 'Framework', value: 'Google ADK' }
    ],
    architecture: `
      [ P1/P2 Incident Ingestion ] ──> Parse Syslogs & Alarms
                     │
                     ▼
        ┌─────────────────────────┐
        │ Graph Topology Traversal│──> BFS Search Across Node Dependencies
        └────────────┬────────────┘
                     ▼
        ┌─────────────────────────┐
        │ Root Cause Identification│──> Isolates Optical Micro-Bend / BGP Leak
        └────────────┬────────────┘
                     ▼
        [ Runbook Execution: RB-BGP-RESET-01 / Automated Switchover ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Agentic%20AI/multimodal_incident_graph',
    demoUrl: null
  },

  // AGENTIC PROJECT 3: Enterprise RAG Knowledge Agent
  {
    id: 'enterprise-rag-knowledge',
    title: 'Enterprise RAG Knowledge Agent (Google ADK)',
    category: 'agentic',
    badge: 'Technical Standards RAG',
    featured: false,
    tagline: 'Semantic Vector Retrieval & Anti-Hallucination Verification for Telco Specs',
    description: 'Semantic vector retrieval, strict grounding verification, and executive briefing synthesis across 5G Standalone SBA, Model Context Protocol (MCP), and Telco Edge Cloud architectures.',
    fullDescription: `Enables CTOs, Principal Architects, and Engineering Leadership to query complex standards, extract verifiable technical constants, and prevent LLM hallucinations. Integrates semantic vector similarity search with authoritative specification document retrieval and citation verification guardrails.`,
    highlights: [
      'Semantic vector search across 5G SBA, Model Context Protocol (MCP), and Telco Edge Cloud whitepapers.',
      'Citation verification guardrail ensuring zero hallucinated parameters or protocol constants.',
      'Multi-level response formatting: executive synthesis for leadership vs technical parameters for engineers.'
    ],
    stack: ['Google ADK 2.9.0', 'Gemini 2.5 Flash', 'Vector Search', 'Citation Verification', 'Executive Briefings'],
    metrics: [
      { label: 'Standards Domain', value: '5G SBA & MCP' },
      { label: 'Grounding', value: 'Zero-Hallucination' },
      { label: 'Synthesis', value: 'Executive Briefs' },
      { label: 'Framework', value: 'Google ADK' }
    ],
    architecture: `
      [ Architect / CTO Natural Language Query ]
                         │
                         ▼
           ┌───────────────────────────┐
           │   Semantic Vector Search  │──> Dense Embeddings Retrieval
           └─────────────┬─────────────┘
                         ▼
           ┌───────────────────────────┐
           │   Citation Verification   │──> Anti-Hallucination Guardrail
           └─────────────┬─────────────┘
                         ▼
           [ Authoritative Response with Verifiable Spec Citations ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Agentic%20AI/enterprise_rag_knowledge',
    demoUrl: null
  },

  // AGENTIC PROJECT 4: Autonomous SecOps Swarm
  {
    id: 'autonomous-secops-swarm',
    title: 'Autonomous SecOps Swarm Agent (Google ADK)',
    category: 'agentic',
    badge: 'Multi-Agent Swarm',
    featured: false,
    tagline: 'Hierarchical Perimeter Defense, Threat Hunting & Automated Containment',
    description: 'Hierarchical multi-agent cybersecurity swarm coordinating a Coordinator leader and 3 specialized subagents: Threat Hunter, Firewall Mitigator, and SOC Escalation Dispatcher.',
    fullDescription: `Built natively on Google ADK using gemini-2.5-flash, this multi-agent architecture coordinates cyber defense across telecom and cloud perimeters. The Coordinator delegates tasks to specialized subagents: threat_hunter scans feeds and extracts IOCs with CVSS v3.1 scoring, firewall_mitigator applies edge ACLs and BGP Flowspec blackholing, and soc_dispatcher compiles P1/P2 incidents for PagerDuty escalation.`,
    highlights: [
      'Hierarchical multi-agent coordination with specialized subagents for hunting, mitigation, and dispatch.',
      'Automated IOC extraction, attack pattern categorization, and CVSS v3.1 severity scoring.',
      'Closed-loop perimeter containment actions: edge ACL enforcement, rate-limiting, and BGP Flowspec.',
      'Tier-2 SOC incident packaging with standardized severity escalation protocols.'
    ],
    stack: ['Google ADK 2.9.0', 'Gemini 2.5 Flash', 'Hierarchical Swarm', 'CVSS v3.1', 'BGP Flowspec', 'Pytest'],
    metrics: [
      { label: 'Swarm Topology', value: 'Hierarchical Multi-Agent' },
      { label: 'Subagents', value: '3 Specialized' },
      { label: 'Threat Triage', value: 'CVSS v3.1 Automated' },
      { label: 'Mitigation', value: 'Edge ACL / BGP' }
    ],
    architecture: `
                     ┌──────────────────────────────────┐
                     │ autonomous_secops_swarm (Leader) │
                     └────────────────┬─────────────────┘
                                      │
            ┌─────────────────────────┼─────────────────────────┐
            ▼                         ▼                         ▼
      [ threat_hunter ]     [ firewall_mitigator ]      [ soc_dispatcher ]
      • IOC Extraction       • Edge ACL Ingestion       • Incident Briefing
      • CVSS v3.1 Scoring    • BGP Flowspec Blackhole   • PagerDuty Escalation
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Agentic%20AI/autonomous_secops_swarm',
    demoUrl: null
  },

  // AGENTIC PROJECT 5: Telco Churn Data Analyst
  {
    id: 'telco-churn-data-analyst',
    title: 'Telco Churn Data Analyst Agent (Google ADK)',
    category: 'agentic',
    badge: 'Autonomous Data Science',
    featured: false,
    tagline: 'Automated Statistical EDA, Risk Profiling & CLV Retention Strategies',
    description: 'Autonomous data science agent performing statistical EDA profiling, customer cohort risk segmentation, individualized churn likelihood modeling, and CLV-driven retention campaign optimization.',
    fullDescription: `Operates as an autonomous Data Science Lead analyzing enterprise telecom subscriber usage, Quality of Service (QoS) degradation, and contract lifecycle metrics. The agent autonomously calculates Pearson correlation matrices, identifies churn inflection points (e.g. repeated dropped calls), evaluates retention ROI, and produces actionable mitigation strategies for business stakeholders.`,
    highlights: [
      'Autonomous Exploratory Data Analysis (EDA) over subscriber billing, QoS, and contract tenure.',
      'Automated Pearson correlation matrix extraction identifying dominant churn drivers.',
      'Cohort risk segmentation and customer lifetime value (CLV) retention trade-off analysis.',
      'Generates targeted business retention campaigns with estimated ROI and churn reduction.'
    ],
    stack: ['Google ADK 2.9.0', 'Gemini 2.5 Flash', 'Pandas', 'EDA Profiling', 'Churn Modeling', 'CLV Optimization'],
    metrics: [
      { label: 'Role', value: 'Autonomous Data Scientist' },
      { label: 'Analysis', value: 'EDA & Correlation Matrix' },
      { label: 'Optimization', value: 'Max Retention ROI' },
      { label: 'Framework', value: 'Google ADK' }
    ],
    architecture: `
      [ Telecom Subscriber Telemetry & Billing CSV ]
                         │
                         ▼
           ┌───────────────────────────┐
           │   Automated EDA & Corrs   │──> Pearson Matrix & Cohort Outliers
           └─────────────┬─────────────┘
                         ▼
           ┌───────────────────────────┐
           │   Churn Risk Modeling     │──> Scoring Based on QoS Drops
           └─────────────┬─────────────┘
                         ▼
           [ Targeted Retention Strategy with Projected ROI & CLV Impact ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Agentic%20AI/telco_churn_data_analyst',
    demoUrl: null
  },

  // AGENTIC PROJECT 6: Geospatial RF Planner
  {
    id: 'geospatial-rf-planner',
    title: 'Geospatial RF Planner Agent (Google ADK)',
    category: 'agentic',
    badge: 'Spatial Telecom AI',
    featured: false,
    tagline: '3GPP TR 38.901 Propagation Modeling & GeoJSON Coverage Synthesis',
    description: 'Spatial telecom intelligence evaluating 3GPP propagation models, dead-zone discovery, antenna azimuth/tilt beam steering, and RFC 7946 GeoJSON map generation.',
    fullDescription: `Solves mission-critical 5G/LTE radio planning challenges by bridging physical GIS topologies with RF link-budget calculations. Evaluates 3GPP TR 38.901 path loss, identifies coverage dead-zones from drive-test and user telemetry, recommends antenna mechanical/electrical tilt optimizations, and outputs standards-compliant RFC 7946 GeoJSON maps for GIS platforms.`,
    highlights: [
      '3GPP TR 38.901 spatial radio frequency path loss and signal attenuation modeling.',
      'Dead-zone discovery and coverage hole identification across urban/suburban drive-test data.',
      'Optimization of antenna azimuth, mechanical tilt, and electrical tilt parameters.',
      'Synthesizes standards-compliant RFC 7946 GeoJSON geometries for seamless GIS visualization.'
    ],
    stack: ['Google ADK 2.9.0', 'Gemini 2.5 Flash', '3GPP TR 38.901', 'GeoJSON (RFC 7946)', 'GIS Analysis', 'Pytest'],
    metrics: [
      { label: 'Propagation', value: '3GPP TR 38.901' },
      { label: 'Output Format', value: 'RFC 7946 GeoJSON' },
      { label: 'Optimization', value: 'Azimuth & Tilt' },
      { label: 'Framework', value: 'Google ADK' }
    ],
    architecture: `
      [ Drive-Test & Site Telemetry Stream ]
                        │
                        ▼
          ┌───────────────────────────┐
          │  3GPP TR 38.901 Link Calc │──> Path Loss & Shadowing Analysis
          └─────────────┬─────────────┘
                        ▼
          ┌───────────────────────────┐
          │   Antenna Optimization    │──> Mechanical/Electrical Tilt Tuning
          └─────────────┬─────────────┘
                        ▼
          [ RFC 7946 GeoJSON Output for Geographic Information Systems ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Agentic%20AI/geospatial_rf_planner',
    demoUrl: null
  },

  // ==========================================
  // ADVANCED RAG - MASTER FLAGSHIP SUITE
  // ==========================================
  {
    id: 'enterprise-rag-suite',
    title: 'Enterprise Retrieval-Augmented Generation (RAG) Suite',
    category: 'rag',
    badge: 'Enterprise Flagship',
    featured: true,
    tagline: '5 End-to-End Production RAG Paradigms: Tuning, Multimodal, CRAG, GraphRAG & SQL Fusion',
    description: 'A comprehensive suite of 5 self-contained, production-grade RAG systems covering chunking ablation, financial balance sheet extraction, LangGraph self-corrective SRE state machines, topological knowledge graphs, and multi-agent SQL synthesis.',
    fullDescription: `In production enterprise AI, naive vector search ("chunk, embed, cosine similarity") fails on complex queries, intricate financial tables, multi-hop reasoning, and strict compliance environments.

    This flagship suite presents 5 end-to-end, self-isolated RAG applications covering the complete spectrum of modern retrieval engineering:
    1. Hyperparameter Tuning & Benchmarking Lab (HitRate@K, MRR, RRF hybrid search)
    2. Financial 10-K/10-Q Multimodal Complex Document RAG with arithmetic invariants
    3. Agentic Self-Corrective RAG (CRAG) with LangGraph state machine & web fallback
    4. GraphRAG Knowledge Network with dual vector-seed + N-hop topological expansion
    5. Enterprise Multi-Agent RAG fusing structured SQLite with unstructured legal SLAs

    Each project is containerized with uv packaging, custom Streamlit dark-mode glassmorphic cockpits, dynamic multi-model switching (Gemini 2.5 Flash / GPT-4o / Offline Local CPU), and 100% passing pytest suites (33/33 tests).`,
    highlights: [
      '5 Isolated Standalone RAG Applications: covering chunking benchmarking, multimodal financial tables, LangGraph CRAG state machines, NetworkX knowledge graphs, and multi-agent SQL fusion.',
      'Dynamic Multi-Model Switching: Every Streamlit UI enables runtime toggling between Google Gemini 2.5 Flash, OpenAI GPT-4o, and Zero-Key Offline Local CPU fallback.',
      'Empirical Evaluation & Formal IR Metrics: Hit Rate@K, Mean Reciprocal Rank (MRR), and accounting balance sheet invariant verification (A = L + E).',
      'Production Testing & Packaging: 100% test coverage with 33 automated pytest unit and integration tests and hermetic uv manifests.'
    ],
    stack: ['ChromaDB', 'LangGraph', 'NetworkX', 'PyVis', 'pdfplumber', 'BM25Okapi', 'Cross-Encoder Rerank', 'Streamlit', 'uv', 'Pytest (33/33 Passing)'],
    metrics: [
      { label: 'Verified Tests', value: '33 / 33' },
      { label: 'Standalone Systems', value: '5 Applications' },
      { label: 'Multi-Model Switch', value: 'Gemini / GPT-4o / Local' },
      { label: 'Environment', value: 'Hermetic uv' }
    ],
    architecture: `
      [ User Query / Enterprise Multi-Modal Documents ]
                             │
            ┌────────────────┴────────────────┐
            ▼                                 ▼
      [ Dense Vector Store ]         [ Topological Knowledge Graph / SQL ]
      (ChromaDB / BM25 RRF)          (NetworkX / SQLite Tables)
            │                                 │
            └────────────────┬────────────────┘
                             ▼
              ┌─────────────────────────────┐
              │ LangGraph CRAG State Machine│──> Dynamic Grading & Web Fallback
              └──────────────┬──────────────┘
                             ▼
              [ Verified Synthesized Output with Auditable Footnote Citations ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/RAG',
    demoUrl: null
  },

  // RAG PROJECT 1: Tuning Lab
  {
    id: 'rag-tuning-lab-and-benchmarking',
    title: '01. RAG Hyperparameter Tuning, Chunking & Benchmarking Lab',
    category: 'rag',
    badge: 'Empirical IR Lab',
    featured: false,
    tagline: 'Systematic Chunking Ablation, Hybrid RRF & Cross-Encoder Re-Ranking',
    description: 'Interactive laboratory comparing 4 chunking strategies (Fixed, Recursive, Markdown, Semantic), Dense vs BM25 vs Hybrid Reciprocal Rank Fusion (RRF), and Cross-Encoder re-ranking evaluated by formal HitRate@K and MRR metrics.',
    fullDescription: `Dissects and optimizes the mechanics of Retrieval-Augmented Generation. Rather than accepting default chunking and search parameters, this application systematically benchmarks 4 chunking algorithms, evaluates dense vector retrieval against lexical BM25Okapi, executes Reciprocal Rank Fusion (RRF), and applies cross-encoder re-ranking with formal Information Retrieval metrics.`,
    highlights: [
      'Comparative benchmarking across 4 chunking algorithms: Fixed-size, Recursive Character, Markdown Header, and Semantic Similarity.',
      'Hybrid retrieval combining dense cosine vector similarity with lexical BM25Okapi via Reciprocal Rank Fusion (RRF).',
      'Cross-encoder re-ranking stage mitigating retrieval precision decay on large document collections.',
      'Formal IR evaluation dashboard computing Hit Rate@K and Mean Reciprocal Rank (MRR) across test queries.'
    ],
    stack: ['ChromaDB', 'BM25Okapi', 'Cross-Encoder (ONNX)', 'Streamlit', 'uv', 'Pytest (10/10 Passing)'],
    metrics: [
      { label: 'Pytest Suite', value: '10 / 10 Passing' },
      { label: 'Chunking Strategies', value: '4 Evaluated' },
      { label: 'Retrieval Fusion', value: 'Dense + BM25 RRF' },
      { label: 'Evaluation Metrics', value: 'HitRate@K & MRR' }
    ],
    architecture: `
      [ Unstructured Documents ] ──> Chunking Lab (Fixed, Recursive, MD, Semantic)
                                            │
                                            ▼
                    ┌────────────────────────────────────────┐
                    │ Hybrid Retrieval Engine                │
                    │ • Dense ChromaDB Vector Search         │
                    │ • Lexical BM25Okapi Keyword Search     │
                    │ • Reciprocal Rank Fusion (RRF) Ranking │
                    └───────────────────┬────────────────────┘
                                        ▼
                    ┌────────────────────────────────────────┐
                    │ Cross-Encoder Deep Re-Ranker           │
                    └───────────────────┬────────────────────┘
                                        ▼
                    [ Formal IR Evaluation: HitRate@K & MRR Metrics ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/RAG/01-rag-tuning-lab-and-benchmarking',
    demoUrl: null
  },

  // RAG PROJECT 2: Multimodal Financial PDF RAG
  {
    id: 'multimodal-complex-doc-rag',
    title: '02. Financial 10-K/10-Q Multimodal Complex Document RAG',
    category: 'rag',
    badge: 'Financial Document AI',
    featured: false,
    tagline: 'Layout-Aware PDF Extraction, Parent Document Indexing & Accounting Invariant Guardrails',
    description: 'Enterprise RAG pipeline extracting complex financial tables from 10-K/10-Q reports without truncation using multi-representation parent indexing and strict accounting invariant guardrails ($A = L + E$).',
    fullDescription: `Engineered specifically to solve one of the hardest challenges in document AI: extracting, understanding, and querying complex financial balance sheets, multi-column tables, and footnote disclosures from SEC Form 10-K and 10-Q reports without hallucinating numerical values. Uses layout-aware PDF parsing and verifies accounting invariants.`,
    highlights: [
      'Layout-aware PDF parsing preserving two-column layouts, table borders, and nested hierarchy.',
      'Multi-representation parent document indexing: indexing concise tabular summaries while returning full tables to the LLM.',
      'Deterministic accounting invariant guardrail mathematically auditing balance sheet equations (Assets = Liabilities + Equity).',
      'Interactive Streamlit Financial Cockpit with multi-model switching (Gemini / OpenAI / Local).'
    ],
    stack: ['pdfplumber', 'pypdf', 'ReportLab', 'ChromaDB', 'Pydantic v2', 'Streamlit', 'Pytest (6/6 Passing)'],
    metrics: [
      { label: 'Pytest Suite', value: '6 / 6 Passing' },
      { label: 'Document Parser', value: 'Layout-Aware PDF' },
      { label: 'Table Retrieval', value: 'Parent-Child Indexing' },
      { label: 'Guardrail', value: 'Arithmetic A=L+E' }
    ],
    architecture: `
      [ SEC 10-K / 10-Q PDF Report ]
                    │
                    ▼
      ┌─────────────────────────────┐
      │ Layout-Aware Table Parser   │──> pdfplumber Spatial Cell Extraction
      └─────────────┬───────────────┘
                    ▼
      ┌─────────────────────────────┐
      │ Multi-Representation Index  │──> Parent-Child Vector Association
      └─────────────┬───────────────┘
                    ▼
      ┌─────────────────────────────┐
      │ Accounting Invariant Check  │──> Verifies: Assets == Liabilities + Equity
      └─────────────┬───────────────┘
                    ▼
      [ Audited Financial Answer with Row/Column Footnote Attribution ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/RAG/02-multimodal-complex-doc-rag',
    demoUrl: null
  },

  // RAG PROJECT 3: Agentic Self-Corrective RAG (CRAG)
  {
    id: 'agentic-self-corrective-rag',
    title: '03. Agentic Self-Corrective RAG (CRAG) with LangGraph',
    category: 'rag',
    badge: 'Self-Corrective State Machine',
    featured: false,
    tagline: 'Autonomous SRE Incident Triage with Document Relevance Grading & Web Fallback',
    description: 'Self-healing Corrective RAG (CRAG) and Self-RAG architecture for automated SRE incident remediation. Built with LangGraph StateGraph, featuring dynamic document grading, query rewriting, web search fallback, and two-tier anti-hallucination verification.',
    fullDescription: `An autonomous, self-healing Corrective RAG (CRAG) and Self-RAG architecture orchestrating automated Site Reliability Engineering (SRE) incident remediation. Built with LangGraph StateGraph, it dynamically grades retrieved documents, rewrites ambiguous queries, triggers external web search fallbacks, and executes anti-hallucination verification loops.`,
    highlights: [
      'Stateful cyclic graph orchestration built with LangGraph StateGraph.',
      'Document relevance grading node scoring retrieved incident runbooks before generation.',
      'Automated query transformation and fallback to DuckDuckGo web search upon knowledge gaps.',
      'Two-tier anti-hallucination auditor verifying grounding against retrieved context before presenting.'
    ],
    stack: ['LangGraph', 'LangChain', 'DuckDuckGo Search', 'ChromaDB', 'Streamlit', 'uv', 'Pytest (5/5 Passing)'],
    metrics: [
      { label: 'Pytest Suite', value: '5 / 5 Passing' },
      { label: 'Orchestrator', value: 'LangGraph StateGraph' },
      { label: 'Grading Gate', value: 'Dynamic Relevance' },
      { label: 'Fallback', value: 'Web Search + Rewrite' }
    ],
    architecture: `
                     [ SRE Incident Query ]
                               │
                               ▼
                    [ Vector Store Retrieve ]
                               │
                               ▼
                 ┌───────────────────────────┐
                 │  Document Relevance Grade │
                 └─────────────┬─────────────┘
                               │
                ┌──────────────┴──────────────┐
                ▼ [Relevant]                  ▼ [Irrelevant / Gap]
         [ Generate Answer ]        [ Transform Query & Web Search ]
                │                             │
                ▼                             ▼
         [ Grounding Audit ] ◀────────────────┘
                │
                ▼ [Passed Audit]
         [ Verified Mitigation Action ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/RAG/03-agentic-self-corrective-rag',
    demoUrl: null
  },

  // RAG PROJECT 4: GraphRAG
  {
    id: 'graphrag-knowledge-network',
    title: '04. GraphRAG — Knowledge Graph & Vector Dual Retrieval',
    category: 'rag',
    badge: 'Topological GraphRAG',
    featured: false,
    tagline: 'NetworkX Graph Topology & Multi-Hop Causal Reasoning with PyVis Physics',
    description: 'Enterprise GraphRAG platform combining Semantic Vector Embeddings with NetworkX Knowledge Graph Topology to trace multi-hop dependencies, blast radius, and shortest-path incident causality with interactive PyVis force-directed physics.',
    fullDescription: `Combines semantic vector embeddings with NetworkX topological knowledge graph traversal to execute complex multi-hop relational reasoning across telecommunications and cloud infrastructure. Employs dual retrieval: dense vector search finds entrypoint seed entities, followed by N-hop topological graph traversal and Dijkstra shortest-path analysis to uncover hidden failure cascades.`,
    highlights: [
      'Dual-paradigm retrieval: vector similarity discovers seed nodes; topological traversal expands context.',
      'N-hop dependency chain and security blast-radius propagation modeling.',
      'Dijkstra shortest-path tracing isolating failure cascades across interconnected network elements.',
      'Interactive force-directed 2D/3D physics graph visualization powered by PyVis.'
    ],
    stack: ['NetworkX', 'PyVis (Physics Graph)', 'ChromaDB', 'Streamlit', 'uv', 'Pytest (6/6 Passing)'],
    metrics: [
      { label: 'Pytest Suite', value: '6 / 6 Passing' },
      { label: 'Graph Engine', value: 'NetworkX Dual-Seed' },
      { label: 'Reasoning', value: 'N-Hop Blast Radius' },
      { label: 'UI Visualization', value: 'PyVis Force-Directed' }
    ],
    architecture: `
      [ Infrastructure Incident Query ]
                     │
                     ▼
       ┌───────────────────────────┐
       │ Dense Vector Seed Search  │──> Finds Seed Entities in ChromaDB
       └─────────────┬─────────────┘
                     ▼
       ┌───────────────────────────┐
       │ Topological N-Hop Search  │──> Expands Subgraph in NetworkX
       └─────────────┬─────────────┘
                     ▼
       ┌───────────────────────────┐
       │ Shortest Path & Blast Rad │──> Dijkstra Causal Chain Isolation
       └─────────────┬─────────────┘
                     ▼
       [ PyVis Interactive Force-Directed Physics Graph + Root Cause Analysis ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/RAG/04-graphrag-knowledge-network',
    demoUrl: null
  },

  // RAG PROJECT 5: Enterprise Multi-Agent RAG with SQL
  {
    id: 'enterprise-multi-agent-rag-with-sql',
    title: '05. Enterprise Multi-Agent RAG with SQL & Document Citations',
    category: 'rag',
    badge: 'Multi-Agent Heterogeneous Fusion',
    featured: false,
    tagline: 'LangGraph Supervisor Fusing Structured Relational Databases & Legal SLA Contracts',
    description: 'Supervisor multi-agent team fusing structured relational databases (SQLite) with unstructured legal SLA agreements, coordinating Text-to-SQL analysts and contract knowledge agents with auditable dual-source footnote citations.',
    fullDescription: `Solves the heterogeneous enterprise data challenge: fusing Structured Relational Databases (SQLite) with Unstructured Legal Contracts & SLA Documents into verifiable executive audit reports. A LangGraph Supervisor coordinates a Text-to-SQL Analyst and a Contract Knowledge Agent, synthesizing cross-modal findings with strict dual citations.`,
    highlights: [
      'LangGraph Supervisor coordinating specialized SQL and document retrieval agents.',
      'Text-to-SQL Analyst translating natural language questions into executable, read-only SQL queries.',
      'Contract Knowledge Agent performing dense semantic vector retrieval over contractual clauses.',
      'Cross-modal synthesis engine producing executive briefing reports with auditable dual-source footnotes.'
    ],
    stack: ['LangGraph Supervisor', 'SQLite (Text-to-SQL)', 'ChromaDB', 'Pydantic v2', 'Streamlit', 'Pytest (6/6 Passing)'],
    metrics: [
      { label: 'Pytest Suite', value: '6 / 6 Passing' },
      { label: 'Multi-Agent Team', value: 'LangGraph Supervisor' },
      { label: 'Structured Data', value: 'SQLite Text-to-SQL' },
      { label: 'Citations', value: 'Dual-Source Footnotes' }
    ],
    architecture: `
                      [ Executive Business Query ]
                                  │
                                  ▼
                    ┌───────────────────────────┐
                    │   LangGraph Supervisor    │
                    └─────────────┬─────────────┘
                                  │
            ┌─────────────────────┴─────────────────────┐
            ▼                                           ▼
    [ Text-to-SQL Analyst ]                 [ Contract Knowledge Agent ]
    • Translates to SQLite Query            • Semantic Vector Retrieval
    • Fetches Structured Billing Telemetry  • Extracts SLA Clause Standards
            │                                           │
            └─────────────────────┬─────────────────────┘
                                  ▼
      [ Executive Report with Verified Dual Footnotes: DB Row + Contract Page ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/RAG/05-enterprise-multi-agent-rag-with-sql',
    demoUrl: null
  },

  // ==========================================
  // TIME SERIES - MASTER FLAGSHIP SUITE
  // ==========================================
  {
    id: 'enterprise-timeseries-suite',
    title: 'Enterprise Time Series & Temporal AI Suite',
    category: 'timeseries',
    badge: 'Enterprise Flagship',
    featured: true,
    tagline: '5 Production Temporal Machine Learning, Quantitative Finance & AI-Agentic Paradigms',
    description: 'A production temporal machine learning, quantitative finance, and AI-agentic suite solving the hardest problems in multi-horizon forecasting, multi-sensor anomaly detection, statistical arbitrage, supply chain reconciliation, and zero-shot foundation models.',
    fullDescription: `Time-dependent data presents unique challenges: non-stationarity, regime shifts, volatility clustering, zero-inflated intermittency, and multi-sensor causality.

    This flagship suite delivers 5 end-to-end, production-grade applications covering modern temporal AI:
    1. Multivariate Smart Grid Energy Demand Forecasting (SARIMAX, Fourier, LightGBM, Deep MLP)
    2. Industrial IoT & Telco Anomaly Detection & Gemini AI Incident Triager (Autoencoder, Isolation Forest, STL)
    3. Quantitative Volatility Clustering, Macro Regimes & StatArb Lab (GARCH(1,1), Gaussian HMM, Kalman Pairs)
    4. Retail Hierarchical Demand Reconciliation & Intermittent Inventory Optimizer (Croston, Syntetos-Boylan, MinT)
    5. AI Agentic Time Series Copilot & Zero-Shot Foundation Models (Chronos-style P10/P50/P90, FFT, ADF/KPSS)

    Each project is fully isolated with uv packaging, custom dark-mode glassmorphic Streamlit dashboards with synchronized Plotly charts, dual-mode Gemini/statistical engines, walkthrough Jupyter notebooks, and 100% passing pytest suites (32/32 tests).`,
    highlights: [
      '5 Standalone Temporal AI Applications: Multi-model energy forecasting, IoT multi-sensor anomaly detection, quantitative volatility and pairs arbitrage, hierarchical intermittent inventory, and agentic copilot.',
      'Dual-Mode AI & Statistical Engine: AI incident triaging and conversational signal diagnostics automatically leverage Google Gemini 2.5 Flash when available, with seamless zero-key fallback to high-precision deterministic statistical engines.',
      'Synchronized Interactive Plotly Dashboards: High-performance interactive visualizations featuring dual-y axes, volatility envelopes, and regime coloring.',
      'Automated Test Verification: 100% passing pytest coverage across all mathematical and model components (32/32 tests total).'
    ],
    stack: ['LightGBM', 'Statsmodels', 'SciPy', 'Scikit-Learn', 'Google Gemini 2.5 Flash', 'Plotly', 'Streamlit', 'uv', 'Pytest (32/32 Passing)'],
    metrics: [
      { label: 'Verified Tests', value: '32 / 32' },
      { label: 'Standalone Systems', value: '5 Applications' },
      { label: 'Dual Engine', value: 'Gemini + Deterministic' },
      { label: 'Visualizations', value: 'Sync Plotly Graphs' }
    ],
    architecture: `
      [ Raw High-Frequency Temporal Streams / Multi-Sensor Telemetry ]
                               │
            ┌──────────────────┼──────────────────┐
            ▼                  ▼                  ▼
      [ Econometric ]    [ Machine Learning ]  [ Deep / Foundation ]
      SARIMAX, GARCH,    LightGBM Recursive,  Autoencoders, Chronos
      Kalman Filter      MinT Reconciliation  Zero-Shot Probabilistic
            │                  │                  │
            └──────────────────┼──────────────────┘
                               ▼
        ┌──────────────────────────────────────────────┐
        │  AI Agentic Triager & Diagnostics (Gemini)   │
        └──────────────────────┬───────────────────────┘
                               ▼
        [ Production Action: Grid Dispatch, Alert Triage, Inventory Order ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Time%20Series%20Projects',
    demoUrl: null
  },

  // TIME SERIES PROJECT 1: Energy Demand
  {
    id: 'multivariate-energy-demand-forecasting',
    title: '01. Multivariate Smart Grid Energy Demand Forecasting',
    category: 'timeseries',
    badge: 'Multi-Horizon Forecasting',
    featured: false,
    tagline: 'SARIMAX, Fourier Decomposer, LightGBM Recursive Lags & Deep MLP',
    description: 'Multi-horizon smart grid load dispatch prediction under non-linear weather shocks. Implements SARIMAX, Additive Fourier seasonality, LightGBM with recursive lags and cyclic encodings, and a deep temporal MLP evaluated by walk-forward rolling cross-validation.',
    fullDescription: `Predicts smart grid electrical load across 24-hour to 168-hour forward horizons. Features econometric SARIMAX modeling, Additive Fourier seasonal harmonic decomposition, gradient-boosted trees (LightGBM) with recursive lag features and cyclic calendar transforms, and deep multi-layer perceptrons, rigorously validated with rolling walk-forward cross-validation.`,
    highlights: [
      'Multi-model comparison: SARIMAX, Additive Fourier Decomposition, LightGBM, and Deep Temporal MLP.',
      'Non-linear thermal response modeling via Heating Degree-Days (HDD) and Cooling Degree-Days (CDD).',
      'Walk-forward rolling cross-validation preventing future data leakage and verifying Ljung-Box residual white noise.',
      'Interactive climate shock simulation arena testing grid resiliency against extreme temperature spikes.'
    ],
    stack: ['LightGBM', 'Statsmodels (SARIMAX)', 'Fourier Analysis', 'Deep MLP', 'Plotly', 'Streamlit', 'Pytest (8/8 Passing)'],
    metrics: [
      { label: 'Pytest Suite', value: '8 / 8 Passing' },
      { label: 'Ensemble Models', value: 'SARIMAX, Fourier, LightGBM' },
      { label: 'Thermal Response', value: 'U-Shaped HDD/CDD' },
      { label: 'Validation', value: 'Rolling Walk-Forward' }
    ],
    architecture: `
      [ Hourly Smart Grid Telemetry (MW, Temp, Humidity, Wind) ]
                               │
                               ▼
       ┌──────────────────────────────────────────────────────┐
       │ Feature Engineering: Cyclic Time, Lagged Demands, HDD│
       └───────────────────────┬──────────────────────────────┘
                               ▼
       ┌──────────────────────────────────────────────────────┐
       │ Multi-Model Arena: SARIMAX vs Fourier vs LightGBM    │
       └───────────────────────┬──────────────────────────────┘
                               ▼
       ┌──────────────────────────────────────────────────────┐
       │ Walk-Forward Rolling Evaluation & Ljung-Box Audit    │
       └───────────────────────┬──────────────────────────────┘
                               ▼
       [ Multi-Horizon Load Dispatch Schedule with Climate Shock Stress Test ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Time%20Series%20Projects/01-multivariate-energy-demand-forecasting',
    demoUrl: null
  },

  // TIME SERIES PROJECT 2: IoT Anomaly Detection
  {
    id: 'industrial-iot-anomaly-detection',
    title: '02. Industrial IoT Anomaly Detection & AI Incident Triager',
    category: 'timeseries',
    badge: 'IoT Telemetry & AI Triager',
    featured: false,
    tagline: 'Reconstruction Autoencoder, Isolation Forest, Dynamic Bollinger & Gemini SRE Agent',
    description: 'Multi-sensor industrial pump and telco gateway anomaly scoring. Fuses STL residual analysis, dynamic Bollinger EMA, Isolation Forest, and a PyTorch reconstruction autoencoder with automated Gemini 2.5 Flash SRE root-cause triaging and remediation runbooks.',
    fullDescription: `Detects multi-sensor failures across industrial centrifugal pumps and telco gateway infrastructure before catastrophic breakdown. Combines an ensemble of statistical and deep learning anomaly detectors (STL residual decomposition, dynamic Bollinger bands, Isolation Forest, and a deep PyTorch autoencoder) with an automated Gemini AI incident responder that isolates faulty sensors and outputs SRE remediation runbooks.`,
    highlights: [
      'Multi-paradigm anomaly ensemble: STL decomposition, dynamic Bollinger EMA, Isolation Forest, and deep PyTorch Autoencoder.',
      'Per-sensor reconstruction error attribution isolating exact physical failure drivers (vibration, bearing temp, pressure).',
      'Automated Gemini 2.5 Flash SRE Incident Triager diagnosing root causes and synthesizing remediation runbooks.',
      'Deterministic zero-key offline fallback engine for mission-critical air-gapped industrial facilities.'
    ],
    stack: ['Autoencoder (PyTorch)', 'Isolation Forest', 'Dynamic Bollinger EMA', 'Google Gemini 2.5 Flash', 'Plotly', 'Streamlit', 'Pytest (6/6 Passing)'],
    metrics: [
      { label: 'Pytest Suite', value: '6 / 6 Passing' },
      { label: 'Detection Ensemble', value: 'Autoencoder + IsoForest + STL' },
      { label: 'Attribution', value: 'Sensor Reconstruction Error' },
      { label: 'AI Triager', value: 'Gemini SRE Runbooks' }
    ],
    architecture: `
      [ Multi-Sensor Industrial Telemetry (Vibration, Temp, Pressure) ]
                                    │
                                    ▼
       ┌─────────────────────────────────────────────────────────┐
       │ Multi-Paradigm Anomaly Ensemble                         │
       │ • Dynamic Bollinger Bands (EMA)                         │
       │ • STL Residual Outlier Scoring                          │
       │ • Isolation Forest Multivariate Contamination           │
       │ • PyTorch Reconstruction Autoencoder                    │
       └────────────────────────────┬────────────────────────────┘
                                    ▼
       ┌─────────────────────────────────────────────────────────┐
       │ Sensor Error Attribution & AI Incident Triager (Gemini) │
       └────────────────────────────┬────────────────────────────┘
                                    ▼
       [ Incident Severity Triage & Automated SRE Remediation Runbook ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Time%20Series%20Projects/02-industrial-iot-anomaly-detection',
    demoUrl: null
  },

  // TIME SERIES PROJECT 3: Quant Volatility & Regimes
  {
    id: 'algorithmic-trading-volatility-regimes',
    title: '03. Quantitative Volatility Clustering, Regimes & StatArb',
    category: 'timeseries',
    badge: 'Quantitative Finance',
    featured: false,
    tagline: 'GARCH(1,1) Heteroskedasticity, Gaussian HMM Regimes & Kalman Pairs Arbitrage',
    description: 'Institutional quantitative finance suite modeling volatility clustering via GARCH(1,1) term-structure cones, identifying macro bull/bear/turbulent market regimes via 3-state Gaussian HMM, and executing cointegrated pairs trading with dynamic Kalman filter hedge ratios.',
    fullDescription: `Solves the core challenges of financial econometrics: time-varying volatility clustering, non-stationary structural market shifts, and pair cointegration breakdown. Features GARCH(1,1) conditional heteroskedasticity, 3-state Gaussian Hidden Markov Models for macroeconomic regimes, dynamic Kalman filter hedge ratio tracking, and institutional Value-at-Risk (VaR/CVaR) risk metrics.`,
    highlights: [
      'GARCH(1,1) conditional volatility forecasting with multi-horizon forward term-structure cones.',
      '3-state Gaussian Hidden Markov Model (HMM) classifying macro market regimes (Bull Calm, Bear Volatile, Turbulent).',
      'Engle-Granger cointegration testing paired with dynamic Kalman Filter tracking time-varying beta hedge ratios.',
      'Comprehensive risk engine calculating Parametric, Historical, and Cornish-Fisher VaR & Expected Shortfall (CVaR).'
    ],
    stack: ['GARCH(1,1)', 'Gaussian HMM', 'Kalman Filter', 'Engle-Granger Cointegration', 'VaR / CVaR', 'Streamlit', 'Pytest (7/7 Passing)'],
    metrics: [
      { label: 'Pytest Suite', value: '7 / 7 Passing' },
      { label: 'Volatility Model', value: 'GARCH(1,1) Term Cones' },
      { label: 'Macro Regimes', value: '3-State Gaussian HMM' },
      { label: 'Pairs Trading', value: 'Dynamic Kalman Beta' }
    ],
    architecture: `
      [ Multi-Asset Daily Price History ] ──> Log Returns & Volatility
                                                  │
                ┌─────────────────────────────────┴─────────────────────────────────┐
                ▼                                                                   ▼
      ┌───────────────────────────┐                       ┌───────────────────────────────────┐
      │ GARCH(1,1) Heteroskedastic│                       │ Gaussian HMM Macro Regimes        │
      │ Term Structure Vol Cones  │                       │ 3 States: Bull, Bear, Turbulent   │
      └─────────────┬─────────────┘                       └─────────────────┬─────────────────┘
                    │                                                       │
                    └─────────────────────────────┬─────────────────────────┘
                                                  ▼
                         ┌───────────────────────────────────┐
                         │ Dynamic Kalman Filter Pairs Beta  │
                         │ Engle-Granger Cointegrated Spread │
                         └────────────────┬──────────────────┘
                                          ▼
                         [ Institutional Risk Engine: VaR / CVaR & PnL Backtest ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Time%20Series%20Projects/03-algorithmic-trading-volatility-regimes',
    demoUrl: null
  },

  // TIME SERIES PROJECT 4: Retail Intermittent Demand
  {
    id: 'retail-hierarchical-intermittent-demand',
    title: '04. Retail Hierarchical Demand & Intermittent Inventory Optimizer',
    category: 'timeseries',
    badge: 'Supply Chain Optimization',
    featured: false,
    tagline: 'Croston, Syntetos-Boylan Quadrants & Optimal MinT Matrix Reconciliation',
    description: 'Supply chain inventory optimization for zero-inflated, lumpy spare-parts demand. Automatically classifies SKU profiles into Syntetos-Boylan quadrants, executes Croston, SBA, and TSB models, and enforces coherent multi-echelon forecasts via Optimal Minimum Trace (MinT) matrix reconciliation.',
    fullDescription: `Engineered for enterprise supply chains struggling with zero-inflated, intermittent demand where classical ARIMA and exponential smoothing fail. Automatically segments SKU demand into Syntetos-Boylan quadrants ($ADI \times CV^2$), benchmarks Croston, SBA, and TSB methods, reconciles multi-level hierarchical forecasts via the Optimal Minimum Trace (MinT) matrix $S$, and runs continuous inventory replenishment simulations.`,
    highlights: [
      'Automated Syntetos-Boylan quadrant classification: Smooth, Intermittent, Erratic, and Lumpy SKU profiles.',
      'Specialized intermittent forecasting models: classical Croston, Syntetos-Boylan Approximation (SBA), and Teunter-Syntetos-Babai (TSB).',
      'Optimal Minimum Trace (MinT) reconciliation matrix guaranteeing multi-echelon hierarchical forecast coherence.',
      'Supply chain inventory policy simulation optimizing Safety Stock, Reorder Point (ROP), and Economic Order Quantity (EOQ).'
    ],
    stack: ['Croston / SBA / TSB', 'Syntetos-Boylan Quadrants', 'MinT Matrix Reconciliation', 'Safety Stock & ROP', 'Plotly', 'Streamlit', 'Pytest (6/6 Passing)'],
    metrics: [
      { label: 'Pytest Suite', value: '6 / 6 Passing' },
      { label: 'Demand Patterns', value: 'Lumpy, Intermittent, Erratic' },
      { label: 'Reconciliation', value: 'Optimal MinT Matrix' },
      { label: 'Policy Sim', value: 'Safety Stock, ROP, EOQ' }
    ],
    architecture: `
      [ Hierarchical Retail Demand Telemetry (Enterprise -> Region -> SKU) ]
                                      │
                                      ▼
       ┌─────────────────────────────────────────────────────────────┐
       │ Syntetos-Boylan Classification Matrix (ADI vs CV²)          │
       │ Smooth • Intermittent • Erratic • Lumpy                     │
       └──────────────────────────────┬──────────────────────────────┘
                                      ▼
       ┌─────────────────────────────────────────────────────────────┐
       │ Intermittent Model Suite: Croston, SBA, TSB                 │
       └──────────────────────────────┬──────────────────────────────┘
                                      ▼
       ┌─────────────────────────────────────────────────────────────┐
       │ Optimal Minimum Trace (MinT) Hierarchical Reconciliation    │
       └──────────────────────────────┬──────────────────────────────┘
                                      ▼
       [ Dynamic Inventory Replenishment Policy: Safety Stock & ROP Optimization ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Time%20Series%20Projects/04-retail-hierarchical-intermittent-demand',
    demoUrl: null
  },

  // TIME SERIES PROJECT 5: AI Agentic Copilot
  {
    id: 'ai-agentic-timeseries-copilot',
    title: '05. AI Agentic Time Series Copilot & Zero-Shot Forecasting',
    category: 'timeseries',
    badge: 'Agentic Temporal AI',
    featured: false,
    tagline: 'Zero-Shot Foundation Models (P10/P50/P90), Spectral FFT Periodograms & Gemini Copilot',
    description: 'Conversational time series intelligence combining zero-shot foundation model quantile trajectories (P10, P50, P90), automated FFT spectral periodogram seasonality discovery, dual ADF/KPSS stationarity testing, and an autonomous Gemini Copilot with dynamic tool execution.',
    fullDescription: `Brings autonomous agentic intelligence to temporal data analysis. Users converse naturally with their time series data while an autonomous Gemini 2.5 Flash agent inspects signals, calls diagnostic tools, evaluates stationarity via dual ADF and KPSS tests, discovers seasonal harmonics via FFT spectral periodograms, and generates zero-shot foundation model probabilistic forecasts (P10, P50, P90).`,
    highlights: [
      'Zero-shot foundation model probabilistic forecasting generating calibrated P10, P50, and P90 forecast intervals without training.',
      'Automated FFT Spectral Periodogram harmonic decomposition uncovering dominant seasonality cycles.',
      'Dual econometric unit-root diagnostic suite (Augmented Dickey-Fuller and KPSS tests) verifying stationarity.',
      'Conversational AI Copilot equipped with autonomous tool-calling synthesizing executive briefings with synchronized Plotly charts.'
    ],
    stack: ['Chronos-style Foundation Models', 'Google Gemini 2.5 Flash', 'FFT Periodogram', 'ADF & KPSS Unit-Root', 'Plotly', 'Streamlit', 'Pytest (5/5 Passing)'],
    metrics: [
      { label: 'Pytest Suite', value: '5 / 5 Passing' },
      { label: 'Quantile Forecasts', value: 'P10 / P50 / P90 zero-shot' },
      { label: 'Seasonality Engine', value: 'FFT Spectral Periodogram' },
      { label: 'Copilot', value: 'Gemini Autonomous Tools' }
    ],
    architecture: `
      [ User Time Series Upload & Conversational Inquiry ]
                              │
                              ▼
       ┌────────────────────────────────────────────────────────┐
       │ Autonomous Gemini Copilot (Dynamic Tool Calling)       │
       └──────────────────────┬─────────────────────────────────┘
                              │
            ┌─────────────────┼─────────────────┐
            ▼                 ▼                 ▼
      [ Spectral FFT ]  [ ADF & KPSS ]    [ Foundation Zero-Shot ]
      Periodogram       Dual Stationarity P10/P50/P90 Quantiles
            │                 │                 │
            └─────────────────┼─────────────────┘
                              ▼
       [ Interactive Conversational Intelligence & Executive Briefing Report ]
    `,
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/tree/main/Time%20Series%20Projects/05-ai-agentic-timeseries-copilot',
    demoUrl: null
  },

  // TIME SERIES PROJECT 6: Sublime Limes
  {
    id: 'sublime-limes-timeseries',
    title: 'Sublime Limes Time Series Seasonal Analysis',
    category: 'timeseries',
    badge: 'Seasonal Decomposition',
    featured: false,
    tagline: 'Exploratory Seasonality Analysis & Multi-Product Temporal Demand',
    description: 'Seasonal pattern analysis and temporal demand fluctuations over agricultural product lines, implementing visual trend decomposition and comparative line/bar analytics.',
    fullDescription: `An exploratory time series study analyzing seasonal pattern fluctuations and demand variations across lime varieties (Key Limes, Persian Limes, Blood Limes) throughout the calendar year. Employs multi-axis visualization, seasonal trend decomposition, and sub-trend comparisons to identify agricultural supply peaks.`,
    highlights: [
      'Comparative multi-product seasonality curves isolating peak harvesting periods.',
      'Seasonal trend decomposition isolating macro trends from monthly agricultural cyclicality.',
      'Clean publication-grade visualizations with Matplotlib and Seaborn.'
    ],
    stack: ['Python', 'Matplotlib', 'Seaborn', 'Seasonal Decomposition', 'Pandas', 'Jupyter'],
    metrics: [
      { label: 'Analysis', value: 'Seasonal Decomposition' },
      { label: 'Domain', value: 'Temporal Demand Trends' }
    ],
    githubUrl: 'https://github.com/santipenas/Portfolio-Santi-Penas/blob/main/Time%20Series%20Projects/Sublime%20Limes.ipynb',
    demoUrl: null
  },

  // ==========================================
  // REINFORCEMENT LEARNING - FLAGSHIP 4
  // ==========================================
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
    stack: ['Reinforcement Learning', 'Gymnasium 1.0.0', 'Stable-Baselines3 (PPO)', 'Markov Decision Process', 'Streamlit', 'Pandas', 'uv', 'Docker'],
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

  // ==========================================
  // GENERATIVE AI - FLAGSHIP 5
  // ==========================================
  {
    id: 'production-genai-swarms',
    title: 'Production Generative AI & Multi-Agent Workflows',
    category: 'genai',
    badge: 'Production Multi-Agent',
    featured: true,
    tagline: 'Stateful Graph Architectures, Hybrid Semantic RAG & Autonomous Tool Calling',
    description: 'A comprehensive suite of production GenAI systems orchestrating LangGraph workflows, CrewAI multi-agent teams, Pinecone hybrid vector search, and automated code triage.',
    fullDescription: `A production-ready suite of stateful generative AI applications and autonomous multi-agent systems engineered to solve complex analytical workflows.
    
    Rather than basic chatbot wrappers, these systems incorporate stateful graph architectures, dynamic branching, fact-checking agents, automated codebase issue resolution via Haystack + Claude, and domain-specialized semantic RAG with hybrid keyword/dense search rerankers.`,
    highlights: [
      'LangGraph Multi-Agent Data Analysis: Stateful graph architecture orchestrating collaborative researcher, coder, and validation agents for automated exploratory data analysis.',
      'CrewAI Web Intelligence System: Autonomous multi-agent coordination with scrapers, synthesis agents, and verification guardrails for market intelligence extraction.',
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

  // ==========================================
  // BIG DATA & DISTRIBUTED SCALE
  // ==========================================
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

  // ==========================================
  // MACHINE LEARNING & RISK
  // ==========================================
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

  // ==========================================
  // DEEP LEARNING & NLP
  // ==========================================
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

  // ==========================================
  // STATS, MATH & ANALYTICS
  // ==========================================
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
