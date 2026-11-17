# Hogar de Patitas

Landing page del trabajo final de curso: hotel y guardería para perros.

## Stack

- React 19 + Vite 8 + TypeScript
- UIArc (uiarc.dev) para componentes (`Button`, `Card`) vía shadcn registry
- Motion (Framer Motion) para animaciones
- lucide-react para iconos

## Identidad

- **Nombre:** Hogar de Patitas
- **Paleta:** teal `#008B8B` (primary) + beige `#F5F5DC` (accent), texto `#173B3B`, fondo claro `#E0F2F1`
- **Tipografía:** Fraunces (títulos, vía cdnfonts) + Arial/Helvetica (cuerpo)
- **Logo:** `public/referencias/Logotipo m con siluetas animales.png` (favicon + header)

## Estructura

- `src/components/Header.tsx` — navbar sticky con logo, nav, CTA y menú móvil
- `src/components/Hero.tsx` — hero 2 columnas + barra flotante de 4 ítems
- `src/components/InfoServicesGallery.tsx` — 3 columnas: quiénes somos, servicios (Card), galería
- `src/components/Banner.tsx` — CTA de reserva
- `src/components/Footer.tsx` — contacto + redes
- `src/theme.css` — variables de diseño (paleta + UIArc overrides)
- `src/components/arc/` — componentes UIArc instalados (Button, Card, foundation)
- `public/referencias/` — imágenes estáticas

## Scripts

- `npm run dev` — servidor de desarrollo (http://localhost:5173)
- `npm run build` — build de producción
- `npm run preview` — preview del build

## Notas

- Sin pautas del curso: estructura libre.
- Contenido de ejemplo (textos/fotos placeholder) hasta tener material real.
- Imágenes en `referencias/` (raíz) y copia en `public/referencias/` para servir en dev.