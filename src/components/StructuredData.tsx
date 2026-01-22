import { Helmet } from 'react-helmet-async';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}

export const ArticleSchema = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url
}: ArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tende da Tetto e Campeggio",
      "logo": {
        "@type": "ImageObject",
        "url": `${typeof window !== 'undefined' ? window.location.origin : ''}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  contactEmail?: string;
}

export const OrganizationSchema = ({
  name = "Tende da Tetto e Campeggio",
  url,
  logo,
  description = "La community italiana per gli amanti delle tende da tetto e del campeggio",
  contactEmail = "info@tendedatettoecampeggio.it"
}: OrganizationSchemaProps = {}) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const finalUrl = url || siteUrl;
  const finalLogo = logo || `${siteUrl}/logo.png`;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": finalUrl,
    "logo": finalLogo,
    "description": description,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": contactEmail,
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/tendedatettoecampeggio",
      "https://www.instagram.com/tendedatettoecampeggio"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
