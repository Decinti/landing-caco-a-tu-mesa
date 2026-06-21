import Image from "next/image";

interface DishGridCardProps {
  name: string;
  image: string;
  category: string;
}

export function DishGridCard({ name, image, category }: DishGridCardProps) {
  const hasName = name.trim().length > 0;

  return (
    <article className="group relative aspect-[3/4] overflow-hidden bg-surface">
      <Image
        src={image}
        alt={hasName ? name : category}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent md:from-transparent md:via-transparent md:to-transparent md:transition-colors md:duration-500 md:group-hover:from-background/90 md:group-hover:via-background/30" />
      <div
        className={`absolute inset-x-0 bottom-0 p-3 sm:p-4 ${
          hasName
            ? "translate-y-0 opacity-100 md:translate-y-2 md:opacity-0 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100"
            : "opacity-100"
        }`}
      >
        <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-accent sm:text-[10px]">
          {category}
        </p>
        {hasName ? (
          <h3 className="mt-1 font-serif text-base text-foreground sm:text-lg">
            {name}
          </h3>
        ) : null}
      </div>
    </article>
  );
}
