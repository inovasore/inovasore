import imgPageWeb from '../assets/works/paginas-web-ambato.webp';
import imgMarketing from '../assets/works/marketing-digital-ambato.webp';
import imgAuto from '../assets/works/automatizacion-ambato.webp';
import imgAgency from '../assets/works/agencia-de-marketing-digital-ambato.webp';
import imgGrafico from '../assets/works/diseño-grafico-ambato.webp';

// Por ahora hay 5 imágenes distintas; el carrusel repite algunas para llenar
// sus 9 posiciones. Al tener capturas nuevas, se agregan aquí.

export const heroContent = {
  title: "Desarrollo y automatización para negocios de alto rendimiento",
  tagline: "Estudio de desarrollo web en Ambato",
  subtitle: "Creamos páginas web, landing pages, tiendas en línea, aplicaciones y chatbots a la medida de tu negocio.",
  works: [
    imgPageWeb,
    imgMarketing,
    imgAuto,
    imgPageWeb,
    imgAgency,
    imgAuto,
    imgPageWeb,
    imgGrafico,
    imgAuto,
  ],
} as const;

export type HeroContent = typeof heroContent;
