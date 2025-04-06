import React, { useEffect, useState } from "react";
import { Particles } from "./particles";
import { useTheme } from "../../hooks/use-theme";

interface ParticlesBackgroundProps {
  children: React.ReactNode;
  className?: string;
  quantity?: number;
  ease?: number;
  staticity?: number;
}

export function ParticlesBackground({ 
  children, 
  className,
  quantity = 80,
  ease = 80,
  staticity = 30
}: ParticlesBackgroundProps) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className={`relative bg-white dark:bg-neutral-950 ${className || ''}`}>
      {children}
      <Particles
        className="absolute inset-0 z-0"
        quantity={quantity}
        ease={ease}
        staticity={staticity}
        color={color}
      />
    </div>
  );
}
