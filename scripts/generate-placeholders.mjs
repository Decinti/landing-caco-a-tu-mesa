/**
 * Genera placeholders WebP para desarrollo.
 * Ejecutar: node scripts/generate-placeholders.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, "..", "public", "images");

const placeholders = [
  { name: "hero.svg", width: 1920, height: 1280, label: "HERO" },
  { name: "product-box.svg", width: 1200, height: 1500, label: "CAJA" },
  { name: "chef.svg", width: 900, height: 1200, label: "CHEF" },
  { name: "og-image.svg", width: 1200, height: 630, label: "CACO a tu mesa" },
  ...Array.from({ length: 12 }, (_, i) => ({
    name: `menu-${String(i + 1).padStart(2, "0")}.svg`,
    width: 800,
    height: 1000,
    label: `PLATO ${i + 1}`,
  })),
];

function createSvgPlaceholder(width, height, label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect fill="#111111" width="100%" height="100%"/>
  <rect fill="#1a1a1a" x="40" y="40" width="${width - 80}" height="${height - 80}"/>
  <text x="50%" y="50%" fill="#c9974f" font-family="Georgia, serif" font-size="${Math.min(width, height) * 0.06}" text-anchor="middle" dominant-baseline="middle" opacity="0.6">${label}</text>
  <text x="50%" y="58%" fill="#f5f3ef" font-family="sans-serif" font-size="${Math.min(width, height) * 0.025}" text-anchor="middle" dominant-baseline="middle" opacity="0.3">TODO: reemplazar con foto real</text>
</svg>`;
}

await mkdir(imagesDir, { recursive: true });

for (const { name, width, height, label } of placeholders) {
  const svg = createSvgPlaceholder(width, height, label);
  const svgPath = join(imagesDir, name);
  await writeFile(svgPath, svg, "utf8");
  console.log(`Created ${svgPath}`);
}

console.log("\nPlaceholders SVG creados. Reemplazá con .webp reales y actualizá las rutas en el código.");
