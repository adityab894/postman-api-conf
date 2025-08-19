import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-6 grid-flow-dense max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  backgroundClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  backgroundClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-2xl group/bento p-6 w-full backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-orange-300",
        backgroundClassName ?? "bg-white/80",
        className
      )}
    >
      <div className="relative z-10">
        {header && <div className="flex flex-col gap-2 mb-4">{header}</div>}
        {icon && (
          <div className="flex items-center gap-2 mb-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-blue-600 text-white flex items-center justify-center shadow-md">
              {icon}
            </div>
          </div>
        )}
        {title && (
          <div className="text-xl font-semibold text-black mb-2">
            {title}
          </div>
        )}
        {description && (
          <div className="text-sm leading-6 text-black">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
