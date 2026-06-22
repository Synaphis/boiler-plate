import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/config/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Applications Synetra Systems has built and shipped, each on its own site, navigable today.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="container-page pt-20 pb-12 md:pt-24">
        <Eyebrow>Our products</Eyebrow>
        <h1 className="display-xl mt-6 max-w-[16ch]">
          Apps we&apos;ve built, live on their own sites.
        </h1>
        <p className="body-lg mt-6 max-w-[56ch]">
          Each product launches on a Synetra subdomain and moves to its own
          domain as it grows. Follow any link below to visit a product&apos;s
          site directly.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 min-[960px]:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
