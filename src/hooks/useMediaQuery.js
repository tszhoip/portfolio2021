import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design
 * Detects viewport size and returns boolean for breakpoint match
 *
 * @param {string} breakpoint - Breakpoint name ('sm', 'md', 'lg', 'xl')
 * @returns {boolean} True if viewport is at or above breakpoint
 */

const BREAKPOINTS = {
  sm: 600,    // Mobile
  md: 900,    // Tablet
  lg: 1200,   // Desktop
  xl: 1800,   // Large desktop
};

export const useMediaQuery = (breakpoint = 'md') => {
  const [matches, setMatches] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const breakpointPixels = BREAKPOINTS[breakpoint] || BREAKPOINTS.md;
    const mediaQuery = window.matchMedia(`(min-width: ${breakpointPixels}px)`);

    // Set initial value
    setMatches(mediaQuery.matches);

    // Handle resize events
    const handleChange = (e) => {
      setMatches(e.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [breakpoint]);

  // Return false during SSR to avoid hydration mismatch
  return isMounted ? matches : false;
};

/**
 * Alternative hook: useIsMobile
 * Convenience hook to detect if viewport is mobile
 */
export const useIsMobile = () => {
  return !useMediaQuery('md');
};

/**
 * Alternative hook: useIsDesktop
 * Convenience hook to detect if viewport is desktop
 */
export const useIsDesktop = () => {
  return useMediaQuery('lg');
};
