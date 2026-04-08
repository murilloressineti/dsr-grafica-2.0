import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Text from "./Text";

export const badgeVariants = cva(
  "py-1 px-2 rounded-md w-fit inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-brand-primary",
        outline: "bg-transparent border border-brand-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BadgeProps
  extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {}

export default function Badge({
  variant,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props}>
      <Text as="span" variant={"overline-md"} className="uppercase font-semibold" >
        {children}
      </Text>
    </div>
  );
}
