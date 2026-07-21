import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "../lib/hooks";

export default function Reveal({
  children,
  style,
  className,
}: {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`vl-reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </div>
  );
}
