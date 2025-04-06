import React from "react";
import { Badge } from "./badge";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceFeatureSectionProps {
  badge?: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  variant?: "primary" | "secondary";
  className?: string;
}

export function ServiceFeatureSection({
  badge = "Service",
  title,
  description,
  features,
  variant = "primary",
  className,
}: ServiceFeatureSectionProps) {
  // Check if we're using right alignment
  const isRightAligned = className?.includes('text-right');
  
  return (
    <div className={cn("w-full px-4 py-10", className)}>
      <div className="mx-auto">
        <div className="flex gap-4 flex-col items-start">
          <div className={cn(isRightAligned ? "self-end" : "")}>
            <Badge variant={variant === "primary" ? "default" : "secondary"}>
              {badge}
            </Badge>
          </div>
          <div className="flex gap-2 flex-col w-full">
            <h2 className={cn(
              "text-2xl md:text-3xl tracking-tighter font-bold",
              variant === "primary" 
                ? "text-neutral-700 dark:text-neutral-300" 
                : "text-gray-700 dark:text-gray-300"
            )}>
              {title}
            </h2>
            <p className="text-base md:text-lg leading-relaxed tracking-tight text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
          <div className="flex gap-6 pt-8 flex-col w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className={cn(
                  "flex flex-row gap-4 items-start",
                  isRightAligned && "flex-row-reverse"
                )}>
                  <Check className={cn(
                    "w-5 h-5 mt-1 flex-shrink-0",
                    variant === "primary" 
                      ? "text-neutral-600 dark:text-neutral-400" 
                      : "text-gray-600 dark:text-gray-400"
                  )} />
                  <div className="flex flex-col gap-1">
                    <p className={cn(
                      "font-bold tracking-tight",
                      variant === "primary" 
                        ? "text-gray-900 dark:text-gray-100" 
                        : "text-gray-800 dark:text-gray-200"
                    )}>
                      {feature.title}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm tracking-tight">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
