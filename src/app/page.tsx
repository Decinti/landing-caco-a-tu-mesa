import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsAppButton } from "@/components/ui/whatsapp-button";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ProductSection } from "@/components/sections/product-section";
import { MenuGallerySection } from "@/components/sections/menu-gallery-section";
import { AboutChefSection } from "@/components/sections/about-chef-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pb-24">
        <HeroSection />
        <HowItWorksSection />
        <ProductSection />
        <MenuGallerySection />
        <AboutChefSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

/*
 * NOTA SOBRE IMÁGENES (WebP):
 * Conviene comprimir y convertir todas las fotos a WebP antes de subirlas a /public/images/.
 * Objetivo: ancho máximo 1920px para hero, 800–1200px para platos/galería, calidad 75–85%.
 * Herramientas: Squoosh (squoosh.app), Sharp CLI, o `npx @squoosh/cli --webp auto`.
 * Esto reduce el peso de varios MB a ~100–300 KB por imagen sin pérdida visible de calidad.
 */
