import type { FooterColumn, NavItem } from "@/lib/types";

/* ==========================================================================
   SITE IDENTITY — all company-level branding lives here so it can be swapped
   in one place. Product links live separately in config/products.ts.
   ========================================================================== */

export const site = {
  name: "Synetra Systems",
  /** Wordmark shown in the nav + footer. */
  wordmark: "Synetra Systems",
  legalName: "Synetra Systems LLC",
  /** Year the LLC was formed — used in legal boilerplate. */
  established: 2021,

  contact: {
    email: "hello@synetrasystems.com",
    salesEmail: "sales@synetrasystems.com",
    phone: "+1 (888) 788-7812",
    addressLine1: "525 Randall Ave Ste 100",
    addressLine2: "Cheyenne, WY 82001",
    location: "Cheyenne, Wyoming, USA",
    hours: "Monday to Friday, 9am to 6pm MT",
  },

  /** Platforms the company builds for — surfaced on home. */
  platforms: [
    "iOS",
    "Android",
    "Shopify",
    "Web",
    "macOS",
    "Windows",
    "iPadOS",
    "watchOS",
  ] as const,

  /** The kinds of software we build (the "what"). */
  buildTypes: [
    {
      name: "Native mobile apps",
      body: "Swift and Kotlin apps built to each store's review bar, not ported shells.",
    },
    {
      name: "Web apps & dashboards",
      body: "Fast, accessible product UIs, customer portals, and internal tools.",
    },
    {
      name: "Extensions & add-ons",
      body: "Chrome and Edge browser extensions plus Shopify app extensions that slot into existing workflows.",
    },
    {
      name: "Integrations & APIs",
      body: "Backends, webhooks, and third-party integrations that tie the whole system together.",
    },
  ],

  /** Who the work is for (the engagement / audience models). */
  audiences: [
    {
      tag: "B2B",
      body: "Tools your customers' teams sign into and rely on every working day.",
    },
    {
      tag: "B2C",
      body: "Consumer apps that have to earn the install, the open, and the habit.",
    },
    {
      tag: "B2B2C",
      body: "Platforms your partners deploy onward to their own end users.",
    },
    {
      tag: "Internal",
      body: "Operational software your own team runs the business on.",
    },
  ],

  /** Storefronts / marketplaces we publish to as a registered developer. */
  marketplaces: [
    { name: "Apple App Store", note: "iOS & iPadOS" },
    { name: "Google Play", note: "Android" },
    { name: "Shopify App Store", note: "Apps & extensions" },
    { name: "Chrome Web Store", note: "Browser extensions" },
    { name: "Microsoft Edge Add-ons", note: "Browser extensions" },
    { name: "Mac App Store", note: "macOS" },
    { name: "Microsoft Store", note: "Windows" },
    { name: "Direct & enterprise", note: "Self-hosted / MDM" },
  ],

  /** Primary nav (the Products dropdown is handled separately in TopNav). */
  nav: [
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],

  footerColumns: [
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Products", href: "/products" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Build with us",
      links: [
        { label: "iOS apps", href: "/products" },
        { label: "Android apps", href: "/products" },
        { label: "Shopify apps", href: "/products" },
        { label: "Web apps", href: "/products" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Legal", href: "/legal" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ] satisfies FooterColumn[],
} as const;
