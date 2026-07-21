export default function CubeVisual() {
  return (
    <svg viewBox="60 60 380 380" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: 408 }}>
      <defs>
        <filter id="glow-cube" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(250,250) scale(1.5)">
        <g style={{ transformOrigin: "0 0", animation: "vlSpin 60s linear infinite" }}>
          <polygon points="0,-120 104,-60 104,60 0,120 -104,60 -104,-60" fill="none" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="0" y1="0" x2="0" y2="-120" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="1000" strokeDashoffset="1000" filter="url(#glow-cube)" style={{ animation: "vlCubeDraw 4s ease-in-out infinite alternate" }} />
          <line x1="0" y1="0" x2="104" y2="60" fill="none" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="0" y1="0" x2="-104" y2="60" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="1000" strokeDashoffset="1000" filter="url(#glow-cube)" style={{ animation: "vlCubeDraw 4s ease-in-out infinite alternate", animationDelay: "-2s" }} />
          <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" fill="none" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="0" y1="-60" x2="0" y2="-120" fill="none" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="52" y1="30" x2="104" y2="60" fill="none" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="-52" y1="30" x2="-104" y2="60" fill="none" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="4" fill="var(--accent)" filter="url(#glow-cube)" />
          <circle cx="0" cy="-120" r="3" fill="var(--accent)" filter="url(#glow-cube)" />
          <circle cx="104" cy="-60" r="3" fill="var(--accent)" filter="url(#glow-cube)" />
          <circle cx="104" cy="60" r="3" fill="var(--accent)" filter="url(#glow-cube)" />
          <circle cx="0" cy="120" r="3" fill="var(--accent)" filter="url(#glow-cube)" />
          <circle cx="-104" cy="60" r="3" fill="var(--accent)" filter="url(#glow-cube)" />
          <circle cx="-104" cy="-60" r="3" fill="var(--accent)" filter="url(#glow-cube)" />
        </g>
      </g>
    </svg>
  );
}
