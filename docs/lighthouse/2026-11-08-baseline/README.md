# Lighthouse — línea base (2026-11-08)

Medición previa a la modernización (commit de Etapa 0, Astro 5.17.1).

- **Herramienta:** Lighthouse 12.8.2 (CLI), Chrome headless, throttling simulado por defecto.
- **Objetivo:** build de producción servida en local con `astro preview` (puerto 4322).
- **Método:** 3 corridas por página y dispositivo; se reporta la **mediana**.
- **Limitación:** `astro preview` no comprime (gzip/brotli) ni usa CDN, así que los números no son idénticos a los del sitio publicado. Sirven para comparar antes/después con el mismo método.
- Reportes JSON completos en `raw/` (solo local, excluidos de git).

## Resultados (mediana de 3)

| Página-dispositivo | Perf | A11y | BP | SEO | FCP | LCP | TBT | CLS | Peso |
|---|---|---|---|---|---|---|---|---|---|
| inicio — escritorio | 100 | 100 | 96 | 100 | 0.28 s | 0.57 s | 39 ms | 0.012 | 1711 KB |
| inicio — móvil | 96 | 95 | 96 | 100 | 1.79 s | 2.50 s | 0 ms | 0.000 | 1747 KB |
| servicios — escritorio | 98 | 100 | 100 | 100 | 0.27 s | 1.07 s | 5 ms | 0.005 | 1867 KB |
| servicios — móvil | **73** | 100 | 100 | 100 | 1.79 s | **11.26 s** | 0 ms | 0.004 | 1867 KB |
| paginas-web-ambato — escritorio | 99 | 98 | 100 | 100 | 0.28 s | 0.93 s | 0 ms | 0.017 | 1530 KB |
| paginas-web-ambato — móvil | 96 | 98 | 100 | 100 | 1.64 s | 2.62 s | 0 ms | 0.001 | 1530 KB |

## Hallazgos principales

- **Material Symbols (Google Fonts) = 1289 KB** en todas las páginas: ~75 % del peso total.
- `world.png` = 446 KB (servicios), `Mackbook.webp` = 118 KB, `Logotipo.svg` = 58 KB (PNG embebido).
- **Servicios móvil:** LCP de 11.3 s; el elemento LCP es el `<h2 class="services__title reveal">` (texto que aparece con animación de entrada).
- **Inicio:** error en consola por la precarga de `/works/work-1.webp` (404). Best Practices 96.
- **Inicio móvil:** A11y 95 por contraste de color insuficiente.
- `heading-order` falla en inicio y servicios.
- Otras auditorías con puntaje < 0.9 en alguna corrida: `uses-responsive-images`, `offscreen-images`, `modern-image-formats`, `unsized-images`, `forced-reflow-insight`, `image-delivery-insight`.

## Cómo repetir

```bash
npm run build
npx astro preview --port 4322   # en otra terminal
PORT=4322 bash scripts/lighthouse/run.sh docs/lighthouse/<fecha>-<nombre>
node scripts/lighthouse/summary.mjs docs/lighthouse/<fecha>-<nombre>/raw
```
