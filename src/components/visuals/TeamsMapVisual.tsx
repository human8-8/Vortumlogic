export default function TeamsMapVisual() {
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <filter id="glow-map" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(400,250) scale(1.5) translate(-400,-250)">
        <path d="M150,150 Q180,120 250,130 T300,200 Q280,300 320,400" fill="none" stroke="var(--border)" strokeWidth="1" />
        <path d="M380,120 Q420,80 500,100 T550,180 Q600,220 580,300" fill="none" stroke="var(--border)" strokeWidth="1" />
        <path d="M550,100 Q650,50 750,120 T700,250 Q750,350 680,420" fill="none" stroke="var(--border)" strokeWidth="1" />
        <path d="M220,180 Q400,100 480,140" fill="none" stroke="var(--accent)" strokeWidth="1" opacity=".5" />
        <path d="M480,140 Q600,200 650,280" fill="none" stroke="var(--accent)" strokeWidth="1" opacity=".5" />
        <path d="M650,280 Q550,250 520,220" fill="none" stroke="var(--accent)" strokeWidth="1" opacity=".5" />
        <path d="M220,180 Q400,100 480,140" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="10 100" filter="url(#glow-map)" style={{ animation: "vlMapDash 3s linear infinite" }} />
        <path d="M480,140 Q600,200 650,280" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="10 100" filter="url(#glow-map)" style={{ animation: "vlMapDash 3s linear infinite", animationDelay: "-1s" }} />
        <path d="M650,280 Q550,250 520,220" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="10 100" filter="url(#glow-map)" style={{ animation: "vlMapDash 3s linear infinite", animationDelay: "-2s" }} />
        <circle cx="220" cy="180" r="4" fill="var(--accent)" filter="url(#glow-map)" style={{ animation: "vlDotPulse 2s infinite alternate" }} />
        <text x="220" y="200" fill="var(--muted)" fontSize="10" fontFamily="monospace" textAnchor="middle">USA</text>
        <circle cx="480" cy="140" r="4" fill="var(--accent)" filter="url(#glow-map)" style={{ animation: "vlDotPulse 2s infinite alternate", animationDelay: "-.5s" }} />
        <text x="480" y="160" fill="var(--muted)" fontSize="10" fontFamily="monospace" textAnchor="middle">EU HUB</text>
        <circle cx="520" cy="220" r="4" fill="var(--accent)" filter="url(#glow-map)" style={{ animation: "vlDotPulse 2s infinite alternate", animationDelay: "-1s" }} />
        <text x="520" y="240" fill="var(--muted)" fontSize="10" fontFamily="monospace" textAnchor="middle">UAE</text>
        <circle cx="650" cy="280" r="4" fill="var(--accent)" filter="url(#glow-map)" style={{ animation: "vlDotPulse 2s infinite alternate", animationDelay: "-1.5s" }} />
        <text x="650" y="300" fill="var(--muted)" fontSize="10" fontFamily="monospace" textAnchor="middle">SG</text>
      </g>
    </svg>
  );
}
