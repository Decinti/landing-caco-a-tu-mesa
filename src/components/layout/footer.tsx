import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { navLinks } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 bg-background py-12 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Logo variant="small" />

          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Enlaces del footer"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-xs uppercase tracking-[0.12em] text-foreground/50 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de CACO a tu mesa"
            className="text-foreground/60 transition-colors hover:text-accent"
          >
            <InstagramIcon className="h-5 w-5" />
          </Link>
        </div>

        <div className="flex flex-col gap-2 border-t border-foreground/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-xs text-foreground/40">
            © {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-foreground/40">
            Comida de autor · Sellada al vacío
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
