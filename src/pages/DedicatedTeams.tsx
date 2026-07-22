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
    title: "The Top 1% Talent Hub",
    body: "A recruiting engine that bypasses traditional hiring — built on Eastern Europe's growing tech ecosystem. Flawless English, precise technical fit, zero HR overhead for the client.",
  },
  {
    title: "Instant Frictionless Integration",
    body: "Not one-off contractors, but high-velocity squads that embed into your existing workflows, culture, tools, and communication standards from day one.",
  },
  {
    title: "Predictable Capacity Control",
    body: "Flexible engagement models reduce scaling volatility — you retain full strategic control over engineering capacity and can scale it up or down with market conditions.",
  },
];

export default function DedicatedTeams() {
  return (
    <div style={{ position: "relative", background: "var(--bg)", overflow: "hidden", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <NicheHero
          eyebrow="Elite Dedicated Teams"
          title="Scale Your Engineering Capacity Instantly"
          body="We provide high-performing, deeply vetted technical squads that integrate seamlessly into your operational ecosystem and timezone."
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
            <Reveal style={{ maxWidth: 860 }}>
              <Eyebrow>02 / HOW ENGAGEMENT WORKS</Eyebrow>
              <SectionH2>Your Team, Your Timezone, Your Standards</SectionH2>
              <p style={{ fontSize: 18, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                Whether you need to fill a single senior role or stand up a full cross-functional squad, engagement is structured around your workflow — not ours. Teams report into your existing tools and processes, with Vortum Logic handling recruitment, vetting, and ongoing management on the backend.
              </p>
              <p style={{ fontSize: 13, fontFamily: "'Geist Mono','SF Mono',monospace", color: "var(--muted)", margin: "40px 0 0", lineHeight: 1.6 }}>
                // The full role-based rate card is available on request.
              </p>
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
          heading="Scale Your Team"
          body="A 15-minute technical audit — tell us what capacity you need, and we'll show you exactly how fast we can staff it."
          formHeading="Request a Technical Audit"
          submitLabel="Request Technical Audit"
          fields={[
            { type: "text", name: "company", placeholder: "Company Name" },
            { type: "text", name: "role", placeholder: "Role" },
            { type: "email", name: "email", placeholder: "Email" },
            { type: "textarea", name: "message", placeholder: "What capacity do you need? (Optional)" },
          ]}
          calendlyHeading="Skip the email back-and-forth."
          calendlyBody="Book a 15-minute technical audit directly with our engineering architects."
        />
      </main>
      <Footer />
    </div>
  );
}
