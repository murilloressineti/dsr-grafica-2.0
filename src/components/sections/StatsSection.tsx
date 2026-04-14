import { Section } from "../layout";
import { Text } from "../ui";

const stats = [
  { value: "43", label: "Anos no mercado gráfico" },
  { value: "+15", label: "Serviços disponíveis" },
  { value: "1 dia", label: "Prazo de entrega" },
  { value: "100%", label: "Atendimento humano" },
];

export default function StatsSection() {
  return (
    <Section id="stats" className="py-12 md:py-24 lg:py-30">
      <div className="max-w-300 mx-auto flex flex-col gap-6 md:flex-row items-center justify-between">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 md:gap-3 items-center text-center group"
          >
            <Text
              variant={"display-lg"}
              className="text-4xl md:font-medium font-bold"
            >
              {stat.value}
            </Text>
            <Text variant={"body-lg"} TextColor={"secondary"}>
              {stat.label}
            </Text>
          </div>
        ))}
      </div>
    </Section>
  );
}
