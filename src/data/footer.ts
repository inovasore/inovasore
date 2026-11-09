import { site } from '../config/site';

export const footerData = {
  agency: {
    name: 'Novasore',
    tagline: '',
    description:
      'Novasore – Agencia digital especializada en desarrollo web, marketing y automatización empresarial.',
  },
  contact: {
    headline: 'Conversemos sobre tu próximo proyecto',
    addressLines: ['Ambato, Ecuador'],
    phone: '',
    whatsappLink: 'https://wa.me/593961141127?text=%C2%A1Hola!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios.',
    serviceArea: 'Atendemos proyectos en Ecuador y de forma remota en LATAM.',
  },
  navChips: [
    { label: 'Sobre Novasore', href: '/#nosotros' },
    { label: 'Proyectos', href: '/#proyectos' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Preguntas frecuentes', href: '/#faq' },
  ],
  socialLinks: [
    {
      label: 'WhatsApp',
      href: 'https://wa.me/593961141127?text=%C2%A1Hola!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios.',
      icon: 'whatsapp',
    },
    {
      label: 'Instagram',
      href: site.social.instagram,
      icon: 'instagram',
    },
    {
      label: 'Facebook',
      href: site.social.facebook,
      icon: 'facebook',
    },
    {
      label: 'X',
      href: site.social.x,
      icon: 'x',
    },
  ],
  quickLinks: [
    { label: 'Sobre Novasore', href: '/#nosotros' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Proyectos', href: '/#proyectos' },
    { label: 'FAQ', href: '/#faq' },
  ],
} as const;

export type FooterData = typeof footerData;
