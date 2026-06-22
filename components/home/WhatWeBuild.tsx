import { Eyebrow } from "@/components/Eyebrow";
import { site } from "@/config/site";

export function WhatWeBuild() {
  return (
    <section className="container-page py-24">
      <Eyebrow>What we build</Eyebrow>
      <h2 className="display-lg mt-6 max-w-[18ch]">
        Apps, extensions, and the plumbing behind them.
      </h2>
      <p className="body-lg mt-6 max-w-[54ch]">
        A product is rarely just one app. We build the whole surface area, from
        the native app and the web side to the browser or store extension and
        the integrations that keep them in sync.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 min-[560px]:grid-cols-2">
        {site.buildTypes.map((item, i) => (
          <div
            key={item.name}
            className="rounded-[var(--radius-md)] bg-[var(--color-surface-soft)] p-8"
          >
            <span className="caption opacity-70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="headline mt-4">{item.name}</h3>
            <p className="body mt-3 max-w-[44ch]">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
