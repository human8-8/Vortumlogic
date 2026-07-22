import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";

const RATES = [
  { role: "Software Engineer", seniority: "Junior" },
  { role: "Software Engineer", seniority: "Middle" },
  { role: "Software Engineer", seniority: "Senior" },
  { role: "QA Engineer", seniority: "Middle/Senior" },
  { role: "UI/UX Designer", seniority: "Middle/Senior" },
  { role: "AI/ML Engineer", seniority: "Senior" },
  { role: "Project Manager / BA", seniority: "Middle/Senior" },
];

const INCLUDED = [
  "Full recruitment and technical vetting — you only interview pre-qualified candidates.",
  "Ongoing management and performance oversight on our side.",
  "No payroll, benefits, or HR administration on your end.",
  "Flexible scaling — add or reduce capacity based on your roadmap.",
];

const thStyle: React.CSSProperties = {
  fontFamily: "'Geist Mono',monospace",
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: ".1em",
  color: "var(--muted)",
  fontWeight: 500,
  padding: "16px 24px",
  borderBottom: "1px solid var(--border)",
};

const tdStyle: React.CSSProperties = {
  padding: "16px 24px",
  borderBottom: "1px solid var(--border)",
  color: "var(--muted)",
};

/** Not linked from anywhere on the site — shared manually, per the source design's own note. */
export default function DedicatedTeamsRates() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "clamp(48px,7vw,88px) clamp(24px,5vw,48px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 64 }}>
          <Logo />
          <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: "-.02em" }}>Vortum Logic</span>
        </div>

        <header style={{ borderBottom: "1px solid var(--border)", paddingBottom: 48, marginBottom: 56 }}>
          <span style={{ fontFamily: "'Geist Mono','SF Mono',monospace", fontSize: 13, color: "var(--accent)", display: "block", marginBottom: 16 }}>
            // Engineering Capacity — Rate Card
          </span>
          <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, letterSpacing: "-.02em", lineHeight: 1.15, margin: "0 0 16px" }}>
            Transparent Rates for Dedicated Engineering Talent
          </h1>
          <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.6, margin: 0, maxWidth: 640 }}>
            Senior-vetted talent, billed hourly or monthly, with no long-term lock-in required.
          </p>
        </header>

        <section style={{ marginBottom: 56 }}>
          <div style={{ overflowX: "auto", border: "1px solid var(--border)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560, fontSize: 14 }}>
              <thead>
                <tr style={{ background: "rgba(26,29,36,.5)" }}>
                  <th style={{ ...thStyle, textAlign: "left" }}>Role</th>
                  <th style={{ ...thStyle, textAlign: "left" }}>Seniority</th>
                  <th style={{ ...thStyle, textAlign: "right", whiteSpace: "nowrap" }}>Rate (USD/hour)</th>
                  <th style={{ ...thStyle, textAlign: "right", whiteSpace: "nowrap" }}>Rate (USD/month, full-time)</th>
                </tr>
              </thead>
              <tbody>
                {RATES.map((r, i) => {
                  const last = i === RATES.length - 1;
                  return (
                    <tr key={`${r.role}-${r.seniority}`}>
                      <td style={{ ...tdStyle, borderBottom: last ? "none" : tdStyle.borderBottom, color: "var(--text)", fontWeight: 500 }}>{r.role}</td>
                      <td style={{ ...tdStyle, borderBottom: last ? "none" : tdStyle.borderBottom }}>{r.seniority}</td>
                      <td style={{ ...tdStyle, borderBottom: last ? "none" : tdStyle.borderBottom, textAlign: "right", fontFamily: "'Geist Mono',monospace" }}>$[XX]</td>
                      <td style={{ ...tdStyle, borderBottom: last ? "none" : tdStyle.borderBottom, textAlign: "right", fontFamily: "'Geist Mono',monospace" }}>$[X,XXX]</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: "var(--muted)", fontStyle: "italic", lineHeight: 1.6, margin: "20px 0 0" }}>
            Rates reflect full-time dedicated engagement. Part-time and short-term engagements are scoped individually.
          </p>
        </section>

        <section style={{ marginBottom: 56, borderTop: "1px solid var(--border)", paddingTop: 56 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, margin: "0 0 28px" }}>What's Included</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            {INCLUDED.map((item) => (
              <li key={item} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent)", flexShrink: 0, lineHeight: 1.6 }}>✓</span>
                <span style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ border: "1px solid var(--border)" }}>
          <div style={{ padding: "clamp(28px,4vw,40px)", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: "radial-gradient(ellipse 150% 33% at 50% 0%, rgba(0,230,119,.10) 0%, rgba(0,230,119,0) 100%)",
              }}
            />
            <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 28px", position: "relative" }}>Ready to Scale?</h2>
            <ContactForm
              submitLabel="Request Team Proposal"
              fields={[
                { type: "text", name: "company", placeholder: "Company Name" },
                { type: "email", name: "email", placeholder: "Email" },
                { type: "textarea", name: "message", placeholder: "What capacity do you need? (Optional)" },
              ]}
            />
          </div>
          <div className="vl-calendly-row" style={{ padding: "clamp(28px,4vw,40px)" }}>
            <div>
              <p style={{ fontFamily: "'Geist Mono',monospace", fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".15em", margin: "0 0 8px" }}>
                Prefer a direct conversation?
              </p>
              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6, maxWidth: 512, margin: 0 }}>
                Skip the back-and-forth — book a 15-minute call to discuss your team needs.
              </p>
            </div>
            <a
              href="https://calendly.com/vortumlogic/30min"
              target="_blank"
              rel="noreferrer"
              className="vl-btn-outline"
              style={{ flexShrink: 0, display: "inline-block", fontWeight: 600, padding: "14px 36px", whiteSpace: "nowrap" }}
            >
              Schedule via Calendly
            </a>
          </div>
        </section>

        <p style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, color: "#5b6472", textAlign: "center", margin: "48px 0 0" }}>
          © 2026 Vortum Logic · Confidential rate card — shared on request
        </p>
      </div>
    </div>
  );
}
