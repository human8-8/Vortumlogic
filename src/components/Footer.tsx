import { Link } from "react-router-dom";
import Logo from "./Logo";
import { scrollToId } from "../lib/hooks";

type CapItem = { label: string; homeId: string };

const CAPS_HOME: CapItem[] = [
  { label: "AI Solutions", homeId: "services" },
  { label: "Custom Development", homeId: "development" },
  { label: "Dedicated Teams", homeId: "teams" },
  { label: "Framework", homeId: "framework" },
  { label: "System Resilience", homeId: "resilience" },
];

const CAPS_SUB: CapItem[] = CAPS_HOME.slice(0, 4);

export default function Footer({ onHome = false }: { onHome?: boolean }) {
  const caps = onHome ? CAPS_HOME : CAPS_SUB;

  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "64px 0 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)" }}>
        <div className="vl-footer-grid" style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text)" }}>
              <Logo flipped />
              <span style={{ fontWeight: 600, fontSize: 18, letterSpacing: "-.02em" }}>Vortum Logic</span>
            </Link>
            <p style={{ fontSize: 14, color: "var(--muted)", maxWidth: 384, margin: 0 }}>
              Architecting next-generation digital ecosystems and autonomous AI infrastructure.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Geist Mono',monospace", fontSize: 14, textTransform: "uppercase", color: "var(--text)", margin: "0 0 24px" }}>Capabilities</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {caps.map((item) =>
                onHome ? (
                  <li key={item.label}>
                    <button onClick={() => scrollToId(item.homeId)} className="vl-link" style={{ background: "none", border: 0, cursor: "pointer", fontFamily: "inherit", fontSize: 14, padding: 0 }}>
                      {item.label}
                    </button>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link to={`/#${item.homeId}`} className="vl-link" style={{ fontSize: 14 }}>
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Geist Mono',monospace", fontSize: 14, textTransform: "uppercase", color: "var(--text)", margin: "0 0 24px" }}>Contact</h4>
            <a href="mailto:partner@vortumlogic.com" className="vl-link" style={{ fontSize: 14, display: "block", marginBottom: 24 }}>
              partner@vortumlogic.com
            </a>
            <div style={{ display: "flex", gap: 16 }}>
              <a href="#" aria-label="LinkedIn" className="vl-social" style={{ width: 40, height: 40, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32 }}>
          <p style={{ fontSize: 12, color: "var(--muted)", textAlign: "center", margin: 0 }}>© 2026 Vortum Logic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
