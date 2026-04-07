import { defineConfig, envField } from 'astro/config';

const cdnUrl = process.env.PUBLIC_CDN_URL || process.env.CDN_URL || '';

export default defineConfig({
  env: {
    schema: {
      PUBLIC_LINK_BASE: envField.string({ context: 'client', access: 'public', default: '#' }),
      PUBLIC_LINE_URL: envField.string({ context: 'client', access: 'public', default: '#' }),
      PUBLIC_CDN_URL: envField.string({ context: 'client', access: 'public', default: '' }),
    },
  },
  build: {
    assetsPrefix: cdnUrl,
  },
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (info) =>
            /\.(png|jpe?g|gif|svg|webp|avif)$/i.test(info.name || '')
              ? 'images/[name]-[hash][extname]'
              : '_astro/[name]-[hash][extname]',
          entryFileNames: '_astro/[name]-[hash].js',
          chunkFileNames: '_astro/[name]-[hash].js',
        },
      },
    },
  },
});
