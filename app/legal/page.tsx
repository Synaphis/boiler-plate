import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: `Legal information for ${site.legalName}.`,
};

export default function LegalNoticePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Legal Notice"
      updated="June 22, 2026"
      intro={
        <>
          This notice sets out the company information and legal terms that apply
          to this website, operated by {site.legalName}.
        </>
      }
      sections={[
        {
          heading: "Company information",
          body: (
            <ul className="list-none space-y-1">
              <li>{site.legalName}</li>
              <li>A limited liability company</li>
              <li>{site.contact.addressLine1}</li>
              <li>{site.contact.addressLine2}</li>
              <li>{site.contact.phone}</li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="link-emph hover:underline"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              The {site.name} name, wordmark, site design, and content are the
              property of {site.legalName} unless otherwise noted, and may not be
              reproduced without permission. Product names referenced on this
              site belong to {site.name} or its clients as applicable.
            </p>
          ),
        },
        {
          heading: "Links to product sites",
          body: (
            <p>
              Products we build are hosted on their own websites, including
              subdomains of our company domain. While those products are ours,
              each site is governed by its own terms and notices. We are not
              responsible for the content of any third-party site we link to.
            </p>
          ),
        },
        {
          heading: "Limitation of liability",
          body: (
            <p>
              This website is provided &ldquo;as is.&rdquo; To the fullest extent
              permitted by law, {site.legalName} disclaims liability for any loss
              arising from use of this site or reliance on its contents.
            </p>
          ),
        },
        {
          heading: "Governing law",
          body: (
            <p>
              These terms are governed by the laws of the State of Texas, United
              States, without regard to conflict-of-laws principles.
            </p>
          ),
        },
      ]}
    />
  );
}
