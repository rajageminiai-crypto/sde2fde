// Source of truth: RealTime_AIFDE_KSubRajSir.pdf (Coding Masters). 24 modules, 8 phases.
export type Section = { title: string; topics: string[] };
export type Module = {
  n: number;
  title: string;
  tagline: string;
  phase: number;
  sections: Section[];
  project: { title: string; desc: string };
};

export const phases = [
  { n: 1, name: "Engineering Foundations", tag: "Build strong foundations for a bigger tomorrow" },
  { n: 2, name: "Application Engineering", tag: "Build scalable applications for the real world" },
  { n: 3, name: "AI Engineering", tag: "Build intelligent systems" },
  { n: 4, name: "AI Security & Production", tag: "Secure and scale AI systems in real-world environments" },
  { n: 5, name: "Enterprise Engineering", tag: "Build AI solutions that work in real enterprise environments" },
  { n: 6, name: "System Design", tag: "Design scalable AI systems" },
  { n: 7, name: "Forward Deployed Engineering", tag: "Bridge business problems and AI solutions" },
  { n: 8, name: "Production & Capstone", tag: "Keep AI systems reliable and deliver the capstone" },
];

export const modules: Module[] = [
  { n: 1, phase: 1, title: "Python, Linux & Engineering Foundations", tagline: "Build the core skills for AI & production engineering",
    sections: [
      { title: "Python Core Foundations", topics: ["Python syntax, data structures & control flow", "Functions, modules & packages", "Files, JSON & CSV", "Exception handling & debugging", "Type hints & virtual environments"] },
      { title: "Advanced Python & OOP", topics: ["Classes, objects & inheritance", "Composition, abstraction & encapsulation", "Dataclasses & generators", "Context managers", "Clean code & SOLID principles"] },
      { title: "Linux for Engineers", topics: ["Linux filesystem & permissions", "Processes & resource management", "Shell scripting", "Environment variables", "Logs & troubleshooting"] },
    ],
    project: { title: "Python System Utility CLI", desc: "Build a practical command-line utility using Python, OOP, files, logging and Linux." } },
  { n: 2, phase: 1, title: "Software Engineering, Git & Testing", tagline: "Build code that can be trusted",
    sections: [
      { title: "Software Engineering", topics: ["Clean architecture", "SOLID principles", "Design patterns", "Reusable components", "Debugging & code quality"] },
      { title: "Git & Collaborative Development", topics: ["Git fundamentals & branching", "Merge & rebase", "Pull requests", "Code reviews", "Release workflow"] },
      { title: "Testing & AI-Native Development", topics: ["Unit & integration testing", "API testing with Pytest", "Mocking & regression testing", "AI coding assistants", "Spec-first development & AI code review"] },
    ],
    project: { title: "Production-Ready Python Service", desc: "Build, test, review and version a small Python application using Git." } },
  { n: 3, phase: 1, title: "SQL, Databases & Data Engineering", tagline: "Master the data layer behind AI systems",
    sections: [
      { title: "SQL Engineering", topics: ["SELECT, filtering & sorting", "Joins & aggregations", "Subqueries & CTEs", "Window functions", "Query optimization"] },
      { title: "Database Engineering", topics: ["PostgreSQL / MySQL", "Schema design & normalization", "Transactions & ACID", "Indexing", "Locks & concurrency"] },
      { title: "Data Infrastructure", topics: ["NoSQL & document databases", "MongoDB / DynamoDB concepts", "Redis & caching", "Data quality & event-driven data"] },
    ],
    project: { title: "Enterprise Data Analytics API", desc: "Design a relational database and build SQL queries and a Python service around it." } },
  { n: 4, phase: 2, title: "Backend & Enterprise API Engineering", tagline: "Build production-ready backends",
    sections: [
      { title: "Web & REST Fundamentals", topics: ["HTTP methods & status codes", "JSON & API contracts", "Authentication basics", "API versioning"] },
      { title: "FastAPI Engineering", topics: ["FastAPI routing", "Pydantic validation", "CRUD APIs", "OpenAPI documentation", "Dependency injection & middleware"] },
      { title: "Production APIs", topics: ["OAuth2 / JWT / API keys", "Rate limiting", "Retries & timeouts", "Idempotency", "Background jobs & streaming"] },
    ],
    project: { title: "AI Service Backend", desc: "Build a FastAPI backend exposing secure APIs for an AI application." } },
  { n: 5, phase: 2, title: "Frontend Engineering & AI User Experiences", tagline: "Build modern AI application interfaces",
    sections: [
      { title: "Web & TypeScript Foundations", topics: ["HTML & CSS", "JavaScript fundamentals", "TypeScript", "Responsive interfaces", "API communication"] },
      { title: "React Application Engineering", topics: ["Components", "State & hooks", "Routing", "Forms & validation", "API integration"] },
      { title: "AI User Experience", topics: ["Chat interfaces", "Streaming responses", "Suggestions & citations", "Tool execution UI", "Human approval workflows"] },
    ],
    project: { title: "AI Assistant Web Application", desc: "AI interface connected to a backend API." } },
  { n: 6, phase: 2, title: "Cloud, Networking & Infrastructure", tagline: "Understand where AI systems run",
    sections: [
      { title: "Cloud Foundations", topics: ["AWS / Azure / GCP concepts", "Compute & storage", "Managed services", "Regions & availability", "Cloud environments"] },
      { title: "Networking", topics: ["VPC / VNet", "Subnets & routing", "DNS", "Firewalls", "Load balancers & private networking"] },
      { title: "Infrastructure Engineering", topics: ["Secrets & environment management", "VPN & hybrid cloud", "Infrastructure as Code", "Terraform awareness", "Cloud cost management"] },
    ],
    project: { title: "Cloud-Ready AI Service", desc: "Design and deploy the infrastructure required for a production AI API." } },
  { n: 7, phase: 2, title: "Docker, Kubernetes, CI/CD & Deployment", tagline: "Move from code to production",
    sections: [
      { title: "Docker", topics: ["Images & containers", "Dockerfiles", "Multi-stage builds", "Volumes & networking", "Container registries"] },
      { title: "Kubernetes", topics: ["Pods & deployments", "Services & ingress", "ConfigMaps & secrets", "Scaling", "Container orchestration"] },
      { title: "CI/CD & Release Engineering", topics: ["GitHub Actions", "Jenkins / Azure DevOps", "Build & test pipelines", "Security scanning", "Canary / blue-green / rollback"] },
    ],
    project: { title: "Containerized AI Application", desc: "Dockerize an AI application and create a CI/CD deployment pipeline." } },
  { n: 8, phase: 3, title: "LLM & Generative AI Engineering", tagline: "Understand and build with LLMs",
    sections: [
      { title: "Generative AI Foundations", topics: ["ML / DL / GenAI foundations", "Generative AI applications", "LLM & Agentic AI concepts", "Tokens & context", "Embeddings"] },
      { title: "Transformers & LLM Internals", topics: ["Transformer architecture", "Attention mechanism", "Context handling", "Autoregressive generation", "Inference concepts"] },
      { title: "Prompt & Model Engineering", topics: ["System & user prompts", "Few-shot prompting", "Structured outputs", "Temperature / Top-P / Top-K", "Model selection, latency & token cost"] },
    ],
    project: { title: "LLM-Powered AI Assistant", desc: "Build an LLM application using structured prompts and controlled model outputs." } },
  { n: 9, phase: 3, title: "Advanced RAG, Search & Knowledge Engineering", tagline: "Turn enterprise data into intelligence",
    sections: [
      { title: "Document & Knowledge Ingestion", topics: ["PDF / Word / Excel", "Web & enterprise documents", "Document loaders", "Fixed / recursive / semantic chunking", "Metadata management"] },
      { title: "Retrieval Engineering", topics: ["Embeddings & vector databases", "Semantic search", "Keyword / BM25 search", "Hybrid retrieval", "Query rewriting & reranking"] },
      { title: "Advanced Enterprise RAG", topics: ["Parent-child retrieval", "Context compression", "Citations & grounding", "Permission-aware retrieval", "Knowledge graphs & Graph RAG"] },
    ],
    project: { title: "Enterprise Knowledge Copilot", desc: "Build a production-style RAG assistant over enterprise documents with citations." } },
  { n: 10, phase: 3, title: "Agentic AI & Tool Calling", tagline: "Build AI systems that take action",
    sections: [
      { title: "Agent Foundations", topics: ["Agent loop", "Reasoning & action", "ReAct pattern", "Planning", "Task decomposition"] },
      { title: "Tools & Function Calling", topics: ["Tool schemas", "Function calling", "API tools", "Database tools", "Structured JSON outputs"] },
      { title: "Safe Agent Engineering", topics: ["Router / planner / supervisor", "Tool boundaries", "Argument validation", "Guardrails", "Human-in-the-loop"] },
    ],
    project: { title: "AI Task Automation Agent", desc: "Build an agent that understands a task, selects tools and completes the workflow." } },
  { n: 11, phase: 3, title: "LangGraph, Multi-Agent Systems & MCP", tagline: "Orchestrate complex AI workflows",
    sections: [
      { title: "LangGraph", topics: ["State", "Nodes & edges", "Conditional routing", "Checkpoints", "Workflow persistence"] },
      { title: "Multi-Agent Systems", topics: ["Supervisor agents", "Specialist agents", "Sequential workflows", "Parallel execution", "Agent handoffs"] },
      { title: "MCP & Human Control", topics: ["MCP architecture", "Servers, tools & resources", "Authentication & permissions", "Memory & persistence", "Approval / review / escalation"] },
    ],
    project: { title: "Multi-Agent Enterprise Assistant", desc: "Build a supervisor agent coordinating multiple specialist agents and tools." } },
  { n: 12, phase: 3, title: "Multimodal AI & Document Intelligence", tagline: "Build AI that understands more than text",
    sections: [
      { title: "Vision & Document Understanding", topics: ["Vision-language models", "Image understanding", "Visual question answering", "Vision prompting", "Document classification"] },
      { title: "OCR & Structured Extraction", topics: ["OCR pipelines", "Layout understanding", "Tables & charts", "Multi-page documents", "Bounding boxes & confidence", "Human verification"] },
      { title: "Audio & Multimodal RAG", topics: ["Speech-to-text", "Text-to-speech", "Voice assistants", "Image/document retrieval", "Multimodal context"] },
    ],
    project: { title: "Multimodal Document Assistant", desc: "Upload documents/images and extract structured information through an AI assistant." } },
  { n: 13, phase: 4, title: "AI Security, Guardrails & Red Teaming", tagline: "Secure AI systems before production",
    sections: [
      { title: "AI Security Threats", topics: ["Prompt injection", "Jailbreaking", "Data leakage", "Insecure outputs", "Model supply-chain risks"] },
      { title: "Secure RAG & Agents", topics: ["Document poisoning", "Indirect prompt injection", "Tenant isolation", "Permission-aware retrieval", "Least-privilege agents", "Tool allowlists"] },
      { title: "Guardrails & Red Teaming", topics: ["PII protection", "Input / output guardrails", "Threat modeling", "Security testing", "Red-team scenarios"] },
    ],
    project: { title: "Secure AI Copilot", desc: "Attack and defend an AI application against common AI security threats." } },
  { n: 14, phase: 4, title: "LLMOps, Evaluation & Observability", tagline: "Measure AI quality, cost and reliability",
    sections: [
      { title: "AI Evaluation", topics: ["Evaluation datasets", "Ground truth", "Regression testing", "Human evaluation", "LLM-as-a-judge"] },
      { title: "RAG & Agent Evaluation", topics: ["Retrieval precision / recall", "Context relevance", "Faithfulness", "Answer quality", "Agent task success & tool accuracy"] },
      { title: "Observability & Reliability", topics: ["Tracing", "Latency & errors", "Token usage", "Cost monitoring", "Routing & fallbacks", "Graceful degradation"] },
    ],
    project: { title: "AI Evaluation & Monitoring System", desc: "Evaluate an AI application and monitor quality, latency, errors and token costs." } },
  { n: 15, phase: 5, title: "Enterprise Integration, ERP & Legacy Systems", tagline: "Connect AI to real enterprise systems",
    sections: [
      { title: "Enterprise Platforms", topics: ["SAP", "Salesforce", "ServiceNow", "Oracle", "Microsoft Dynamics", "Tally"] },
      { title: "ERP & Enterprise APIs", topics: ["SAP PM / CS", "BAPI / OData / RFC / IDocs", "REST APIs & webhooks", "Enterprise connectors", "MCP integrations"] },
      { title: "Legacy & Enterprise Data", topics: ["SOAP / WSDL / XML", "Legacy APIs", "System of record", "Master vs transactional data", "Data quality & API catalogues"] },
    ],
    project: { title: "Enterprise AI Integration", desc: "Connect an AI application with enterprise APIs and simulate an ERP workflow." } },
  { n: 16, phase: 5, title: "IAM, SSO & Enterprise Security", tagline: "Control who can access what",
    sections: [
      { title: "Authentication", topics: ["OAuth2", "OIDC", "JWT", "SSO", "SAML"] },
      { title: "Authorization", topics: ["RBAC", "ABAC", "Permissions", "Tenant isolation", "Data-level access"] },
      { title: "Enterprise AI Security", topics: ["Microsoft Entra / enterprise identity", "AI access control", "RAG permissions", "Agent / tool permissions", "Secrets & key management", "Audit & compliance"] },
    ],
    project: { title: "Secure Enterprise AI Portal", desc: "Build an AI application with SSO, roles, permissions and tenant-aware access." } },
  { n: 17, phase: 6, title: "AI System Design: HLD, LLD & Architecture", tagline: "Design AI systems before building them",
    sections: [
      { title: "High-Level Design (HLD)", topics: ["Requirements", "Architecture", "AI components", "Data & API layers", "Security & observability"] },
      { title: "Low-Level Design (LLD)", topics: ["API contracts", "Database schema", "Sequence flows", "Agent boundaries", "Failure handling"] },
      { title: "Architecture Decisions", topics: ["Scalability & reliability", "Latency & cost", "Data residency", "ADRs (Architecture Decision Records)", "Cloud vs on-premise", "Self-hosted / air-gapped AI"] },
    ],
    project: { title: "AI System Architecture", desc: "Create HLD, LLD, API flows and architecture decisions for an enterprise AI solution." } },
  { n: 18, phase: 7, title: "Customer Discovery & Process Engineering", tagline: "Find the real problem before building",
    sections: [
      { title: "Customer Discovery", topics: ["Discovery interviews", "User shadowing", "Personas", "JTBD (Jobs-to-be-Done)", "Stakeholder identification"] },
      { title: "Problem & Process Analysis", topics: ["5 Whys", "Root-cause analysis", "Manual effort & errors", "SLA / cost analysis", "AS-IS process mapping"] },
      { title: "Solution Scoping", topics: ["TO-BE process", "BPMN / swimlanes", "Automation opportunities", "PoC / pilot / production", "Dependencies & risks"] },
    ],
    project: { title: "Real-World Automation Discovery", desc: "Study a business process and convert the problem into an AI automation opportunity." } },
  { n: 19, phase: 7, title: "BRD, TDD & AI Technical Specifications", tagline: "Turn business requirements into buildable systems",
    sections: [
      { title: "BRD (Business Requirement Document)", topics: ["Executive summary", "Problem & scope", "Functional requirements", "Data requirements", "Integration requirements", "Acceptance criteria"] },
      { title: "TDD (Technical Design Document)", topics: ["Architecture", "Data flows", "Validation", "Business rules", "Exceptions", "Integrations & authentication"] },
      { title: "AI Technical Specification", topics: ["Model selection", "Prompt design", "RAG architecture", "Tools & agents", "Evaluation strategy", "AI coding handoff"] },
    ],
    project: { title: "Business Requirement → AI Solution", desc: "Create BRD + TDD + AI technical specifications for an enterprise AI project." } },
  { n: 20, phase: 7, title: "Stakeholder Management, Agile & Client Delivery", tagline: "Deliver AI solutions with confidence",
    sections: [
      { title: "Stakeholder Management", topics: ["End users", "Process owners", "IT & security teams", "Sponsors", "CXO communication"] },
      { title: "Agile & Scrum", topics: ["Product backlog", "User stories", "Sprint planning", "Stand-ups", "Reviews & retrospectives"] },
      { title: "Client Delivery", topics: ["Technical demos", "Feedback management", "Change requests", "Scope management", "Status reporting", "Executive presentations"] },
    ],
    project: { title: "Client Delivery Simulation", desc: "Run a complete sprint from requirements to demo and stakeholder feedback." } },
  { n: 21, phase: 7, title: "UAT, Go-Live, Hypercare & Change Management", tagline: "Take AI from testing to production",
    sections: [
      { title: "UAT & Quality", topics: ["UAT scenarios", "Preconditions", "Expected vs actual results", "Entry / exit criteria", "Defect severity & triage"] },
      { title: "Go-Live & Hypercare", topics: ["Go-live readiness", "Data validation", "Rollback planning", "Production support", "Incident escalation", "Stabilization"] },
      { title: "Change & Handover", topics: ["Change management", "User training", "Runbooks", "Knowledge transfer", "Ownership transition", "KPI & ROI tracking"] },
    ],
    project: { title: "AI Production Go-Live", desc: "Execute UAT, defect tracking, go-live planning and post-launch hypercare." } },
  { n: 22, phase: 8, title: "SRE, Reliability & Incident Engineering", tagline: "Keep AI systems running",
    sections: [
      { title: "Reliability Engineering", topics: ["SLI / SLO / SLA", "Availability", "Disaster recovery", "Backup strategies", "Reliability planning"] },
      { title: "Performance & Capacity", topics: ["Load testing", "Stress testing", "Concurrency", "Capacity planning", "Latency optimization"] },
      { title: "Incident Engineering", topics: ["Incident detection", "Triage & mitigation", "Root-cause analysis", "AI-specific incidents", "Rollback & postmortems"] },
    ],
    project: { title: "AI Production Incident Lab", desc: "Diagnose and recover an AI system suffering from latency, errors or data/retrieval failures." } },
  { n: 23, phase: 8, title: "Enterprise AI Capstone — OmniGuard", tagline: "OmniGuard — Enterprise AI Field Service Platform",
    sections: [
      { title: "Business & AI Engineering", topics: ["Customer discovery", "AS-IS / TO-BE", "BRD & TDD", "LLM + RAG", "Hybrid retrieval & reranking", "Agentic workflows"] },
      { title: "Full-Stack & Enterprise", topics: ["React frontend", "FastAPI backend", "PostgreSQL / Redis", "ERP / SAP integration", "REST / OData", "Legacy integration", "MCP"] },
      { title: "Production & Security", topics: ["Multimodal document intelligence", "OCR / images / voice", "SSO / RBAC", "Tenant isolation", "Docker / Kubernetes", "CI/CD", "LLMOps & evaluation", "Monitoring & cost control"] },
    ],
    project: { title: "Capstone Delivery", desc: "Discover → Design → Build → Integrate → Secure → Deploy → Monitor." } },
  { n: 24, phase: 8, title: "FDE Final Delivery & Career Readiness", tagline: "Turn your project into an FDE portfolio",
    sections: [
      { title: "Technical Presentation", topics: ["System architecture", "AI workflow", "RAG pipeline", "Agent architecture", "Security", "Deployment"] },
      { title: "Client Presentation", topics: ["Business problem", "Solution", "Live demonstration", "Business impact", "ROI / KPI", "Stakeholder communication"] },
      { title: "Portfolio & Interview", topics: ["GitHub project", "Architecture documentation", "API documentation", "BRD / TDD / UAT", "Evaluation reports", "Python / SQL / API interviews", "LLM / RAG / Agent / Cloud / FDE scenarios"] },
    ],
    project: { title: "Final Deliverable", desc: "FDE portfolio + enterprise technical presentation." } },
];

export const techGroups = [
  { name: "Programming & Apps", color: "cyan", items: ["Python", "Linux", "Git", "Pytest", "TypeScript", "React", "FastAPI", "Pydantic"] },
  { name: "Data", color: "yellow", items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", "Vector databases"] },
  { name: "GenAI & LLMs", color: "pink", items: ["Transformers", "Embeddings", "Prompt engineering", "RAG", "Graph RAG", "Vision-language models", "OCR"] },
  { name: "Agentic Workflows", color: "violet", items: ["ReAct", "Function calling", "LangGraph", "Multi-agent systems", "MCP"] },
  { name: "Cloud & Deployment", color: "blue", items: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Jenkins / Azure DevOps"] },
  { name: "Enterprise & Security", color: "orange", items: ["SAP", "Salesforce", "ServiceNow", "Oracle", "Microsoft Dynamics", "OAuth2 / OIDC / SAML", "Microsoft Entra", "LLMOps & evaluation"] },
];

export const mentor = {
  name: "K SubRaj Sir",
  role: "Lead Trainer, Coding Masters",
  bio: "With over 25+ years of IT experience and an M.Sc. in Computer Science from Manipal University, K SubRaj Sir is a leading trainer in Data Science, Prompt Engineering, LLMs, Generative AI, Agentic AI, and Autonomous Testing (AI). He emphasizes hands-on, industry-oriented learning that bridges the gap between academic concepts and real-world applications.",
  certifications: [
    "Microsoft Certified Data Scientist & Copilot Engineer",
    "Google Certified Gen-AI Engineer",
    "Certified Pythonista Programmer",
    "Certified AI in Testing (ISTQB)",
    "Certified in GenAI & Agentic AI Engineering (Google, Microsoft, ITG)",
  ],
  specialties: [
    "Data Science, AI & Generative AI",
    "Prompt Engineering & Agentic AI",
    "Python Programming & AI Testing",
    "Corporate & Academic Training (250+ hours courses)",
    "Mentoring professionals for career growth in AI",
  ],
};
