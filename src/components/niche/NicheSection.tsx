import type { ReactNode } from "react";
import Reveal from "../Reveal";
import HorizonGlow from "../HorizonGlow";

export default function NicheSection({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section id={id} style={{ padding: "96px 0", borderTop: "1px solid var(--border)", background: "var(--bg)", position: "relative", zIndex: 10 }}>
      <HorizonGlow direction="down" variant="ambient" height={360} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)", position: "relative" }}>
        <Reveal style={{ maxWidth: 860 }}>{children}</Reveal>
      </div>
    </section>
  );
}
