export const mainServices = [
  {
    title: 'Diseño web & experiencia de usuario (UI/UX)',
    summary:
      'Creamos sitios web visualmente cautivadores y centrados en la experiencia del usuario. Cada interacción refleja tu marca y genera conexión con tu audiencia.',
    bullets: [
      'Diseño visual personalizado.',
      'Interfaz moderna y funcional (UI).',
      'Experiencias optimizadas para móviles (UX).',
      'Prototipos y wireframes interactivos.',
    ],
  },
  {
    title: 'Desarrollo web & sistemas digitales',
    summary:
      'Construimos soluciones web sólidas, rápidas y seguras: desde páginas corporativas hasta plataformas personalizadas orientadas al rendimiento.',
    bullets: [
      'Sitios autoadministrables (CMS).',
      'Integración con API, bases de datos y servicios externos.',
      'Seguridad, mantenimiento y soporte continuo.',
      'Optimización para rendimiento y SEO técnico.',
    ],
  },
  {
    title: 'Marketing digital & estrategia de marca',
    summary:
      'Impulsamos tu presencia online con estrategias creativas y campañas que conectan con tu público ideal y obtienen resultados medibles.',
    bullets: [
      'Diseño de publicaciones para redes sociales.',
      'Campañas publicitarias (Meta Ads, Google Ads, TikTok Ads).',
      'Branding e identidad visual.',
      'Análisis y optimización de resultados.',
    ],
  },
] as const;

export const extraServices = [
  { icon: 'view_week', label: 'Diseño de publicaciones sociales' },
  { icon: 'bolt', label: 'Automatización de flujos' },
  { icon: 'inventory_2', label: 'Diseño de empaques' },
  { icon: 'apps', label: 'SEO' },
  { icon: 'description', label: 'Redacción de contenidos' },
  { icon: 'brush', label: 'Diseño de logotipos' },
  { icon: 'campaign', label: 'Gestión de campañas' },
  { icon: 'palette', label: 'Brand guidelines' },
] as const;

export const marqueeServices = [...extraServices, ...extraServices] as const;