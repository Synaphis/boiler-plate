import { site } from "@/config/site";

/** The Pair mark: a circle beside a rounded square. Inherits `currentColor`. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 42 18"
      fill="currentColor"
      role="img"
      aria-label={`${site.name} logo`}
      className={className}
    >
      <circle cx="9" cy="9" r="9" />
      <rect x="24" y="0" width="18" height="18" rx="5" />
    </svg>
  );
}

/** Full lockup: the Pair mark next to the wordmark. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-[15px] w-auto" />
      <span className="text-[22px] font-[640] tracking-[-0.5px]">
        {site.wordmark}
      </span>
    </span>
  );
}
