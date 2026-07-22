import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import HorizonGlow from "../components/HorizonGlow";
import FrameworkSection from "../components/FrameworkSection";
import ContactSection from "../components/ContactSection";
import AiNetworkVisual from "../components/visuals/AiNetworkVisual";
import CubeVisual from "../components/visuals/CubeVisual";
import TeamsMapVisual from "../components/visuals/TeamsMapVisual";
import InvestmentsMiniMapVisual from "../components/visuals/InvestmentsMiniMapVisual";
import { scrollToId } from "../lib/hooks";

const ShaderHero = lazy(() => import("../components/ShaderHero"));

function IconIntro({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="vl-group" style={{ display: "flex", gap: 24, cursor: "default" }}>
      <div style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,230,118,.10)", border: "1px solid rgba(0,230,118,.20)", flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <h3 className="vl-accent-on-hover" style={{ fontSize: 20, fontWeight: 600, margin: "0 0 8px", color: "var(--text)", transition: "color .2s" }}>
          {title}
        </h3>
        <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{body}</p>
      </div>
    </div>
  );
}

function NumberedIntro({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="vl-group" style={{ display: "flex", gap: 24, cursor: "default" }}>
      <span className="vl-accent-on-hover" style={{ fontFamily: "'Geist Mono',monospace", fontSize: 20, color: "var(--border)", transition: "color .2s" }}>
        {n}
      </span>
      <div>
        <h3 className="vl-accent-on-hover" style={{ fontSize: 20, fontWeight: 600, margin: "0 0 8px", color: "var(--text)", transition: "color .2s" }}>
          {title}
        </h3>
        <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{body}</p>
      </div>
    </div>
  );
}

function TitleIntro({ title, body }: { title: string; body: string }) {
  return (
    <div className="vl-group" style={{ display: "flex", flexDirection: "column", cursor: "default" }}>
      <h3 className="vl-accent-on-hover" style={{ fontSize: 20, fontWeight: 600, margin: "0 0 8px", color: "var(--text)", transition: "color .2s" }}>
        {title}
      </h3>
      <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}

export default function Landing() {
  return (
    <div style={{ position: "relative", background: "var(--bg)", overflow: "hidden", minHeight: "100vh" }}>
      <Navbar onHome />
      <main>
        {/* ============ HERO ============ */}
        <section style={{ position: "relative", minHeight: "100dvh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 80, paddingBottom: 40, overflow: "hidden", background: "var(--bg)" }}>
          <HorizonGlow direction="up" variant="full" />
          <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
            <Suspense fallback={null}>
              <ShaderHero />
            </Suspense>
          </div>

          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)", position: "relative", zIndex: 30, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
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
              // Intelligence Infrastructure · Est. 2019
            </span>

            <h1 className="vl-fadeup" style={{ animationDelay: ".3s", margin: "32px 0 0", fontSize: "clamp(40px,7vw,80px)", fontWeight: 700, letterSpacing: "-.02em", lineHeight: 1.1, maxWidth: 1024 }}>
              Intelligent Automation &amp; Engineering Partner
            </h1>

            <p className="vl-fadeup" style={{ animationDelay: ".5s", margin: "24px 0 0", fontSize: "clamp(18px,2vw,20px)", color: "var(--muted)", maxWidth: 768, lineHeight: 1.6 }}>
              We build autonomous AI agents that handle your high-value workflows, and provide elite engineering teams to scale your software infrastructure.
            </p>

            <div className="vl-fadeup" style={{ animationDelay: ".7s", marginTop: 40, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <button onClick={() => scrollToId("contact")} className="vl-btn-primary" style={{ height: 48, padding: "0 32px", fontFamily: "inherit", fontSize: 15, minWidth: 220, cursor: "pointer" }}>
                Book a Call
              </button>
              <button onClick={() => scrollToId("services")} className="vl-btn-outline" style={{ height: 48, padding: "0 32px", fontFamily: "inherit", fontWeight: 600, fontSize: 15, minWidth: 220 }}>
                Explore Capabilities
              </button>
            </div>

            <div className="vl-fadeup" style={{ animationDelay: ".9s", marginTop: 40, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "12px 24px" }}>
              <span style={{ fontFamily: "'Geist Mono','SF Mono',monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: ".15em", color: "var(--muted)" }}>// Trusted in</span>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "12px 24px" }}>
                {[
                  ["us", "United States"],
                  ["sg", "Singapore"],
                  ["ae", "UAE"],
                  ["gb", "United Kingdom"],
                ].map(([code, name]) => (
                  <span key={code} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--muted)" }}>
                    <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, textTransform: "uppercase", color: "rgba(138,148,166,.5)" }}>{code}</span>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ 01 AI SOLUTIONS ============ */}
        <section id="services" style={{ padding: "96px 0", borderTop: "1px solid var(--border)", background: "var(--bg)", position: "relative", zIndex: 10 }}>
          <HorizonGlow direction="down" variant="ambient" height={360} />
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)" }}>
            <Reveal className="vl-grid2">
              <div className="vl-col-text vl-col-bordered">
                <span style={{ fontFamily: "'Geist Mono','SF Mono',monospace", fontSize: 14, color: "var(--accent)", marginBottom: 16, display: "block" }}>01 / AI SOLUTIONS</span>
                <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, margin: "0 0 24px", lineHeight: 1.15 }}>
                  Autonomous AI Swarms:
                  <br />
                  Your Workforce, Optimized
                </h2>
                <p style={{ fontSize: 18, color: "var(--muted)", margin: "0 0 48px", lineHeight: 1.6 }}>
                  We don't just automate tasks; we engineer autonomous AI agents designed to handle end-to-end workflows. By deploying specialized Swarms, we eliminate process bottlenecks, reduce operational latency, and allow your core team to focus on high-impact strategy while our agents handle the scale.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                  <IconIntro
                    icon={
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <rect x="9" y="9" width="6" height="6" />
                        <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
                      </svg>
                    }
                    title="Precision Engineering"
                    body="We build agentic systems tailored to your unique data architecture, with verification layers and human-in-the-loop checkpoints built into every critical decision point."
                  />
                  <IconIntro
                    icon={
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    }
                    title="Autonomous Scalability"
                    body="Our swarms operate 24/7 without fatigue. As your business grows, your AI capacity scales instantly, ensuring consistent service quality."
                  />
                  <IconIntro
                    icon={
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="6" y1="3" x2="6" y2="15" />
                        <circle cx="18" cy="6" r="3" />
                        <circle cx="6" cy="18" r="3" />
                        <path d="M18 9a9 9 0 0 1-9 9" />
                      </svg>
                    }
                    title="Seamless Integration"
                    body="We integrate directly into your existing stack—no need to overhaul your current infrastructure. We connect to your systems, act on your data, and deliver measurable ROI from day one."
                  />
                </div>

                <div style={{ marginTop: 48 }}>
                  <Link to="/ai-solutions" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Geist Mono','SF Mono',monospace", fontSize: 15, fontWeight: 500 }}>
                    Explore AI Solutions in depth →
                  </Link>
                </div>
              </div>
              <div className="vl-col-visual">
                <AiNetworkVisual />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ 02 CUSTOM DEVELOPMENT ============ */}
        <section id="development" style={{ padding: "96px 0", borderTop: "1px solid var(--border)", background: "var(--bg)", position: "relative", zIndex: 10 }}>
          <HorizonGlow direction="down" variant="ambient" height={360} />
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)" }}>
            <Reveal className="vl-grid2">
              <div className="vl-col-visual vl-order-first">
                <CubeVisual />
              </div>
              <div className="vl-col-text vl-col-padded vl-order-second">
                <span style={{ fontFamily: "'Geist Mono','SF Mono',monospace", fontSize: 14, color: "var(--accent)", marginBottom: 16, display: "block" }}>02 / CUSTOM DEVELOPMENT</span>
                <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, margin: "0 0 24px", lineHeight: 1.15 }}>
                  Engineering Excellence.
                  <br />
                  Built for Business Scale.
                </h2>
                <p style={{ fontSize: 18, color: "var(--muted)", margin: "0 0 48px", lineHeight: 1.6 }}>
                  We design and deliver robust digital infrastructure that aligns complex software architecture with your long-term commercial objectives.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                  <NumberedIntro n="01" title="Architectural Integrity" body="We don't just build software; we engineer sustainable digital ecosystems. Every system is architected from the ground up to prevent technical debt, minimize operational friction, and guarantee maximum uptime under high enterprise loads." />
                  <NumberedIntro n="02" title="Product Lifecycle Management" body="From initial strategic mapping to full-scale deployment, we own the entire execution process. Our cross-functional engineering units operate with complete autonomy, converting your high-level business goals into secure, production-ready systems." />
                  <NumberedIntro n="03" title="Risk Mitigation" body="Predictability is embedded into our development DNA. We enforce rigorous quality standards and institutional knowledge-sharing, ensuring your deadlines are met without compromise." />
                </div>
                <Link to="/custom-development" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 48, fontFamily: "'Geist Mono','SF Mono',monospace", fontSize: 15, fontWeight: 500 }}>
                  Explore Custom Development in depth →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ 03 DEDICATED TEAMS ============ */}
        <section id="teams" style={{ padding: "96px 0", borderTop: "1px solid var(--border)", background: "var(--bg)", position: "relative", zIndex: 10 }}>
          <HorizonGlow direction="down" variant="ambient" height={360} />
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)" }}>
            <Reveal className="vl-grid2">
              <div className="vl-col-text vl-col-bordered vl-order-first">
                <span style={{ fontFamily: "'Geist Mono','SF Mono',monospace", fontSize: 14, color: "var(--accent)", marginBottom: 16, display: "block" }}>03 / DEDICATED TEAMS</span>
                <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, margin: "0 0 24px", lineHeight: 1.15 }}>
                  Elite Dedicated Teams.
                  <br />
                  Accelerating Your Product Pipeline.
                </h2>
                <p style={{ fontSize: 18, color: "var(--muted)", margin: "0 0 48px", lineHeight: 1.6 }}>
                  Scale your engineering capacity instantly. We provide high-performing, deeply vetted technical squads that integrate seamlessly into your operational ecosystem and timezone.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                  <TitleIntro title="The Top 1% Talent Hub" body="Our recruitment engine bypasses the traditional hiring grind. Based in Eastern Europe's rapidly growing tech ecosystem, we secure and deploy elite engineering talent with flawless English proficiency, exceptional technical alignment, and zero operational overhead for your HR." />
                  <TitleIntro title="Instant Frictionless Integration" body="We don't just send contract individuals; we embed high-velocity squads into your existing workflows. Our teams adapt to your internal engineering culture, tools, and communication standards from day one, minimizing management friction." />
                  <TitleIntro title="Predictable Capacity Control" body="Mitigate the volatility of tech scaling. With flexible engagement models, you retain complete strategic control over your engineering bandwidth, enabling your enterprise to ramp capacity up or down as market conditions demand." />
                </div>
                <Link to="/dedicated-teams" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 48, fontFamily: "'Geist Mono','SF Mono',monospace", fontSize: 15, fontWeight: 500 }}>
                  Explore Dedicated Teams in depth →
                </Link>
              </div>
              <div className="vl-col-visual vl-order-second">
                <TeamsMapVisual />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ 04 INVESTMENTS ============ */}
        <section id="investments" style={{ padding: "96px 0", borderTop: "1px solid var(--border)", background: "var(--bg)", position: "relative", zIndex: 10 }}>
          <HorizonGlow direction="down" variant="ambient" height={360} />
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)" }}>
            <Reveal className="vl-grid2">
              <div className="vl-col-visual vl-order-first">
                <InvestmentsMiniMapVisual />
              </div>
              <div className="vl-col-text vl-col-padded vl-order-second">
                <span style={{ fontFamily: "'Geist Mono','SF Mono',monospace", fontSize: 14, color: "var(--accent)", marginBottom: 16, display: "block" }}>04 / INVESTMENTS</span>
                <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, margin: "0 0 24px", lineHeight: 1.15 }}>
                  The Numbers Already Make the Case for Moldova
                </h2>
                <p style={{ fontSize: 18, color: "var(--muted)", margin: "0 0 48px", lineHeight: 1.6 }}>
                  Before you take our word for it, look at what the country has already built: a tax regime, an infrastructure, and a workforce engineered for exactly this kind of expansion.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 40, marginBottom: 48 }}>
                  <TitleIntro title="7% All-Inclusive Tax, Guaranteed Through 2035" body="One flat rate replaces corporate, payroll, and social taxes — locked in by state law, not policy that can shift next year." />
                  <TitleIntro title="Elite, Connected Infrastructure" body="3rd in the world for gigabit internet coverage, with over 90% of the population online at gigabit speed." />
                  <TitleIntro title="A Workforce Built for Scale" body="The ICT sector drives 7% of national GDP — and by share of tech workers, Moldova ranks 2nd in Europe, right behind Estonia." />
                </div>
                <Link to="/investments" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Geist Mono','SF Mono',monospace", fontSize: 15, fontWeight: 500 }}>
                  See the full investment case →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ 05 FRAMEWORK ============ */}
        <FrameworkSection
          eyebrow="05 / FRAMEWORK"
          heading={
            <>
              The Vortum Framework.
              <br />
              From Architecture to Deployment.
            </>
          }
          items={[
            { title: "Strategic Alignment & Discovery", body: "We audit your current operational bottlenecks or project requirements. Our engineers map out a precise technical blueprint, ensuring perfect alignment with your commercial objectives before a single line of code is written." },
            { title: "Autonomous Execution & Integration", body: "Whether deploying an AI Swarm or spinning up a dedicated engineering team, we embed our autonomous infrastructure directly into your workspace. We operate under rigorous quality and security standards with zero management overhead from your side." },
            { title: "Continuous Optimization & Scale", body: "Post-deployment, we focus on performance engineering and system reliability. We refine algorithms, prevent technical debt, and ensure your new digital infrastructure seamlessly scales alongside your business growth." },
          ]}
        />

        {/* ============ 06 SYSTEM RESILIENCE ============ */}
        <section id="resilience" style={{ padding: "96px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg)", position: "relative", zIndex: 10 }}>
          <HorizonGlow direction="down" variant="ambient" height={360} />
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)" }}>
            <Reveal>
              <span style={{ fontFamily: "'Geist Mono','SF Mono',monospace", fontSize: 14, color: "var(--accent)", marginBottom: 16, display: "block" }}>06 / SYSTEM RESILIENCE</span>
              <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, margin: "0 0 64px", lineHeight: 1.15 }}>
                System Resilience &amp; Data Integrity.
                <br />
                Uncompromising Standards.
              </h2>
              <div className="vl-cols3">
                <div className="vl-res-card" style={{ padding: 32, border: "1px solid var(--border)", background: "var(--bg)" }}>
                  <div className="vl-iconbox" style={{ width: 48, height: 48, marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)" }}>
                    <svg className="vl-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 12px" }}>IP Protection</h3>
                  <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>All intellectual property and source code remain 100% yours. We enforce strict internal security protocols and comprehensive NDAs to guarantee your proprietary logic is fully protected.</p>
                </div>
                <div className="vl-res-card" style={{ padding: 32, border: "1px solid var(--border)", background: "var(--bg)" }}>
                  <div className="vl-iconbox" style={{ width: 48, height: 48, marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)" }}>
                    <svg className="vl-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 12px" }}>Data Privacy</h3>
                  <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>Our AI solutions and custom infrastructures are engineered with a privacy-first approach. Your corporate data is isolated, never used for public model training, and fully compliant with global security standards.</p>
                </div>
                <div className="vl-res-card" style={{ padding: 32, border: "1px solid var(--border)", background: "var(--bg)" }}>
                  <div className="vl-iconbox" style={{ width: 48, height: 48, marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)" }}>
                    <svg className="vl-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="8" rx="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" />
                      <line x1="6" y1="6" x2="6.01" y2="6" />
                      <line x1="6" y1="18" x2="6.01" y2="18" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 12px" }}>Operational Resilience</h3>
                  <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>We build with high load and fault tolerance in mind. Your systems are designed to minimize latency, eliminate single points of failure, and maintain maximum uptime.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <ContactSection
          heading="Architect Your Next Scaling Phase."
          body="Whether you need an autonomous AI workforce, a resilient software ecosystem, or an elite dedicated team—let's map out the technical blueprint for your business."
          submitLabel="Request Technical Audit"
          columns={2}
          fields={[
            { type: "email", name: "email", placeholder: "Work Email", full: false },
            { type: "text", name: "company", placeholder: "Company Name", full: false },
            {
              type: "select",
              name: "service",
              placeholder: "Select Service",
              full: true,
              options: [
                { value: "ai-swarms", label: "AI Swarms" },
                { value: "custom-dev", label: "Custom Development" },
                { value: "staff-aug", label: "Staff Augmentation" },
              ],
            },
            { type: "textarea", name: "message", placeholder: "Message (Optional)", full: true },
          ]}
          calendlyHeading="Skip the email back-and-forth."
          calendlyBody="Book a 15-minute technical audit directly with our engineering architects."
        />
      </main>
      <Footer onHome />
    </div>
  );
}
