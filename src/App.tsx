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
  const stats = [
    { value: "43", label: "Anos no mercado gráfico" },
    { value: "+15", label: "Serviços disponíveis" },
    { value: "1 dia", label: "Prazo de entrega" },
    { value: "100%", label: "Atendimento humano" },
  ];

  return (
    <div className="bg-bg-default pt-20">
      {/* HEADER */}
      <Header />

      {/* Stats */}
      <Section className="py-12 md:py-24 lg:py-30 border">
        <div className="max-w-300 mx-auto flex flex-col gap-6 md:flex-row items-center justify-between">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 md:gap-3 items-center text-center"
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

      {/* Services */}
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
      <Section>
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
      </Section>
    </div>
  );
}
