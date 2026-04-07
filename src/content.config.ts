import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const ranking = defineCollection({
  loader: file('src/data/ranking.json'),
  schema: z.object({
    rank: z.number(),
    name: z.string(),
    description: z.string(),
    price: z.string(),
    href: z.string(),
  }),
});

const brandCards = defineCollection({
  loader: file('src/data/brand-cards.json'),
  schema: ({ image }) =>
    z.object({
      reason: z.string(),
      title: z.string(),
      description: z.string(),
      cta: z.string().nullable(),
      href: z.string().nullable().default(null),
      image: image(),
      imageAlt: z.string(),
      reasonImage: z.string(),
      reasonImageAlt: z.string(),
    }),
});

const giftCards = defineCollection({
  loader: file('src/data/gift-cards.json'),
  schema: ({ image }) =>
    z.object({
      reason: z.string(),
      title: z.string(),
      description: z.string(),
      image: image(),
      imageAlt: z.string(),
      reasonImage: z.string(),
      reasonImageAlt: z.string(),
      buttons: z.array(z.string()).default([]),
    }),
});

const timeSceneProducts = defineCollection({
  loader: file('src/data/time-scene-products.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    price: z.string(),
    description: z.string(),
    href: z.string(),
  }),
});

const priceBands = defineCollection({
  loader: file('src/data/price-bands.json'),
  schema: z.object({
    id: z.string(),
    label: z.string(),
    labelEn: z.string(),
    arch: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
        price: z.string(),
        description: z.string(),
        href: z.string(),
      })
    ),
  }),
});

export const collections = { ranking, brandCards, giftCards, timeSceneProducts, priceBands };
