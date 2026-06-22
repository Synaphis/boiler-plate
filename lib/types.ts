export type Platform =
  | "iOS"
  | "Android"
  | "Shopify"
  | "Web"
  | "macOS"
  | "Windows"
  | (string & {});

export type ProductStatus = "live" | "coming-soon";

export type Product = {
  /** url-safe id, also used as a stable React key */
  slug: string;
  name: string;
  description: string;
  platform: Platform;
  /**
   * The product's own website. Starts life on a company subdomain
   * (e.g. "https://lumen.synetrasystems.com"). When a product gains traction and a
   * dedicated domain is purchased, swap this single string to the new domain
   * (e.g. "https://lumen.com") — no other code changes.
   * Omit entirely while the product is still in development.
   */
  href?: string;
  status?: ProductStatus;
};

export type NavItem = {
  label: string;
  href: string;
};

export type FooterColumn = {
  heading: string;
  links: NavItem[];
};
