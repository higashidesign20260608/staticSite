// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://monberable.com",
});


// http://localhost:4321
// https://monberable.xsrv.jp
// monberable.com
