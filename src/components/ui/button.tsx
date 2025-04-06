import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean; // Add asChild prop
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"; // Use span if asChild is true
    
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          
          // Variants - updated to use neutral colors
          variant === "default" && "bg-neutral-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-neutral-200",
          variant === "destructive" && "bg-red-500 text-white hover:bg-red-600",
          variant === "outline" && "border border-gray-300 bg-transparent hover:bg-gray-100",
          variant === "secondary" && "bg-gray-200 text-gray-900 hover:bg-gray-300",
          variant === "ghost" && "bg-transparent hover:bg-gray-100",
          variant === "link" && "text-neutral-900 underline-offset-4 hover:underline bg-transparent dark:text-white",
          
          // Sizes
          size === "default" && "h-10 py-2 px-4",
          size === "sm" && "h-9 px-3",
          size === "lg" && "h-11 px-8",
          size === "icon" && "h-10 w-10",
          
          className
        )}
        ref={asChild ? undefined : ref} // Don't forward ref if asChild is true
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
