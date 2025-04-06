import React, { useState, useEffect } from 'react';
import { DEFAULT_NAVIGATION_ITEMS } from './constants';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Header1 } from './components/ui/header';
import Footer from './components/Footer';

// Define route configuration
const ROUTES = {
  '/': {
    component: HomePage,
    title: 'Home',
  },
  '/services': {
    component: ServicesPage,
    title: 'Services',
  },
  '/about': {
    component: AboutPage,
    title: 'About',
  },
  '/contact': {
    component: ContactPage,
    title: 'Contact',
  },
};

// Simple routing functionality
export function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');
  
  useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash.slice(1) || '/';
      setCurrentPath(newPath);
      
      // Scroll to top when navigating to a new page
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
      // Update document title
      const routeConfig = ROUTES[newPath as keyof typeof ROUTES];
      if (routeConfig) {
        document.title = `Ora Freight | ${routeConfig.title}`;
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Get current route configuration
  const routeConfig = ROUTES[currentPath as keyof typeof ROUTES] || ROUTES['/'];
  const PageComponent = routeConfig.component;
  
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Header1 
        logo="Ora Freight" 
        navigationItems={DEFAULT_NAVIGATION_ITEMS}
      />
      <main className="pt-20 flex-grow bg-white dark:bg-neutral-950">
        <PageComponent />
      </main>
      <Footer />
    </div>
  );
}
