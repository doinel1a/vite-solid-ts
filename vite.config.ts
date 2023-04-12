import path from 'node:path';

import { partytownVite } from '@builder.io/partytown/utils';
import solidPlugin from 'vite-plugin-solid';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    solidPlugin(),
    partytownVite({
      dest: path.join(__dirname, 'dist', '~partytown')
    })
  ]
});
