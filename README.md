# Synetra Systems

Marketing website for **Synetra Systems LLC**, an application studio that builds
products for iOS, Android, Shopify, the web, and other platforms.

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4. The design is a
monochrome editorial system punctuated by full-bleed pastel color-block sections.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

Content is config-driven so it can change without touching components:

- `config/products.ts` — the product registry. Each product surfaces in the nav
  dropdown, the `/products` grid, and the home preview. A product first ships on
  a company subdomain (e.g. `https://lumen.synetrasystems.com`); when it earns a
  dedicated domain, change the single `href` field. Omit `href` to show it as
  "Coming soon".
- `config/site.ts` — company identity: name, contact details, platforms, build
  types, audiences, marketplaces, nav, and footer columns.

## Pages

Home, Products, About, Contact, Privacy, Legal, Terms.
