import { defineConfig } from 'astro/config';
<<<<<<< HEAD
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()]
});
=======
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/global.css";`,
        },
      },
    },
  },
});
>>>>>>> 36ed92d
