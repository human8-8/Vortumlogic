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

export default function RealEstate() {
  return (
    <div style={{ position: "relative", background: "var(--bg)", overflow: "hidden", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <NicheHero
          eyebrow="AI Solutions for Real Estate Brokerages"
          title="A Lead Goes Cold in Minutes. Your Response Time Shouldn't."
          body="Every lead from Zillow, Realtor.com, or your website starts losing value the moment it arrives. We build the AI layer that responds instantly, qualifies the lead, and puts a showing on your calendar — while you're still on the road."
        />

        <NicheSection>
          <Eyebrow>01 / THE PROBLEM</Eyebrow>
          <SectionH2>Speed to Lead Is the Whole Game — And It's Working Against You</SectionH2>
          <p style={{ fontSize: 18, color: "var(--muted)", margin: "0 0 24px", lineHeight: 1.6 }}>
            A buyer fills out a form on a listing site. From that moment, the window to reach them while they're still engaged is short — and shrinking by the minute.
          </p>
          <p style={{ fontSize: 18, color: "var(--muted)", margin: "0 0 32px", lineHeight: 1.6 }}>Meanwhile, agents are:</p>
          <ArrowList
            items={["Driving between showings.", "In a meeting or mid-negotiation.", "Fielding a dozen other leads at the same time."]}
          />
          <p style={{ fontSize: 18, color: "var(--text)", margin: 0, lineHeight: 1.6 }}>
            By the time a human callback happens, the lead has often already engaged with another agent — or lost interest entirely. And not every lead is worth the callback in the first place: a meaningful share of inbound traffic isn't pre-approved, isn't budget-ready, or isn't seriously in-market yet. Sorting that out manually costs time agents don't have.
          </p>
        </NicheSection>

        <NicheSection>
          <Eyebrow>02 / THE SOLUTION</Eyebrow>
          <SectionH2>An Agent That Responds Before the Lead Goes Cold</SectionH2>
          <p style={{ fontSize: 18, color: "var(--muted)", margin: "0 0 48px", lineHeight: 1.6 }}>
            Our system engages every inbound lead within moments of submission — across voice and text — and does the qualifying work before it reaches your calendar:
          </p>
          <StepList
            steps={[
              { title: "Responds instantly.", body: "The moment a lead comes in, the agent reaches out — by voice, SMS, or both — in a natural, conversational way." },
              { title: "Qualifies in real time.", body: "Asks the questions that matter: pre-approval status, budget range, timeline to move." },
              { title: "Books the showing.", body: "If the lead is qualified and interested, the agent schedules directly into the agent's calendar — no back-and-forth." },
              { title: "Filters the noise.", body: "Leads that aren't ready get logged and nurtured separately, instead of eating into an agent's live selling time." },
            ]}
          />
          <DialogueBox note="Illustrative example of how a conversation looks in practice — not an actual client interaction:">
            <DialogueMessage from="Agent (via voice, moments after form submission)" accent>
              "Hi, I saw you were just looking at the property on Main Street. Do you already have pre-approval with a lender, and what's your target budget?"
            </DialogueMessage>
          </DialogueBox>
          <p style={{ fontSize: 18, color: "var(--text)", margin: "32px 0 0", lineHeight: 1.6 }}>
            You stay in control of every showing and every deal. The agent removes the delay between "lead submitted" and "lead engaged" — it doesn't replace the agent's relationship with the client.
          </p>
        </NicheSection>

        <NicheSection>
          <Eyebrow>03 / WHY SPEED WINS</Eyebrow>
          <SectionH2>In a Commission-Driven Business, Minutes Have a Price Tag</SectionH2>
          <p style={{ fontSize: 18, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
            A single closed transaction typically represents a meaningful commission — which is exactly why the cost of a slow response is so high: it's not a missed message, it's a missed deal. Brokerages that close even one additional transaction a year from leads that would otherwise have gone cold see the value of faster response times reflected directly in commission revenue.
          </p>
        </NicheSection>

        <FrameworkSection
          eyebrow="04 / HOW WE WORK"
          heading="From Audit to Live Agent — Without Disrupting Your Stack"
          items={[
            { title: "Strategic Alignment & Discovery", body: "We map your current lead flow — which platforms you're pulling from, your CRM, your calendar setup — before writing a single line of code." },
            { title: "Autonomous Execution & Integration", body: "We connect the agent directly into your existing lead sources and calendar. No new CRM, no retraining your team on new software." },
            { title: "Continuous Optimization", body: "Post-launch, we refine qualifying questions and conversation flow based on real lead behavior — response quality improves as volume grows." },
          ]}
        />

        <NicheSection>
          <Eyebrow>05 / WHY US</Eyebrow>
          <SectionH2>Why We're Building for This Industry</SectionH2>
          <p style={{ fontSize: 18, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
            Real estate runs on speed and volume of inbound leads in a way few other industries do — which makes it one of the clearest cases for what autonomous agents are built to solve: acting instantly, consistently, and without fatigue, at a scale no individual agent could sustain manually.
          </p>
          <TrustPlaceholder />
        </NicheSection>

        <ContactSection
          eyebrow="06 / GET STARTED"
          heading="Map Out Your Agent"
          body="A 15-minute technical audit — we look at your current lead flow and show you exactly where an agent fits."
          formHeading="Request a Technical Audit for Your Brokerage"
          submitLabel="Request Technical Audit"
          fields={[
            { type: "text", name: "company", placeholder: "Company Name" },
            { type: "text", name: "role", placeholder: "Role" },
            { type: "email", name: "email", placeholder: "Email" },
            {
              type: "select",
              name: "lead-source",
              placeholder: "Where do your leads currently come from?",
              options: [
                { value: "zillow", label: "Zillow" },
                { value: "realtor", label: "Realtor.com" },
                { value: "website", label: "Website" },
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
