/** Hidden case-study slot for the Trust section — kept in the DOM so it's easy to enable once the first pilot goes live. */
export default function TrustPlaceholder() {
  return (
    <div
      data-placeholder="case-study"
      style={{ display: "none", border: "1px dashed var(--border)", background: "rgba(26,29,36,.20)", padding: 24, gap: 16, alignItems: "flex-start" }}
    >
      <span
        style={{
          fontFamily: "'Geist Mono',monospace",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: ".1em",
          color: "var(--accent)",
          border: "1px solid rgba(0,230,118,.30)",
          padding: "4px 8px",
          flexShrink: 0,
        }}
      >
        Placeholder
      </span>
      <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>
        Replace once first pilot is live: "Currently running a pilot with a [type of] brokerage — early results available on request."
      </p>
    </div>
  );
}
