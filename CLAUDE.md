# Novasore — sitio en Astro

## Cómo trabajar en este proyecto

- Responder siempre en español.
- Trabajar por etapas: **un commit por etapa** y **esperar la revisión del usuario antes de hacer el commit** y antes de pasar a la siguiente etapa.
- Verificación por etapa (y nada más):
  - `npm run build` sin errores.
  - Revisión visual rápida solo de lo que se cambió.
- **No** correr Lighthouse ni tomar capturas en varias resoluciones después de cada etapa o ajuste. Se hace **una sola auditoría completa del sitio al final**, cuando terminen todas las etapas (scripts en `scripts/lighthouse/`, línea base en `docs/lighthouse/2026-11-08-baseline/`).
- Informes breves: qué cambió, qué debe revisar el usuario y qué tiene que decidir.
- No cambiar el diseño visual ni los textos de forma drástica sin consultar; si una etapa altera el diseño, avisar antes.
- Si algo no está claro o hay una decisión importante, preguntar antes de seguir.

## Plan de etapas

- Etapa 0: línea base de Lighthouse ✅
- Etapa 1: bugs y enlaces rotos ✅
- Etapa 2: actualización de Astro a la versión 7 ✅
- Etapa 3: estructura, limpieza y datos centralizados ✅
- Cambios de diseño ✅: anchos y móvil, escala tipográfica, Hero, ServicesScroll, Proyectos apilados, Nuestra misión, degradado de títulos.
- Etapa 4: rendimiento (íconos SVG, fuentes locales, imágenes a astro:assets, CSS cacheable) ✅
- Etapa 5: animaciones y View Transitions entre páginas ⏳
- Etapa 6: SEO y accesibilidad (imagen para redes 1200×630, og:locale es_EC, JSON-LD, noindex en la 404) ⏳
- Etapa 7: rebranding final (dominio, correos y redes; pendiente de decisiones del usuario) ⏳
- Etapa 8: páginas nuevas (/servicios y /portafolio rediseñadas, /nosotros, formulario a correo y WhatsApp) ⏳
- Auditoría final con Lighthouse ⏳

## Commits

- Autor de los commits: "Novasore" (`git config user.name` local de este repositorio), con el correo ya configurado (`novasoreec@gmail.com`) para que GitHub los vincule a la cuenta.
- No agregar la línea "Co-Authored-By: Claude" ni otra atribución a Claude en los mensajes de commit ni en los pull requests (desactivado también en `.claude/settings.json`).

## Entorno

- Astro 7 (compilador Rust, Vite 8). Requiere **Node ≥ 22.23.4** (`engines` en `package.json`); Vercel lo toma de ahí.
- `compressHTML: true` en `astro.config.mjs`: el valor por defecto de Astro 7 (`'jsx'`) elimina espacios entre texto y etiquetas en línea.
- No combinar `transform` con `scale`/`translate`/`rotate` en la misma regla: el compilador CSS de Astro 7 los fusiona en una sola matriz.

## Convenciones del código

- Diseño y animaciones: seguir la skill `.claude/skills/apple-design/SKILL.md`, **excepto la tipografía**: se usa Instrument Sans Variable (alojada en el sitio con `@fontsource-variable/instrument-sans`), no la fuente del sistema.
- **Todos los tamaños de texto salen de la escala de `global.css`**, junto con su interlineado (`--leading-*`) y tracking (`--tracking-*`). No usar `font-size` fijos ni `clamp()` propios en los componentes (excepciones: íconos, la marca de agua decorativa del CTA y los textos del hero del inicio). El h1 no baja de 36px en móvil.

  | Elemento | Variable | Escritorio | Móvil |
  |---|---|---|---|
  | h1 del hero del inicio | `--text-display` | 64 px | 36 px |
  | h1 de páginas internas | `--text-h1` | 52 px | 36 px |
  | Títulos de sección (h2) | `--text-h2` | 46 px | ~32 px |
  | Descripciones / subtítulos de sección | `--text-lead` | 18 px | 16–17 px |
  | Títulos de tarjetas (h3) | `--text-h3` | 20–22 px | 18–20 px |
  | Textos de tarjetas (descripciones, listas), botones | `--text-body` | 16 px | 16 px |
  | Chips y etiquetas | `--text-small` | 14 px | 14 px |
  | Contadores y microtexto | `--text-xs` | 13 px | 13 px |

  El hero del inicio usa `--text-hero-lead` y `--text-hero-body` para conservar sus tamaños.
- **Texto destacado en los títulos**: siempre con la clase global `.text-gradient` de `global.css` (en secciones de fondo claro, añadir `.text-gradient--light`). No definir degradados ni colores propios para esas partes. Contraste mínimo (WCAG): 3:1 para títulos grandes (más de 24 px) y 4.5:1 para texto normal; ambas variantes cumplen 3:1 en todo el degradado. Si hace falta el degradado en otro contexto (por ejemplo, una animación), usar `var(--text-gradient)` o `var(--text-gradient-light)`.
- Anchos: usar siempre el contenedor común de `src/styles/global.css` (`.container`, `.container--wide`, `.container--narrow`; variables `--container*` y `--gutter`). No definir anchos propios en los componentes.
- Áreas táctiles de al menos 44×44 px: clase `.tap` (usa `::after`).
- Íconos: componente `components/ui/Icon.astro` (SVG en línea de Material Symbols Rounded, relleno, peso 600; `<Icon name="..." />`). Para agregar uno, copiar su `path` a `components/ui/icons.ts`. No usar fuentes de íconos.
- Imágenes: en `src/assets/` con `<Image>`/`<Picture>` de `astro:assets` (o `url()` relativo en CSS). En `public/` solo lo que necesita una URL fija (favicon, imagen Open Graph, robots.txt, verificación de Google).
- Datos del estudio (nombre, dominio, correo, WhatsApp, redes, promoción vigente): `src/config/site.ts`. No escribir esos datos a mano en los componentes.
- Componentes por carpeta: `components/layout/` (Header, Footer), `components/sections/` (secciones de página), `components/ui/` (piezas reutilizables), `components/seo/`. Páginas internas con fondo de cuadrícula: `layouts/PageLayout.astro`. Keyframes compartidos: `src/styles/animations.css`.
- Tono de los textos: "nosotros" como estudio pequeño y cercano, sin frases exageradas.
