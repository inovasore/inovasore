export const heroContent = {
  title: "Desarrollamos páginas web personalizadas que impulsan tu negocio",
  tagline: "Soluciones web que impulsan tu negocio",
  subtitle: "Elevamos tu presencia digital con innovación, diseño y precisión",
  works: [
    '/works/work-1.webp',
    '/works/work-2.webp',
    '/works/work-3.webp',
    '/works/work-4.webp',
    '/works/work-5.webp',
    '/works/work-6.webp',
    '/works/work-7.webp',
    '/works/work-8.webp',
    '/works/work-9.webp',
  ],
} as const;

export type HeroContent = typeof heroContent;
