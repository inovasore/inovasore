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
  title: "Impulsa tu negocio con páginas web, tiendas online y sistemas que generan ventas 24/7",
  tagline: "Diseño, Desarrollo y Automatización.",
  subtitle: "Expertos en desarrollo web, creación de contenido y automatización digital para negocios que buscan crecer.",
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
