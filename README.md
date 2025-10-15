# Inovasore Website

Sitio estático construido con Astro 5 para presentar servicios digitales de Inovasore.

## Scripts

- `npm run dev`: inicia el entorno de desarrollo.
- `npm run build`: genera la versión de producción.
- `npm run preview`: previsualiza la build localmente.

## Estructura

- `src/components`: componentes Astro para secciones reutilizables.
- `src/pages`: rutas generadas de forma estática.
- `src/styles`: estilos globales y tokens comunes.
- `src/data`: contenido estructurado listo para reutilizarse o migrar a content collections.

## Notas

- Usa CSS puro con utilidades compartidas en `src/styles/global.css`.
- El contenido editable se centraliza en `src/data` para simplificar actualizaciones y traducciones futuras.
- Los assets públicos viven en `public/`; la carpeta `dist/` se genera al ejecutar el build.
