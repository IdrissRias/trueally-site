// Services page — Three pillars (full scroll layout)

const PillarPoint = ({ num, title, body }) => (
  <div className="pillar-point reveal">
    <div className="pt-num mono">0{num}</div>
    <div className="pt-body">
      <strong>{title}</strong>
      <p>{body}</p>
    </div>
  </div>
);

const Pillar = ({ num, icon, title, summary, points }) => (
  <section className="pillar">
    <aside className="pillar-aside reveal">
      <div className="pillar-num mono"><span className="line"></span>PILLAR 0{num}</div>
      <div className="pillar-icon">{icon}</div>
      <h2>{title}</h2>
      <p className="pillar-summary">{summary}</p>
    </aside>
    <div className="pillar-points">
      {points.map((p, i) => (
        <PillarPoint key={i} num={i + 1} title={p.title} body={p.body} />
      ))}
    </div>
  </section>
);

const PILLARS = [
  {
    icon: <Icon.Users size={28} />,
    title: "Dedicated AR Team",
    summary: "Your accounts, our people. Every invoice followed up, every week, under your brand.",
    points: [
      {
        title: "A dedicated consultant assigned to your accounts.",
        body: "They know your business, your customers, and your billing history. Not a rotating call center — the same person, every time.",
      },
      {
        title: "Systematic weekly follow-up on every open invoice.",
        body: "Your customers know someone will call, so they prioritize your payments over vendors who don't follow up.",
      },
      {
        title: "Payment barrier removal.",
        body: "When a customer isn't paying, it's rarely because they don't want to. It's a missing PO, an approval stuck in a queue, an invoice sent to the wrong person. We find the barrier and remove it.",
      },
      {
        title: "Dispute resolution.",
        body: "Short pays, credit notes, deductions, billing discrepancies. We handle it so your team doesn't have to.",
      },
      {
        title: "We operate as a contractor providing services under your company's name.",
        body: "Your customers deal with a professional team that represents your brand.",
      },
      {
        title: "You keep full control.",
        body: "We never escalate, change terms, or make decisions without your approval. You decide how we treat your customers.",
      },
    ],
  },
  {
    icon: <Icon.Target size={28} />,
    title: "AR Strategy",
    summary: "Every account gets its own approach. Every decision grounded in data, not guesswork.",
    points: [
      {
        title: "We learn your business before we touch a single invoice.",
        body: "We study your customer base, your payment terms, your industry dynamics, and your risk tolerance so every decision we make is grounded in context.",
      },
      {
        title: "Every account gets its own approach.",
        body: "A long-standing customer who's 15 days late is a different conversation than a new customer who's 60 days past due. We tailor how we handle each one based on history, value, and what's actually causing the delay.",
      },
      {
        title: "We assess the creditworthiness of your customers.",
        body: "Before you extend terms to a new customer or increase a credit line, we dig into their financial health and payment behavior so you can make informed decisions that protect your cash flow.",
      },
      {
        title: "We help you balance getting paid with keeping the customer.",
        body: "Sometimes a customer is behind because they're going through a rough patch, not because they're a bad actor. We work with you to structure solutions that protect the relationship without writing off the revenue.",
      },
      {
        title: "We identify patterns in your receivables that you might not see.",
        body: "Which customers are consistently late? Which payment terms are causing friction? Where are disputes happening most often? We surface these insights so you can make better decisions going forward.",
      },
      {
        title: "Monthly reviews to assess performance and adjust course.",
        body: "We sit down with your team regularly to review what's working, what's not, and what needs to change.",
      },
    ],
  },
  {
    icon: <Icon.Cpu size={28} />,
    title: "AR Technology & Automation",
    summary: "Live dashboards, custom databases, intelligent automations — built for your business, not off the shelf.",
    points: [
      {
        title: "Live dashboards that show you exactly where your money is.",
        body: "Aging reports, DSO trends, collection performance, and customer payment behavior — all in one place, updated in real time. No waiting for a monthly report to know the state of your receivables.",
      },
      {
        title: "If your data infrastructure doesn't exist, we build it.",
        body: "Many growing companies track invoices in spreadsheets or fragmented systems. We set up the databases and reporting pipelines that give you a single source of truth — using tools like Snowflake, or whatever fits your existing stack.",
      },
      {
        title: "Automated workflows that handle the repetitive work.",
        body: "Payment reminders, follow-up sequences, status alerts, aging threshold notifications — we build automations that keep things moving without someone manually sending every email or pulling every report.",
      },
      {
        title: "AI-powered tools where they make a real difference.",
        body: "From prioritizing which accounts to follow up on first, to flagging payment patterns that signal risk, to generating customer communications — we use AI where it actually improves outcomes, not as a buzzword.",
      },
      {
        title: "Everything integrates with what you already use.",
        body: "We work alongside your existing accounting system, ERP, or billing platform. We don't ask you to rip and replace — we plug into what's there and fill the gaps.",
      },
      {
        title: "No ceiling on what we can build for you.",
        body: "If you need a custom report, a new workflow, or something we haven't thought of yet — we build it. Our technology grows with your business.",
      },
      {
        title: "Our capabilities extend beyond AR.",
        body: "As we work together and understand your operations, we can build automations and tools for other areas of your business. If there's a process that's slowing you down, we can likely automate it.",
      },
    ],
  },
];

const ServicesHero = () => (
  <section className="mini-hero">
    <div className="mini-hero-inner">
      <div className="crumb hero-load hero-load-1">
        <a href="TrueAlly Landing.html">Home</a>
        <span className="sep">/</span>
        <span>Services</span>
      </div>
      <h1 className="hero-load hero-load-2">
        Three pillars. <em>One outcome:</em><br />you get paid.
      </h1>
      <p className="lede hero-load hero-load-3">
        We don't just chase invoices. We manage your entire receivables function — the people,
        the strategy, and the technology — so your cash flow runs on autopilot.
      </p>
    </div>
  </section>
);

const ServicesCTA = () => (
  <section id="contact">
    <div className="cta-section">
      <div className="cta-inner">
        <div className="eyebrow">
          <span className="pip"></span>
          NO PITCH · NO PRESSURE · 15 MINUTES
        </div>
        <h2>See how it works <em>for your business.</em></h2>
        <p className="sub">
          A 15-minute discovery call is the only way to know if we're a fit.
          No pitch, no pressure — just a conversation about your AR.
        </p>
        <div className="cta-buttons">
          <a className="btn-primary glow" href="https://cal.com" target="_blank" rel="noreferrer">
            Book a Discovery Call
            <span className="arrow"><Icon.Arrow size={12} /></span>
          </a>
          <a className="btn-ghost-light" href="mailto:contact@trueallysolutions.com">
            <Icon.Mail size={14} /> Or email us
          </a>
        </div>
        <div className="cta-meta">
          <a href="tel:+12134718393"><Icon.Phone size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />(213) 471-8393</a>
          <a href="mailto:contact@trueallysolutions.com">contact@trueallysolutions.com</a>
          <span>Mon–Fri · 6am–6pm PT</span>
        </div>
      </div>
    </div>
  </section>
);

const ServicesApp = () => (
  <>
    <ServicesHero />
    <div className="pillars-wrap">
      {PILLARS.map((p, i) => (
        <React.Fragment key={i}>
          <Pillar num={i + 1} {...p} />
        </React.Fragment>
      ))}
    </div>
    <ServicesCTA />
    <Footer />
  </>
);

window.ServicesApp = ServicesApp;
