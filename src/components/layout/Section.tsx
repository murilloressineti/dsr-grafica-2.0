import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("w-full py-12 md:py-16 lg:py-20 px-6", className)}
    >
      <div className={cn("max-w-360 mx-auto")}>
        {children}
      </div>
    </section>
  );
}
