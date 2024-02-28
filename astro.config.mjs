import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'https://troisiemeoeil.io',
  // integrations: [tailwind(), sitemap(), mdx(), react()]
  integrations: [
    tailwind(),
    mdx(),
    react({
      include: ['**/react/*'],
    }),
  ],
});