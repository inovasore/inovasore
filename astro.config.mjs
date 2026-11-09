// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio canÃ³nico del sitio (puedes cambiar a www si prefieres)
  site: 'https://Inovasore.com',

  build: {
    inlineStylesheets: 'always',
  },

  // Astro 7 cambió el valor por defecto a 'jsx', que elimina espacios entre
  // texto y etiquetas en línea ("Porque Novasore <span>…"). true conserva
  // el comportamiento anterior.
  compressHTML: true,

  integrations: [sitemap()],
});