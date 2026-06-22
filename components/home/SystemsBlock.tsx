import { ColorBlock } from "@/components/ColorBlock";
import { Eyebrow } from "@/components/Eyebrow";

/** Lime systems story block. */
export function SystemsBlock() {
  return (
    <ColorBlock color="lime">
      <div className="max-w-[60ch]">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="display-lg mt-6">
          A system, not a one-off. So your app keeps shipping.
        </h2>
        <p className="subhead mt-6">
          We build on a shared foundation of design tokens, CI, release
          pipelines, and analytics, so version two costs a fraction of version
          one. The work compounds instead of starting over.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 min-[560px]:grid-cols-3">
        {[
          ["Design", "A token-driven UI kit that scales across platforms."],
          ["Build", "Typed, tested code with continuous delivery from day one."],
          ["Ship", "Store submission, monitoring, and iteration handled."],
        ].map(([title, body]) => (
          <div key={title}>
            <h3 className="headline">{title}</h3>
            <p className="body-sm mt-2">{body}</p>
          </div>
        ))}
      </div>
    </ColorBlock>
  );
}
