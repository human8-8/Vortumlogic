import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToId } from "./hooks";

/** On route change: jumps to top, or to the target section when the URL carries a #hash. */
export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const t = setTimeout(() => scrollToId(id), 50);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return null;
}
