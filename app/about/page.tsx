import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { ColorBlock } from "@/components/ColorBlock";
import { Button } from "@/components/Button";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.legalName} is an application studio building products across platforms.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="container-page pt-20 pb-16 md:pt-24">
        <Eyebrow>About us</Eyebrow>
        <h1 className="display-xl mt-6 max-w-[16ch]">
          We&apos;re a studio that ships.
        </h1>
        <p className="body-lg mt-6 max-w-[56ch]">
          {site.name} is an application studio. Companies come to us when they
          need a real product on a real platform, whether that&apos;s the App
          Store, Google Play, the Shopify App Store, or the open web, and they
          need it built by people who treat those platforms as a craft, not a
          checkbox.
        </p>
      </section>

      <ColorBlock color="lilac">
        <div className="max-w-[60ch]">
          <Eyebrow>What we believe</Eyebrow>
          <h2 className="display-lg mt-6">
            The platform is the product&apos;s first impression.
          </h2>
          <p className="subhead mt-6">
            An app that ignores its platform&apos;s conventions feels off before
            a user can say why. We build apps that belong where they live, and
            give every one its own website so it can stand on its own from the
            first day it&apos;s reviewed.
          </p>
        </div>
      </ColorBlock>

      <section className="container-page py-24">
        <div className="grid grid-cols-1 gap-10 min-[760px]:grid-cols-3">
          {[
            [
              "Platform-native",
              "Each build respects the guidelines, review process, and feel of its platform.",
            ],
            [
              "Systems over one-offs",
              "Shared foundations mean every project we ship makes the next one cheaper.",
            ],
            [
              "Yours to keep",
              "You own the code, the pipelines, and the docs. No lock-in, no black boxes.",
            ],
          ].map(([title, body]) => (
            <div key={title}>
              <h3 className="headline">{title}</h3>
              <p className="body mt-3">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 min-[480px]:flex-row">
          <Button href="/contact" variant="primary">
            Work with us
          </Button>
          <Button href="/products" variant="secondary">
            See our products
          </Button>
        </div>
      </section>
    </>
  );
}
