export const navLinks = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Menú", href: "#menu" },
  { label: "Sobre el chef", href: "#sobre-el-chef" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const howItWorksSteps = [
  {
    step: "01",
    title: "Elegís tu caja semanal",
    description:
      "Elegí entre nuestras propuestas de menú o consultanos por WhatsApp para armar la caja ideal para vos.",
    icon: "box" as const,
  },
  {
    step: "02",
    title: "El chef cocina y sella al vacío",
    description:
      "Cada plato se cocina con ingredientes frescos de temporada y se sella al vacío en sobres individuales.",
    icon: "chef" as const,
  },
  {
    step: "03",
    title: "Te llega a domicilio",
    description:
      "Recibís tu caja completa con todos los almuerzos de la semana, lista para guardar en tu heladera.",
    icon: "delivery" as const,
  },
  {
    step: "04",
    title: "Calentás y disfrutás",
    description:
      "En minutos, microondas o baño maría. Comida de restaurante, en la comodidad de tu mesa.",
    icon: "heat" as const,
  },
] as const;

export const productBullets = [
  "Sin conservantes artificiales",
  "Ingredientes frescos de temporada",
  "Sellado al vacío para mantener frescura y sabor",
  "Fácil de calentar: microondas o baño maría",
] as const;

export type MenuCategory = "Principales" | "Cremas y sopas" | "Conservas y extras";

export interface MenuDish {
  name: string;
  category: MenuCategory;
  // TODO: reemplazar con foto real del plato correspondiente
  image: string;
}

export const menuDishes: MenuDish[] = [
  { name: "", category: "Principales", image: "/images/menu-01.webp" },
  { name: "", category: "Principales", image: "/images/menu-02.webp" },
  { name: "", category: "Principales", image: "/images/menu-03.webp" },
  { name: "", category: "Principales", image: "/images/menu-04.webp" },
  { name: "", category: "Principales", image: "/images/menu-05.webp" },
  { name: "", category: "Cremas y sopas", image: "/images/menu-06.webp" },
  { name: "", category: "Cremas y sopas", image: "/images/menu-07.webp" },
  { name: "", category: "Cremas y sopas", image: "/images/menu-08.webp" },
  { name: "", category: "Cremas y sopas", image: "/images/menu-09.webp" },
  { name: "", category: "Conservas y extras", image: "/images/menu-10.webp" },
  { name: "", category: "Conservas y extras", image: "/images/menu-11.webp" },
  { name: "", category: "Conservas y extras", image: "/images/menu-12.webp" },
] as const;

export const testimonials = [
  {
    quote:
      "[TESTIMONIO PENDIENTE] — La calidad es increíble, se nota que cada plato fue pensado con cuidado.",
    name: "María G.",
  },
  {
    quote:
      "[TESTIMONIO PENDIENTE] — Por fin almuerzos de verdad durante la semana, sin sacrificar sabor ni tiempo.",
    name: "Lucas R.",
  },
  {
    quote:
      "[TESTIMONIO PENDIENTE] — El sellado al vacío mantiene todo fresco. Parece recién salido de la cocina.",
    name: "Valentina S.",
  },
] as const;

export const menuCategories: MenuCategory[] = [
  "Principales",
  "Cremas y sopas",
  "Conservas y extras",
];
