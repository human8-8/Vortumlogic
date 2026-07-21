import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span style={{ fontFamily: "'Geist Mono','SF Mono',monospace", fontSize: 14, color: "var(--accent)", marginBottom: 16, display: "block" }}>
      {children}
    </span>
  );
}

export function SectionH2({ children, tight = false }: { children: ReactNode; tight?: boolean }) {
  return <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, margin: tight ? 0 : "0 0 32px", lineHeight: 1.15 }}>{children}</h2>;
}
