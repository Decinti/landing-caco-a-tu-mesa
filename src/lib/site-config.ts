export const siteConfig = {
  name: "CACO a tu mesa",
  title: "CACO a tu mesa | Comida de chef sellada al vacío",
  description:
    "Comida casera de autor preparada por chef privado, sellada al vacío. Una caja semanal con almuerzos listos para calentar y disfrutar.",
  url: "https://cacoatumesa.com",
  instagram: "https://www.instagram.com/cacoatumesa",
  instagramHandle: "@cacoatumesa",
  whatsappNumber: "5491112345678",
  whatsappMessage:
    "Hola, quiero pedir mi caja semanal de CACO",
  deliveryZone: "[ZONA]",
  deliveryDays: "[DIAS]",
  pouchesPerBox: "[NUMERO_SOBRES]",
  priceFrom: "[PRECIO]",
} as const;

export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
