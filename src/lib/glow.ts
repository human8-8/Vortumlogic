export type GlowDirection = "up" | "down";
export type GlowVariant = "full" | "ambient";

/**
 * Renders the horizon-glow background effect onto a canvas: a soft radial
 * bloom (ambient) or a bright layered glow with a hairline core (full).
 * Ported 1:1 from the design prototype's per-pixel gradient math.
 */
export function drawGlow(canvas: HTMLCanvasElement, direction: GlowDirection, variant: GlowVariant): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (!w || !h) return;
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  const W = canvas.width;
  const H = canvas.height;
  const img = ctx.createImageData(W, H);
  const data = img.data;
  const cx = W / 2;
  const s = (v: number) => v * dpr;

  for (let y = 0; y < H; y++) {
    const dy = direction === "up" ? H - y : y;
    const f = Math.max(0, 1 - dy / H);
    const fade = f * f * (3 - 2 * f);

    if (variant === "ambient") {
      const dyAmb = Math.pow(dy / (H * 0.55), 2);
      for (let x = 0; x < W; x++) {
        const dx = x - cx;
        const g = 0.1 * Math.exp(-(Math.pow(dx / (W * 0.75), 2) + dyAmb)) * fade;
        if (g <= 0.0015) continue;
        const a = Math.min(1, g);
        const i = (y * W + x) * 4;
        data[i] = 0;
        data[i + 1] = 230;
        data[i + 2] = 119;
        data[i + 3] = Math.max(0, Math.min(255, a * 255));
      }
      continue;
    }

    const dy14 = Math.pow(dy / s(14), 2);
    const dy48 = Math.pow(dy / s(48), 2);
    const dy130 = Math.pow(dy / s(130), 2);
    const dyLine = Math.pow(dy / s(2.2), 2);
    for (let x = 0; x < W; x++) {
      const dx = x - cx;
      const g1 = 0.32 * Math.exp(-(Math.pow(dx / (W * 0.22), 2) + dy14));
      const g2 = 0.16 * Math.exp(-(Math.pow(dx / (W * 0.34), 2) + dy48));
      const g3 = 0.08 * Math.exp(-(Math.pow(dx / (W * 0.5), 2) + dy130));
      const wl = 0.45 * Math.exp(-(Math.pow(dx / (W * 0.26), 2) + dyLine));
      const g = (g1 + g2 + g3) * fade;
      let a = g + wl * fade;
      if (a <= 0.0015) continue;
      if (a > 1) a = 1;
      const r = (255 * wl) / a;
      const gc = (230 * g + 255 * wl) / a;
      const b = (119 * g + 255 * wl) / a;
      const i = (y * W + x) * 4;
      data[i] = Math.max(0, Math.min(255, r));
      data[i + 1] = Math.max(0, Math.min(255, gc));
      data[i + 2] = Math.max(0, Math.min(255, b));
      data[i + 3] = Math.max(0, Math.min(255, a * 255));
    }
  }
  ctx.putImageData(img, 0, 0);
}
