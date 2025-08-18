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
        "grid grid-cols-1 md:grid-cols-3 auto-rows-max gap-4 max-w-7xl mx-auto",
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
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 p-4 w-full bg-white border border-white-200",
        className
      )}
    >
      {header && <div className="flex flex-col gap-2 mb-4">{header}</div>}
      {icon && <div className="flex items-center gap-2 mb-2">{icon}</div>}
      {title && (
        <div className="font-bold text-black mb-2">
          {title}
        </div>
      )}
      {description && (
        <div className="font-normal text-black text-sm">
          {description}
        </div>
      )}
    </div>
  );
};
