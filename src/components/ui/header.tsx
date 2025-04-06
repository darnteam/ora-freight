import React, { useState, useEffect } from "react";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import NavHeader from "./nav-header";

interface NavigationItem {
    title: string;
    href?: string;
}

function Header1({ 
    navigationItems = defaultNavigationItems,
}: {
    navigationItems?: NavigationItem[];
    logo?: string;
}) {
    const [isOpen, setOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleHashChange = () => {
            setCurrentPath(window.location.hash.slice(1) || '/');
        };
        
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        
        window.addEventListener('hashchange', handleHashChange);
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = () => {
        setOpen(false); // Close mobile menu
    };

    // Transform navigation items for NavHeader
    const navItems = navigationItems.map(item => ({
        label: item.title,
        href: item.href || '#'
    }));

    return (
        <header className={`w-full z-40 fixed top-0 left-0 bg-transparent ${scrolled ? 'backdrop-blur-sm bg-white/70 dark:bg-neutral-900/70' : ''}`}>
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row items-center justify-between py-2">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="#/" className="relative flex items-center">
                        {/* Use the actual logo image with proper path */}
                        <img 
                            src={process.env.PUBLIC_URL + '/assets/logo.png'} 
                            alt="Ora Freight Logo"
                            className="h-24 md:h-36 w-auto" 
                            onError={(e) => {
                                console.error("Logo failed to load");
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                            }}
                        />
                    </a>
                </div>
                
                {/* Nav - Desktop */}
                <div className="hidden lg:block flex-grow">
                    <NavHeader items={navItems} currentPath={currentPath} textSize="sm" />
                </div>
                
                {/* Right side - Action buttons */}
                <div className="flex items-center gap-4">
                    <ThemeToggle size="lg" />
                    <Button size="lg" className="px-6 py-2 text-xs sm:text-sm">Get Started</Button>
                    
                    {/* Mobile menu button */}
                    <Button 
                        variant="ghost" 
                        size="icon"
                        className="lg:hidden h-12 w-12"
                        onClick={() => setOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>
                
                {/* Mobile menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 border-t border-gray-200 dark:border-gray-800 flex flex-col w-full bg-white dark:bg-neutral-900 shadow-lg py-4 container gap-4 lg:hidden z-50">
                        {navigationItems.map((item) => (
                            <div key={item.title} className="py-2">
                                <a
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className="flex justify-between items-center px-2"
                                >
                                    <span className="text-lg">{item.title}</span>
                                </a>
                            </div>
                        ))}
                        <div className="px-2 pt-4 mt-2 border-t border-gray-200 dark:border-gray-800">
                            <Button className="w-full">Get Started</Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

const defaultNavigationItems: NavigationItem[] = [
    { title: "Home", href: "#/" },
    { title: "Services", href: "#/services" },
    { title: "About", href: "#/about" },
    { title: "Contact", href: "#/contact" }
];

export { Header1 };
