import React from "react";
import { cn } from "@/lib/utils";
import Icon from "./Icon";

interface IconBoxProps extends React.ComponentProps<"div"> {
  icon: React.ElementType;
}

export default function IconBox({ icon, className, ...props }: IconBoxProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center justify-center ",
        "w-12 h-12 rounded-lg",
        "bg-[#F8FAFC] shadow-md",
        "border border-neutral-400",
        className,
      )}
      {...props}
    >
      <span className="absolute top-1 left-1 w-1 h-1 rounded-full bg-neutral-400" />
      <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-neutral-400" />
      <span className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-neutral-400" />
      <span className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-neutral-400" />

      <Icon svg={icon} className="fill-brand-secondary" />
    </div>
  );
}
