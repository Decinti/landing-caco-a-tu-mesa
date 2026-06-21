import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { StepCard } from "@/components/ui/step-card";
import { howItWorksSteps } from "@/lib/content";

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Proceso"
            title="Cómo funciona"
            description="De la cocina del chef a tu mesa, en cuatro pasos simples. Sin complicaciones, solo buena comida."
          />
        </FadeIn>

        <StaggerContainer className="mt-14 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:mt-16 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible lg:grid-cols-4">
          {howItWorksSteps.map((step) => (
            <StaggerItem key={step.step} className="snap-start">
              <StepCard
                step={step.step}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
