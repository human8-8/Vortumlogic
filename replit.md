# Vortum Logic

Marketing site for Vortum Logic — an AI automation & engineering firm. Built with Vite + React + TypeScript.

## Stack

- **Framework**: Vite 5 + React 18 + TypeScript
- **Routing**: React Router v6
- **3D/WebGL**: Three.js (hero shader effect)
- **Fonts**: Plus Jakarta Sans (body), Geist Mono (accent labels) — loaded from Google Fonts
- **Design system**: `#0D0E12` background, `#00E676` accent, sharp 0-radius corners

## How to run

```
npm run dev
```

Runs on port 5000. The `Start application` workflow handles this automatically.

## Pages

| Route | File |
|---|---|
| `/` | `src/pages/Landing.tsx` |
| `/ai-solutions` | `src/pages/AiSolutions.tsx` |
| `/business-aviation` | `src/pages/BusinessAviation.tsx` |
| `/real-estate` | `src/pages/RealEstate.tsx` |
| `/investments` | `src/pages/Investments.tsx` |

## Key components

- `ShaderHero` — Three.js WebGL shader-line background (hero section). Degrades gracefully when WebGL is unavailable.
- `HorizonGlow` — Canvas-based ambient glow effects used in section backgrounds.
- `Navbar` — Fixed/sticky navbar with mobile menu.
- `ContactSection` / `ContactForm` — Lead capture form + Calendly embed block.
- `FrameworkSection` — Reusable "How We Work" framework block used across pages.
- `FaqAccordion` — Accordion used on the Investments page.
- `Reveal` — Scroll-reveal wrapper.

## Design files

The `project/` directory contains the original Claude Design HTML prototypes used as the source of truth for this implementation. The `chats/` directory contains the full design conversation history.

## User preferences

- Preserve existing architecture; do not restructure or migrate without explicit request.
- Copy must be carried over verbatim from design files — no rewriting.
- LinkedIn URL in footer/navbar is currently `#` — placeholder awaiting the real company URL.
- The Trust/case-study placeholder blocks on `/business-aviation` and `/real-estate` are intentionally hidden (`display:none`) — they will be swapped for real case studies later.
