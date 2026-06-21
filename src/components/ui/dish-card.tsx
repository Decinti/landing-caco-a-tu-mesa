import Image from "next/image";

interface DishCardProps {
  name: string;
  image: string;
  category?: string;
  priority?: boolean;
}

export function DishCard({ name, image, category, priority = false }: DishCardProps) {
  return (
    <article className="group relative aspect-[4/5] shrink-0 snap-center overflow-hidden bg-surface sm:w-[280px] md:w-[320px]">
      {/* TODO: reemplazar con foto real del plato — ver /public/images/menu-XX.webp */}
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 640px) 85vw, 320px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading={priority ? undefined : "lazy"}
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
        {category ? (
          <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.2em] text-accent">
            {category}
          </p>
        ) : null}
        <h3 className="font-serif text-xl text-foreground">{name}</h3>
      </div>
    </article>
  );
}

interface DishGridCardProps {
  name: string;
  image: string;
  category: string;
}

export function DishGridCard({ name, image, category }: DishGridCardProps) {
  return (
    <article className="group relative aspect-[3/4] overflow-hidden bg-surface">
      {/* TODO: reemplazar con foto real del plato */}
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/40" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent">
          {category}
        </p>
        <h3 className="mt-1 font-serif text-lg text-foreground">{name}</h3>
      </div>
    </article>
  );
}
