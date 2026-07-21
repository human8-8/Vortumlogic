import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NicheHero from "../components/niche/NicheHero";
import { Eyebrow, SectionH2 } from "../components/niche/SectionHeading";
import FrameworkSection from "../components/FrameworkSection";
import ContactSection from "../components/ContactSection";
import Reveal from "../components/Reveal";
import HorizonGlow from "../components/HorizonGlow";

const CAPABILITIES = [
  {
    title: "Precision Engineering",
    body: "We build agentic systems tailored to your unique data architecture, with verification layers and human-in-the-loop checkpoints built into every critical decision point.",
  },
  {
    title: "Autonomous Scalability",
    body: "Our swarms operate 24/7 without fatigue. As your business grows, your AI capacity scales instantly, ensuring consistent service quality.",
  },
  {
    title: "Seamless Integration",
    body: "We integrate directly into your existing stack—no need to overhaul your current infrastructure. We connect to your systems, act on your data, and deliver measurable ROI from day one.",
  },
];

const INDUSTRIES: { label: string; to?: string }[] = [
  { label: "Real Estate Brokerages", to: "/real-estate" },
  { label: "Business Aviation & VIP Travel Brokers", to: "/business-aviation" },
  { label: "Legal Services" },
  { label: "Insurance" },
  { label: "Private Wealth & Family Offices" },
  { label: "Logistics & Freight" },
  { label: "Hospitality & Luxury Travel" },
  { label: "Healthcare Administration" },
  { label: "Financial Services" },
  { label: "Manufacturing & Supply Chain" },
  { label: "Retail & E-commerce" },
  { label: "Professional Services" },
];

export default function AiSolutions() {
  return (
    <div style={{ position: "relative", background: "var(--bg)", overflow: "hidden", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <NicheHero
          eyebrow="AI Solutions"
          title="Autonomous AI Swarms: Your Workforce, Optimized"
          body="We don't just automate tasks; we engineer autonomous AI agents designed to handle end-to-end workflows. By deploying specialized Swarms, we eliminate process bottlenecks, reduce operational latency, and allow your core team to focus on high-impact strategy while our agents handle the scale."
        />

        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)", background: "var(--bg)", position: "relative", zIndex: 10 }}>
          <HorizonGlow direction="down" variant="ambient" height={360} />
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)", position: "relative" }}>
            <Reveal style={{ marginBottom: 56, maxWidth: 860 }}>
              <Eyebrow>01 / CORE CAPABILITIES</Eyebrow>
              <SectionH2 tight>Core Capabilities</SectionH2>
            </Reveal>
            <Reveal className="vl-cap-grid">
              {CAPABILITIES.map((cap, i) => (
                <div key={cap.title} style={{ padding: 32, border: "1px solid var(--border)", background: "var(--bg)" }}>
                  <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 14, color: "var(--accent)", display: "block", marginBottom: 20 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 12px", color: "var(--text)" }}>{cap.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{cap.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)", background: "var(--bg)", position: "relative", zIndex: 10 }}>
          <HorizonGlow direction="down" variant="ambient" height={360} />
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)", position: "relative" }}>
            <Reveal style={{ marginBottom: 56, maxWidth: 860 }}>
              <Eyebrow>02 / WHERE WE DEPLOY</Eyebrow>
              <SectionH2>Where We Deploy</SectionH2>
              <p style={{ fontSize: 18, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                We build AI Swarms for high-velocity, high-value industries where speed and precision directly translate into revenue.
              </p>
            </Reveal>
            <Reveal className="vl-industry-grid">
              {INDUSTRIES.map((ind) =>
                ind.to ? (
                  <Link
                    key={ind.label}
                    to={ind.to}
                    className="vl-industry"
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "20px 24px", border: "1px solid var(--border)", background: "var(--bg)", fontSize: 16 }}
                  >
                    <span>{ind.label}</span>
                    <span className="vl-arrow" style={{ color: "var(--accent)", flexShrink: 0 }}>→</span>
                  </Link>
                ) : (
                  <div
                    key={ind.label}
                    style={{ display: "flex", alignItems: "center", padding: "20px 24px", border: "1px solid var(--border)", background: "var(--bg)", color: "var(--muted)", fontSize: 16 }}
                  >
                    <span>{ind.label}</span>
                  </div>
                )
              )}
            </Reveal>
          </div>
        </section>

        <FrameworkSection
          eyebrow="03 / HOW WE WORK"
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

        <ContactSection
          eyebrow="04 / GET STARTED"
          heading="Architect Your AI Workforce"
          body="Not sure which workflow to start with? A 15-minute technical audit will show you exactly where an AI Swarm fits into your operation."
          formHeading="Request a Technical Audit"
          submitLabel="Request Technical Audit"
          fields={[
            { type: "text", name: "company", placeholder: "Company Name" },
            { type: "text", name: "role", placeholder: "Role" },
            { type: "email", name: "email", placeholder: "Email" },
            { type: "textarea", name: "message", placeholder: "What would you like to automate? (Optional)" },
          ]}
          calendlyHeading="Skip the email back-and-forth."
          calendlyBody="Book a 15-minute technical audit directly with our engineering architects."
        />
      </main>
      <Footer />
    </div>
  );
}
