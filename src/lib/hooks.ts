import { useEffect, useRef, useState } from "react";

/** True once window.innerWidth >= px; updates live on resize. */
export function useMinWidth(px: number): boolean {
  const [wide, setWide] = useState(() => typeof window !== "undefined" && window.innerWidth >= px);
  useEffect(() => {
    const onResize = () => setWide(window.innerWidth >= px);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [px]);
  return wide;
}

/** Shrinks the fixed navbar's vertical padding once the page scrolls past 20px. */
export function useNavbarScrolled(): boolean {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

/** Fades + slides an element into place the first time it enters the viewport. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

/** Scrolls smoothly to a section id, offsetting for the fixed navbar. */
export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 40;
  window.scrollTo({ top: y, behavior: "smooth" });
}
