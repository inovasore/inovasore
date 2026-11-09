# Novasore (antes Inovasore) — sitio en Astro

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
- Anchos: usar siempre el contenedor común de `src/styles/global.css` (`.container`, `.container--wide`, `.container--narrow`; variables `--container*` y `--gutter`). No definir anchos propios en los componentes.
- Áreas táctiles de al menos 44×44 px: clase `.tap` (usa `::after`).
- Datos del estudio (nombre, dominio, correo, WhatsApp, redes): `src/config/site.ts`.
- Tono de los textos: "nosotros" como estudio pequeño y cercano, sin frases exageradas.
