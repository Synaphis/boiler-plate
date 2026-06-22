import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/config/products";

/** Home preview of the product registry (config-driven). */
export function ProductsPreview() {
  const preview = products.slice(0, 3);

  return (
    <section className="container-page py-24">
      <div className="flex flex-col gap-6 min-[760px]:flex-row min-[760px]:items-end min-[760px]:justify-between">
        <div>
          <Eyebrow>Explore what we&apos;ve made</Eyebrow>
          <h2 className="display-lg mt-6 max-w-[16ch]">
            Products we&apos;ve shipped for our clients.
          </h2>
        </div>
        <Button href="/products" variant="secondary">
          View all products
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 min-[960px]:grid-cols-3">
        {preview.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
