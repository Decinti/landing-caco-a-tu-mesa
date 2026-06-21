import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutChefSection() {
  return (
    <section id="sobre-el-chef" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="relative aspect-[3/4] overflow-hidden bg-background">
              {/* TODO: reemplazar con foto real del chef — chef.webp (renombrar src) */}
              <Image
                src="/images/chef.webp"
                alt="Chef de CACO a tu mesa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <SectionHeading
              eyebrow="Sobre el chef"
              title="Cocina con alma y temporada"
            />
            <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-foreground/75 md:text-lg">
              <p>
                {/* TODO: reemplazar con texto real del cliente */}
                [TEXTO PLACEHOLDER] Con más de una década recorriendo cocinas
                de restaurante y experiencias privadas, el chef detrás de CACO
                encontró en la comida casera de autor una forma de acercar lo
                mejor de la gastronomía a la mesa de todos los días.
              </p>
              <p>
                Cada plato nace de ingredientes frescos de temporada, técnicas
                de cocina profesional y una filosofía clara: comida honesta,
                sin atajos, que respete el sabor y el tiempo de quien la
                disfruta.
              </p>
              <p>
                CACO a tu mesa nació de una pregunta simple — ¿y si pudieras
                comer como en un restaurante de autor, todos los días, sin
                perder horas en la cocina? La respuesta está en cada sobre
                sellado al vacío.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
