import React from "react";
import { cn } from "@/lib/utils";
import { Icon, IconBox, Text } from "../ui";
import { StarService } from "@/assets/icons";

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  category: string;
  description: string;
  items: string[];
  icon: React.ElementType;
  colors: {
    icon: string;
    iconBg: string;
    category: string;
    bullet: string;
  };
}

export default function ServiceCard({
  title,
  category,
  description,
  items,
  icon,
  colors,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col p-5 md:p-6 bg-neutral-100 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className,
      )}
    >
      {/* Ícone */}
      <IconBox
        icon={icon}
        className={cn("mb-9", colors.iconBg)}
        iconClassName={colors.icon}
      />

      {/* Conteúdo */}
      <div className="flex flex-col gap-4">
        <Text
          variant="overline-md"
          className={cn("font-semibold", colors.category)}
        >
          {category}
        </Text>

        <Text as="h3" variant="h2" className="w-2/3">
          {title}
        </Text>

        <Text variant="body-md" className="text-neutral-600">
          {description}
        </Text>
      </div>

      {/* Divisória */}
      <div className="w-full h-px bg-border-default my-8" />

      {/* Lista de serviços */}
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            <div className="flex items-center gap-2">
              <Icon
                svg={StarService}
                size={"xs"}
                className={colors.bullet}
              ></Icon>
              <Text variant={"body-md"} className="text-neutral-600">
                {item}
              </Text>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
