export interface Faq {
  question: string;
  answer: string;
  /** Enlace interno opcional: `text` debe aparecer tal cual en `answer`. */
  link?: { text: string; href: string };
}

export const faqs: readonly Faq[] = [
  {
    question: '¿Qué servicios ofrece Novasore?',
    answer:
      'Diseñamos y desarrollamos sitios web, landing pages y tiendas en línea; aplicaciones web y micro apps; automatizaciones y chatbots con IA para WhatsApp y tu web; y configuramos correo empresarial con tu dominio y el posicionamiento SEO de tu sitio. Te acompañamos desde la idea hasta la publicación.',
  },
  {
    question: '¿Cuánto tiempo toma completar un proyecto web?',
    answer:
      'Depende del tipo de proyecto. Un sitio web institucional puede tardar entre 3 y 5 semanas, mientras que una tienda en línea o un sistema a medida puede requerir entre 6 y 10 semanas. Todo se planifica según tus necesidades y objetivos.',
  },
  {
    question: '¿Puedo solicitar cambios o revisiones durante el proceso?',
    answer:
      'Por supuesto. En Novasore trabajamos con un flujo flexible donde puedes revisar avances y solicitar ajustes en cada etapa del diseño y desarrollo, asegurando un resultado final que cumpla tus expectativas.',
  },
  {
    question: '¿Incluyen servicios de hosting o dominio?',
    answer:
      'Sí, podemos ayudarte con la contratación, configuración e integración del hosting y dominio de tu sitio. También ofrecemos recomendaciones según tu presupuesto y el nivel de tráfico que esperes recibir.',
  },
  {
    question: '¿Ofrecen soporte continuo después del lanzamiento del sitio web?',
    answer:
      'Sí. Contamos con planes de mantenimiento y soporte para garantizar que tu sitio se mantenga actualizado, seguro y con el mejor rendimiento a largo plazo.',
  },
  {
    question: '¿El diseño se adapta a celulares y tablets?',
    answer:
      'Sí, todos nuestros proyectos son 100 % responsivos. Esto significa que tu sitio se verá y funcionará perfectamente en cualquier dispositivo, ya sea computadora, tablet o celular.',
  },
  {
    question: '¿Ofrecen posicionamiento SEO?',
    answer:
      'Sí. Optimizamos la estructura y el contenido de tu sitio para que aparezca en Google, y configuramos tu perfil de Google Business Profile para que te encuentren en búsquedas locales.',
  },
  {
    question: '¿Qué necesito para empezar un proyecto con Novasore?',
    answer:
      'Solo necesitas tener clara la idea general de tu proyecto. Nosotros te guiamos paso a paso: desde la definición de objetivos y contenido hasta el diseño visual, desarrollo y publicación.',
  },
  {
    question: '¿Puedo ver ejemplos de trabajos anteriores?',
    answer:
      'Sí. Revisa la sección Proyectos de esta página. Si quieres ver casos parecidos al tuyo, escríbenos y te mostramos más.',
    link: { text: 'sección Proyectos', href: '/#proyectos' },
  },
  {
    question: '¿Qué hace diferente a Novasore?',
    answer:
      'No solo hacemos sitios bonitos: construimos herramientas que trabajan por tu negocio, desde páginas que convierten visitas en clientes hasta chatbots y automatizaciones que te ahorran tiempo. Y trabajas directamente con quien desarrolla tu proyecto.',
  },
];
