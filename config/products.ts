import type { Product } from "@/lib/types";

/* ==========================================================================
   PRODUCT REGISTRY — the single source of truth for every product surface
   (the nav "Products" dropdown, the /products grid, and the home preview).
   --------------------------------------------------------------------------
   TO ADD A PRODUCT:  append one entry below — name, description, platform.
   TO LINK A PRODUCT: set `href` to its site. It first ships on a Synetra
                      subdomain (https://<name>.synetrasystems.com); once it earns a
                      dedicated domain, just change `href` to the new URL.
   STILL IN DEV:      omit `href` (and/or set status "coming-soon") and it
                      renders as a non-clickable "Coming soon" card.
   No component code needs to change for any of the above.
   ========================================================================== */

export const products: Product[] = [
  {
    slug: "lumen",
    name: "Lumen",
    description:
      "A native iOS companion app that turns in-store foot traffic into loyalty sign-ups for boutique retailers.",
    platform: "iOS",
    href: "https://lumen.synetrasystems.com",
    status: "live",
  },
  {
    slug: "ledgerleaf",
    name: "LedgerLeaf",
    description:
      "A Shopify embedded app that reconciles payouts and inventory cost in real time, right inside the merchant admin.",
    platform: "Shopify",
    href: "https://ledgerleaf.synetrasystems.com",
    status: "live",
  },
  {
    slug: "tempo",
    name: "Tempo",
    description:
      "An Android field-service scheduler with offline-first routing for crews working outside cell coverage.",
    platform: "Android",
    href: "https://tempo.synetrasystems.com",
    status: "live",
  },
  {
    slug: "atlas-portal",
    name: "Atlas Portal",
    description:
      "A web dashboard unifying multi-channel order data into one operations view. Currently in private beta.",
    platform: "Web",
    // no href yet — renders as "Coming soon" until the subdomain goes live
    status: "coming-soon",
  },
];

/** Products that should appear as navigable links (have a destination). */
export const liveProducts = products.filter((p) => Boolean(p.href));
