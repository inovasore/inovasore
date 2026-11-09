/**
 * Datos centrales del estudio. Cambiar un dato aquí lo cambia en todo el sitio.
 *
 * Estado actual: por ahora solo `whatsappUrl()` está conectado (sección de
 * servicios del inicio). El resto de componentes, `astro.config.mjs`,
 * `robots.txt` y el JSON-LD se conectan a este archivo en la etapa de
 * rebranding.
 *
 * Ojo: `url` apunta a novasore.com.ec, que todavía no está registrado.
 * No usarlo como dominio canónico hasta registrarlo.
 */
export const site = {
  name: 'Novasore',
  url: 'https://novasore.com.ec',
  email: 'info@novasore.com.ec',
  whatsapp: {
    /** Solo dígitos, con código de país (formato wa.me). */
    number: '593961141127',
    display: '+593 96 114 1127',
  },
  social: {
    facebook: 'https://www.facebook.com/novasore',
    instagram: 'https://www.instagram.com/novasore/',
    x: 'https://x.com/novasoreTech',
  },
  location: {
    city: 'Ambato',
    region: 'Tungurahua',
    country: 'Ecuador',
  },
} as const;

/** Enlace a WhatsApp con un mensaje opcional prellenado. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
