import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";

export function Hero() {
  return (
    <section className="container-page pt-20 pb-16 md:pt-28 md:pb-24">
      <Eyebrow>Application studio</Eyebrow>
      <h1 className="display-xl mt-6 max-w-[16ch]">
        We build the apps your platform asks for.
      </h1>
      <p className="body-lg mt-6 max-w-[52ch]">
        Synetra Systems designs and ships applications for iOS, Android,
        Shopify, and the web. We work with companies that need a real product,
        fast. Every app launches on its own site, ready to grow into its own
        domain.
      </p>
      <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row">
        <Button href="/contact" variant="primary">
          Get started
        </Button>
        <Button href="/products" variant="secondary">
          See our products
        </Button>
      </div>
    </section>
  );
}
