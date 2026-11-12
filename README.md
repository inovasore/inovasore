# Novasore

Sitio del estudio Novasore: desarrollo de sitios web, aplicaciones web, automatizaciones y chatbots. Está hecho con Astro 7 y se genera como sitio estático.

Requiere **Node 22.23.4 o más nuevo**.

## Scripts

- `npm run dev`: inicia el entorno de desarrollo.
- `npm run build`: genera la versión de producción en `dist/`.
- `npm run preview`: previsualiza la build localmente.
- `npm run check`: revisa tipos y errores de Astro.

## Estructura

```
src/
  config/site.ts        Datos del estudio: nombre, dominio, correos, WhatsApp, redes y promoción vigente
  data/                 Contenido de las secciones (servicios, proyectos, FAQ, testimonios…)
  layouts/
    Layout.astro        Estructura base: <head>, header, footer
    PageLayout.astro    Páginas internas con fondo de cuadrícula (/servicios, /paginas-web-ambato)
  components/
    layout/             Header y Footer
    sections/           Secciones de las páginas (Hero, ServicesScroll, Projects, FAQ…)
    ui/                 Piezas reutilizables (Button, LiteYouTube, Ribbon)
    seo/                SEO.astro: meta, Open Graph y JSON-LD
  pages/                Rutas del sitio
  styles/
    global.css          Escala tipográfica, contenedores y utilidades comunes
    animations.css      Animaciones compartidas (.enter, .reveal, íconos)
  assets/               Imágenes optimizadas por Astro
public/                 Archivos que se sirven tal cual
```

## Convenciones

Las reglas de diseño, tipografía, anchos y forma de trabajo están en [`CLAUDE.md`](CLAUDE.md).
