import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} handles personal information.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      updated="June 22, 2026"
      intro={
        <>
          {site.legalName} (&ldquo;{site.name},&rdquo; &ldquo;we,&rdquo;
          &ldquo;us&rdquo;) respects your privacy. This policy explains what we
          collect through this website and how we use it.
        </>
      }
      sections={[
        {
          heading: "Information we collect",
          body: (
            <p>
              When you contact us by email, we receive the information you choose
              to send, such as your name, email address, and message. This
              website itself does not include contact forms or account
              registration. We may collect basic, aggregated analytics about how
              the site is used.
            </p>
          ),
        },
        {
          heading: "How we use information",
          body: (
            <p>
              We use the information you send to respond to your inquiry, scope
              potential work, and maintain our business records. We do not sell
              your personal information.
            </p>
          ),
        },
        {
          heading: "Our products",
          body: (
            <p>
              Products built by {site.name} are operated on their own websites,
              each with its own privacy practices. This policy covers only this
              marketing site; please review the privacy notice of any individual
              product you use.
            </p>
          ),
        },
        {
          heading: "Data retention",
          body: (
            <p>
              We retain correspondence for as long as needed to serve the purpose
              it was collected for and to meet our legal and accounting
              obligations, then delete or anonymize it.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <p>
              Depending on where you live, you may have the right to access,
              correct, or delete the personal information we hold about you. To
              make a request, email{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="link-emph hover:underline"
              >
                {site.contact.email}
              </a>
              .
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about this policy can be sent to{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="link-emph hover:underline"
              >
                {site.contact.email}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
