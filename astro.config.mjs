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

  integrations: [sitemap()],
});