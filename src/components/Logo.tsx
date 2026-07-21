export default function Logo({ flipped = false }: { flipped?: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 86.4 85.8"
      xmlns="http://www.w3.org/2000/svg"
      style={flipped ? { transform: "scaleX(-1)" } : undefined}
    >
      <polygon
        fill="var(--accent)"
        points="0,42 21.6,20.7 21.6,63.8 64.4,63.8 64.4,20.7 86.4,0 86.4,41.8 43.2,85.8"
        transform={flipped ? undefined : "translate(86.4,0) scale(-1,1)"}
      />
    </svg>
  );
}
