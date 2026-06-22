import { ColorBlock } from "@/components/ColorBlock";
import { Eyebrow } from "@/components/Eyebrow";

/** Coral developer / craft story block. */
export function DeveloperBlock() {
  return (
    <ColorBlock color="coral">
      <div className="max-w-[60ch]">
        <Eyebrow>Built to last</Eyebrow>
        <h2 className="display-lg mt-6">
          Code you could hand to your own team tomorrow.
        </h2>
        <p className="subhead mt-6">
          No black boxes. We write typed, documented, test-covered code and hand
          over the keys, with repositories, pipelines, and runbooks included.
          The app is yours, all the way down.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 min-[560px]:grid-cols-3">
        {[
          ["Typed", "End-to-end type safety across client and services."],
          ["Tested", "Automated suites gate every release."],
          ["Documented", "Architecture and runbooks you can actually read."],
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
