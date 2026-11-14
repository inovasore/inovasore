// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio canónico del sitio (puedes cambiar a www si prefieres)
  site: 'https://Inovasore.com',

  build: {
    // CSS en archivos con hash en /_astro/ (caché larga, ver vercel.json);
    // solo se incrustan en el HTML las hojas muy pequeñas.
    inlineStylesheets: 'auto',
  },

  // Astro 7 cambió el valor por defecto a 'jsx', que elimina espacios entre
  // texto y etiquetas en línea ("Porque Novasore <span>…"). true conserva
  // el comportamiento anterior.
  compressHTML: true,

  integrations: [sitemap()],
});