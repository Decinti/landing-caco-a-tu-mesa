import type { ReactNode } from "react";

type StepIcon = "box" | "chef" | "delivery" | "heat";

interface StepCardProps {
  step: string;
  title: string;
  description: string;
  icon: StepIcon;
}

const iconMap: Record<StepIcon, ReactNode> = {
  box: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
      <path d="M3 8l9 5 9-5M12 13v8" />
    </svg>
  ),
  chef: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M6 13c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4v1H6v-1z" />
      <path d="M8 14v3M12 14v3M16 14v3" />
      <path d="M12 3v6M9 6h6" />
    </svg>
  ),
  delivery: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <rect x="1" y="6" width="15" height="10" rx="1" />
      <path d="M16 10h3l2 3v3h-5v-6z" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  ),
  heat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M12 22c4-2.5 6-5.5 6-9 0-3.3-2.7-6-6-6s-6 2.7-6 6c0 3.5 2 6.5 6 9z" />
      <path d="M12 13c1.1 0 2-.9 2-2 0-1.5-2-4-2-4s-2 2.5-2 4c0 1.1.9 2 2 2z" />
    </svg>
  ),
};

export function StepCard({ step, title, description, icon }: StepCardProps) {
  return (
    <article className="group flex w-full flex-col border border-foreground/10 bg-surface/50 p-6 transition-colors duration-300 hover:border-accent/30 sm:p-7 md:p-8">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-accent">{iconMap[icon]}</span>
        <span className="font-sans text-xs tracking-[0.2em] text-foreground/40">
          {step}
        </span>
      </div>
      <h3 className="mb-3 font-serif text-xl text-foreground">{title}</h3>
      <p className="font-sans text-sm leading-relaxed text-foreground/65">
        {description}
      </p>
    </article>
  );
}
