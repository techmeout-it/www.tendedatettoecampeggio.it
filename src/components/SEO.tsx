import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '@/lib/site';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  articleSection?: string;
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage,
  keywords = 'tende da tetto, campeggio, outdoor, avventura, Italia, community, guide campeggio',
  author = 'Tende da Tetto e Campeggio',
  publishedTime,
  modifiedTime,
  articleSection,
  noindex = false
}: SEOProps) => {
  const siteUrl = SITE_URL;
  const defaultOgImage = `${siteUrl}/og-image.jpg`;
  const finalOgImage = ogImage || defaultOgImage;
  const fullCanonicalUrl = canonicalUrl || siteUrl;
  const fullTitle = title.includes('Tende da Tetto') ? title : `${title} | Tende da Tetto e Campeggio`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="Tende da Tetto e Campeggio" />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:secure_url" content={finalOgImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Tende da Tetto e Campeggio Community`} />
      <meta property="og:locale" content="it_IT" />
      
      {/* WhatsApp specific optimizations */}
      <meta property="og:determiner" content="the" />
      <meta property="og:updated_time" content={modifiedTime || new Date().toISOString()} />
      
      {/* Article specific Open Graph tags */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {ogType === 'article' && articleSection && (
        <meta property="article:section" content={articleSection} />
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalOgImage} />
      
      {/* Additional SEO */}
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
};

export default SEO;
