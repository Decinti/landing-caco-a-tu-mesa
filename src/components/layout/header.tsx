"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { navLinks } from "@/lib/content";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "border-b border-foreground/10 bg-background/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <Logo />

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton size="sm" />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-px w-6 bg-foreground transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-transform duration-300 ${
              isMobileMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="fixed inset-0 top-[72px] z-30 bg-background/98 px-5 py-8 lg:hidden">
          <nav className="flex flex-col gap-6" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-2xl text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <WhatsAppButton className="mt-4" fullWidth />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
