// System Architecture Showcase Data
const architectureData = {
  airis: {
    badge: "Enterprise AIOps Platform",
    title: "DevOps AIris — AIOps Incident Orchestration & pgvector RAG",
    desc: "A production enterprise incident orchestration engine ingesting multi-source telemetry, running dense+sparse hybrid vector resolution, sub-20ms semantic caching, and bidirectional MCP ticket synchronization.",
    features: [
      "FastAPI microservices with PostgreSQL Row-Level Security (RLS) tenant isolation",
      "pgvector hybrid search (HNSW dense embeddings + BM25 sparse reciprocal rank fusion)",
      "Sub-20ms p99 semantic solution-caching over Prometheus, Loki, and Grafana Tempo traces",
      "Model Context Protocol (MCP) servers for automated Jira Cloud & Confluence RCA sync"
    ],
    flow: [
      { icon: "📡", title: "Telemetry Ingestion", desc: "Prometheus metrics, Loki logs & CloudWatch alert webhooks" },
      { icon: "⚡", title: "Semantic Cache Layer", desc: "Sub-20ms solution retrieval before hitting LLM inference" },
      { icon: "🧠", title: "Hybrid Vector RAG", desc: "pgvector HNSW + BM25 reciprocal rank fusion with Ragas guardrails" },
      { icon: "🤖", title: "MCP Autonomous Sync", desc: "Automated Jira incident creation & Confluence post-mortem RCA" }
    ]
  },
  quantum: {
    badge: "Healthcare Cloud Lakehouse",
    title: "Quantum Research — Clinical Lakehouse on Apache Iceberg",
    desc: "End-to-end event-driven Lakehouse on AWS processing multi-source clinical trial data with ACID transactions, zero-downtime schema evolution, and automated HIPAA/GxP compliance.",
    features: [
      "Event-driven AWS Step Functions & PySpark Glue ETL processing 15M+ daily records (1.2+ TB)",
      "Apache Iceberg table format with automated metadata compaction & Z-order partitioning",
      "AWS Lake Formation Tag-Based Access Control (LF-TBAC) & dynamic column PII masking",
      "GitHub Actions CI/CD quality gates enforcing automated PySpark data contracts"
    ],
    flow: [
      { icon: "🏥", title: "Multi-Source EDC Ingestion", desc: "Raw clinical cohort files ingested to AWS S3 landing zone" },
      { icon: "⚙️", title: "PySpark Glue & Step Functions", desc: "Medallion (Bronze/Silver/Gold) transformation & schema validation" },
      { icon: "🧊", title: "Apache Iceberg Lakehouse", desc: "ACID table format with metadata compaction & Z-order clustering" },
      { icon: "🔒", title: "Lake Formation & Athena", desc: "LF-TBAC row/column PII masking with 65% faster query speed" }
    ]
  },
  autoflow: {
    badge: "Autonomous Agent System",
    title: "AutoFlow Studio — Autonomous Web Testing & Self-Healing",
    desc: "Autonomous E2E test-generation and self-healing agent platform utilizing high-concurrency background workers, Playwright DOM extraction, and tiered LLM validation judges.",
    features: [
      "TypeScript Fastify backend with Redis/BullMQ asynchronous job queueing",
      "Semantic vector matching to detect DOM mutations & dynamic UI selector drift",
      "Tiered LLM routing: Claude 3.5 Haiku for fast diffs, Claude 3.5 Sonnet for recovery",
      "Anthropic prompt caching cutting LLM inference operating costs by 72%"
    ],
    flow: [
      { icon: "🎭", title: "Playwright Worker Pool", desc: "Headless browser workers executing parallel test scenarios" },
      { icon: "⚡", title: "Redis/BullMQ Queue", desc: "Asynchronous task queue with concurrency management & retry policies" },
      { icon: "🧩", title: "DOM Vector Intelligence", desc: "Semantic DOM embedding matching across 28 relational schemas" },
      { icon: "🤖", title: "Bedrock Claude Self-Healing", desc: "Automated selector repair with 80% test maintenance reduction" }
    ]
  },
  gemini: {
    badge: "GenAI Code Compilation",
    title: "Gemini 2.5 Flash XML-to-PySpark/SQL Code Compiler",
    desc: "Independently engineered GenAI code conversion platform that parsed proprietary Informatica XML mapping graphs and generated optimized BigQuery SQL and PySpark jobs.",
    features: [
      "Eliminated enterprise proprietary ETL vendor licensing costs (EchoStar CEO Commendation)",
      "Automated hierarchical DAG traversal of complex Informatica transformation pipelines",
      "Reduced cloud database migration cycle time by 85%",
      "Engineered automated data reconciliation checks validating 100% output fidelity"
    ],
    flow: [
      { icon: "📄", title: "Informatica XML Parsing", desc: "Hierarchical extraction of transformations, filters, and joiner DAGs" },
      { icon: "🧠", title: "Gemini 2.5 Flash Engine", desc: "Few-shot semantic code translation with AST validation" },
      { icon: "📊", title: "PySpark & BigQuery SQL", desc: "Optimized, production-grade cloud Lakehouse transformation scripts" },
      { icon: "🏆", title: "Executive Commendation", desc: "Multi-million-dollar licensing savings commended by CEO Hamid Akhavan" }
    ]
  }
};

// Architecture Switcher Function
function switchArchitecture(key) {
  const data = architectureData[key];
  if (!data) return;

  // Update Buttons
  document.querySelectorAll('.arch-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.arch === key);
  });

  // Update Content
  document.getElementById('arch-badge').textContent = data.badge;
  document.getElementById('arch-title').textContent = data.title;
  document.getElementById('arch-desc').textContent = data.desc;

  // Update Features
  const featuresList = document.getElementById('arch-features');
  featuresList.innerHTML = data.features.map(f => `
    <li><span class="check-icon">✓</span> <span>${f}</span></li>
  `).join('');

  // Update Flow Diagram
  const flowContainer = document.getElementById('diagram-flow');
  flowContainer.innerHTML = data.flow.map((step, index) => `
    <div class="flow-step">
      <div class="step-icon">${step.icon}</div>
      <div class="step-info">
        <h4>${step.title}</h4>
        <p>${step.desc}</p>
      </div>
    </div>
    ${index < data.flow.length - 1 ? '<div class="flow-connector">↓</div>' : ''}
  `).join('');
}

// Bot-Protected Contact Functions
const encodedContact = {
  user: "abhi.as8776908",
  domain: "gmail.com",
  phonePrefix: "+91",
  phoneNum: "9073252834"
};

function copyEmail() {
  const email = `${encodedContact.user}@${encodedContact.domain}`;
  navigator.clipboard.writeText(email).then(() => {
    showToast(`Email copied: ${email}`);
  }).catch(() => {
    showToast(`Contact: ${email}`);
  });
}

function copyPhone() {
  const phone = `${encodedContact.phonePrefix} ${encodedContact.phoneNum}`;
  navigator.clipboard.writeText(phone).then(() => {
    showToast(`Phone copied: ${phone}`);
  }).catch(() => {
    showToast(`Contact: ${phone}`);
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";
  setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

// Metrics Counter Animation
function animateCounters() {
  const counters = document.querySelectorAll('.metric-val');
  counters.forEach(counter => {
    const target = counter.getAttribute('data-target');
    if (!target) return;
    counter.innerText = target;
  });
}

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
  // Init default arch tab
  switchArchitecture('airis');
  
  // Arch Tab Click Handlers
  document.querySelectorAll('.arch-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      switchArchitecture(e.target.dataset.arch);
    });
  });

  animateCounters();
});
