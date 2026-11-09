import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';

/**
 * AnalyticsTracker component monitors React Router client-side navigation
 * and dispatches a single 'page_view' event to GA4 on route changes.
 *
 * It uses a ref guard to eliminate duplicate triggers on the same path,
 * and defers tracking by a microtick to allow dynamic SEO title updates.
 */
export default function AnalyticsTracker() {
  const location = useLocation();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    const fullPath = location.pathname + location.search;

    if (lastTrackedPath.current === fullPath) {
      return;
    }
    lastTrackedPath.current = fullPath;

    // Small delay ensures <SEO /> component has updated document.title
    const timer = setTimeout(() => {
      trackPageView(fullPath, document.title);
    }, 60);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  return null;
}

