"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface NavHeaderProps {
  items: Array<{
    label: string;
    href: string;
  }>;
  currentPath: string;
  textSize?: "xs" | "sm" | "base" | "lg";
}

function NavHeader({ items, currentPath, textSize = "base" }: NavHeaderProps) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const textSizeClasses = {
    "xs": "text-xs md:text-sm",
    "sm": "text-xs md:text-sm",
    "base": "text-xs md:text-base",
    "lg": "text-sm md:text-lg"
  };

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 border-neutral-900 dark:border-white bg-white dark:bg-neutral-900 p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {items.map((item) => (
        <Tab 
          key={item.label} 
          href={item.href} 
          active={item.href === currentPath}
          setPosition={setPosition}
          textSizeClass={textSizeClasses[textSize]}
        >
          {item.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

interface TabProps {
  children: React.ReactNode;
  href: string;
  active?: boolean;
  textSizeClass: string;
  setPosition: React.Dispatch<React.SetStateAction<{
    left: number;
    width: number;
    opacity: number;
  }>>;
}

const Tab = ({
  children,
  href,
  active,
  textSizeClass,
  setPosition,
}: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);
  
  // Highlight active tab on initial render
  React.useEffect(() => {
    if (active && ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setPosition({
        width,
        opacity: 1,
        left: ref.current.offsetLeft,
      });
    }
  }, [active, setPosition]);
  
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className={`relative z-10 block cursor-pointer px-3 py-1.5 uppercase text-white mix-blend-difference md:px-4 md:py-2.5 ${textSizeClass}`}
    >
      <a href={href}>{children}</a>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-neutral-900 dark:bg-white md:h-10"
    />
  );
};

export default NavHeader;
