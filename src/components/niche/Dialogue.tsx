import type { ReactNode } from "react";

export function DialogueBox({ note, children }: { note: string; children: ReactNode }) {
  return (
    <div style={{ maxWidth: 860, marginTop: 48 }}>
      <div style={{ border: "1px solid var(--border)", background: "rgba(26,29,36,.30)", padding: 28 }}>
        <p style={{ fontFamily: "'Geist Mono',monospace", fontSize: 12, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--muted)", fontStyle: "italic", margin: "0 0 20px", lineHeight: 1.6 }}>
          {note}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>{children}</div>
      </div>
    </div>
  );
}

export function DialogueMessage({
  from,
  align = "left",
  accent = false,
  children,
}: {
  from: string;
  align?: "left" | "right";
  accent?: boolean;
  children: ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: align === "right" ? "flex-end" : "flex-start" }}>
      <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em", color: accent ? "var(--accent)" : "var(--muted)" }}>{from}</span>
      <div
        style={{
          alignSelf: align === "right" ? "flex-end" : "flex-start",
          maxWidth: "88%",
          background: accent ? "rgba(0,230,118,.10)" : "var(--border)",
          border: accent ? "1px solid rgba(0,230,118,.30)" : undefined,
          color: "var(--text)",
          padding: "14px 18px",
          fontSize: 15,
          lineHeight: 1.5,
        }}
      >
        {children}
      </div>
    </div>
  );
}
