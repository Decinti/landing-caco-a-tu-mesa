interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 font-sans text-base leading-relaxed text-foreground/70 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
