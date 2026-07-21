import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import HorizonGlow from "../components/HorizonGlow";
import MoldovaHeroMap from "../components/visuals/MoldovaHeroMap";
import { Eyebrow, SectionH2 } from "../components/niche/SectionHeading";
import FaqAccordion from "../components/FaqAccordion";
import ContactSection from "../components/ContactSection";
import { scrollToId } from "../lib/hooks";

const WHY_MOLDOVA = [
  { title: "Strategic Timezone & Geography", body: "Positioned perfectly in Eastern Europe, Moldova offers a seamless timezone overlap with European HQs and a highly productive morning-to-midday overlap with the US East Coast (EST)." },
  { title: "Untapped Elite Talent", body: "A strong heritage in STEM ensures access to top-tier software engineers, AI researchers, and data scientists with exceptional English proficiency." },
  { title: "Western Corporate Culture", body: "Culturally aligned with Western business standards, our tech talent integrates effortlessly into Agile and fast-paced corporate environments." },
];

const WHY_VORTUM = [
  { title: "Zero Operational Friction", body: "We navigate the local legal framework, tax reporting, and onboarding. You focus on product development and market scaling." },
  { title: "Top 1% Talent Acquisition", body: "Our vetting process allows us to assemble senior-level squads (Devs, QA, UI/UX, AI Engineers) in weeks, not months." },
  { title: "Transparent Management", body: "We operate with financial clarity, Western-style reporting, and strict NDA/IP protection protocols." },
];

const FAQ_ITEMS = [
  {
    q: "Is it safe to invest in Moldova?",
    a: "Moldova is an EU Candidate Country actively harmonizing its legislation with European standards, with a tech sector recognized internationally — MITP was recognized by the ITU as a global best practice in IT ecosystem development. The regime offers a state-guaranteed, statute-backed tax framework through 2035.",
  },
  {
    q: "Can foreign citizens own 100% of an IT company in Moldova?",
    a: "Yes. There are no restrictions on foreign ownership. A foreign individual or corporation can be the sole founder of a Moldovan LLC and an MITP resident.",
  },
  {
    q: "How long does it take to register a company in the IT Park?",
    a: "The MITP registration process is designed to be fast once the legal entity is established.",
  },
];

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,230,118,.10)", border: "1px solid rgba(0,230,118,.20)", marginBottom: 20 }}>
      {children}
    </div>
  );
}

export default function Investments() {
  return (
    <div style={{ position: "relative", background: "var(--bg)", overflow: "hidden", minHeight: "100vh" }}>
      <Navbar />
      <main>
        {/* ============ HERO ============ */}
        <section style={{ position: "relative", padding: "160px 0 110px", overflow: "hidden", background: "var(--bg)" }}>
          <HorizonGlow direction="up" variant="full" />
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)", position: "relative", zIndex: 30 }}>
            <div className="vl-hero-grid">
              <div>
                <span
                  className="vl-fadeup"
                  style={{
                    animationDelay: ".2s",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "'Geist Mono','SF Mono',monospace",
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: ".15em",
                    color: "var(--muted)",
                    border: "1px solid var(--border)",
                    padding: "8px 16px",
                    background: "rgba(13,14,18,.60)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <span style={{ position: "relative", display: "flex", height: 8, width: 8, flexShrink: 0 }}>
                    <span style={{ animation: "vlPing 1s cubic-bezier(0,0,.2,1) infinite", position: "absolute", display: "inline-flex", height: "100%", width: "100%", borderRadius: 9999, background: "var(--accent)", opacity: 0.75 }} />
                    <span style={{ position: "relative", display: "inline-flex", borderRadius: 9999, height: 8, width: 8, background: "var(--accent)" }} />
                  </span>
                  // Strategic IT Investments · Moldova · Vortum Logic
                </span>
                <h1 className="vl-fadeup" style={{ animationDelay: ".3s", margin: "32px 0 0", fontSize: "clamp(36px,4.8vw,60px)", fontWeight: 700, letterSpacing: "-.02em", lineHeight: 1.1 }}>
                  Strategic IT Investments in Eastern Europe: The Moldova Advantage
                </h1>
                <p className="vl-fadeup" style={{ animationDelay: ".5s", margin: "24px 0 0", fontSize: "clamp(17px,1.6vw,19px)", color: "var(--muted)", maxWidth: 600, lineHeight: 1.6 }}>
                  Maximize your ROI with Europe's most favorable IT tax regime (7% flat rate), an elite engineering talent pool, and Vortum Logic as your trusted local partner.
                </p>
                <div className="vl-fadeup" style={{ animationDelay: ".7s", marginTop: 40, display: "flex", flexWrap: "wrap", gap: 16 }}>
                  <button onClick={() => scrollToId("contact")} className="vl-btn-primary" style={{ height: 48, padding: "0 32px", fontFamily: "inherit", fontSize: 15, cursor: "pointer" }}>
                    Book a Strategic Consultation
                  </button>
                  <button
                    disabled
                    title="Coming soon"
                    style={{ height: 48, padding: "0 28px", fontFamily: "inherit", fontWeight: 600, fontSize: 15, background: "transparent", border: "1px solid var(--border)", color: "#5b6472", cursor: "not-allowed", display: "inline-flex", alignItems: "center", gap: 10 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download Investment Deck
                    <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 9, textTransform: "uppercase", letterSpacing: ".1em", border: "1px solid var(--border)", padding: "2px 6px", color: "#5b6472" }}>Soon</span>
                  </button>
                </div>
              </div>

              <div className="vl-fadeup" style={{ animationDelay: ".5s", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 420 }}>
                <MoldovaHeroMap />
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHY MOLDOVA ============ */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)", background: "var(--bg)", position: "relative", zIndex: 10 }}>
          <HorizonGlow direction="down" variant="ambient" height={360} />
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)", position: "relative" }}>
            <Reveal style={{ maxWidth: 860, marginBottom: 56 }}>
              <Eyebrow>01 / WHY MOLDOVA</Eyebrow>
              <SectionH2 tight>A Tech Hub Engineered for Global Growth</SectionH2>
              <p style={{ fontSize: 18, color: "var(--muted)", margin: "24px 0 0", lineHeight: 1.6 }}>
                Eastern Europe has long been the backbone of global tech development. Today, Moldova stands out as the ultimate strategic destination for US and EU businesses looking to scale efficiently without the friction of overheated markets.
              </p>
            </Reveal>
            <Reveal className="vl-cols3">
              {WHY_MOLDOVA.map((item) => (
                <div key={item.title} style={{ padding: 32, border: "1px solid var(--border)", background: "var(--bg)" }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 12px", color: "var(--text)" }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{item.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ MITP ============ */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)", background: "var(--bg)", position: "relative", zIndex: 10 }}>
          <HorizonGlow direction="down" variant="ambient" height={360} />
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)", position: "relative" }}>
            <Reveal style={{ maxWidth: 860, marginBottom: 56 }}>
              <Eyebrow>02 / MOLDOVA IT PARK</Eyebrow>
              <SectionH2 tight>The Ultimate Financial Sandbox: Moldova IT Park (MITP)</SectionH2>
              <p style={{ fontSize: 18, color: "var(--muted)", margin: "24px 0 0", lineHeight: 1.6 }}>
                The Moldova Innovation Technology Park is a government-backed initiative designed to attract global IT investments, offering one of the most competitive tax and legal frameworks in Europe.
              </p>
            </Reveal>
            <Reveal className="vl-mitp-grid">
              <div style={{ padding: 32, border: "1px solid var(--border)", background: "var(--bg)" }}>
                <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 34, fontWeight: 500, color: "var(--accent)", marginBottom: 20, filter: "drop-shadow(0 0 14px rgba(0,230,118,.35))" }}>7%</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 12px", color: "var(--text)" }}>Single Flat Tax</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                  A single 7% tax on your company's sales revenue covers corporate income tax, personal income tax, social security, and medical insurance — replacing multiple separate tax obligations.
                </p>
              </div>
              <div style={{ padding: 32, border: "1px solid var(--border)", background: "var(--bg)" }}>
                <IconBox>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                  </svg>
                </IconBox>
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 12px", color: "var(--text)" }}>Gross Salary = Net Salary</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>Zero payroll taxes. Your engineers receive their full gross salary, helping you attract top-tier talent while optimizing payroll budget.</p>
              </div>
              <div style={{ padding: 32, border: "1px solid var(--border)", background: "var(--bg)" }}>
                <IconBox>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </IconBox>
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 12px", color: "var(--text)" }}>State Guarantee Through 2035</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                  The 7% tax regime is guaranteed by the Moldovan state through December 31, 2035 — confirmed by law (77/2016) and reaffirmed by parliament's 2025 extension of the MITP framework.
                </p>
              </div>
              <div style={{ padding: 32, border: "1px solid var(--border)", background: "var(--bg)" }}>
                <IconBox>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  </svg>
                </IconBox>
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 12px", color: "var(--text)" }}>100% Virtual Park</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>MITP is a fully virtual structure — no legal requirement to maintain physical office space.</p>
              </div>
              <div style={{ padding: 32, border: "1px solid var(--border)", background: "var(--bg)" }}>
                <IconBox>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M8 17h8" />
                  </svg>
                </IconBox>
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 12px", color: "var(--text)" }}>Streamlined IT Visa</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>A simplified, fast-track process for foreign tech management and engineers to obtain 2–4 year work residencies.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ INVESTMENT MODELS ============ */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)", background: "var(--bg)", position: "relative", zIndex: 10 }}>
          <HorizonGlow direction="down" variant="ambient" height={360} />
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)", position: "relative" }}>
            <Reveal style={{ maxWidth: 860, marginBottom: 56 }}>
              <Eyebrow>03 / PARTNERSHIP MODELS</Eyebrow>
              <SectionH2 tight>Two Strategic Paths to Enter the Market</SectionH2>
              <p style={{ fontSize: 18, color: "var(--muted)", margin: "24px 0 0", lineHeight: 1.6 }}>
                Whether you want to build your own corporate infrastructure or leverage an existing one, Vortum Logic provides the operational bridge.
              </p>
            </Reveal>
            <Reveal className="vl-cols2">
              <div style={{ padding: 40, border: "1px solid var(--border)", background: "var(--bg)" }}>
                <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 13, color: "var(--accent)", display: "block", marginBottom: 16 }}>PATH A</span>
                <h3 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 16px", color: "var(--text)" }}>Turnkey R&amp;D Center Setup</h3>
                <p style={{ fontSize: 12, fontFamily: "'Geist Mono',monospace", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--muted)", margin: "0 0 20px" }}>Your Own Company</p>
                <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.7 }}>
                  Ideal for enterprises wanting full ownership of a Moldovan subsidiary. Vortum Logic acts as your local partner, managing end-to-end incorporation, MITP residency registration, legal compliance, and HR setup in partnership with our vetted local legal and accounting network. You own the entity; we remove the operational headache.
                </p>
              </div>
              <div style={{ padding: 40, border: "1px solid var(--border)", background: "var(--bg)" }}>
                <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 13, color: "var(--accent)", display: "block", marginBottom: 16 }}>PATH B</span>
                <h3 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 16px", color: "var(--text)" }}>Strategic Partnership &amp; Dedicated Teams</h3>
                <p style={{ fontSize: 12, fontFamily: "'Geist Mono',monospace", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--muted)", margin: "0 0 20px" }}>Invest in Vortum Logic</p>
                <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.7 }}>
                  Bypass the bureaucracy entirely. Invest directly into dedicated infrastructure at Vortum Logic. We assemble, host, and manage elite Dedicated Engineering Teams or autonomous AI Swarms exclusively for your pipeline, with custom engagement models tailored to your investment goals and a transparent B2B contract.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ WHY VORTUM ============ */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)", background: "var(--bg)", position: "relative", zIndex: 10 }}>
          <HorizonGlow direction="down" variant="ambient" height={360} />
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)", position: "relative" }}>
            <Reveal style={{ maxWidth: 860, marginBottom: 56 }}>
              <Eyebrow>04 / YOUR GATEWAY</Eyebrow>
              <SectionH2 tight>Your Local Hub with Global Standards</SectionH2>
              <p style={{ fontSize: 18, color: "var(--muted)", margin: "24px 0 0", lineHeight: 1.6 }}>Entering a new jurisdiction requires a reliable partner on the ground. Here's why Vortum Logic fills that role:</p>
            </Reveal>
            <Reveal className="vl-cols3">
              {WHY_VORTUM.map((item) => (
                <div key={item.title} style={{ padding: 32, border: "1px solid var(--border)", background: "var(--bg)" }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 12px", color: "var(--text)" }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{item.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)", background: "var(--bg)", position: "relative", zIndex: 10 }}>
          <HorizonGlow direction="down" variant="ambient" height={360} />
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)", position: "relative" }}>
            <Reveal style={{ maxWidth: 860 }}>
              <Eyebrow>05 / FAQ</Eyebrow>
              <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, margin: "0 0 48px", lineHeight: 1.15 }}>Frequently Asked Questions for Investors</h2>
              <FaqAccordion items={FAQ_ITEMS} defaultOpen={0} />
            </Reveal>
          </div>
        </section>

        <ContactSection
          eyebrow="06 / GET STARTED"
          heading="Ready to Architect Your East-European Hub?"
          body="Let's discuss how the Moldova IT Park and Vortum Logic can scale your engineering capacity today."
          formHeading="Book a Strategic Consultation"
          submitLabel="Book a Strategic Consultation"
          fields={[
            { type: "text", name: "name", placeholder: "Name / Company" },
            { type: "email", name: "email", placeholder: "Corporate Email" },
            { type: "textarea", name: "message", placeholder: "Briefly describe your expansion or talent needs..." },
          ]}
          calendlyHeading="Schedule a Strategic Call with the Founder."
          calendlyBody="Book a strategic call directly with our founder to map out your East-European hub."
        />
      </main>
      <Footer />
    </div>
  );
}
