import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Testimonios"
            title="Lo que dicen quienes ya probaron"
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <blockquote className="flex h-full flex-col justify-between border border-foreground/10 bg-surface/40 p-8">
                <p className="font-sans text-sm leading-relaxed text-foreground/70 italic md:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 font-sans text-xs uppercase tracking-[0.15em] text-accent">
                  — {testimonial.name}
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
