// Hero section
const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div>
          <div className="eyebrow hero-load hero-load-1">
            <span className="pip"></span>
            B2B Accounts Receivable, Done For You
          </div>
          <h1 className="display hero-load hero-load-2">
            We make sure your customers <span className="accent">pay you.</span>
          </h1>
          <p className="hero-sub hero-load hero-load-3">
            TrueAlly places dedicated AR consultants on your accounts who follow up weekly,
            build relationships with your customers' AP teams, and drive your DSO down.
          </p>
          <div className="hero-ctas hero-load hero-load-4">
            <a className="btn-primary" href="#contact">
              Book a Discovery Call
              <span className="arrow">
                <Icon.Arrow size={12} />
              </span>
            </a>
            <a className="btn-ghost" href="#how">
              See how it works
              <Icon.ArrowDown size={14} />
            </a>
          </div>
          <div className="social-bar hero-load hero-load-5">
            <div>
              <div className="stat-num mono">$1M+</div>
              <div className="stat-label" style={{ marginTop: 4 }}>Collected per week, on behalf of our clients</div>
            </div>
            <div className="vr"></div>
            <div>
              <div className="stat-num mono">&lt;10<span style={{ fontSize: '0.55em', color: 'var(--ink-muted)', fontWeight: 500 }}>min</span></div>
              <div className="stat-label" style={{ marginTop: 4 }}>Average response time on AR queries via email</div>
            </div>
            <div className="vr"></div>
            <div>
              <a href="tel:+13128208302" className="hero-phone">
                <Icon.Phone size={13} /> (312) 820-8302
              </a>
              <div className="stat-label" style={{ marginTop: 4 }}>Mon–Fri · 6am–6pm PT</div>
            </div>
          </div>
        </div>

        <div className="hero-visual hero-load">
          <DashboardMock />
          <div className="callout callout-1">
            <div className="ic"><Icon.Trend size={16} /></div>
            <div>
              <div className="label">DSO this month</div>
              <div className="value">−6 days</div>
            </div>
          </div>
          <div className="callout callout-2">
            <div className="ic"><Icon.Wallet size={16} /></div>
            <div>
              <div className="label">Past due</div>
              <div className="value">↓ 10%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </section>
  );
};

// Generate SVG path for line chart with filled area
const lineChartPath = (data, min, max, w = 200, h = 60, padTop = 6, padBot = 4) => {
  const range = max - min;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = padTop + (1 - (v - min) / range) * (h - padTop - padBot);
    return [x, y];
  });
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const area = `${line} L${w},${h} L0,${h} Z`;
  return { line, area, lastPt: pts[pts.length - 1] };
};

const MiniLineChart = ({ data, min, max, color, suffix = "" }) => {
  const { line, area, lastPt } = lineChartPath(data, min, max);
  const months = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];
  return (
    <svg viewBox="0 0 200 76" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={`gfill-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* gridlines */}
      {[0.25, 0.5, 0.75].map((p) => (
        <line key={p} x1="0" x2="200" y1={6 + p * 50} y2={6 + p * 50} stroke="#E0E0E0" strokeWidth="0.5" strokeDasharray="2 3" />
      ))}
      <path d={area} fill={`url(#gfill-${color.replace('#', '')})`} />
      <path d={line} stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={lastPt[0]} cy={lastPt[1]} r="2.4" fill={color} />
      <circle cx={lastPt[0]} cy={lastPt[1]} r="4.5" fill={color} fillOpacity="0.18" />
      {/* x labels */}
      {months.map((m, i) => (
        <text key={m} x={(i / 5) * 200} y="74" fontSize="6" fill="#4A4A4A" fontFamily="JetBrains Mono, monospace" textAnchor={i === 0 ? 'start' : i === 5 ? 'end' : 'middle'}>
          {m}
        </text>
      ))}
    </svg>
  );
};

const StackedBarChart = () => {
  const total = [35.8, 36.4, 37.2, 38.1, 39.4, 40.2];
  const past = [8.6, 8.0, 7.3, 6.8, 6.3, 5.8];
  const months = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];
  const max = 42;
  const w = 400, h = 130, padTop = 10, padBot = 18, padL = 24;
  const barW = (w - padL) / total.length * 0.55;
  const slot = (w - padL) / total.length;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
      {/* y gridlines + labels */}
      {[0, 10, 20, 30, 40].map((v) => {
        const y = padTop + (1 - v / max) * (h - padTop - padBot);
        return (
          <g key={v}>
            <line x1={padL} x2={w} y1={y} y2={y} stroke="#E0E0E0" strokeWidth="0.4" strokeDasharray="2 3" />
            <text x={padL - 4} y={y + 2} fontSize="6" fill="#4A4A4A" fontFamily="JetBrains Mono, monospace" textAnchor="end">${v}M</text>
          </g>
        );
      })}
      {total.map((t, i) => {
        const cx = padL + slot * i + slot / 2;
        const x = cx - barW / 2;
        const totH = (t / max) * (h - padTop - padBot);
        const pastH = (past[i] / max) * (h - padTop - padBot);
        const currH = totH - pastH;
        const yTop = h - padBot - totH;
        return (
          <g key={i}>
            {/* current AR */}
            <rect x={x} y={yTop} width={barW} height={currH} fill="#3266ad" rx="1.5" />
            {/* past due */}
            <rect x={x} y={yTop + currH} width={barW} height={pastH} fill="#C62828" rx="1.5" />
            <text x={cx} y={h - 6} fontSize="6.5" fill="#4A4A4A" fontFamily="JetBrains Mono, monospace" textAnchor="middle">{months[i]}</text>
          </g>
        );
      })}
    </svg>
  );
};

const DashboardMock = () => {
  return (
    <div className="dashboard">
      <div className="dash-bar">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="url">trueally.io / dashboard / wholeco-portfolio</span>
      </div>
      <div className="dash-body dash-body-v2">
        <div className="dash-head">
          <div>
            <h4>WholeCo portfolio — receivables overview</h4>
            <div className="sub">Live · updated 4 min ago · 6 month view</div>
          </div>
          <span className="pill-good">On track</span>
        </div>

        <div className="metric-grid">
          <div className="metric-card">
            <div className="m-label">Total AR</div>
            <div className="m-value">$40.2M</div>
          </div>
          <div className="metric-card">
            <div className="m-label">Past due</div>
            <div className="m-value">$5.8M <span className="m-delta down">↓10%</span></div>
          </div>
          <div className="metric-card">
            <div className="m-label">Current DSO</div>
            <div className="m-value">38 <span className="m-delta down">↓6d</span></div>
          </div>
          <div className="metric-card">
            <div className="m-label">Collection rate</div>
            <div className="m-value">94.2%</div>
          </div>
        </div>

        <div className="chart-row">
          <div className="chart-card">
            <div className="c-label">Days sales outstanding</div>
            <div className="c-big">38<small>d <span className="m-delta down">↓6d MoM</span></small></div>
            <div className="c-svg">
              <MiniLineChart data={[56, 53, 50, 47, 44, 38]} min={30} max={60} color="#C62828" />
            </div>
          </div>
          <div className="chart-card">
            <div className="c-label">Past due % of total AR</div>
            <div className="c-big">14.4<small>% <span className="m-delta down">↓10% MoM</span></small></div>
            <div className="c-svg">
              <MiniLineChart data={[24, 22, 19.5, 17.8, 16, 14.4]} min={10} max={28} color="#1D9E75" />
            </div>
          </div>
        </div>

        <div className="chart-card chart-full">
          <div className="c-head">
            <div className="c-label">Total AR vs past due</div>
            <div className="c-legend">
              <span><i style={{ background: '#3266ad' }}></i>Current AR</span>
              <span><i style={{ background: '#C62828' }}></i>Past due</span>
            </div>
          </div>
          <div className="c-svg c-svg-tall">
            <StackedBarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

window.Hero = Hero;
