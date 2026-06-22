import type { ReactNode } from "react";
import { Eyebrow } from "@/components/Eyebrow";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

/** Long-form legal layout on white canvas — shared by privacy / legal / terms. */
export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <article className="container-page py-20 md:py-24">
      <div className="max-w-[68ch]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display-lg mt-6">{title}</h1>
        <p className="caption mt-4 opacity-70">Last updated {updated}</p>
        <p className="body-lg mt-8">{intro}</p>

        <div className="mt-12 space-y-10">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="headline">{section.heading}</h2>
              <div className="body mt-3 space-y-4">{section.body}</div>
            </section>
          ))}
        </div>

        <p className="body-sm mt-16 rounded-[var(--radius-md)] bg-[var(--color-surface-soft)] p-6">
          This page is a plain-language template provided for convenience and is
          not legal advice. Review and adapt it with qualified counsel before
          relying on it.
        </p>
      </div>
    </article>
  );
}
