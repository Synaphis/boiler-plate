import { ColorBlock } from "@/components/ColorBlock";
import { Eyebrow } from "@/components/Eyebrow";
import { site } from "@/config/site";

/** Mint block — the engagement / audience models we build for. */
export function Audiences() {
  return (
    <ColorBlock color="mint">
      <div className="max-w-[60ch]">
        <Eyebrow>Who we build for</Eyebrow>
        <h2 className="display-lg mt-6">
          B2B, B2C, or somewhere in between.
        </h2>
        <p className="subhead mt-6">
          The audience changes everything, from the onboarding to the pricing
          surface to the support load. We&apos;ve shipped across the full range
          and design for the one you&apos;re actually serving.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 min-[560px]:grid-cols-2 min-[960px]:grid-cols-4">
        {site.audiences.map((item) => (
          <div key={item.tag}>
            <h3 className="card-title">{item.tag}</h3>
            <p className="body-sm mt-2">{item.body}</p>
          </div>
        ))}
      </div>
    </ColorBlock>
  );
}
