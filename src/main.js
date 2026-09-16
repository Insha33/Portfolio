const arrow = '<span aria-hidden="true">↗</span>';
const projects = [
  {
    id: "deep",
    category: "ai",
    theme: "lavender",
    label: "SHELL · AI WORKFLOW",
    title: "From documents to a sprint-ready backlog.",
    description:
      "Making the leap from business requirements to Azure DevOps work items a little more intelligent.",
    tags: ["0 → 1 product", "LLM evaluation", "Workflow automation"],
    metric: "45%",
    metricLabel: "lower query latency",
    secondary: "85% direct ADO upload",
    name: "DEEP",
    sub: "Less admin. More momentum.",
    problem:
      "Translating business requirement documents and technical design documents into work items creates manual sprint-planning overhead.",
    contribution:
      "Led 0-to-1 development of an LLM workflow that translates those documents into Azure DevOps work items. Defined prompt-injection test suites, optimized system prompts for timeouts and latency, and tracked acceptance rates.",
    outcome:
      "Reduced query latency by 45% and achieved 85% direct Azure DevOps upload without manual rewriting.",
    lens: "Reliable AI needs more than a promising demo. Acceptance rates, latency, and safety guardrails make quality concrete enough to evaluate.",
    visual: "deep",
  },
  {
    id: "reviewlens",
    category: "ai",
    theme: "mint",
    label: "INDEPENDENT PROJECT · AI DISCOVERY",
    title: "Giving customer feedback a clearer voice.",
    description:
      "An AI assistant that turns scattered app reviews into pain points, feature requests, and next steps.",
    tags: ["RAG", "Product discovery", "AI prototyping"],
    metric: "550",
    metricLabel: "app-store reviews synthesized",
    name: "ReviewLens",
    sub: "Listen. Understand. Prioritize.",
    problem:
      "Feedback across app stores is difficult to synthesize into clear priorities for product and support teams.",
    contribution:
      "Prototyped an AI workflow using 550 App Store and Play Store reviews. Designed natural-language discovery to cluster pain points, surface feature requests, and generate Jira-ready tickets.",
    outcome:
      "Created a prototype connecting customer feedback to structured product and support actions. No production adoption or business-impact metric is claimed.",
    lens: "Feedback is useful when teams can move from individual comments to patterns they can investigate and act on.",
    url: "https://reviewlens.up.railway.app/",
    visual: "reviews",
  },
  {
    id: "verityloop",
    category: "ai",
    theme: "peach",
    label: "INDEPENDENT PROJECT · IN DEVELOPMENT",
    title: "Turning market signals into product direction.",
    description:
      "A governed market-intelligence platform for founders and product teams deciding what comes next.",
    tags: ["Product strategy", "Human-in-the-loop", "AI workflows"],
    metric: "2",
    metricLabel: "distinct discovery workflows",
    name: "VerityLoop",
    sub: "Evidence before the next move.",
    problem:
      "Founders need to identify opportunities without an existing roadmap, while product teams need to understand how market changes should affect their plans.",
    contribution:
      "Developing two workflows for these distinct needs. Designed decision briefs and human-in-the-loop reviews that convert validated insights into optional PRDs and engineering-reviewed ticket drafts.",
    outcome:
      "Currently in development. The portfolio reflects the product approach and designed workflows, rather than shipped business results.",
    lens: "A useful signal should inform a decision. Human review keeps the move from evidence to delivery deliberate.",
    url: "https://runverityloop.com/",
    visual: "verity",
  },
  {
    id: "enterprise",
    category: "enterprise",
    theme: "blue",
    label: "SHELL · ENTERPRISE DELIVERY",
    title: "Complex systems. Confident releases.",
    description:
      "Aligning business, engineering, and vendors to move critical credit and trade-finance workflows forward.",
    tags: ["Stakeholder alignment", "UAT", "Release readiness"],
    metric: "90%",
    metricLabel: "GCS Wave 2 UAT pass rate",
    name: "Enterprise, aligned.",
    sub: "Clarity across the moving parts.",
    problem:
      "Credit and trade-finance platforms require coordinated requirements, data mapping, testing, and stakeholder sign-off before release.",
    contribution:
      "Led execution and release readiness for GCS Wave 2, validating 75+ critical requirements. Led the Energy Credit SQL Upgrade UAT across four business functions with 50+ test cases. Served as interim Project Manager for KOMGO during critical delivery phases.",
    outcome:
      "GCS Wave 2 achieved a 90% UAT pass rate and on-schedule deployment. Separately, KOMGO enabled an estimated $57K in annual operational savings.",
    lens: "Product execution depends on shared understanding: what matters, what is ready, and who needs to make the next decision.",
    visual: "enterprise",
  },
];
function visual(p) {
  if (p.visual === "deep")
    return `<div class="mock-window"><div class="mock-header"><span class="mock-logo">✳ DEEP</span><span>YOUR PLANNING, UNBLOCKED</span><i>•••</i></div><div class="workflow"><div class="doc-icon">≡<small>BRD.pdf</small></div><span class="flow-line">→</span><div class="ai-node">✳</div><span class="flow-line">→</span><div class="ticket-stack"><div><i></i>User story ready <b>✓</b></div><div><i></i>Acceptance criteria <b>✓</b></div><div><i></i>Ready for your sprint <b>✓</b></div></div></div><div class="mock-bottom"><span class="status-dot"></span> From complexity to clarity <span>Powered by a little AI magic ↗</span></div></div><span class="visual-note">the busywork? handled. ↗</span>`;
  if (p.visual === "reviews")
    return `<div class="review-float r-one"><span>★★★★★</span> “Love the app, but…”</div><div class="review-float r-two"><span>★★★☆☆</span> “I wish I could…”</div><div class="review-dashboard"><div class="mock-header"><span class="mock-logo">◉ ReviewLens</span><i>↗</i></div><div class="query-box">What are our users asking for? <span>↑</span></div><div class="insight-row"><span class="insight-icon">⌕</span><div><strong>Find the pattern.</strong><small>Feedback → themes → actionable tickets</small></div></div><div class="review-tags"><span>Understand pain points</span><span>Spot feature requests</span></div></div>`;
  if (p.visual === "verity")
    return `<div class="verity-art"><span class="signal s1">Market shifts</span><span class="signal s2">Customer needs</span><span class="signal s3">Emerging opportunities</span><div class="orbit"></div><div class="verity-core">v<span>verityloop</span></div><div class="brief"><span>↗ DECISION BRIEF</span><strong>A clearer next move.</strong><small>Evidence · Options · Human review</small></div></div>`;
  return `<div class="release-board"><div class="mock-header"><span class="mock-logo">Release readiness</span><span class="ready-badge">ALIGNED ✓</span></div><div class="release-stat"><strong>75+</strong><span>critical requirements<br>validated for GCS Wave 2</span></div><div class="release-checks"><span>✓ Business</span><span>✓ Engineering</span><span>✓ Vendors</span></div><div class="progress-track"><span></span></div><small>90% UAT pass rate <span>GCS WAVE 2</span></small></div>`;
}
const grid = document.querySelector("#project-grid");
function render(filter = "all") {
  const selected = projects.filter(
    (p) => filter === "all" || p.category === filter,
  );
  grid.innerHTML = selected
    .map(
      (p) =>
        `<article class="project-card"><button class="project-open" data-project="${p.id}" aria-label="Read project story: ${p.name}"><div class="project-visual ${p.theme}"><div class="visual-title"><strong>${p.name}</strong><span>${p.sub}</span></div>${visual(p)}<span class="project-corner">${arrow}</span></div><div class="project-meta"><span class="eyebrow muted">${p.label}</span><h3>${p.title}</h3><p>${p.description}</p><div class="project-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div><div class="project-outcome"><strong>${p.metric}</strong><span>${p.metricLabel}</span><span class="story-link">Read story ${arrow}</span></div></div></button></article>`,
    )
    .join("");
  document.querySelector(".work-count").textContent =
    `${selected.length} selected ${selected.length === 1 ? "story" : "stories"}`;
}
render();
document.querySelectorAll(".filter").forEach((button) =>
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => {
      b.classList.toggle("active", b === button);
      b.setAttribute("aria-pressed", String(b === button));
    });
    render(button.dataset.filter);
  }),
);
const dialog = document.querySelector("#project-dialog");
grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project]");
  if (!button) return;
  const p = projects.find((item) => item.id === button.dataset.project);
  document.querySelector("#dialog-content").innerHTML =
    `<p class="eyebrow muted">${p.label}</p><h2 id="dialog-title">${p.name}</h2><p class="dialog-intro">${p.title}</p><div class="dialog-metric ${p.theme}"><strong>${p.metric}</strong><span>${p.metricLabel}</span></div><h3>The problem</h3><p>${p.problem}</p><h3>My contribution</h3><p>${p.contribution}</p><h3>The outcome</h3><p>${p.outcome}</p><div class="product-lens"><h3>The product lens</h3><p>${p.lens}</p></div>${p.url ? `<a class="button primary" href="${p.url}" target="_blank" rel="noopener">Explore the project ${arrow}</a>` : ""}<p class="source-note">Experience and results from my resume. Visuals on this site are illustrative, not screenshots of internal tools.</p>`;
  dialog.showModal();
  document.body.classList.add("modal-open");
});
document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      dialog.close();
  }
});
dialog.addEventListener("close", () =>
  document.body.classList.remove("modal-open"),
);
const captions = [
  "Good products start with listening.",
  "Find where user needs meet business value.",
  "Make a decision. Build it. Learn from it.",
];
document.querySelectorAll("[data-stage]").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-stage]")
      .forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    document.querySelector("#canvas-caption").textContent =
      captions[Number(button.dataset.stage)];
  }),
);
document.querySelector("#copy-email").addEventListener("click", async () => {
  const status = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText("inshaaqib2001@gmail.com");
    status.textContent = "Email copied. Let’s make something good.";
  } catch {
    status.textContent = "Email: inshaaqib2001@gmail.com";
  }
});
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.08 },
);
document
  .querySelectorAll(
    ".section-heading, .about-layout, .timeline, .contact-section",
  )
  .forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
