import Link from "next/link";

interface LogoProps {
  variant?: "default" | "small";
  className?: string;
}

export function Logo({ variant = "default", className = "" }: LogoProps) {
  const isSmall = variant === "small";

  return (
    <Link
      href="#"
      className={`group inline-flex flex-col leading-none text-foreground transition-opacity hover:opacity-90 ${className}`}
      aria-label="CACO a tu mesa — inicio"
    >
      <span
        className={`font-serif font-bold tracking-[0.12em] ${
          isSmall ? "text-lg" : "text-xl md:text-2xl"
        }`}
      >
        CACO
      </span>
      <span
        className={`font-sans font-light tracking-wide text-foreground/80 ${
          isSmall ? "text-[10px]" : "text-xs md:text-sm"
        }`}
      >
        a tu mesa
      </span>
    </Link>
  );
}
