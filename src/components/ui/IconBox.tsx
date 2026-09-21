import React from "react";
import { cn } from "@/lib/utils";
import Icon from "./Icon";

interface IconBoxProps extends React.ComponentProps<"div"> {
  icon: React.ElementType;
  iconClassName?: string;
}

export default function IconBox({
  icon,
  className,
  iconClassName,
  ...props
}: IconBoxProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center justify-center",
        "w-12 h-12 rounded-lg",
        "bg-[#F8FAFC] shadow-md",

        className,
      )}
      {...props}
    >
      <Icon svg={icon} className={cn("fill-brand-secondary", iconClassName)} />
    </div>
  );
}
