import { Section } from "../layout";
import { Icon, IconBox, Text } from "../ui";
import { ArrowDown, Coins, Package, WhatsappLogo } from "@/assets/icons";
import BGLines from "@/assets/images/BackroundLines.png";
import IsoPhone from "@/assets/images/IsoPhone.svg";

interface StepProps {
  icon: React.ElementType;
  title: string;
  description: string;
  isLast?: boolean;
}

function StepItem({ icon, title, description, isLast }: StepProps) {
  return (
    <div className="bg-bg-default md:p-2 md:max-w-105 flex flex-col md:items-start">
      <div className="flex flex-col items-start">
        {/* Ícone com o Box */}
        <IconBox icon={icon} className="mb-4" iconClassName="fill-none" />

        <div className="flex flex-col gap-2 text-left">
          <Text variant="body-lg" className="font-bold text-neutral-900">
            {title}
          </Text>
          <Text variant="body-md" TextColor="secondary">
            {description}
          </Text>
        </div>
      </div>

      {/* Seta indicadora entre os passos */}
      {!isLast && (
        <div className="flex justify-center items-center py-8 md:py-14 w-full">
          <Icon svg={ArrowDown} />
        </div>
      )}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="py-0 md:py-0 lg:py-0">
      <div className="relative w-full bg-bg-default px-6 md:px-20 py-12 md:py-30 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-40 items-start">
        {/* CAMADA 1: Imagem de Linhas de Fundo */}
        <div className="absolute z-0 inset-0 pointer-events-none opacity-50">
          <img src={BGLines} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Lado Esquerdo: Textos Fixos */}
        <div className="relative h-full flex flex-col justify-star z-10 mb-8">
          <div className="flex flex-col gap-4">
            <Text
              variant="cta-md"
              TextColor="brand"
              className="tracking-widest"
            >
              Suporte e informações
            </Text>
            <Text as="h2" variant="h1">
              Pronto em 3 passos
            </Text>
            <Text variant="body-lg" TextColor="secondary">
              Sem cadastro, sem fila. Do arquivo ao produto acabado.
            </Text>
          </div>

          <div className="absolute top-20 -left-20 w-190 pointer-events-none opacity-0 lg:opacity-100 translate-y-20">
            <img
              src={IsoPhone}
              alt="Ilustração de um celular"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Lado Direito: Os Passos dentro do Box Cinza sutil */}
        <div className="flex flex-col z-10">
          <StepItem
            icon={WhatsappLogo}
            title="Manda o arquivo"
            description="Pelo WhatsApp, e-mail ou pen drive, como preferir"
          />
          <StepItem
            icon={Coins}
            title="Recebe prazo e preço"
            description="A gente confirma na hora o que é possível fazer ainda hoje"
          />
          <StepItem
            icon={Package}
            title="Retira ou combina entrega"
            description="Na loja em Guarulhos ou combinamos a entrega"
            isLast
          />
        </div>
      </div>
    </Section>
  );
}
