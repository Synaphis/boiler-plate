import { Eyebrow } from "@/components/Eyebrow";
import { site } from "@/config/site";

/** Storefronts we publish to as a registered developer. */
export function Marketplaces() {
  return (
    <section className="container-page py-24">
      <Eyebrow>Where we publish</Eyebrow>
      <h2 className="display-lg mt-6 max-w-[20ch]">
        A registered developer on the stores that matter.
      </h2>
      <p className="body-lg mt-6 max-w-[54ch]">
        We carry the developer accounts, signing identities, and review history
        on every major marketplace, so your product ships under a trusted
        publisher from day one, extensions included.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-hairline)] min-[560px]:grid-cols-2 min-[960px]:grid-cols-4">
        {site.marketplaces.map((market) => (
          <div
            key={market.name}
            className="bg-[var(--color-canvas)] p-6"
          >
            <p className="body-sm font-[480]">{market.name}</p>
            <p className="caption mt-2 opacity-70">{market.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
