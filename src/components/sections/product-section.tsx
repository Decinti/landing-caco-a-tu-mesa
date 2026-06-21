import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { productBullets } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export function ProductSection() {
  return (
    <section id="producto" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden bg-background">
              {/* TODO: reemplazar con foto real de la caja semanal y sobres — product-box.webp (renombrar src) */}
              <Image
                src="/images/product-box.webp"
                alt="Caja semanal de CACO a tu mesa con sobres sellados al vacío"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <SectionHeading
              eyebrow="El producto"
              title="Tu caja semanal"
              description={`${siteConfig.pouchesPerBox} sobres por caja — suficientes para tus almuerzos de lunes a viernes. Cada sobre es un plato completo, listo para calentar.`}
            />

            <div className="mt-8 border-l-2 border-accent pl-6">
              <p className="font-serif text-3xl text-foreground md:text-4xl">
                Desde ${siteConfig.priceFrom}
                <span className="font-sans text-lg text-foreground/60">
                  {" "}
                  / semana
                </span>
              </p>
              <p className="mt-2 font-sans text-xs text-foreground/45">
                (precio referencial, confirmar por WhatsApp)
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {productBullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 font-sans text-sm text-foreground/75 md:text-base"
                >
                  <span className="mt-2 h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <WhatsAppButton label="Consultar disponibilidad" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
