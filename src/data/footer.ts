import { site, whatsappUrl } from '../config/site';

const whatsappLink = whatsappUrl('¡Hola! Me interesa conocer más sobre sus servicios.');

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
    whatsappLink,
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
      href: whatsappLink,
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
