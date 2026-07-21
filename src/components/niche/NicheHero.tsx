import HorizonGlow from "../HorizonGlow";
import { scrollToId } from "../../lib/hooks";

export default function NicheHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", padding: "180px 0 120px", overflow: "hidden", background: "var(--bg)" }}>
      <HorizonGlow direction="up" variant="full" />
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
          {`// ${eyebrow}`}
        </span>
        <h1
          className="vl-fadeup"
          style={{ animationDelay: ".3s", margin: "32px 0 0", fontSize: "clamp(40px,6.5vw,72px)", fontWeight: 700, letterSpacing: "-.02em", lineHeight: 1.1, maxWidth: 1024 }}
        >
          {title}
        </h1>
        <p className="vl-fadeup" style={{ animationDelay: ".5s", margin: "24px 0 0", fontSize: "clamp(18px,2vw,20px)", color: "var(--muted)", maxWidth: 768, lineHeight: 1.6 }}>
          {body}
        </p>
        <div className="vl-fadeup" style={{ animationDelay: ".7s", marginTop: 40 }}>
          <button
            onClick={() => scrollToId("contact")}
            className="vl-btn-primary"
            style={{ height: 48, padding: "0 32px", fontFamily: "inherit", fontSize: 15, minWidth: 240, cursor: "pointer" }}
          >
            Book a Technical Audit
          </button>
        </div>
      </div>
    </section>
  );
}
