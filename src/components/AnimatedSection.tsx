import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type { ReactNode } from "react";

export function AnimatedSection({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-in" | "scale-in";
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const baseClass =
    variant === "fade-up"
      ? "animate-fade-up"
      : variant === "scale-in"
        ? "animate-scale-in"
        : "animate-fade-in";

  return (
    <div
      ref={ref}
      className={`${baseClass} ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
