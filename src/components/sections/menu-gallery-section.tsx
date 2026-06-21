"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { DishGridCard } from "@/components/ui/dish-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { menuCategories, menuDishes, type MenuCategory } from "@/lib/content";

export function MenuGallerySection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "Todos">(
    "Todos",
  );

  const filteredDishes =
    activeCategory === "Todos"
      ? menuDishes
      : menuDishes.filter((dish) => dish.category === activeCategory);

  return (
    <section id="menu" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Menú"
            title="Platos de la semana"
            description="Cada semana una propuesta distinta, pensada con ingredientes de temporada. Los platos son referenciales; el menú real se confirma por WhatsApp."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            {(["Todos", ...menuCategories] as const).map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`border px-3 py-2 font-sans text-[10px] uppercase tracking-[0.12em] transition-all duration-300 sm:px-4 sm:text-xs ${
                  activeCategory === category
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-foreground/15 text-foreground/50 hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDishes.map((dish) => (
              <DishGridCard
                key={dish.image}
                name={dish.name}
                image={dish.image}
                category={dish.category}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
