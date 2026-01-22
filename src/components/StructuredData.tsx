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

interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  image?: string;
  url?: string;
  organizer?: string;
}

export const EventSchema = ({
  name,
  description,
  startDate,
  endDate,
  location,
  image,
  url,
  organizer = "Tende da Tetto e Campeggio"
}: EventSchemaProps) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const eventUrl = url || siteUrl;
  const eventImage = image || `${siteUrl}/hero-camping.jpg`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": name,
    "description": description,
    "startDate": startDate,
    "endDate": endDate,
    "location": {
      "@type": "Place",
      "name": location
    },
    "image": eventImage,
    "url": eventUrl,
    "organizer": {
      "@type": "Organization",
      "name": organizer
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

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  brand: string;
  price?: string;
  availability?: string;
  url?: string;
  rating?: number;
  reviewCount?: number;
}

export const ProductSchema = ({
  name,
  description,
  image,
  brand,
  price,
  availability = "https://schema.org/InStock",
  url,
  rating,
  reviewCount
}: ProductSchemaProps) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const productUrl = url || siteUrl;

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    ...(price && { 
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": "EUR",
        "availability": availability,
        "url": productUrl
      }
    }),
    ...(rating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating,
        "reviewCount": reviewCount || 0
      }
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  items: FAQItem[];
  url?: string;
}

export const FAQPageSchema = ({ items, url }: FAQPageSchemaProps) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const pageUrl = url || siteUrl;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
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
