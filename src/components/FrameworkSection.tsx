import Reveal from "./Reveal";
import HorizonGlow from "./HorizonGlow";

export type FrameworkItem = { title: string; body: string };

export default function FrameworkSection({
  eyebrow,
  heading,
  items,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  items: FrameworkItem[];
}) {
  return (
    <section id="framework" style={{ padding: "96px 0", borderTop: "1px solid var(--border)", background: "var(--bg)", position: "relative", zIndex: 10 }}>
      <HorizonGlow direction="down" variant="ambient" height={360} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)", position: "relative" }}>
        <Reveal>
          <span style={{ fontFamily: "'Geist Mono','SF Mono',monospace", fontSize: 14, color: "var(--accent)", marginBottom: 16, display: "block" }}>{eyebrow}</span>
          <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, margin: "0 0 64px", lineHeight: 1.15 }}>{heading}</h2>
          <div className="vl-fw-grid">
            {items.map((item, i) => (
              <div key={i} className="vl-group vl-fw-cell" style={{ padding: 32, position: "relative", overflow: "hidden" }}>
                <div className="vl-fw-bar" />
                <span className="vl-accent-on-hover" style={{ fontFamily: "'Geist Mono',monospace", fontSize: 36, color: "var(--border)", marginBottom: 24, display: "block" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 16px", color: "var(--text)" }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
