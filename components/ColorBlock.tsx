import type { ReactNode } from "react";

export type BlockColor =
  | "lime"
  | "lilac"
  | "cream"
  | "mint"
  | "pink"
  | "coral"
  | "navy";

const surfaces: Record<BlockColor, string> = {
  lime: "bg-[var(--color-block-lime)] text-[var(--color-ink)]",
  lilac: "bg-[var(--color-block-lilac)] text-[var(--color-ink)]",
  cream: "bg-[var(--color-block-cream)] text-[var(--color-ink)]",
  mint: "bg-[var(--color-block-mint)] text-[var(--color-ink)]",
  pink: "bg-[var(--color-block-pink)] text-[var(--color-ink)]",
  coral: "bg-[var(--color-block-coral)] text-[var(--color-ink)]",
  navy: "bg-[var(--color-block-navy)] text-[var(--color-inverse-ink)]",
};

/**
 * Full-bleed pastel story section.
 * - Spans the full viewport width with no rounded corners (clean, editorial).
 * - Inner content is constrained to the page container and left-aligned.
 * - No shadows — the color change itself is the section break.
 */
export function ColorBlock({
  color,
  children,
  className = "",
}: {
  color: BlockColor;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={surfaces[color]}>
      <div className={`container-page py-20 md:py-24 ${className}`}>
        {children}
      </div>
    </section>
  );
}
