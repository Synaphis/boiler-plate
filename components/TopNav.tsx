"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/config/products";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-hairline)] bg-[var(--color-canvas)]">
      <nav className="container-page flex h-14 items-center justify-between gap-4">
        {/* Logo lockup */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop primary nav */}
        <div className="hidden items-center gap-1 min-[960px]:flex">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products"
              className="body-sm flex items-center gap-1 rounded-[var(--radius-full)] px-3 py-2"
            >
              Products
              <span
                aria-hidden="true"
                className={`text-[10px] transition-transform ${
                  productsOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </Link>

            {productsOpen && (
              <div className="absolute left-0 top-full w-[340px] pt-2">
                <div className="rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-2 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                  {products.map((product) => {
                    const content = (
                      <>
                        <div className="flex items-center justify-between gap-2">
                          <span className="body-sm font-[480]">
                            {product.name}
                          </span>
                          <span className="caption">
                            {product.href ? product.platform : "Soon"}
                          </span>
                        </div>
                        <p className="body-sm mt-1 line-clamp-2 opacity-80">
                          {product.description}
                        </p>
                      </>
                    );
                    return product.href ? (
                      <a
                        key={product.slug}
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-[var(--radius-sm)] p-3 hover:bg-[var(--color-surface-soft)]"
                      >
                        {content}
                      </a>
                    ) : (
                      <div
                        key={product.slug}
                        className="block rounded-[var(--radius-sm)] p-3 opacity-70"
                      >
                        {content}
                      </div>
                    );
                  })}
                  <Link
                    href="/products"
                    className="body-sm block rounded-[var(--radius-sm)] p-3 font-[480] hover:bg-[var(--color-surface-soft)]"
                  >
                    View all products →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="body-sm rounded-[var(--radius-full)] px-3 py-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="body-sm rounded-[var(--radius-full)] px-3 py-2"
          >
            Contact
          </Link>
        </div>

        {/* Right-anchored CTAs (visible above 560px) */}
        <div className="flex items-center gap-2">
          <span className="hidden min-[560px]:inline-flex">
            <Button href="/contact" variant="secondary">
              Contact sales
            </Button>
          </span>
          <span className="hidden min-[560px]:inline-flex">
            <Button href="/contact" variant="primary">
              Get started
            </Button>
          </span>

          {/* Hamburger — below 960px */}
          <button
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-[var(--radius-full)] bg-[var(--color-surface-soft)] min-[960px]:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="text-lg leading-none">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="min-[960px]:hidden">
          <div className="container-page flex flex-col gap-1 border-t border-[var(--color-hairline)] py-4">
            <Link
              href="/products"
              className="link-emph py-3"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="link-emph py-3"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="link-emph py-3"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="caption mt-4 mb-1 opacity-70">Our products</div>
            {products.map((product) =>
              product.href ? (
                <a
                  key={product.slug}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-sm flex items-center justify-between py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{product.name}</span>
                  <span aria-hidden="true">→</span>
                </a>
              ) : (
                <div
                  key={product.slug}
                  className="body-sm flex items-center justify-between py-2 opacity-60"
                >
                  <span>{product.name}</span>
                  <span className="caption">Soon</span>
                </div>
              )
            )}

            <div className="mt-4 flex flex-col gap-2 min-[560px]:hidden">
              <Button href="/contact" variant="secondary" fullWidth>
                Contact sales
              </Button>
              <Button href="/contact" variant="primary" fullWidth>
                Get started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
