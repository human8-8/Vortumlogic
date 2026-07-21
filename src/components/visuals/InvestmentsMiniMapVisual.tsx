const MOLDOVA_PATH =
  "M81.851,112.125L102.523,92.869L160.467,80L224.362,120.74L260.382,125.594L299.533,160.575L293.269,204.319L324.903,225.433L337.432,278.903L367.813,311.172L361.862,330.032L378.149,342.861L354.972,352.255L303.605,348.413L295.148,331.102L276.982,341.152L283.246,363.765L259.442,403.69L244.095,446.544L222.17,460L206.509,403.055L215.905,349.481L213.087,293.981L162.973,217.822L135.097,163.427L108.16,124.933Z";

export default function InvestmentsMiniMapVisual() {
  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: 408, overflow: "visible" }}
      aria-label="Moldova as origin of engineering talent flowing to global hubs"
    >
      <defs>
        <filter id="glow-inv" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(136,-61) scale(1.15)">
        <path d="M277.03,268.44 L95,58" fill="none" stroke="var(--accent)" strokeWidth="1" opacity=".22" />
        <path d="M277.03,268.44 L45,250" fill="none" stroke="var(--accent)" strokeWidth="1" opacity=".22" />
        <path d="M277.03,268.44 L415,150" fill="none" stroke="var(--accent)" strokeWidth="1" opacity=".22" />
        <path d="M277.03,268.44 L410,420" fill="none" stroke="var(--accent)" strokeWidth="1" opacity=".22" />
        <path d="M277.03,268.44 L95,58" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="10 100" filter="url(#glow-inv)" style={{ animation: "vlMapDash 3s linear infinite" }} />
        <path d="M277.03,268.44 L45,250" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="10 100" filter="url(#glow-inv)" style={{ animation: "vlMapDash 3s linear infinite", animationDelay: "-.8s" }} />
        <path d="M277.03,268.44 L415,150" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="10 100" filter="url(#glow-inv)" style={{ animation: "vlMapDash 3s linear infinite", animationDelay: "-1.6s" }} />
        <path d="M277.03,268.44 L410,420" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="10 100" filter="url(#glow-inv)" style={{ animation: "vlMapDash 3s linear infinite", animationDelay: "-2.4s" }} />
        <path d={MOLDOVA_PATH} fill="none" stroke="var(--border)" strokeWidth="1" />
        <path d={MOLDOVA_PATH} fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinejoin="round" filter="url(#glow-inv)" />
        <circle cx="277.03" cy="268.44" r="4" fill="var(--accent)" filter="url(#glow-inv)" />
        <text x="290" y="272" fill="var(--muted)" fontSize="11" fontFamily="'Geist Mono',monospace">Chișinău</text>
        <g>
          <circle cx="95" cy="58" r="4" fill="var(--accent)" filter="url(#glow-inv)" style={{ animation: "vlDotPulse 2s infinite alternate" }} />
          <text x="95" y="44" fill="var(--muted)" fontSize="11" fontFamily="'Geist Mono',monospace" textAnchor="middle">US</text>
        </g>
        <g>
          <circle cx="45" cy="250" r="4" fill="var(--accent)" filter="url(#glow-inv)" style={{ animation: "vlDotPulse 2s infinite alternate", animationDelay: "-.5s" }} />
          <text x="45" y="236" fill="var(--muted)" fontSize="11" fontFamily="'Geist Mono',monospace" textAnchor="middle">EU</text>
        </g>
        <g>
          <circle cx="415" cy="150" r="4" fill="var(--accent)" filter="url(#glow-inv)" style={{ animation: "vlDotPulse 2s infinite alternate", animationDelay: "-1s" }} />
          <text x="415" y="136" fill="var(--muted)" fontSize="11" fontFamily="'Geist Mono',monospace" textAnchor="middle">UAE</text>
        </g>
        <g>
          <circle cx="410" cy="420" r="4" fill="var(--accent)" filter="url(#glow-inv)" style={{ animation: "vlDotPulse 2s infinite alternate", animationDelay: "-1.5s" }} />
          <text x="410" y="406" fill="var(--muted)" fontSize="11" fontFamily="'Geist Mono',monospace" textAnchor="middle">Singapore</text>
        </g>
      </g>
    </svg>
  );
}
