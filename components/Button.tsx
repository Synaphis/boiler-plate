import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "magenta";

const base =
  "btn-type inline-flex items-center justify-center rounded-[var(--radius-pill)] transition-transform duration-150 active:scale-[0.97] select-none";

const variants: Record<Variant, string> = {
  // black pill — the single primary action across the whole site
  primary: "bg-[var(--color-ink)] text-[var(--color-inverse-ink)]",
  // white pill — the visual counterpart to primary (hairline keeps it legible on white canvas)
  secondary:
    "bg-[var(--color-canvas)] text-[var(--color-ink)] border border-[var(--color-hairline)]",
  // saturated promo pill — used scarcely, one per page at most
  magenta: "bg-[var(--color-accent-magenta)] text-[var(--color-inverse-ink)]",
};

// asymmetric vertical padding on secondary optically centers the type in the pill
const padding: Record<Variant, string> = {
  primary: "px-5 pt-[10px] pb-[10px]",
  secondary: "px-[18px] pt-2 pb-[10px]",
  magenta: "px-[18px] pt-[10px] pb-[10px]",
};

type CommonProps = {
  variant?: Variant;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    fullWidth = false,
    children,
    className = "",
  } = props;

  const classes = [
    base,
    variants[variant],
    padding[variant],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    const { href, external, variant: _v, fullWidth: _f, ...rest } = props;
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Link href={href} className={classes} {...externalProps} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, fullWidth: _f, href: _h, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
