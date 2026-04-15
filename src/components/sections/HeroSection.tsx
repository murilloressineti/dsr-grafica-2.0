import { Section } from "../layout";
import { Badge, Button, Icon, Text } from "../ui";
import { ArrowUpRight } from "@/assets/icons";

export default function HeroSection() {
  return (
    <Section
      id="hero"
      className="relative w-full pt-8 pb-8 md:pt-20 md:pb-30 lg:pt-20 lg:pb-30 overflow-hidden"
    >
      {/* Background com degradê sutil do design */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(circle at top, #61B5DB 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      />

      <div className="relative z-10 mx-auto px-6 md:px-30 flex flex-col items-center text-center">
        {/* Badges Superiores */}
        <div className="flex gap-3 mb-5">
          <Badge variant="default">Guarulhos</Badge>
          <Badge variant="outline">Desde 1982</Badge>
        </div>

        {/* Título Principal */}
        <Text as="h1" variant="display-xl" className="max-w-3xl mb-5">
          Seu material impresso em horas, não em dias.
        </Text>

        {/* Subtítulo / Descrição */}
        <Text
          variant="body-lg"
          TextColor="secondary"
          className="max-w-4xl mb-14 md:mb-16"
        >
          TCC, banner, panfletos, contrato, entregamos no mesmo dia. 43 anos de
          experiência com atendimento humano de verdade.
        </Text>

        {/* CTA Principal */}
        <div className="flex flex-col items-center gap-4">
          <Button
            as="a"
            href="#"
            size="default"
            className="shadow-lg shadow-blue-200"
          >
            Pedir orçamento em minutos
            <Icon
              svg={ArrowUpRight}
              animate={"rotate"}
              size={"md"}
              className="fill-text-primary"
            />
          </Button>

          {/* Status de Atendimento */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B415] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B415] "></span>
            </span>

            <Text variant="body-md" className="text-neutral-600">
              Respondemos em minutos · Seg-sex, 9h30-18h00
            </Text>
          </div>
        </div>
      </div>
    </Section>
  );
}
