const DEFAULT_SITE_URL = 'https://www.tendedatettoecampeggio.it';

export const SITE_URL = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');

export function toAbsoluteUrl(path = '') {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
