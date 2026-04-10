import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Text from "./Text";

export const buttonVariants = cva(
  "inline-flex items-center justify-center transition-all duration-300 cursor-pointer group antialiased rounded-md gap-2 shadow-sm hover:shadow-md shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-primary text-text-primary hover:bg-brand-primary-hover",
        secondary:
          "bg-brand-secondary text-text-inverted hover:bg-brand-primary",
        tertiary:
          "bg-transparent border border-border-default text-text-primary hover:bg-neutral-400",
      },
      size: {
        default: "py-5 px-8",
        sm: "p-3.5",
        md: "py-3.5 px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  as?: React.ElementType;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  as: Component = "button",
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Component
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (typeof child === "string") {
          return <Text variant={"cta-lg"}>{child}</Text>;
        }
        return child;
      })}
    </Component>
  );
}
