import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const textVariants = cva("font-sans antialiased", {
  variants: {
    variant: {
      // DISPLAY
      "display-xl":
        "text-4xl md:text-7xl leading-tight tracking-tight md:tracking-tighter font-medium",
      "display-lg":
        "text-3xl md:text-6xl leading-tight tracking-tight md:tracking-tighter font-medium",

      // HEADING
      h1: "text-2xl md:text-4xl leading-tight tracking-tight md:tracking-tight font-medium",
      h2: "text-xl md:text-3xl leading-snug font-medium",
      h3: "text-lg md:text-xl leading-normal font-medium",

      // BODY
      "body-lg":
        "text-lg md:text-xl leading-loose md:leading-relaxed font-normal",
      "body-md": "text-base leading-relaxed font-normal",
      "body-sm": "text-sm leading-snug md:leading-normal font-normal",

      // CTA (Botões)
      "cta-lg": "text-base leading-none font-semibold uppercase",
      "cta-md": "text-sm leading-none font-semibold uppercase",

      // OVERLINE
      "overline-md":
        "text-sm leading-snug tracking-widest font-medium uppercase",
      "overline-sm":
        "text-xs leading-tight tracking-wider font-medium uppercase",
    },
    TextColor: {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      tertiary: "text-text-tertiary",
      inverted: "text-text-inverted",
      brand: "text-brand-primary",
    },
  },
  defaultVariants: {
    variant: "body-md",
    TextColor: "primary",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "label"
    | "div"
    | "a";
} // O tipo as é uma string que representa a tag HTML a ser renderizada. Ele é opcional e tem um valor padrão de "p". Ele pode ser qualquer tag HTML válida, como h1, h2, p, span, etc.

export default function Text({
  as: Component = "p",
  variant,
  TextColor,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        textVariants({
          variant: variant || (Component as any),
          TextColor,
        }),
        className,
      )} // Fallback para usar o nome do componente como variante, caso a variante não seja especificada. as any é necessário para evitar erros de tipo, já que Component é do tipo string e não pode ser diretamente usado como chave de variante.
      {...props}
    >
      {children}
    </Component>
  );
}
