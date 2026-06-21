"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [enableParallax, setEnableParallax] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    function updateParallax() {
      setEnableParallax(mediaQuery.matches);
    }

    updateParallax();
    mediaQuery.addEventListener("change", updateParallax);
    return () => mediaQuery.removeEventListener("change", updateParallax);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: enableParallax ? imageY : 0 }}
      >
        {/* TODO: reemplazar con foto real del plato más impactante — hero.webp (renombrar src) */}
        <Image
          src="/images/hero.webp"
          alt="Plato de autor de CACO a tu mesa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-accent">
            Chef privado · Sellado al vacío
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Comida de chef,
            <br />
            <span className="text-foreground/90">lista en tu mesa</span>
          </h1>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-foreground/75 md:text-lg">
            Comida casera de autor, sellada al vacío en sobres individuales.
            Una semana entera de almuerzos en una sola caja — calienta, sirve y
            disfruta.
          </p>
          <div className="mt-10">
            <WhatsAppButton label="Pide tu caja semanal" size="lg" fullWidth className="sm:w-auto" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:bottom-8 sm:block"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-foreground/40">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="block h-8 w-px bg-accent/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
