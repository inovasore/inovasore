// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Dominio canónico del sitio (puedes cambiar a www si prefieres)
  site: 'https://Inovasore.com',
  build: {
    inlineStylesheets: 'always',
  },
});
