import type { ReactNode } from "react";
import Reveal from "./Reveal";
import HorizonGlow from "./HorizonGlow";
import ContactForm, { type FormField } from "./ContactForm";
import CalendlyBlock from "./CalendlyBlock";

export default function ContactSection({
  eyebrow,
  heading,
  body,
  formHeading,
  submitLabel,
  columns = 1,
  fields,
  calendlyHeading,
  calendlyBody,
  extra,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
  formHeading?: string;
  submitLabel: string;
  columns?: 1 | 2;
  fields: FormField[];
  calendlyHeading: string;
  calendlyBody: string;
  extra?: ReactNode;
}) {
  return (
    <section id="contact" style={{ padding: "96px 0", borderTop: "1px solid var(--border)", background: "var(--bg)", position: "relative", zIndex: 10, overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)" }}>
        <Reveal style={{ marginBottom: 64 }}>
          {eyebrow && <span style={{ fontFamily: "'Geist Mono','SF Mono',monospace", fontSize: 14, color: "var(--accent)", marginBottom: 16, display: "block" }}>{eyebrow}</span>}
          <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, margin: "0 0 16px", lineHeight: 1.15 }}>{heading}</h2>
          <p style={{ fontSize: 18, color: "var(--muted)", maxWidth: 640, margin: 0, lineHeight: 1.6 }}>{body}</p>
        </Reveal>

        <div style={{ border: "1px solid var(--border)" }}>
          <div style={{ padding: "clamp(32px,5vw,48px)", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: "radial-gradient(ellipse 150% 33% at 50% 0%, rgba(0,230,119,.10) 0%, rgba(0,230,119,0) 100%)",
              }}
            />
            <ContactForm heading={formHeading} submitLabel={submitLabel} columns={columns} fields={fields} />
          </div>
          <CalendlyBlock heading={calendlyHeading} body={calendlyBody} />
        </div>
        {extra}
      </div>
      <HorizonGlow direction="up" variant="full" />
    </section>
  );
}
