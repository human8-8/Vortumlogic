export default function AiNetworkVisual() {
  return (
    <svg viewBox="35 35 330 330" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: 408 }}>
      <defs>
        <filter id="glow-ai" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(200,200)">
        <circle cx="0" cy="0" r="40" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="0" cy="0" r="100" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="0" cy="0" r="160" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="0" y1="0" x2="-60" y2="-80" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="100" filter="url(#glow-ai)" style={{ animation: "vlDash 4s linear infinite" }} />
        <line x1="0" y1="0" x2="80" y2="-60" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="100" filter="url(#glow-ai)" style={{ animation: "vlDash 4s linear infinite", animationDelay: "-1s" }} />
        <line x1="0" y1="0" x2="-80" y2="60" stroke="var(--border)" strokeWidth="1" />
        <line x1="0" y1="0" x2="60" y2="80" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="100" filter="url(#glow-ai)" style={{ animation: "vlDash 4s linear infinite", animationDelay: "-2s" }} />
        <line x1="-60" y1="-80" x2="-120" y2="-100" stroke="var(--border)" strokeWidth="1" />
        <line x1="80" y1="-60" x2="140" y2="-40" stroke="var(--border)" strokeWidth="1" />
        <line x1="-80" y1="60" x2="-140" y2="40" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="100" filter="url(#glow-ai)" style={{ animation: "vlDash 4s linear infinite", animationDelay: "-1.5s" }} />
        <line x1="60" y1="80" x2="120" y2="100" stroke="var(--border)" strokeWidth="1" />
        <circle cx="0" cy="0" r="4" fill="var(--accent)" filter="url(#glow-ai)" style={{ animation: "vlNodePulse 3s infinite alternate" }} />
        <circle cx="-60" cy="-80" r="4" fill="var(--accent)" filter="url(#glow-ai)" style={{ animation: "vlNodePulse 3s infinite alternate", animationDelay: "-.5s" }} />
        <circle cx="80" cy="-60" r="4" fill="var(--accent)" filter="url(#glow-ai)" style={{ animation: "vlNodePulse 3s infinite alternate", animationDelay: "-1s" }} />
        <circle cx="-80" cy="60" r="4" fill="var(--accent)" filter="url(#glow-ai)" style={{ animation: "vlNodePulse 3s infinite alternate", animationDelay: "-1.5s" }} />
        <circle cx="60" cy="80" r="4" fill="var(--accent)" filter="url(#glow-ai)" style={{ animation: "vlNodePulse 3s infinite alternate", animationDelay: "-2s" }} />
        <circle cx="-120" cy="-100" r="4" fill="var(--accent)" filter="url(#glow-ai)" style={{ animation: "vlNodePulse 3s infinite alternate", animationDelay: "-2.5s" }} />
        <circle cx="140" cy="-40" r="4" fill="var(--accent)" filter="url(#glow-ai)" style={{ animation: "vlNodePulse 3s infinite alternate", animationDelay: "-3s" }} />
        <circle cx="-140" cy="40" r="4" fill="var(--accent)" filter="url(#glow-ai)" style={{ animation: "vlNodePulse 3s infinite alternate", animationDelay: "-3.5s" }} />
        <circle cx="120" cy="100" r="4" fill="var(--accent)" filter="url(#glow-ai)" style={{ animation: "vlNodePulse 3s infinite alternate", animationDelay: "-4s" }} />
      </g>
    </svg>
  );
}
