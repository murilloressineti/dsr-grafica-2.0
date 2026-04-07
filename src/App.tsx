import { Button, Icon, Text } from "@components/ui";
import { Section } from "@components/layout";

import {
  ArrowUpRight,
  BuildingOffice,
  CaretDown,
  CaretLeft,
  CaretRight,
  CaretUp,
  Clock,
  Coins,
  Envelope,
  Files,
  GraduationCap,
  MapPin,
  Package,
  Phone,
  Star,
  StarHalf,
  WhatsappLogo,
} from "./assets/icons";

export default function App() {
  return (
    <div className="bg-bg-default">
      {/* TEXT */}
      <div className="bg-bg-subtle">
        <Text as="h1" variant={"display-xl"} TextColor="primary">
          Olá, mundo!
        </Text>

        <Text variant={"display-lg"} TextColor="primary">
          Olá, mundo!
        </Text>

        <Text as="h1" TextColor="secondary">
          Olá, mundo!
        </Text>

        <Text as="h2" TextColor="secondary">
          Olá, mundo!
        </Text>

        <Text as="h3" TextColor="secondary">
          Olá, mundo!
        </Text>

        <Text variant={"body-lg"} TextColor="tertiary">
          Olá, mundo!
        </Text>

        <Text variant={"body-md"} TextColor="tertiary">
          Olá, mundo!
        </Text>

        <Text variant={"body-sm"} TextColor="tertiary">
          Olá, mundo!
        </Text>

        <Text variant={"cta-lg"} TextColor="inverted">
          Olá, mundo!
        </Text>

        <Text variant={"cta-md"} TextColor="inverted">
          Olá, mundo!
        </Text>

        <Text variant={"overline-md"} TextColor="brand">
          Olá, mundo!
        </Text>

        <Text variant={"overline-sm"} TextColor="brand">
          Olá, mundo!
        </Text>
      </div>

      {/* ICON */}
      <div className="flex">
        <Icon svg={ArrowUpRight} className="fill-brand-primary" />
        <Icon svg={BuildingOffice} className="fill-brand-primary" />
        <Icon svg={CaretDown} />
        <Icon svg={CaretLeft} className="fill-brand-primary" />
        <Icon svg={CaretRight} className="fill-brand-primary" />
        <Icon svg={CaretUp} className="fill-brand-primary" />
        <Icon svg={Clock} className="fill-brand-primary" />
        <Icon svg={Coins} />
        <Icon svg={Envelope} className="fill-brand-primary" />
        <Icon svg={Files} className="fill-brand-primary" />
        <Icon svg={GraduationCap} className="fill-brand-primary" />
        <Icon svg={MapPin} className="fill-brand-primary" />
        <Icon svg={Package} />
        <Icon svg={Phone} className="fill-brand-primary" />
        <Icon svg={Star} />
        <Icon svg={StarHalf} className="fill-brand-primary" />
        <Icon svg={WhatsappLogo} className="fill-brand-primary" />
      </div>

      {/* BUTTON */}
      <div>
        <Button>
          Pedir orçamento em minutos{" "}
          <Icon
            svg={ArrowUpRight}
            animate={"rotate"}
            className="fill-text-primary"
          />
        </Button>

        <Button variant={"tertiary"} size={"sm"}>
          <Icon svg={CaretLeft} size={"sm"} className="fill-text-primary" />
        </Button>

        <Button variant={"secondary"} size={"sm"}>
          <Icon svg={CaretRight} size={"sm"} className="fill-text-inverted" />
        </Button>
      </div>

      {/* Section */}
      <Section>
        <div className="max-w-300 mx-auto flex flex-col gap-6 md:flex-row items-center justify-between">
          <div className="flex flex-col gap-3 items-center">
            <Text variant={"display-lg"}>43</Text>
            <Text variant={"body-lg"} TextColor={"secondary"}>
              Anos no mercado gráfico
            </Text>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <Text variant={"display-lg"}>+15</Text>
            <Text variant={"body-lg"} TextColor={"secondary"}>
              Serviços disponíveis
            </Text>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <Text variant={"display-lg"}>1 dia</Text>
            <Text variant={"body-lg"} TextColor={"secondary"}>
              Prazo de entrega
            </Text>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <Text variant={"display-lg"}>100%</Text>
            <Text variant={"body-lg"} TextColor={"secondary"}>
              Atendimento humano
            </Text>
          </div>
        </div>
      </Section>

      <Section>
        <div className="p-16 bg-bg-white rounded-4xl">
          <div className="flex flex-col gap-4 items-center ">
            <Text variant={"cta-md"} TextColor={"brand"} className="uppercase">
              Serviços
            </Text>
            <Text variant={"h1"}>O que você precisa, a gente faz</Text>
            <Text variant={"body-lg"} TextColor={"secondary"}>
              Escolha pelo seu perfil, não precisa saber o nome técnico do
              serviço.
            </Text>
          </div>
        </div>
      </Section>
    </div>
  );
}
