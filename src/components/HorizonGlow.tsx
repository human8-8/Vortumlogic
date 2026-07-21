import { useEffect, useRef } from "react";
import { drawGlow, type GlowDirection, type GlowVariant } from "../lib/glow";

export default function HorizonGlow({
  direction,
  variant,
  height = 260,
}: {
  direction: GlowDirection;
  variant: GlowVariant;
  height?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const redraw = () => drawGlow(canvas, direction, variant);
    redraw();
    const t = setTimeout(redraw, 120);
    window.addEventListener("resize", redraw);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", redraw);
    };
  }, [direction, variant]);

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        [direction === "up" ? "bottom" : "top"]: 0,
        zIndex: direction === "up" ? 20 : undefined,
        pointerEvents: "none",
        height,
      }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}
