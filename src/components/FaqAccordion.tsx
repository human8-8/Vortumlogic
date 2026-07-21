import { useRef, useState } from "react";

export type FaqItem = { q: string; a: string };

function FaqRow({ item, open, onToggle }: { item: FaqItem; open: boolean; onToggle: () => void }) {
  const bodyRef = useRef<HTMLDivElement | null>(null);
  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          textAlign: "left",
          background: "none",
          border: 0,
          cursor: "pointer",
          fontFamily: "inherit",
          padding: "28px 0",
          color: "var(--text)",
        }}
      >
        <span style={{ fontSize: 18, fontWeight: 600 }}>{item.q}</span>
        <span style={{ flexShrink: 0, color: "var(--accent)", fontSize: 22, lineHeight: 1, transition: "transform .25s", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
      </button>
      <div style={{ maxHeight: open ? bodyRef.current?.scrollHeight ?? 400 : 0, overflow: "hidden", transition: "max-height .3s ease" }}>
        <div ref={bodyRef}>
          <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, padding: "0 0 28px", lineHeight: 1.7, maxWidth: 720 }}>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({ items, defaultOpen = 0 }: { items: FaqItem[]; defaultOpen?: number }) {
  const [openIdx, setOpenIdx] = useState<number>(defaultOpen);
  return (
    <div style={{ borderTop: "1px solid var(--border)" }}>
      {items.map((item, i) => (
        <FaqRow key={item.q} item={item} open={openIdx === i} onToggle={() => setOpenIdx((cur) => (cur === i ? -1 : i))} />
      ))}
    </div>
  );
}
