import Link from "next/link";
import { site } from "@/config/site";
import { LogoMark } from "@/components/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-canvas)]">
      <div className="container-page border-t border-[var(--color-hairline)] py-24">
        <div className="grid grid-cols-1 gap-12 min-[560px]:grid-cols-2 min-[960px]:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Wordmark + line */}
          <div>
            <LogoMark className="mb-5 h-5 w-auto" />
            <div className="display-lg leading-none">{site.wordmark}</div>
            <p className="body-sm mt-4 max-w-[34ch]">
              Applications for iOS, Android, Shopify, and every platform our
              clients sell on.
            </p>
          </div>

          {/* Link columns */}
          {site.footerColumns.map((column) => (
            <div key={column.heading}>
              <h4 className="caption opacity-70">{column.heading}</h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={`${column.heading}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="body-sm hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="mt-16 flex flex-col gap-3 border-t border-[var(--color-hairline-soft)] pt-8 min-[560px]:flex-row min-[560px]:items-center min-[560px]:justify-between">
          <p className="caption opacity-70">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="caption hover:underline">
              Privacy
            </Link>
            <Link href="/legal" className="caption hover:underline">
              Legal
            </Link>
            <Link href="/terms" className="caption hover:underline">
              Terms
            </Link>
            <a
              href={`mailto:${site.contact.email}`}
              className="caption hover:underline"
            >
              {site.contact.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
