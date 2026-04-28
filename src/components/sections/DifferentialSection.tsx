import { motion } from "framer-motion";
import { fadeInDown, fadeInUp, viewportSettings } from "@/lib/motion";
import { Section } from "../layout";
import { Text, Icon } from "../ui";
import { Quotes } from "@/assets/icons";
import FounderImg from "@/assets/images/Founder.webp";

export default function DifferentialSection() {
  return (
    <Section id="sobre" className="lg:px-10 lg:py-10">
      <div className="bg-neutral-white rounded-2xl lg:rounded-3xl p-5 lg:p-25 shadow-sm mx-auto">
        {/* Grid Principal: 1 coluna no mobile, 2 no desktop */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-center justify-center">
          {/* LADO ESQUERDO: Imagem */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            custom={1}
            className="flex justify-center lg:justify-start items-center"
          >
            <div className="relative w-68 h-100 overflow-hidden rounded-lg">
              <img
                src={FounderImg}
                alt="Fundador da DSR Gráfica trabalhando"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* LADO DIREITO: Bloco de Texto Completo */}
          <div className="flex flex-col gap-4 lg:gap-6 lg:max-w-200">
            {/* Ícone de Aspas  */}
            <motion.div
              variants={fadeInDown}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              custom={0}
              className="shrink-0"
            >
              <Icon svg={Quotes} size={"lg"} />
            </motion.div>

            {/* Depoimento e Descrição */}
            <motion.div
              variants={fadeInDown}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              custom={1}
            >
              <Text as="h3" variant="h3" className="text-neutral-700">
                Comecei no ramo em 1982 e abri minha própria gráfica em 1992.
                Enquanto muita gráfica hoje é só 'apertar um botão', aqui a
                gente entende de verdade de papel, de tinta e de acabamento.
                Usamos toda essa bagagem pra garantir que o material saia
                perfeito — com o cuidado que só quem tem 40 anos de profissão
                consegue ter.
              </Text>
            </motion.div>

            {/* Assinatura */}
            <motion.div
              variants={fadeInDown}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              custom={2}
              className="flex flex-col gap-1.5 pt-4 lg:pt-6"
            >
              <Text variant="cta-md" className="font-bold text-brand-secondary">
                Fundador da DSR Gráfica
              </Text>
              <Text variant="body-md" className="text-neutral-800 font-medium">
                Guarulhos desde 1992
              </Text>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
