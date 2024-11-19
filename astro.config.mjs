import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://vitpinto-blog.netlify.app/",
  integrations: [preact()]
});