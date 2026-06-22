import { Hero } from "@/components/home/Hero";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { Audiences } from "@/components/home/Audiences";
import { Platforms } from "@/components/home/Platforms";
import { SystemsBlock } from "@/components/home/SystemsBlock";
import { Marketplaces } from "@/components/home/Marketplaces";
import { ShipProducts } from "@/components/home/ShipProducts";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { DeveloperBlock } from "@/components/home/DeveloperBlock";
import { ClosingCTA } from "@/components/home/ClosingCTA";

export default function HomePage() {
  return (
    <>
      {/* Color blocks (mint / lime / navy / coral) are always separated by white canvas. */}
      <Hero />
      <WhatWeBuild />
      <Audiences />
      <Platforms />
      <SystemsBlock />
      <Marketplaces />
      <ShipProducts />
      <ProductsPreview />
      <DeveloperBlock />
      <ClosingCTA />
    </>
  );
}
