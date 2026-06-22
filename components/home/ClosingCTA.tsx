import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";

export function ClosingCTA() {
  return (
    <section className="container-page pb-24">
      <div className="flex flex-col items-start gap-6 border-t border-[var(--color-hairline)] pt-16">
        <Eyebrow>Start a project</Eyebrow>
        <h2 className="display-lg max-w-[18ch]">
          Tell us what you need to ship.
        </h2>
        <p className="body-lg max-w-[50ch]">
          Whether it&apos;s an iOS launch, a Shopify integration, or a web app
          from scratch, let&apos;s scope it together.
        </p>
        <div className="flex flex-col gap-3 min-[480px]:flex-row">
          <Button href="/contact" variant="primary">
            Get started
          </Button>
          <Button href="/contact" variant="secondary">
            Contact sales
          </Button>
        </div>
      </div>
    </section>
  );
}
