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
    title: 'Automatizaciones y chatbots con IA',
    summary:
      'Automatizamos las tareas repetitivas de tu negocio y creamos asistentes que atienden a tus clientes 24/7 en WhatsApp y en tu web.',
    bullets: [
      'Chatbots para WhatsApp.',
      'Asistentes con IA.',
      'Flujos de trabajo automáticos.',
      'Integración entre herramientas.',
    ],
  },
] as const;

export const featuredServices = [
  {
    title: 'Diseño y Desarrollo de Páginas Web',
    description:
      'Creamos sitios rápidos y modernos, listos para escalar tu negocio.',
    icon: 'language',
    link: '/paginas-web-ambato',
  },
  {
    title: 'Diseño y Desarrollo de Tiendas en Línea',
    description:
      'Tiendas completas con sistemas de pago y gestión de inventario.',
    icon: 'storefront',
    link: '/servicios',
  },
  {
    title: 'Automatización & IA',
    description:
      'Soluciones de automatización para optimizar tus ventas 24/7.',
    icon: 'psychology',
    link: '/servicios',
  },
  {
    title: 'Correo Empresarial y SEO',
    description:
      'Correos con el nombre de tu marca y un sitio optimizado para que tus clientes te encuentren en Google.',
    icon: 'trending_up',
    link: '/servicios',
  },
] as const;

/* ------------------------------------------------------------------------ */
/* Servicios del estudio (fuente única para ServicesScroll y el header).    */
/* `featuredServices` de arriba solo lo usa Services.astro (/servicios) y   */
/* se elimina cuando se rediseñe esa página.                                */
/* ------------------------------------------------------------------------ */

export interface StudioService {
  /** Ancla en el inicio (/#id) y futuro slug de su página propia. */
  id: string;
  title: string;
  description: string;
  chips: readonly string[];
  /**
   * Ruta de la imagen. Basta con guardar un archivo con ese nombre en
   * src/assets/services/ (vale .webp, .jpg, .png o .avif con el mismo nombre
   * base) y se sirve automáticamente con <Picture> en AVIF/WebP.
   * Mientras no exista, se muestra un espacio provisional 16:9.
   * Exportar a 1920×1080 px (16:9), WebP o JPG calidad ~80, idealmente
   * < 400 KB. Nada se recorta (la proporción es la misma en todos los
   * tamaños), pero deja ~4% de margen en los bordes por las esquinas
   * redondeadas.
   */
  image: string;
  imageAlt: string;
  /** Página de detalle. Si se define, el título de la tarjeta se vuelve enlace. */
  detailHref?: string;
  /** Datos del dropdown "Servicios" del header. */
  menu: {
    description: string;
    /** Nombre de ícono de Material Symbols (se migra a SVG en la etapa de rendimiento). */
    icon: string;
    href: string;
  };
}

export const studioServices: readonly StudioService[] = [
  {
    id: 'sitios-web',
    title: 'Sitios web y tiendas en línea',
    description:
      'Sitios corporativos, landing pages y tiendas en línea diseñados a medida. Rápidos, adaptables a cualquier pantalla y pensados para convertir visitas en clientes.',
    chips: ['Diseño a medida', 'Landing pages de conversión', 'Tiendas en línea', 'Velocidad de carga'],
    image: 'src/assets/services/01-sitios-web.webp',
    imageAlt: 'Sitio web diseñado por el estudio',
    menu: {
      description: 'Sitios, landing pages y tiendas rápidas, hechas a medida.',
      icon: 'language',
      href: '/paginas-web-ambato',
    },
  },
  {
    id: 'aplicaciones-web',
    title: 'Aplicaciones web y micro apps',
    description:
      'Desarrollamos herramientas a la medida de tu negocio: sistemas internos, paneles de administración y apps que resuelven un problema concreto, sin pagar por software que no necesitas.',
    chips: ['Micro apps a medida', 'Paneles administrativos', 'Apps web (PWA)', 'Integración con APIs'],
    image: 'src/assets/services/02-aplicaciones-web.webp',
    imageAlt: 'Aplicación web desarrollada por el estudio',
    menu: {
      description: 'Sistemas internos y herramientas hechas para tu negocio.',
      icon: 'widgets',
      href: '/#aplicaciones-web',
    },
  },
  {
    id: 'automatizaciones-chatbots',
    title: 'Automatizaciones y chatbots con IA',
    description:
      'Automatizamos las tareas repetitivas de tu negocio y creamos asistentes que atienden a tus clientes 24/7 en WhatsApp y en tu web. Respuestas al instante, procesos que se hacen solos y menos trabajo manual.',
    chips: ['Chatbots para WhatsApp', 'Asistentes con IA', 'Flujos de trabajo automáticos', 'Integración entre herramientas'],
    image: 'src/assets/services/03-automatizaciones-chatbots.webp',
    imageAlt: 'Chatbot con IA atendiendo a un cliente por WhatsApp junto a un flujo de trabajo automatizado',
    menu: {
      description: 'Procesos que se hacen solos y asistentes que atienden 24/7.',
      icon: 'smart_toy',
      href: '/#automatizaciones-chatbots',
    },
  },
  {
    id: 'correo-seo',
    title: 'Correo empresarial y posicionamiento SEO',
    description:
      'Configuramos tu dominio y correos con el nombre de tu marca, y optimizamos tu sitio para que tus clientes te encuentren en Google. Una imagen profesional desde el primer contacto.',
    chips: ['Correos con tu dominio', 'Configuración y migración', 'SEO local y técnico', 'Google Business Profile'],
    image: 'src/assets/services/04-correo-seo.webp',
    imageAlt: 'Correo con el dominio de la marca y resultados de búsqueda en Google',
    menu: {
      description: 'Correos con tu dominio y un sitio que aparece en Google.',
      icon: 'mail',
      href: '/#correo-seo',
    },
  },
];
