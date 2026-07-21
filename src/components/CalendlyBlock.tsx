export default function CalendlyBlock({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="vl-calendly-row" style={{ padding: "clamp(32px,5vw,48px)" }}>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 128, height: 128, background: "rgba(0,230,118,.05)", filter: "blur(48px)", borderRadius: 9999 }} />
        <p style={{ fontFamily: "'Geist Mono',monospace", fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".15em", margin: "0 0 8px" }}>
          Prefer a direct conversation?
        </p>
        <h3 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 8px" }}>{heading}</h3>
        <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6, maxWidth: 512, margin: 0 }}>{body}</p>
      </div>
      <a
        href="https://calendly.com/vortumlogic/30min"
        target="_blank"
        rel="noreferrer"
        className="vl-btn-outline"
        style={{ flexShrink: 0, display: "inline-block", fontWeight: 600, padding: "16px 40px", whiteSpace: "nowrap" }}
      >
        Schedule via Calendly
      </a>
    </div>
  );
}
