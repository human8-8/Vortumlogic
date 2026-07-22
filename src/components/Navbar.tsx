import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { scrollToId, useNavbarScrolled } from "../lib/hooks";

type NavItem = { label: string; homeId: string; route?: string };

const NAV_ITEMS: NavItem[] = [
  { label: "AI Solutions", homeId: "services", route: "/ai-solutions" },
  { label: "Custom Development", homeId: "development", route: "/custom-development" },
  { label: "Dedicated Teams", homeId: "teams", route: "/dedicated-teams" },
  { label: "Framework", homeId: "framework" },
];

/** True on the landing page, where nav items scroll to on-page sections instead of routing. */
export default function Navbar({ onHome = false }: { onHome?: boolean }) {
  const scrolled = useNavbarScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  const renderNavItem = (item: NavItem, mobile: boolean) => {
    const className = mobile ? "vl-mobile-link" : "vl-link";
    const style = mobile ? mobileLinkStyle : navLinkStyle;
    if (onHome) {
      return (
        <button key={item.label} onClick={() => goHome(item.homeId)} className={className} style={style}>
          {item.label}
        </button>
      );
    }
    const to = item.route ?? `/#${item.homeId}`;
    return (
      <Link key={item.label} to={to} className={className} style={style} onClick={() => setMenuOpen(false)}>
        {item.label}
      </Link>
    );
  };

  const contactHref = onHome ? undefined : "/#contact";
  const ContactCta = ({ style, children }: { style: React.CSSProperties; children: React.ReactNode }) =>
    onHome ? (
      <button onClick={() => goHome("contact")} className="vl-btn-primary" style={style}>
        {children}
      </button>
    ) : (
      <Link to={contactHref!} className="vl-btn-primary" style={{ ...style, display: "inline-flex", alignItems: "center", justifyContent: "center" }} onClick={() => setMenuOpen(false)}>
        {children}
      </Link>
    );

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "padding .3s ease",
          borderBottom: "1px solid var(--border)",
          background: "rgba(13,14,18,.80)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          paddingTop: scrolled ? 16 : 24,
          paddingBottom: scrolled ? 16 : 24,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", color: "var(--text)" }} onClick={() => setMenuOpen(false)}>
            <Logo />
            <span style={{ fontWeight: 600, fontSize: 18, letterSpacing: "-.02em" }}>Vortum Logic</span>
          </Link>

          <nav className="vl-desktop-nav">{NAV_ITEMS.map((item) => renderNavItem(item, false))}</nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div className="vl-cta-desktop">
              <ContactCta style={{ border: 0, cursor: "pointer", fontFamily: "inherit", padding: "10px 24px", fontWeight: 600, fontSize: 14 }}>
                Book a Call
              </ContactCta>
            </div>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="vl-menu-btn"
              style={{ alignItems: "center", justifyContent: "center", width: 36, height: 36, background: "none", border: 0, color: "var(--muted)", cursor: "pointer" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            background: "rgba(13,14,18,.95)",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            padding: "96px 24px 0",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column" }}>{NAV_ITEMS.map((item) => renderNavItem(item, true))}</nav>
          <ContactCta style={{ marginTop: 32, width: "100%", border: 0, padding: "16px 24px", fontFamily: "inherit", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
            Book a Call
          </ContactCta>
        </div>
      )}
    </>
  );
}

const navLinkStyle: React.CSSProperties = {
  background: "none",
  border: 0,
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: 14,
  fontWeight: 500,
};

const mobileLinkStyle: React.CSSProperties = {
  textAlign: "left",
  fontFamily: "inherit",
  fontSize: 18,
  fontWeight: 500,
  background: "none",
  border: 0,
  borderBottom: "1px solid var(--border)",
  padding: "16px 0",
  cursor: "pointer",
  display: "block",
};
