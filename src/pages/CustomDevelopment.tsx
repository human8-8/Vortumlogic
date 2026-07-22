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
    title: "Architectural Integrity",
    body: "We don't just build software; we engineer sustainable digital ecosystems. Every system is architected from the ground up to prevent technical debt, minimize operational friction, and guarantee maximum uptime under high enterprise loads.",
  },
  {
    title: "Product Lifecycle Management",
    body: "From initial strategic mapping to full-scale deployment, we own the entire execution process. Our cross-functional engineering units operate with complete autonomy, converting your high-level business goals into secure, production-ready systems.",
  },
  {
    title: "Risk Mitigation",
    body: "Predictability is embedded into our development DNA. We enforce rigorous quality standards and institutional knowledge-sharing, ensuring your deadlines are met without compromise.",
  },
];

export default function CustomDevelopment() {
  return (
    <div style={{ position: "relative", background: "var(--bg)", overflow: "hidden", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <NicheHero
          eyebrow="Custom Development"
          title="Engineering Excellence. Built for Business Scale."
          body="We design and deliver robust digital infrastructure that aligns complex software architecture with your long-term commercial objectives."
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

        <FrameworkSection
          eyebrow="02 / HOW WE WORK"
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
          eyebrow="03 / GET STARTED"
          heading="Architect Your Software Roadmap"
          body="Not sure where to start? A 15-minute technical audit will map your architecture, timeline, and the fastest path to production-ready systems."
          formHeading="Request a Technical Audit"
          submitLabel="Request Technical Audit"
          fields={[
            { type: "text", name: "company", placeholder: "Company Name" },
            { type: "text", name: "role", placeholder: "Role" },
            { type: "email", name: "email", placeholder: "Email" },
            { type: "textarea", name: "message", placeholder: "What are you building? (Optional)" },
          ]}
          calendlyHeading="Skip the email back-and-forth."
          calendlyBody="Book a 15-minute technical audit directly with our engineering architects."
        />
      </main>
      <Footer />
    </div>
  );
}
