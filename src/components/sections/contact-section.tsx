import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section id="contacto" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <FadeIn>
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-accent">
            Contacto
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl lg:text-6xl">
            Tu mesa merece
            <br />
            comida de verdad
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed text-foreground/65 md:text-lg">
            Escríbenos por WhatsApp y armamos juntos tu caja semanal. Sin
            formularios, sin esperas: directo del chef a tu puerta.
          </p>

          <div className="mt-10 flex justify-center px-0 sm:px-0">
            <WhatsAppButton label="Pedir por WhatsApp" size="lg" fullWidth className="max-w-md sm:w-auto sm:max-w-none" />
          </div>

          <div className="mt-16 grid gap-8 border-t border-foreground/10 pt-12 sm:grid-cols-3">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-foreground/40">
                Zona de despacho
              </p>
              <p className="mt-2 font-sans text-sm text-foreground/75">
                {siteConfig.deliveryZone}
              </p>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-foreground/40">
                Días de entrega
              </p>
              <p className="mt-2 font-sans text-sm text-foreground/75">
                {siteConfig.deliveryDays}
              </p>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-foreground/40">
                Instagram
              </p>
              <Link
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-sans text-sm text-foreground/75 transition-colors hover:text-accent"
              >
                {siteConfig.instagramHandle}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
