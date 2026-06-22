import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { ColorBlock } from "@/components/ColorBlock";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.legalName}.`,
};

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-[color-mix(in_srgb,var(--color-ink)_15%,transparent)] py-5">
      <div className="caption opacity-70">{label}</div>
      <div className="link-emph mt-2">{children}</div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="container-page pt-20 pb-16 md:pt-24">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="display-xl mt-6 max-w-[16ch]">
          Let&apos;s talk about your app.
        </h1>
        <p className="body-lg mt-6 max-w-[54ch]">
          The fastest way to reach us is email. Tell us the platform, the goal,
          and your rough timeline, and we&apos;ll get back to you with next
          steps.
        </p>
      </section>

      <ColorBlock color="lime">
        <div className="max-w-[60ch]">
          <Eyebrow>How to reach us</Eyebrow>
          <h2 className="display-lg mt-6">Get in touch</h2>

          <div className="mt-8">
            <ContactRow label="General">
              <a href={`mailto:${site.contact.email}`} className="hover:underline">
                {site.contact.email}
              </a>
            </ContactRow>
            <ContactRow label="New projects &amp; sales">
              <a
                href={`mailto:${site.contact.salesEmail}`}
                className="hover:underline"
              >
                {site.contact.salesEmail}
              </a>
            </ContactRow>
            <ContactRow label="Phone">
              <a
                href={`tel:${site.contact.phone.replace(/[^\d+]/g, "")}`}
                className="hover:underline"
              >
                {site.contact.phone}
              </a>
            </ContactRow>
            <ContactRow label="Office">
              {site.contact.addressLine1}
              <br />
              {site.contact.addressLine2}
            </ContactRow>
            <ContactRow label="Hours">{site.contact.hours}</ContactRow>
          </div>
        </div>
      </ColorBlock>

      <div className="py-24" />
    </>
  );
}
