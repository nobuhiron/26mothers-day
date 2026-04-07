import { CDN_URL } from '../data/links';

const cdnBase = CDN_URL ? CDN_URL.replace(/\/$/, '') : '';

export const publicAssetPath = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return import.meta.env.PROD && cdnBase ? `${cdnBase}${normalizedPath}` : normalizedPath;
};
