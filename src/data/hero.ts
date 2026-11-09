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
  title: "Desarrollo y automatización para negocios de alto rendimiento",
  tagline: "Estudio de desarrollo web en Ambato",
  subtitle: "Creamos páginas web, landing pages, tiendas en línea, aplicaciones y chatbots a la medida de tu negocio.",
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
