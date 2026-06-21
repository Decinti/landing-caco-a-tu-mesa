# Imágenes — CACO a tu mesa

Subí aquí las fotos reales del cliente en formato **WebP** (recomendado).

## Archivos requeridos

| Archivo | Uso | Dimensiones sugeridas |
|---------|-----|----------------------|
| `hero.webp` | Fondo del hero (plato más impactante) | 1920×1280 px |
| `product-box.webp` | Sección caja semanal | 1200×1500 px |
| `chef.webp` | Foto del chef | 900×1200 px |
| `og-image.webp` | Open Graph / redes sociales | 1200×630 px |
| `menu-01.webp` … `menu-12.webp` | Galería de platos | 800×1000 px c/u |

## Conversión a WebP

Las fotos originales suelen pesar varios MB. Antes de subirlas:

1. Redimensioná al ancho máximo indicado (no subas más de lo necesario).
2. Convertí a WebP con calidad 75–85%.
3. Herramientas: [Squoosh](https://squoosh.app), Sharp CLI, o `npx @squoosh/cli --webp auto input.jpg`.

Next.js también sirve AVIF automáticamente si el navegador lo soporta.

## Placeholders

Los archivos `.webp` actuales son placeholders generados para desarrollo.
Reemplazalos uno a uno con las fotos reales manteniendo el mismo nombre de archivo.
