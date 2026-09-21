import { motion } from "framer-motion";

import { fadeInDown, viewportSettings } from "@/lib/motion";

import { Section } from "../layout";
import { Icon, Text } from "../ui";

import { Package, Lightning, Medal, User } from "@/assets/icons";

const stats = [
  {
    icon: Medal,
    color: "fill-brand-magenta",
    value: "43",
    label: "Anos no mercado gráfico",
  },
  {
    icon: Package,
    color: "fill-brand-yellow",
    value: "+15",
    label: "Serviços disponíveis",
  },
  {
    icon: Lightning,
    color: "fill-brand-primary",
    value: "1 dia",
    label: "Prazo de entrega",
  },
  {
    icon: User,
    color: "fill-brand-green",
    value: "100%",
    label: "Atendimento humano",
  },
];

export default function StatsSection() {
  return (
    <Section id="estatísticas" className="py-12 md:py-24 lg:py-30 lg:px-30">
      <div className="max-w-300 mx-auto flex flex-col gap-6 lg:flex-row lg:gap-0 items-center justify-between">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            custom={index}
            className={`
              flex flex-col gap-4 md:gap-3 items-center text-center group
              lg:flex-1 lg:px-6
              ${index !== stats.length - 1 ? "lg:border-r lg:border-neutral-300" : ""}
            `}
          >
            <Icon svg={stat.icon} size="xl" className={stat.color} />

            <Text
              variant="display-lg"
              className="text-4xl md:font-medium font-bold"
            >
              {stat.value}
            </Text>

            <Text variant="body-lg" TextColor="secondary">
              {stat.label}
            </Text>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
