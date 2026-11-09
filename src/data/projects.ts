import type { ImageMetadata } from 'astro';
import imgGeniusVideo from '../assets/works/paginas-web-ambato.webp';
import imgPitagoras from '../assets/works/marketing-digital-ambato.webp';
import imgIphone from '../assets/works/automatizacion-ambato.webp';
import imgIducation from '../assets/works/agencia-de-marketing-digital-ambato.webp';
import imgEmnens from '../assets/works/diseño-grafico-ambato.webp';

export interface Project {
  title: string;
  category: string;
  description: string;
  /** Servicios aplicados (chips de la tarjeta). */
  chips: readonly string[];
  image: ImageMetadata;
  imageAlt: string;
  /** Destino de la tarjeta. Por ahora /portafolio; luego, su caso de estudio. */
  href: string;
  /** Sitio publicado del cliente, si existe. */
  liveUrl?: string;
}

/**
 * Proyectos reales. "NovaCommerce Studio" se retiró: su imagen era una copia
 * de la de Genius Video y no hay captura propia.
 *
 * Imágenes: exportar a 2880×1620 px (16:9), WebP calidad ~80.
 */
export const projects: readonly Project[] = [
  {
    title: 'Genius Video',
    category: 'Landing page',
    description:
      'Landing page para un curso de creación de video móvil, optimizada para captar leads y acelerar la conversión con mensajes claros y pruebas sociales.',
    chips: ['Landing page', 'Captación de leads', 'Diseño a medida'],
    image: imgGeniusVideo,
    imageAlt: 'Landing page de Genius Video con el instructor del curso de video móvil',
    href: '/portafolio',
  },
  {
    title: 'Pitágoras Preuniversitario',
    category: 'Sitio web',
    description:
      'Portal institucional que refuerza la autoridad académica del centro y guía a los estudiantes hacia los formularios de inscripción en pocos clics.',
    chips: ['Sitio institucional', 'Formularios de inscripción', 'SEO'],
    image: imgPitagoras,
    imageAlt: 'Página de inicio de Pitágoras Preuniversitario con estudiantes en clase',
    href: '/portafolio',
  },
  {
    title: 'Proveedores de iPhone',
    category: 'Landing page',
    description:
      'Página de captura enfocada en emprendedores, con storytelling y secciones comparativas para explicar el valor del programa y cerrar ventas.',
    chips: ['Landing page', 'Storytelling', 'Embudo de ventas'],
    image: imgIphone,
    imageAlt: 'Landing page de Proveedores de iPhone con el mentor del programa',
    href: '/portafolio',
  },
  {
    title: 'IDucation',
    category: 'Plataforma de cursos',
    description:
      'Experiencia educativa completa con panel para instructores, vitrina de cursos y flujos automatizados de onboarding para nuevos alumnos.',
    chips: ['Plataforma LMS', 'Panel de instructores', 'Automatización'],
    image: imgIducation,
    imageAlt: 'Página de inicio de la plataforma de cursos IDucation',
    href: '/portafolio',
  },
  {
    title: 'EMNENS Centro Académico',
    category: 'Sitio web',
    description:
      'Sitio informativo que comunica la propuesta educativa del centro, incluye formularios segmentados por programas y agenda de admisiones.',
    chips: ['Sitio institucional', 'Formularios por programa', 'Admisiones'],
    image: imgEmnens,
    imageAlt: 'Página de inicio de EMNENS Centro Académico con una estudiante',
    href: '/portafolio',
  },
];
