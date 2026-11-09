import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  keywords?: string;
  noindex?: boolean;
}

const DEFAULT_TITLE = 'Tekloria® ✦ Next-Gen Websites & Mobile Apps That Hit Different ⚡';
const DEFAULT_DESC = 'We engineer insane websites, 60fps mobile apps & high-converting business platforms. ⚡ Freelance speed, enterprise craft, zero agency fluff 🚀';

export default function SEO({
  title,
  description = DEFAULT_DESC,
  canonicalPath = '',
  keywords,
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    // 1. Update Document Title with Stylish divider
    const formattedTitle = title ? (title.includes('Tekloria') ? title : `${title} ✦ Tekloria®`) : DEFAULT_TITLE;
    document.title = formattedTitle;

    // 2. Helper to set or create meta tag
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        const [key, val] = selector.replace(/[[\]']/g, '').split('=');
        meta.setAttribute(key, val);
        document.head.appendChild(meta);
      }
      meta.setAttribute(attr, value);
    };

    // 3. Update Robots Directives (Honor noindex for 404 and unindexed pages)
    if (noindex) {
      setMetaTag('meta[name="robots"]', 'content', 'noindex, nofollow');
      setMetaTag('meta[name="googlebot"]', 'content', 'noindex, nofollow');
    } else {
      setMetaTag('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      setMetaTag('meta[name="googlebot"]', 'content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    }

    // 4. Update Meta Description
    setMetaTag('meta[name="description"]', 'content', description);

    // 4. Update Meta Keywords if provided
    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'content', keywords);
    }

    // 5. Update Open Graph & Twitter Tags
    setMetaTag('meta[property="og:title"]', 'content', formattedTitle);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:image"]', 'content', 'https://www.tekloria.in/og-image.png');
    setMetaTag('meta[name="twitter:title"]', 'content', formattedTitle);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', 'https://www.tekloria.in/og-image.png');
    
    const canonicalUrl = `https://www.tekloria.in${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);

    // 6. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 7. Inject Breadcrumbs Schema for non-root routes
    const cleanPath = canonicalPath.replace(/^\/+|\/+$/g, '');
    let breadcrumbScript = document.getElementById('route-breadcrumb-schema') as HTMLScriptElement | null;
    
    if (cleanPath) {
      const pageName = cleanPath.charAt(0).toUpperCase() + cleanPath.slice(1);
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tekloria.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": pageName,
            "item": canonicalUrl
          }
        ]
      };

      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.id = 'route-breadcrumb-schema';
        breadcrumbScript.type = 'application/ld+json';
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    } else if (breadcrumbScript) {
      breadcrumbScript.remove();
    }

  }, [title, description, canonicalPath, keywords, noindex]);

  return null;
}
