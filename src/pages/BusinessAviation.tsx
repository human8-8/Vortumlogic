import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NicheHero from "../components/niche/NicheHero";
import NicheSection from "../components/niche/NicheSection";
import { Eyebrow, SectionH2 } from "../components/niche/SectionHeading";
import ArrowList from "../components/niche/ArrowList";
import StepList from "../components/niche/StepList";
import { DialogueBox, DialogueMessage } from "../components/niche/Dialogue";
import TrustPlaceholder from "../components/niche/TrustPlaceholder";
import FrameworkSection from "../components/FrameworkSection";
import ContactSection from "../components/ContactSection";

export default function BusinessAviation() {
  return (
    <div style={{ position: "relative", background: "var(--bg)", overflow: "hidden", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <NicheHero
          eyebrow="AI Solutions for Business Aviation & VIP Travel"
          title="Your Client Won't Wait For Availability. Neither Should You."
          body="VIP charter and travel clients expect a quote in minutes, not hours — at 3am in one timezone as easily as 3pm in another. We build the AI layer that reads the request, pulls availability, and hands your broker a ready-to-send quote."
        />

        <NicheSection>
          <Eyebrow>01 / THE PROBLEM</Eyebrow>
          <SectionH2>A Request Doesn't Wait for Business Hours</SectionH2>
          <p style={{ fontSize: 18, color: "var(--muted)", margin: "0 0 24px", lineHeight: 1.6 }}>
            A message arrives — WhatsApp, email, doesn't matter what time:{" "}
            <em style={{ color: "var(--text)", fontStyle: "italic" }}>
              "Need a jet from Teterboro to Miami tomorrow, 8am, 4 passengers, one dog."
            </em>
          </p>
          <p style={{ fontSize: 18, color: "var(--muted)", margin: "0 0 32px", lineHeight: 1.6 }}>From there, the clock starts:</p>
          <ArrowList
            items={[
              "The broker has to notice the message, often outside working hours.",
              "Log into Avinode, CharterPad, or another sourcing platform.",
              "Manually check aircraft availability and empty-leg options.",
              "Calculate margin and structure the quote.",
              "Format a proposal that looks professional enough to send to a VIP client.",
            ]}
          />
          <p style={{ fontSize: 18, color: "var(--text)", margin: 0, lineHeight: 1.6 }}>
            That's typically hours of manual work — during which a client with real urgency and real budget is often reaching out to more than one broker at once.
          </p>
        </NicheSection>

        <NicheSection>
          <Eyebrow>02 / THE SOLUTION</Eyebrow>
          <SectionH2>An AI Layer That Reads the Request and Drafts the Quote</SectionH2>
          <p style={{ fontSize: 18, color: "var(--muted)", margin: "0 0 48px", lineHeight: 1.6 }}>
            Our agent sits on your incoming channels — WhatsApp, email, or both — and handles the first mile of every request:
          </p>
          <StepList
            steps={[
              { title: "Reads the message.", body: "Extracts route, date, passenger count, and any special requirements automatically, regardless of how the request is phrased." },
              { title: "Pulls live options.", body: "Connects into your existing sourcing systems to check availability and empty-leg opportunities — no platform switch, no new tool for your team to learn." },
              { title: "Drafts the quote.", body: "Structures pricing based on your margin rules and prepares a client-ready proposal." },
              { title: "Hands it to you for one click.", body: "The broker reviews and sends — the agent doesn't quote a client without your sign-off." },
            ]}
          />
          <DialogueBox note="how the handoff looks in practice">
            <DialogueMessage from="Client (WhatsApp, 2:14am)">"Need a jet from Teterboro to Miami tomorrow, 8am, 4 pax, one dog."</DialogueMessage>
            <DialogueMessage from="Agent → Broker" align="right" accent>
              "Match found — Phenom 300 available, quote drafted. Send to client?"
            </DialogueMessage>
          </DialogueBox>
          <p style={{ fontSize: 18, color: "var(--text)", margin: "32px 0 0", lineHeight: 1.6 }}>
            You stay the decision-maker on every quote. The agent removes the hour of manual lookup between the request and your decision — not the decision itself.
          </p>
        </NicheSection>

        <NicheSection>
          <Eyebrow>03 / WHY SPEED WINS</Eyebrow>
          <SectionH2>In This Market, the First Reply Usually Wins the Deal</SectionH2>
          <p style={{ fontSize: 18, color: "var(--muted)", margin: "0 0 24px", lineHeight: 1.6 }}>
            Charter and VIP travel clients typically reach out to more than one broker at a time, and the broker who responds first — with a credible, well-structured quote — has a clear edge before price even enters the conversation. Every hour spent finding availability manually is an hour a competing broker can use to close the deal instead.
          </p>
          <p style={{ fontSize: 18, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
            Commissions in this segment are also structured in a way that makes even one additional closed deal a significant outcome for a brokerage — which is part of why response speed carries outsized weight here compared to most industries.
          </p>
        </NicheSection>

        <FrameworkSection
          eyebrow="04 / HOW WE WORK"
          heading="From Audit to Live Agent — Without Disrupting Your Stack"
          items={[
            { title: "Strategic Alignment & Discovery", body: "We map your current request flow — which channels you use, how you source availability, how you structure margin — before writing a single line of code." },
            { title: "Autonomous Execution & Integration", body: "We connect the agent to your existing sourcing systems and communication channels. No platform migration, no retraining your team on new software." },
            { title: "Continuous Optimization", body: "Post-launch, we refine how the agent parses requests and structures quotes based on real usage — so accuracy improves as volume grows." },
          ]}
        />

        <NicheSection>
          <Eyebrow>05 / WHY US</Eyebrow>
          <SectionH2>Why We're Building for This Industry</SectionH2>
          <p style={{ fontSize: 18, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
            We chose business aviation and VIP travel brokerage deliberately — it's a market defined by high-value, time-sensitive decisions, where a faster, better-structured response has a direct and measurable impact on outcomes. That's exactly the kind of problem autonomous AI agents are built to solve.
          </p>
          <TrustPlaceholder />
        </NicheSection>

        <ContactSection
          eyebrow="06 / GET STARTED"
          heading="Map Out Your Agent"
          body="A 15-minute technical audit — we look at your current request flow and show you exactly where an agent fits."
          formHeading="Request a Technical Audit for Your Brokerage"
          submitLabel="Request Technical Audit"
          fields={[
            { type: "text", name: "company", placeholder: "Company Name" },
            { type: "text", name: "role", placeholder: "Role" },
            { type: "email", name: "email", placeholder: "Email" },
            {
              type: "select",
              name: "channels",
              placeholder: "Which channels do you use for incoming requests?",
              options: [
                { value: "whatsapp", label: "WhatsApp" },
                { value: "email", label: "Email" },
                { value: "both", label: "Both" },
                { value: "other", label: "Other" },
              ],
            },
          ]}
          calendlyHeading="Skip the back-and-forth."
          calendlyBody="Book a 15-minute technical audit directly with our engineering architects."
        />
      </main>
      <Footer />
    </div>
  );
}
