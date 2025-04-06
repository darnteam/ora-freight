import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './button';

interface ThemeToggleProps {
  size?: 'default' | 'sm' | 'lg';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ size = 'default' }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // On mount, read the preferred theme from localStorage or system preferences
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    const currentTheme = savedTheme || systemTheme;
    setTheme(currentTheme);
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const sizeClasses = {
    'default': 'w-10 h-10',
    'sm': 'w-8 h-8',
    'lg': 'w-12 h-12'
  };

  const iconSizes = {
    'default': 20,
    'sm': 16,
    'lg': 24
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`rounded-full bg-transparent ${sizeClasses[size]}`}
    >
      {theme === 'light' ? (
        <Moon size={iconSizes[size]} className="text-gray-700" />
      ) : (
        <Sun size={iconSizes[size]} className="text-gray-200" />
      )}
    </Button>
  );
};
