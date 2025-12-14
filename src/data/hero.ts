import imgPageWeb from '../assets/works/paginas-web-ambato.webp';
import imgMarketing from '../assets/works/marketing-digital-ambato.webp';
import imgAuto from '../assets/works/automatizacion-ambato.webp';
import imgTiendas from '../assets/works/tiendas-en-linea-ambato.webp';
import imgAgency from '../assets/works/agencia-de-marketing-digital-ambato.webp';
import imgPublicidad from '../assets/works/agencia-de-publicidad-ambato.webp';
import imgDesarrollo from '../assets/works/desarrollo-web-ambato.webp';
import imgGrafico from '../assets/works/diseño-grafico-ambato.webp';
import imgWeb from '../assets/works/diseño-web-ambato.webp';

export const heroContent = {
  title: "Diseño, Desarrollo y Automatización para <span class=\"mobile-nowrap\"> Negocios de Alto Rendimiento. </or class=\"desktop-only\"/>",
  tagline: "Diseño Web y Automatización enfocados en la Rentabilidad.",
  subtitle: "Expertos en Páginas Web, Tiendas Online, Landing Pages y Chatbots a la medida en Ambato.",
  works: [
    imgPageWeb,
    imgMarketing,
    imgAuto,
    imgTiendas,
    imgAgency,
    imgPublicidad,
    imgDesarrollo,
    imgGrafico,
    imgWeb,
  ],
} as const;

export type HeroContent = typeof heroContent;
