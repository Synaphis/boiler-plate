import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms governing use of the ${site.name} website.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      updated="June 22, 2026"
      intro={
        <>
          These terms govern your use of this website operated by{" "}
          {site.legalName}. By using the site, you agree to them.
        </>
      }
      sections={[
        {
          heading: "Use of this site",
          body: (
            <p>
              You may browse this site for lawful, informational purposes. You
              agree not to misuse it, attempt to disrupt it, or access it in a
              way that violates applicable law.
            </p>
          ),
        },
        {
          heading: "No warranty",
          body: (
            <p>
              Content on this site is provided for general information about{" "}
              {site.name} and its products and may change without notice. We make
              no warranty that the site will be uninterrupted, error-free, or
              that the information is complete or current.
            </p>
          ),
        },
        {
          heading: "Engagements are separate",
          body: (
            <p>
              Nothing on this website constitutes an offer or a contract. Any
              project {site.name} undertakes is governed by a separate written
              agreement that controls in the event of any conflict with these
              terms.
            </p>
          ),
        },
        {
          heading: "Third-party products and links",
          body: (
            <p>
              Our products operate on their own websites and may carry their own
              terms. Links from this site to those products or to third parties
              are provided for convenience and do not imply endorsement of, or
              responsibility for, their content.
            </p>
          ),
        },
        {
          heading: "Changes to these terms",
          body: (
            <p>
              We may update these terms from time to time. Continued use of the
              site after an update means you accept the revised terms.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about these terms can be sent to{" "}
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
