// Differentiators, Industries, Social Proof, CTA, Footer
const Counter = ({ to, prefix = "", suffix = "", duration = 1400, decimals = 0 }) => {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  const triggered = React.useRef(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !triggered.current) {
          triggered.current = true;
          let start;
          const step = (t) => {
            if (!start) start = t;
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(eased * to);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration]);

  return <span ref={ref} className="mono">{prefix}{val.toFixed(decimals)}{suffix}</span>;
};

const Differentiators = () => {
  const them = [
    "Task-driven: \"we'll make X calls\"",
    "Generic call center agents",
    "Monthly reports after the fact",
    "One-size-fits-all approach",
    "Collections agency stigma",
    "Expensive in-house or agency fees",
  ];
  const us = [
    "Goal-driven: \"we'll cut your DSO by X days\"",
    "Dedicated consultants who know your business",
    "Real-time dashboards you can access anytime",
    "Custom strategy per account",
    "We work under YOUR brand name",
    "Marginally cheaper, materially better",
  ];
  return (
    <div className="section" id="why">
      <div className="section-head">
        <div>
          <div className="section-num"><span className="line"></span>03 — WHY TRUEALLY</div>
          <h2 className="section-title reveal">Not a call center. <em>Not an agency.</em></h2>
        </div>
        <p className="section-lede reveal reveal-1">
          We built TrueAlly because the existing options force a tradeoff between cost,
          quality, and brand. We refuse the tradeoff.
        </p>
      </div>
      <div className="diff-table reveal">
        <div className="diff-col them">
          <h4>Most providers</h4>
          <ul>{them.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </div>
        <div className="diff-col us">
          <h4>TrueAlly</h4>
          <ul>{us.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </div>
      </div>
    </div>
  );
};

const Industries = () => null;

const SocialProof = () => null;

const CTA = () => (
  <section id="contact">
    <div className="cta-section">
      <div className="cta-inner">
        <div className="eyebrow">
          <span className="pip"></span>
          NO SETUP FEES · NO LONG-TERM CONTRACTS
        </div>
        <h2>Stop chasing invoices. <em>Start running your business.</em></h2>
        <p className="sub">
          Monthly retainer. Pilot first. See results before you commit.
          A 30-minute discovery call is the only way to know if we're a fit.
        </p>
        <div className="cta-buttons">
          <a className="btn-primary glow" href="https://cal.com" target="_blank" rel="noreferrer">
            Book a Discovery Call
            <span className="arrow"><Icon.Arrow size={12} /></span>
          </a>
          <a className="btn-ghost-light" href="tel:+12134718393">
            <Icon.Phone size={14} /> (213) 471-8393
          </a>
        </div>
        <div className="cta-meta">
          <a href="mailto:contact@trueallysolutions.com"><Icon.Mail size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />contact@trueallysolutions.com</a>
          <span>Mon–Fri · 6am–6pm PT</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <>
    <footer className="footer">
      <div className="footer-brand">
        <div className="brand">
          <div className="brand-name"><b>TrueAlly</b> <i>Solutions</i></div>
        </div>
        <p>Outsourced B2B accounts receivable management. We make sure your customers pay you on time.</p>
      </div>
      <div>
        <h6>Company</h6>
        <ul>
          <li><a href="Services.html">Services</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#why">Why TrueAlly</a></li>
        </ul>
      </div>
      <div>
        <h6>Contact</h6>
        <ul>
          <li><a href="tel:+12134718393">(213) 471-8393</a></li>
          <li><a href="mailto:contact@trueallysolutions.com">contact@<br />trueallysolutions.com</a></li>
        </ul>
      </div>
      <div>
        <h6>Connect</h6>
        <ul>
          <li><a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon.LinkedIn size={14} /> LinkedIn</a></li>
          <li><a href="#contact">Book a call</a></li>
        </ul>
      </div>
    </footer>
    <div className="footer-bottom">
      <span>© 2026 TrueAlly Solutions. All rights reserved.</span>
      <span>Powered by El Idrissi Limited (UK)</span>
    </div>
  </>
);

window.Differentiators = Differentiators;
window.Industries = Industries;
window.SocialProof = SocialProof;
window.CTA = CTA;
window.Footer = Footer;
