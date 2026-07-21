export default function ArrowList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 16 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
          <span style={{ color: "var(--accent)", fontFamily: "'Geist Mono',monospace", fontSize: 14, lineHeight: 1.6, flexShrink: 0 }}>→</span>
          <span style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6 }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
