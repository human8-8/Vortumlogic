export type Step = { title: string; body: string };

export default function StepList({ steps }: { steps: Step[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: 860, borderTop: "1px solid var(--border)" }}>
      {steps.map((step, i) => (
        <div key={i} style={{ display: "flex", gap: 24, padding: "28px 0", borderBottom: "1px solid var(--border)" }}>
          <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 20, color: "var(--accent)", flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 8px", color: "var(--text)" }}>{step.title}</h3>
            <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{step.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
