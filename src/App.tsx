import { Badge, Button, Icon, Text } from "@components/ui";
import { Header, Section } from "@components/layout";
import { ServiceCard, TestimonialCard } from "@components/features";

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
    <div className="bg-bg-default pt-20">
      {/* HEADER */}
      <Header />

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

      {/* BADGE */}
      <div className="flex gap-3 p-10">
        <Badge>Guarulhos</Badge>
        <Badge variant={"outline"}>Desde 1982</Badge>
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

          {/* ServiceCard */}
          <div className="flex gap-5 md:gap-10 justify-between">
            {[
              {
                icon: GraduationCap,
                category: "Para Estudantes",
                title: "Trabalhos Acadêmicos",
                description:
                  "Agilidade em impressões e encadernações para seus trabalhos e projetos",
                items: [
                  "Encadernação espiral e capa dura",
                  "Impressão de TCC",
                  "Cópias P&B e coloridas",
                  "Digitalização de documentos",
                ],
              },
              {
                icon: Files,
                category: "Para Comércios",
                title: "Material de divulgação",
                description:
                  "Divulgação rápida com banners e panfletos para destacar seu negócio local",
                items: [
                  "Banners e cartazes",
                  "Panfletos",
                  "Adesivos personalizados",
                  "Cardápios",
                ],
              },
              {
                icon: BuildingOffice,
                category: "Para Profissionais",
                title: "Documentos e artes gráficas",
                description:
                  "Digitalização e impressões de alto padrão para sua autoridade profissional",
                items: [
                  "Impressão de contratos",
                  "Plastificação",
                  "Digitalização",
                  "Serviços gráficos",
                  "Impressão offset",
                ],
              },
            ].map((item, index) => (
              <ServiceCard
                key={index}
                icon={item.icon}
                category={item.category}
                title={item.title}
                description={item.description}
                items={item.items}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* TestimonialCard */}
      <div className="flex gap-10 p-10 my-10">
        {[
          {
            rating: 4.5,
            testimonial:
              "Precisei encadernar meu TCC de última hora e entregaram no mesmo dia. Salvaram minha apresentação!",
            name: "Ana Lima",
            role: "Estudante universitária",
            avatarUrl: undefined,
          },
          {
            rating: 4.5,
            testimonial:
              "Precisei encadernar meu TCC de última hora e entregaram no mesmo dia. Salvaram minha apresentação!",
            name: "Ana Lima",
            role: "Estudante universitária",
            avatarUrl: undefined,
          },
          {
            rating: 4.5,
            testimonial:
              "Precisei encadernar meu TCC de última hora e entregaram no mesmo dia. Salvaram minha apresentação!",
            name: "Ana Lima",
            role: "Estudante universitária",
            avatarUrl: undefined,
          },
        ].map((item, index) => (
          <TestimonialCard
            key={index}
            rating={item.rating}
            testimonial={item.testimonial}
            name={item.name}
            role={item.role}
            avatarUrl={item.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}
