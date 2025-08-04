import type React from "react";
import { cn } from "../lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {

    return <div className={cn("max-w-7xl mx-auto px-4 md:py-8", className)}>{children}</div>


}
