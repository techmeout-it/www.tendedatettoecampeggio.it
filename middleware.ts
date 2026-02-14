// User-agent dei crawler social che richiedono meta tag OG
const SOCIAL_BOTS = [
  'facebookexternalhit',
  'Facebot',
  'LinkedInBot',
  'Twitterbot',
  'WhatsApp',
  'TelegramBot',
  'Slackbot',
  'Discordbot',
  'Pinterest',
  'Applebot',
];

export const config = {
  matcher: '/guide/:slug*',
};

export default function middleware(request: Request) {
  const userAgent = request.headers.get('user-agent') || '';
  
  // Controlla se il request viene da un crawler social
  const isSocialBot = SOCIAL_BOTS.some(bot => 
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  if (!isSocialBot) {
    // Utente normale: lascia passare alla SPA
    return;
  }

  // Crawler social: reindirizza alla serverless function OG
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/');
  const slug = pathParts[pathParts.length - 1];

  if (slug && slug !== 'guide') {
    const ogUrl = new URL(`/api/og?slug=${encodeURIComponent(slug)}`, url.origin);
    return fetch(ogUrl);
  }
}
