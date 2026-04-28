import { motion } from "framer-motion";
import { fadeInUp, fadeInDown, viewportSettings } from "@/lib/motion";
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
  index: number;
}

function StepItem({ icon, title, description, isLast, index }: StepProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      custom={index}
      className="bg-bg-default md:p-2 md:max-w-105 flex flex-col md:items-start"
    >
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
    </motion.div>
  );
}

export default function HowItWorks() {
  const steps = [
    {
      icon: WhatsappLogo,
      title: "Manda o arquivo",
      description: "Pelo WhatsApp, e-mail ou pen drive, como preferir",
    },
    {
      icon: Coins,
      title: "Recebe prazo e preço",
      description: "A gente confirma na hora o que é possível fazer ainda hoje",
    },
    {
      icon: Package,
      title: "Retira ou combina entrega",
      description: "Na loja em Guarulhos ou combinamos a entrega",
      isLast: true,
    },
  ];
  return (
    <Section id="como-funciona" className="py-0 md:py-0 lg:py-0 px-0">
      <div className="relative w-full bg-bg-default px-0 md:px-20 py-12 md:py-30 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-40 items-start">
        {/* CAMADA 1: Imagem de Linhas de Fundo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          className="absolute z-0 inset-0 pointer-events-none opacity-50"
        >
          <img src={BGLines} alt="" className="w-full h-full object-cover" />
        </motion.div>

        {/* Lado Esquerdo: Textos Fixos */}
        <div className="relative h-full flex flex-col justify-star z-10 mb-8">
          <motion.div
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            custom={0}
            className="flex flex-col gap-4"
          >
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
          </motion.div>

          <motion.div
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            custom={1}
            className="hidden lg:block absolute top-20 -left-20 w-190 pointer-events-none translate-y-20"
          >
            <img
              src={IsoPhone}
              alt="Ilustração de um celular"
              className="w-full h-full object-contain bg-bg-default"
            />
          </motion.div>
        </div>

        {/* Lado Direito: Os Passos dentro do Box Cinza sutil */}
        <div className="flex flex-col z-10">
          {steps.map((step, index) => (
            <StepItem key={index} index={index + 2} {...step} />
          ))}
        </div>
      </div>
    </Section>
  );
}
