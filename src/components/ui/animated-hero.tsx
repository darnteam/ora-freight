import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Phone } from "lucide-react";
import { Button } from "./button";
import { ParticlesBackground } from "./particles-background";

interface AnimatedHeroProps {
  titles?: string[];
  mainText?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonHref?: string;
  showSecondaryButton?: boolean;
}

function AnimatedHero({
  titles = ["reliable", "efficient", "cost-effective", "streamlined", "modern"],
  mainText = "Trucking solutions that are",
  description = "Our services are designed to help independent truckers and small fleets manage their businesses more efficiently. From load booking to instant payments, we provide the tools you need to succeed.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "Contact Us",
  primaryButtonHref = "#/get-started",
  secondaryButtonHref = "#/contact",
  showSecondaryButton = true,
}: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <ParticlesBackground className="py-12 md:py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto">
        <div className="flex gap-8 py-12 lg:py-24 items-center justify-center flex-col relative z-10">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tight text-center font-semibold">
              <span className="gradient-text block">{mainText}</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center h-20 md:h-28">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-neutral-900 dark:text-neutral-100"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-600 dark:text-gray-400 max-w-3xl text-center">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={primaryButtonHref}>
              <Button size="lg" className="px-8 gap-2">
                {primaryButtonText} <MoveRight className="w-5 h-5" />
              </Button>
            </a>
            
            {showSecondaryButton && (
              <a href={secondaryButtonHref}>
                <Button size="lg" variant="outline" className="px-8 gap-2">
                  {secondaryButtonText} <Phone className="w-5 h-5" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </ParticlesBackground>
  );
}

export { AnimatedHero };
