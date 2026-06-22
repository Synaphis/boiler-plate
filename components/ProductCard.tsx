import type { Product } from "@/lib/types";

function CardInner({ product }: { product: Product }) {
  const isLive = Boolean(product.href);
  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <span className="caption text-[var(--color-ink)]">
          {product.platform}
        </span>
        <span className="caption text-[var(--color-ink)]">
          {isLive ? "Live" : "Coming soon"}
        </span>
      </div>

      <h3 className="card-title mt-6">{product.name}</h3>
      <p className="body-sm mt-2">{product.description}</p>

      <div className="link-emph mt-6 flex items-center gap-2">
        {isLive ? (
          <>
            <span>Visit site</span>
            <span aria-hidden="true">→</span>
          </>
        ) : (
          <span aria-hidden="true">In development</span>
        )}
      </div>
    </>
  );
}

const tile =
  "flex h-full flex-col rounded-[var(--radius-md)] bg-[var(--color-surface-soft)] p-4 sm:p-6";

/**
 * Renders a single product. If the product has an `href` it links out to its
 * own site (subdomain today, dedicated domain later); otherwise it renders as
 * a non-interactive "Coming soon" tile.
 */
export function ProductCard({ product }: { product: Product }) {
  if (product.href) {
    return (
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${tile} transition-transform duration-150 hover:-translate-y-0.5`}
      >
        <CardInner product={product} />
      </a>
    );
  }

  return (
    <div className={`${tile} opacity-90`} aria-disabled="true">
      <CardInner product={product} />
    </div>
  );
}
