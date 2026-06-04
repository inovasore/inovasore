export const mainServices = [
  {
    title: 'Sitios web de alto rendimiento',
    summary:
      'Desarrollamos sitios rápidos, seguros y optimizados para ofrecer la mejor experiencia y posicionarte en Google.',
    bullets: [
      'Carga ultra rápida con Astro.',
      'Optimización para SEO de Google.',
      'Diseño completamente responsivo.',
      'Experiencia de usuario premium (UI/UX).',
    ],
  },
  {
    title: 'Software a medida para tu operación',
    summary:
      'Creamos sistemas y aplicaciones personalizadas que automatizan procesos, mejoran la productividad y hacen crecer tu negocio.',
    bullets: [
      'Automatización de flujos y procesos.',
      'Desarrollo de sistemas internos personalizados.',
      'Integración con APIs y bases de datos.',
      'Paneles de administración avanzados.',
    ],
  },
  {
    title: 'Estrategia digital & crecimiento',
    summary:
      'Te ayudamos a atraer más clientes con estrategias digitales efectivas: SEO, publicidad y embudos que convierten.',
    bullets: [
      'Campañas efectivas de publicidad pagada.',
      'Embudos de venta optimizados.',
      'Posicionamiento orgánico y SEO de contenidos.',
      'Medición, análisis e informes detallados.',
    ],
  },
  {
    title: 'Soporte & mantenimiento continuo',
    summary:
      'Mantenemos tus plataformas actualizadas, seguras y siempre disponibles para que tu negocio no se detenga.',
    bullets: [
      'Soporte técnico prioritario y rápido.',
      'Actualizaciones de seguridad continuas.',
      'Copias de seguridad automáticas diarias.',
      'Monitoreo constante de disponibilidad (uptime).',
    ],
  },
] as const;

export const featuredServices = [
  {
    title: 'Sitios web de alto rendimiento',
    description:
      'Desarrollamos sitios rápidos, seguros y optimizados para ofrecer la mejor experiencia y posicionarte en Google.',
    icon: 'language',
    link: '/paginas-web-ambato',
  },
  {
    title: 'Software a medida para tu operación',
    description:
      'Creamos sistemas y aplicaciones personalizadas que automatizan procesos, mejoran la productividad y hacen crecer tu negocio.',
    icon: 'code',
    link: '/servicios',
  },
  {
    title: 'Estrategia digital & crecimiento',
    description:
      'Te ayudamos a atraer más clientes con estrategias digitales efectivas: SEO, publicidad y embudos que convierten.',
    icon: 'trending_up',
    link: '/servicios',
  },
  {
    title: 'Soporte & mantenimiento continuo',
    description:
      'Mantenemos tus plataformas actualizadas, seguras y siempre disponibles para que tu negocio no se detenga.',
    icon: 'settings',
    link: '/servicios',
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
