import { useState } from "react";
import { Badge } from "./badge";
import { GripVertical } from "lucide-react";

interface FeatureProps {
  title?: string;
  description?: string;
  badgeText?: string;
  className?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  leftLabel?: string;
  rightLabel?: string;
  showHeader?: boolean;
}

function Feature({
  title = "Something new!",
  description = "Managing a small business today is already tough.",
  badgeText = "Platform",
  className,
  leftContent,
  rightContent,
  leftLabel = "Option A",
  rightLabel = "Option B",
  showHeader = true,
}: FeatureProps) {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(Math.max(5, Math.min(95, percentage))); // Limit slider to 5%-95% range
  };

  return (
    <div className={`w-full py-10 lg:py-10 ${className}`}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          {showHeader && (
            <>
              <div>
                <Badge>{badgeText}</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="gradient-text section-title">{title}</h2>
                <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-500 dark:text-gray-400">
                  {description}
                </p>
              </div>
            </>
          )}

          <div className="pt-8 w-full">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onMouseLeave={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              {/* Divider line with handle */}
              <div
                className="bg-neutral-900 dark:bg-white h-full w-1 absolute z-20 top-0 -ml-1 select-none"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-white dark:bg-neutral-900 rounded hover:scale-110 transition-all w-10 h-20 select-none -translate-y-1/2 absolute top-1/2 -ml-[18px] z-30 cursor-ew-resize flex justify-center items-center shadow-md border border-gray-200 dark:border-gray-700"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="h-49 w-9 select-none" />
                </button>
              </div>

              {/* Left content (clipped) */}
              <div
                className="absolute left-0 top-0 z-10 w-full h-full"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              >
                {/* Left side label */}
                <div className="absolute bottom-4 left-4 z-30 bg-neutral-900/90 dark:bg-white/90 dark:text-black px-3 py-1 rounded-full text-white text-xs font-medium">
                  {leftLabel}
                </div>

                {/* Left content container */}
                <div className="w-full h-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-y-auto">
                  {leftContent}
                </div>
              </div>

              {/* Right content (full) */}
              <div className="absolute left-0 top-0 w-full h-full">
                {/* Right side label */}
                <div className="absolute bottom-4 right-4 z-30 bg-gray-600/90 px-3 py-1 rounded-full text-white text-xs font-medium">
                  {rightLabel}
                </div>

                {/* Right content container */}
                <div className="w-full h-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-y-auto">
                  {rightContent}
                </div>
              </div>
            </div>

            {/* Instructions text */}
            <p className="text-center text-xs sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 mt-4">
              <span className="text-xl sm:text-2xl lg:text-3xl">←</span> Slide
              to compare {leftLabel} and {rightLabel}
              <span className="text-xl sm:text-2xl lg:text-3xl">→</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
