import { Eyebrow } from "@/components/Eyebrow";
import { site } from "@/config/site";

const blurbs: Record<string, string> = {
  iOS: "Native Swift apps tuned for the App Store review bar.",
  Android: "Kotlin builds that hold up across the device spectrum.",
  Shopify: "Embedded apps that live inside the merchant admin.",
  Web: "Fast, accessible web apps and dashboards.",
  macOS: "Desktop-class tools for power users.",
  Windows: "Cross-platform reach without cutting corners.",
  iPadOS: "Layouts that earn the larger canvas.",
  watchOS: "Glanceable companions for on-the-go moments.",
};

export function Platforms() {
  return (
    <section className="container-page py-24">
      <Eyebrow>Where we ship</Eyebrow>
      <h2 className="display-lg mt-6 max-w-[18ch]">
        One studio, every platform your customers use.
      </h2>
      <p className="body-lg mt-6 max-w-[54ch]">
        We meet platforms on their own terms, respecting their guidelines, their
        review processes, and their distribution. You get an app that belongs
        there, not a port that merely runs there.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 min-[960px]:grid-cols-4">
        {site.platforms.map((platform) => (
          <div
            key={platform}
            className="rounded-[var(--radius-md)] bg-[var(--color-surface-soft)] p-6"
          >
            <h3 className="headline">{platform}</h3>
            <p className="body-sm mt-2">
              {blurbs[platform] ?? "Built to platform standard."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
