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

export const featuredServices = [
  {
    title: 'Diseño y Desarrollo de Páginas Web',
    description:
      'Desarrollamos Páginas Web profesionales, Tiendas Online y Landing Pages ultrarrápidas. Usamos tecnología moderna para garantizar el mejor SEO y una experiencia de usuario superior.',
    icon: 'person',
  },
  {
    title: 'Diseño y Desarrollo de Tiendas en Línea',
    description:
      'Desarrollamos Tiendas Online robustas y escalables para vender en Ambato y todo Ecuador. Integramos pasarelas de pago y sistemas de gestión para que tu e-commerce sea tu vendedor más eficiente 24/7.',
    icon: 'laptop_mac',
  },
  {
    title: 'Automatización & IA',
    description:
      'Implementamos soluciones de Automatización para optimizar tus ventas 24/7. Desde Chatbots para atención al cliente hasta la integración de sistemas, eliminamos tareas manuales en tu negocio.',
    icon: 'robot_2',
  },
  {
    title: 'SEO & Publicidad Digital (Ads)',
    description:
      'Domina los buscadores y maximiza tu ROI. Combinamos posicionamiento SEO para aparecer primero en Google con campañas estratégicas de pago en Google Ads y Meta Ads para resultados medibles.',
    icon: 'ads_click',
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
