# RSS Feeds and Schema.org JSON-LD Implementation

This document describes the RSS feeds and structured data (Schema.org JSON-LD) implementation for SEO and content syndication.

## RSS Feeds

### Overview
RSS feeds enable readers and aggregators to subscribe to content updates automatically.

### Implementation
- **Utility**: [src/lib/rss.ts](src/lib/rss.ts)
  - `generateRSSFeed()` - Generates RSS XML with proper formatting
  - `getGuideRSSItems()` - Fetches guide content for RSS feed

- **API Endpoint**: [api/rss.ts](api/rss.ts)
  - Serves RSS feed at `/api/rss.xml`
  - Returns proper `application/rss+xml` content type
  - Includes cache headers (max-age: 3600)

### Features
- ✅ Guide articles with publication dates
- ✅ Author attribution for each article
- ✅ Category organization (Guide Tecniche)
- ✅ Proper XML escaping for special characters
- ✅ ATOM feed links for modern readers

### Accessing the Feed
- **URL**: `/api/rss.xml`
- **HTML Link Tag**: Added to `<head>` in index.html
- **Footer Link**: RSS icon in footer with link to feed
- **Supported Clients**: Feedly, Google Reader, Apple News, Thunderbird, Outlook, etc.

### Adding More Content to RSS
To add more content types (news, events, etc.), update `src/lib/rss.ts`:
1. Create a function like `getNewsRSSItems()` or `getEventsRSSItems()`
2. Add to the items array in the API endpoint
3. Update the feed title/description if needed

---

## Schema.org JSON-LD Structured Data

Structured data helps search engines better understand and rank your content.

### Components Location
[src/components/StructuredData.tsx](src/components/StructuredData.tsx)

### Implemented Schemas

#### 1. **ArticleSchema** ✅
**Purpose**: Mark up blog posts, guides, and articles
**Used On**: 
- [src/pages/GuideDetail.tsx](src/pages/GuideDetail.tsx)

**Fields**:
- headline
- description
- image
- datePublished
- dateModified (optional)
- author (Person)
- publisher (Organization)
- mainEntityOfPage

**Example Usage**:
```tsx
<ArticleSchema 
  headline={guide.title}
  description={guide.excerpt}
  image={guide.image}
  datePublished={getISODate(guide.date)}
  author={guide.author}
  url={canonicalUrl}
/>
```

**SEO Benefits**:
- Rich snippets in Google Search
- Better ranking for "how-to" and tutorial queries
- Author attribution in search results

---

#### 2. **OrganizationSchema** ✅
**Purpose**: Define your organization's identity
**Used On**: 
- [src/pages/About.tsx](src/pages/About.tsx)

**Fields**:
- name
- url
- logo
- description
- contactPoint (email, phone)
- sameAs (social profiles)

**SEO Benefits**:
- Organization knowledge panel in Google
- Branded search results
- Trust and credibility signals

---

#### 3. **BreadcrumbSchema** ✅
**Purpose**: Show navigation path in search results
**Used On**: 
- [src/pages/CampsiteList.tsx](src/pages/CampsiteList.tsx)
- [src/pages/GuideDetail.tsx](src/pages/GuideDetail.tsx)
- [src/pages/CampsiteDetail.tsx](src/pages/CampsiteDetail.tsx)

**Fields**:
- itemListElement with position, name, item URL

**SEO Benefits**:
- Breadcrumb trails in search results
- Better SERP CTR
- Improved crawlability

---

#### 4. **EventSchema** (New) ✅
**Purpose**: Mark up events, meetups, and gatherings
**Use Cases**: 
- Community meetups
- Camping events
- Skill-sharing sessions
- Raduni (rallies)

**Fields**:
- name
- description
- startDate
- endDate
- location (Place)
- image
- organizer (Organization)
- url

**Example Usage**:
```tsx
<EventSchema 
  name="Raduno Tende da Tetto - Dolomiti"
  description="Community gathering per appassionati di tende da tetto"
  startDate="2026-06-15T09:00:00Z"
  endDate="2026-06-17T18:00:00Z"
  location="Cortina d'Ampezzo, Italy"
  organizer="Tende da Tetto e Campeggio"
/>
```

**Where to Add**:
- Create events page or component
- Use in event detail pages
- Add to About page for community events

**SEO Benefits**:
- Event listings in Google Search
- Event appears on Google Maps
- Calendar integration in search results

---

#### 5. **ProductSchema** (New) ✅
**Purpose**: Mark up products (tents, accessories)
**Use Cases**:
- Roof tent models and reviews
- Camping gear and accessories
- Partner products with pricing

**Fields**:
- name
- description
- image
- brand
- price (with currency)
- availability (InStock, OutOfStock)
- aggregateRating (rating, reviewCount)
- offers (price, currency, availability)

**Example Usage**:
```tsx
<ProductSchema 
  name="Autohome Columbus Roof Tent"
  description="Premium roof tent for vehicle camping"
  image="https://example.com/image.jpg"
  brand="Autohome"
  price="3500"
  rating={4.8}
  reviewCount={127}
/>
```

**Where to Add**:
- Create products/gear showcase page
- Add to partner brand listings
- Include in accessory guides

**SEO Benefits**:
- Product rich snippets in search
- Google Shopping integration
- Price comparison tools integration
- Review ratings display

---

#### 6. **FAQPageSchema** (New) ✅
**Purpose**: Mark up FAQ sections and pages
**Use Cases**:
- FAQ pages
- Common questions in guides
- Troubleshooting sections

**Fields**:
- mainEntity (array of Questions)
  - name (question text)
  - acceptedAnswer with text

**Example Usage**:
```tsx
<FAQPageSchema 
  items={[
    {
      question: "A che temperatura si può dormire in tenda da tetto?",
      answer: "Con le giuste attrezzature, anche sotto zero gradi..."
    },
    {
      question: "Qual è il miglior isolamento per l'inverno?",
      answer: "Consigliamo sacchi a pelo con comfort fino a -15°C..."
    }
  ]}
/>
```

**Where to Add**:
- Create dedicated FAQ page
- Add to guide pages with FAQ sections
- Use in Support/Help pages

**SEO Benefits**:
- FAQ rich snippets in search
- Featured snippets for question queries
- Google assistant responses
- Position zero rankings

---

## Implementation Checklist

### ✅ Completed
- [x] ArticleSchema on guide detail pages
- [x] OrganizationSchema on About page
- [x] BreadcrumbSchema on list/detail pages
- [x] RSS feed generation and API endpoint
- [x] RSS feed link in HTML head
- [x] RSS feed link in footer
- [x] EventSchema component (ready to use)
- [x] ProductSchema component (ready to use)
- [x] FAQPageSchema component (ready to use)

### 📋 Ready to Implement
1. **Create FAQ Page** - Use FAQPageSchema for common questions
2. **Add Events Page** - Showcase community events with EventSchema
3. **Product Listings** - Add gear and accessory reviews with ProductSchema
4. **Expand RSS** - Add news, events, and product RSS feeds

---

## Testing and Validation

### RSS Feed Testing
1. Visit `/api/rss.xml` in browser
2. Validate XML: https://validator.w3.org/feed/
3. Test with reader: https://www.feedly.com/

### Schema Validation
1. Google Rich Results Test: https://search.google.com/test/rich-results
2. Schema.org Validator: https://validator.schema.org/
3. Check page source for `<script type="application/ld+json">`

### Browser DevTools
1. Open page → Inspect → Head section
2. Look for `<script type="application/ld+json">` tags
3. Copy content and validate at https://validator.schema.org/

---

## Best Practices

### For ArticleSchema
- ✅ Always include datePublished
- ✅ Use high-quality images (min 1200x800px)
- ✅ Match headline with `<h1>` tag
- ✅ Include author name and/or organization

### For EventSchema
- ✅ Use ISO 8601 date format (YYYY-MM-DDTHH:MM:SSZ)
- ✅ Include both startDate and endDate
- ✅ Provide complete address in location
- ✅ Add event image for better appearance

### For ProductSchema
- ✅ Always include price and currency
- ✅ Use valid availability values (InStock, OutOfStock, PreOrder)
- ✅ Include aggregateRating if available
- ✅ Add product image (min 1200x1200px)

### For FAQPageSchema
- ✅ Ask real questions users search for
- ✅ Provide comprehensive answers (100+ chars)
- ✅ Structure for position zero rankings
- ✅ Keep Q&A format simple and clear

---

## File Reference

| File | Purpose |
|------|---------|
| [src/lib/rss.ts](src/lib/rss.ts) | RSS feed generation utility |
| [api/rss.ts](api/rss.ts) | RSS feed API endpoint |
| [src/components/StructuredData.tsx](src/components/StructuredData.tsx) | All Schema.org components |
| [index.html](index.html) | RSS feed link in head |
| [src/components/Footer.tsx](src/components/Footer.tsx) | RSS feed link in footer |

---

## Next Steps

1. **Monitor SEO Impact**
   - Use Google Search Console to track rich snippet impressions
   - Check CTR improvements in search results
   - Monitor RSS subscriber growth

2. **Expand Content Syndication**
   - Add more RSS feeds (news, events, products)
   - Submit to RSS directories
   - Set up social media auto-posting from RSS

3. **Enhanced Structured Data**
   - Add local business schema if applicable
   - Implement review schema for user reviews
   - Add video schema for video content

4. **Performance**
   - Monitor RSS feed generation time
   - Cache RSS feed at CDN level
   - Optimize JSON-LD payload size
