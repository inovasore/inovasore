/**
 * Datos centrales del estudio. Cambiar un dato aquí lo cambia en todo el sitio.
 *
 * Estado actual: conectados `email` (contacto y JSON-LD), `formEmail`
 * (formulario de contacto) y
 * `whatsappUrl()` (servicios del inicio). El resto de componentes,
 * `astro.config.mjs` y `robots.txt` se conectan en la etapa de rebranding.
 *
 * Ojo: `url` apunta a novasore.com.ec, que todavía no está registrado.
 * No usarlo como dominio canónico hasta registrarlo.
 */
export const site = {
  name: 'Novasore',
  url: 'https://novasore.com.ec',
  /** Correo oficial (se muestra en el sitio y en el JSON-LD). */
  email: 'info@novasore.com.ec',
  /**
   * Destino del formulario de contacto. Temporal: info@novasore.com.ec aún
   * no está activo. Cuando lo esté, cambiar a `email` (o borrar este campo).
   */
  formEmail: 'disenoweb@inovasore.com',
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
  /** Promoción de las cintas azules (DiscountBanner y MacbookSection). Se muestra en mayúsculas. */
  promo: {
    label: 'Descuento del 15 %',
    until: 'hasta el 20 de noviembre',
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
