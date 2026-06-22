import type { ReactNode } from "react";

/** Uppercase mono section marker. Taxonomy, never body. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}
