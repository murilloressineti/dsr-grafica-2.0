import { Section } from "../layout";
import { Button, Icon, Text } from "../ui";
import { HowItWorks, ServiceCard } from "../features/";
import {
  ArrowUpRight,
  GraduationCap,
  Files,
  BuildingOffice,
} from "@/assets/icons";

const servicesData = [
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
];

export default function ServicesSection() {
  return (
    <Section id="serviços" className="p-6 md:p-8 lg:p-10">
      <div className="px-6 py-10 md:p-16 bg-bg-white rounded-4xl shadow-sm">
        {/* Header da Section */}
        <div className="flex flex-col gap-4 items-center text-center">
          <Text
            variant="cta-md"
            TextColor="brand"
            className="leading-snug tracking-widest"
          >
            Serviços
          </Text>
          <Text variant="h1">O que você precisa, a gente faz</Text>
          <Text variant="body-lg" TextColor="secondary">
            Escolha pelo seu perfil, não precisa saber o nome técnico do
            serviço.
          </Text>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 py-8 md:py-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <Button
            as="a"
            href="#" // Link
            target="_blank"
            rel="noopener"
          >
            Solicitar orçamento rápido
            <Icon
              svg={ArrowUpRight}
              animate={"rotate"}
              size={"md"}
              className="fill-text-primary"
            />
          </Button>
        </div>
      </div>

      <HowItWorks />
    </Section>
  );
}
