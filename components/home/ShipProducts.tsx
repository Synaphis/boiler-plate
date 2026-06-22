import { ColorBlock } from "@/components/ColorBlock";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";

/** Navy ship-products story block — the one inverse surface above the footer. */
export function ShipProducts() {
  return (
    <ColorBlock color="navy">
      <div className="max-w-[60ch]">
        <Eyebrow>Launch &amp; grow</Eyebrow>
        <h2 className="display-lg mt-6">
          Your product gets a home the day it&apos;s ready.
        </h2>
        <p className="subhead mt-6">
          Many platforms require a live website before an app can launch. So
          every product ships on its own Synetra subdomain from day one, fully
          navigable, with no waiting on a domain purchase. When it gains
          traction, we move it onto a dedicated domain of its own.
        </p>
        <div className="mt-8">
          <Button href="/products" variant="secondary">
            Browse live products
          </Button>
        </div>
      </div>
    </ColorBlock>
  );
}
