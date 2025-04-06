import React, { createContext, forwardRef, useState } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

// --- Context ---
const NavigationMenuContext = createContext({
  activeIndex: -1,
  setActiveIndex: (_: number) => {},
});

// --- Root Component ---
interface NavigationMenuProps {
  children: React.ReactNode;
  className?: string;
}

export const NavigationMenu = ({ children, className }: NavigationMenuProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  
  return (
    <NavigationMenuContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </NavigationMenuContext.Provider>
  );
};

// --- List Component ---
interface NavigationMenuListProps {
  children: React.ReactNode;
  className?: string;
}

export const NavigationMenuList = forwardRef<HTMLDivElement, NavigationMenuListProps>(
  ({ children, className }, ref) => {
    return (
      <div 
        ref={ref} 
        className={cn("flex items-center space-x-1", className)}
      >
        {children}
      </div>
    );
  }
);

NavigationMenuList.displayName = "NavigationMenuList";

// --- Item Component ---
interface NavigationMenuItemProps {
  children: React.ReactNode;
  className?: string;
}

export const NavigationMenuItem = forwardRef<HTMLDivElement, NavigationMenuItemProps>(
  ({ children, className }, ref) => {
    return (
      <div 
        ref={ref} 
        className={cn("relative", className)}
      >
        {children}
      </div>
    );
  }
);

NavigationMenuItem.displayName = "NavigationMenuItem";

// --- Trigger Component ---
interface NavigationMenuTriggerProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const NavigationMenuTrigger = forwardRef<HTMLDivElement, NavigationMenuTriggerProps>(
  ({ children, className, onClick, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        onClick={onClick}
        className={cn(
          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    );
  }
);

NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

// --- Content Component ---
interface NavigationMenuContentProps {
  children: React.ReactNode;
  className?: string;
}

export const NavigationMenuContent = forwardRef<HTMLDivElement, NavigationMenuContentProps>(
  ({ children, className }, ref) => {
    return (
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "absolute left-0 top-full z-50 mt-1.5 origin-top-center rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-900 p-2 shadow-lg",
          className
        )}
      >
        {children}
      </motion.div>
    );
  }
);

NavigationMenuContent.displayName = "NavigationMenuContent";

// --- Link Component ---
interface NavigationMenuLinkProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const NavigationMenuLink = forwardRef<HTMLAnchorElement, NavigationMenuLinkProps>(
  ({ children, className, href, onClick }, ref) => {
    const handleClick = (e: React.MouseEvent) => {
      if (onClick) {
        onClick();
      }
      if (!href) {
        e.preventDefault();
      }
    };

    return (
      <a
        ref={ref}
        href={href || "#"}
        onClick={handleClick}
        className={cn(
          "block select-none rounded-md leading-none no-underline outline-none transition-colors",
          className
        )}
      >
        {children}
      </a>
    );
  }
);

NavigationMenuLink.displayName = "NavigationMenuLink";
