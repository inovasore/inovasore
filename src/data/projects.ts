import imgPageWeb from '../assets/works/paginas-web-ambato.webp';
import imgMarketing from '../assets/works/marketing-digital-ambato.webp';
import imgAuto from '../assets/works/automatizacion-ambato.webp';
import imgTiendas from '../assets/works/tiendas-en-linea-ambato.webp';
import imgAgency from '../assets/works/agencia-de-marketing-digital-ambato.webp';
import imgPublicidad from '../assets/works/agencia-de-publicidad-ambato.webp';

export const projects = [
  {
    title: 'Genius Video',
    category: 'Landing Page',
    description:
      'Landing page para un curso de creación de video móvil, optimizada para captar leads y acelerar la conversión con mensajes claros y pruebas sociales.',
    image: imgPageWeb,
    url: '/contacto',
  },
  {
    title: 'Pitágoras Preuniversitario',
    category: 'Sitio Web',
    description:
      'Portal institucional que refuerza la autoridad académica del centro y guía a los estudiantes hacia los formularios de inscripción en pocos clics.',
    image: imgMarketing,
    url: '/contacto',
  },
  {
    title: 'Proveedores de iPhone',
    category: 'Landing Page',
    description:
      'Página de captura enfocada en emprendedores, con storytelling y secciones comparativas para explicar el valor del programa y cerrar ventas.',
    image: imgAuto,
    url: '/contacto',
  },
  {
    title: 'NovaCommerce Studio',
    category: 'E-commerce',
    description:
      'Tienda online headless con catálogo administrable, integraciones de pagos locales y dashboards de conversión para el equipo comercial.',
    image: imgTiendas,
    url: '/contacto',
  },
  {
    title: 'IDucation · Plataforma de Cursos',
    category: 'Plataforma LMS',
    description:
      'Experiencia educativa completa con panel para instructores, vitrina de cursos y flujos automatizados de onboarding para nuevos alumnos.',
    image: imgAgency,
    url: '/contacto',
  },
  {
    title: 'EMNENS Centro Académico',
    category: 'Sitio Web',
    description:
      'Sitio informativo que comunica la propuesta educativa del centro, incluye formularios segmentados por programas y agenda de admisiones.',
    image: imgPublicidad,
    url: '/contacto',
  },
] as const;
