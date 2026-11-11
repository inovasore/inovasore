import imgPageWeb from '../assets/works/paginas-web-ambato.webp';
import imgPitagoras from '../assets/works/pitagoras-preuniversitario.webp';
import imgAuto from '../assets/works/automatizacion-ambato.webp';
import imgIducation from '../assets/works/iducation.webp';
import imgGrafico from '../assets/works/diseño-grafico-ambato.webp';

// Por ahora hay 5 imágenes distintas; el carrusel repite algunas para llenar
// sus 9 posiciones. Al tener capturas nuevas, se agregan aquí con su alt.
const pageWeb = { src: imgPageWeb, alt: 'Landing page de Genius Video, curso de creación de video móvil' };
const pitagoras = { src: imgPitagoras, alt: 'Sitio web de Pitágoras Preuniversitario' };
const auto = { src: imgAuto, alt: 'Landing page de Proveedores de iPhone' };
const iducation = { src: imgIducation, alt: 'Plataforma de cursos IDucation' };
const grafico = { src: imgGrafico, alt: 'Sitio web de EMNENS Centro Académico' };

export const heroContent = {
  title: "Páginas web, tiendas en línea y chatbots que trabajan por tu negocio",
  tagline: "Estudio de desarrollo web en Ambato",
  subtitle: "Diseñamos y desarrollamos sitios, aplicaciones y automatizaciones a la medida de lo que tu negocio necesita.",
  works: [
    pageWeb,
    pitagoras,
    auto,
    pageWeb,
    iducation,
    auto,
    pageWeb,
    grafico,
    auto,
  ],
} as const;

export type HeroContent = typeof heroContent;
