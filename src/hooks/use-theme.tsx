import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check if document is available (client-side)
    if (typeof document !== 'undefined') {
      // Set initial theme based on class or system preference
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
      
      // Observer for changes to the HTML class
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.attributeName === 'class' &&
            mutation.target === document.documentElement
          ) {
            const isDarkNow = document.documentElement.classList.contains('dark');
            setTheme(isDarkNow ? 'dark' : 'light');
          }
        });
      });
      
      // Start observing
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });

      // Clean up
      return () => observer.disconnect();
    }
  }, []);

  return { theme };
}
