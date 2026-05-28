// Problem, Services, How It Works sections
const Problems = () => {
  const items = [
    {
      ic: <Icon.Trend />,
      title: "The Growth Penalty",
      body: "Revenue grows on paper. Cash flow can't keep up. Invoices pile up while your team is focused on selling.",
      hint: "→ avg 38% of B2B invoices paid late",
    },
    {
      ic: <Icon.Loop />,
      title: "The Bureaucratic Loop",
      body: "Your invoice is sitting in someone's inbox, waiting for an approval that's stuck in a queue. Not disputed — just buried.",
      hint: "→ 7+ touchpoints to close one invoice",
    },
    {
      ic: <Icon.Wallet />,
      title: "The Resource Dilemma",
      body: "Hiring a full-time AR specialist is expensive. Not hiring one means your sales team is making collections calls.",
      hint: "→ $80k+ fully loaded for one FTE",
    },
    {
      ic: <Icon.Handshake />,
      title: "The Relationship Trap",
      body: "You don't want to damage customer relationships by chasing payments. So you wait. And your invoices age.",
      hint: "→ avoidance costs 9 days of DSO",
    },
  ];
  return (
    <section className="problems" id="problem">
      <div className="section">
        <div className="section-head">
          <div>
            <div className="section-num"><span className="line"></span>01 — THE PROBLEM</div>
            <h2 className="section-title reveal">Sound <em>familiar?</em></h2>
          </div>
          <p className="section-lede reveal reveal-1">
            Late payments aren't a billing issue — they're a structural drag on your business.
            Here's what we see across every client we onboard.
          </p>
        </div>
        <div className="bento">
          {items.map((it, i) => (
            <div key={i} className={`problem-card reveal reveal-${i + 1}`}>
              <div className="ic">{it.ic}</div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
              <div className="hint mono">{it.hint}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const items = [
    {
      num: "01",
      icon: <Icon.Users size={22} />,
      title: "Dedicated AR Team",
      body: "Your accounts, our people. A dedicated consultant who knows your business and follows up on every invoice, every week — under your brand.",
    },
    {
      num: "02",
      icon: <Icon.Target size={22} />,
      title: "AR Strategy",
      body: "Every account gets its own approach. Credit assessment, dispute resolution, and per-customer playbooks — grounded in your data, not guesswork.",
    },
    {
      num: "03",
      icon: <Icon.Cpu size={22} />,
      title: "Technology & Automation",
      body: "Live dashboards, custom databases, and intelligent automations — built for your stack, integrated with what you already use.",
    },
  ];
  return (
    <div className="section" id="services">
      <div className="section-head">
        <div>
          <div className="section-num"><span className="line"></span>02 — WHAT WE DO</div>
          <h2 className="section-title reveal">Three pillars. <em>One outcome.</em></h2>
        </div>
        <p className="section-lede reveal reveal-1">
          We manage your entire receivables function — the people, the strategy, and the technology — so your cash flow runs on autopilot.
        </p>
      </div>
      <div className="svc-preview">
        {items.map((it, i) => (
          <a key={i} href="Services.html" className={`svc-prev-card reveal reveal-${i + 1}`}>
            <div className="num mono">PILLAR {it.num}</div>
            <div className="ic">{it.icon}</div>
            <h3>{it.title}</h3>
            <p>{it.body}</p>
            <span className="arr">Learn more <Icon.Arrow size={12} /></span>
          </a>
        ))}
      </div>
      <div className="svc-explore-row reveal reveal-4">
        <a href="Services.html" className="btn-explore">
          Explore Our Services
          <Icon.Arrow size={14} />
        </a>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    { ic: <Icon.Phone />,    title: "We Talk" },
    { ic: <Icon.Box />,      title: "Hand Off" },
    { ic: <Icon.Compass />,  title: "We Build Your Playbook" },
    { ic: <Icon.Users />,    title: "We Start Working On Your Accounts" },
    { ic: <Icon.Trend />,    title: "You See Results" },
  ];

  return (
    <section id="how" style={{ paddingTop: 30, paddingBottom: 80 }}>
      <div className="how">
        <div className="how-inner">
          <div className="section-head">
            <div>
              <div className="section-num"><span className="line"></span>03 — HOW IT WORKS</div>
              <h2 className="section-title reveal">Five steps. <em>Zero disruption.</em></h2>
            </div>
            <p className="section-lede reveal reveal-1">
              From kickoff to first cash in, most clients are live within 14 days. We do the heavy lifting; your team stays focused on growth.
            </p>
          </div>
          <ol className="timeline">
            {steps.map((s, i) => (
              <li key={i} className={`tl-step reveal reveal-${i + 1}`}>
                <div className="tl-marker">
                  <span className="tl-dot">{s.ic}</span>
                  {i < steps.length - 1 && <span className="tl-line"></span>}
                </div>
                <div className="tl-body">
                  <div className="tl-meta">
                    <span className="tl-num mono">0{i + 1} / 05</span>
                  </div>
                  <h4>{s.title}</h4>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

window.Problems = Problems;
window.Services = Services;
window.HowItWorks = HowItWorks;
