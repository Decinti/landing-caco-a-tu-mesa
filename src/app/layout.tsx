import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://cacoatumesa.com",
  ),
  title: "CACO a tu mesa | Comida de chef sellada al vacío",
  description:
    "Comida casera de autor preparada por chef privado, sellada al vacío. Una caja semanal con almuerzos listos para calentar y disfrutar.",
  keywords: [
    "comida casera",
    "chef privado",
    "sellado al vacío",
    "caja semanal",
    "almuerzos",
    "CACO a tu mesa",
  ],
  openGraph: {
    title: "CACO a tu mesa | Comida de chef sellada al vacío",
    description:
      "Comida casera de autor preparada por chef privado, sellada al vacío. Una caja semanal con almuerzos listos para calentar.",
    type: "website",
    locale: "es_CL",
    // TODO: reemplazar con URL de producción real
    url: "https://cacoatumesa.com",
    siteName: "CACO a tu mesa",
    images: [
      {
        // TODO: reemplazar con foto real para compartir en redes — og-image.webp (1200x630, renombrar url)
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "CACO a tu mesa — Comida de chef sellada al vacío",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CACO a tu mesa | Comida de chef sellada al vacío",
    description:
      "Comida casera de autor preparada por chef privado, sellada al vacío.",
    images: ["/images/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
