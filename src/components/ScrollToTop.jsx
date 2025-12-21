import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component
 * Automatically scrolls to top of page on route change
 * Should be placed inside BrowserRouter but outside Routes
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top (not smooth)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

