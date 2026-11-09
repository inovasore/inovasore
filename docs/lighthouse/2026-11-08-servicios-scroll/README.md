# Lighthouse — rediseño de Servicios del inicio (2026-11-08)

> Medido con la primera versión (servicios en tarjetas). Los ajustes posteriores (fondo a todo el ancho, sin tarjetas, sin línea de tecnologías) no se volvieron a medir, por acuerdo; se miden junto con el sistema de anchos.

Mismo método que [la línea base](../2026-11-08-baseline/README.md): Lighthouse 12.8.2, build de producción en `astro preview`, mediana de 3 corridas. Solo se midió el inicio.

## Resultados (mediana de 3)

| Inicio | Perf | A11y | BP | SEO | FCP | LCP | TBT | CLS | Peso |
|---|---|---|---|---|---|---|---|---|---|
| Móvil — línea base | 96 | 95 | 96 | 100 | 1.79 s | 2.50 s | 0 ms | 0.000 | 1747 KB |
| Móvil — ahora | 92 | 96 | 96 | 100 | 1.78 s | 1.95 s | 0 ms | 0.000 | 1537 KB |
| Escritorio — línea base | 100 | 100 | 96 | 100 | 0.28 s | 0.57 s | 39 ms | 0.012 | 1711 KB |
| Escritorio — ahora | 98 | 100 | 96 | 100 | 0.59 s | 0.85 s | 65 ms | 0.010 | 1552 KB |

Corridas individuales en móvil: 92 / 98 / 92 (línea base: 96 / 87 / 97).

## Lectura

- La diferencia en Performance está dentro del ruido de esta máquina: en la línea base, las corridas ya oscilaban entre 87 y 97.
- **Prueba A/B intercalada** (5 corridas en móvil de cada versión, alternadas en la misma sesión y con más carga en el equipo): antes 78 (rango 71–85), ahora 73 (rango 72–86). Los rangos se superponen; no hay una regresión clara. Puede que el layout de la página nueva cueste un poco más (la mediana de TBT pasó de 804 a 950 ms con esa carga), lo que se volverá a revisar en la etapa de rendimiento.
- El elemento LCP sigue siendo el hero, no la sección nueva.
- A11y en móvil subió de 95 a 96. El único fallo de contraste que queda es `.text-highlight` de `DiscountBanner` (ya existía antes).
