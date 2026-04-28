import { motion } from "framer-motion";
import { fadeInDown, fadeInUp, viewportSettings } from "@/lib/motion";
import { Section } from "../layout";
import { Text } from "../ui";
import { FAQItem } from "../features";
import BGLines from "@/assets/images/BackroundLines.png";
import FAQIllustration from "@/assets/images/FAQIllustration.svg";

const faqs = [
  {
    number: "01",
    question: "Quais tipos de serviços a DSR Gráfica oferece?",
    answer:
      "Oferecemos impressões digitais e offset, cópias, encadernações, plastificações, cartões de visita, banners, adesivos e digitalização de documentos.",
  },
  {
    number: "02",
    question: "Como posso enviar meus arquivos e solicitar um orçamento?",
    answer:
      "Você pode enviar seus arquivos e solicitar orçamentos de forma ágil e direta através do nosso atendimento via WhatsApp",
  },
  {
    number: "03",
    question: "Vocês atendem pedidos urgentes para estudantes ou empresas?",
    answer:
      "Sim, nosso foco principal é a agilidade e a entrega de soluções rápidas para quem não pode esperar pelo seu material",
  },
  {
    number: "04",
    question: "Qual é o diferencial da experiência de 40 anos da gráfica?",
    answer:
      "Nossa bagagem permite oferecer uma consultoria técnica real sobre papel, tinta e acabamento, garantindo que seu material saia perfeito",
  },
  {
    number: "05",
    question: "A gráfica realiza serviços de acabamento como encadernação?",
    answer:
      "Sim, realizamos encadernações em espiral e capa dura, ideais para trabalhos acadêmicos e documentos profissionais que exigem seriedade",
  },
];

export default function FAQSection() {
  return (
    <Section id="faq">
      {/* Container principal: Empilhado no mobile, Lado a lado no desktop */}
      <div className="relative flex flex-col md:px-20 lg:flex-row gap-8 lg:gap-18 items-start">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={viewportSettings}
          className="absolute z-0 inset-0 pointer-events-none opacity-50"
        >
          <img src={BGLines} alt="" className="w-full h-full object-cover" />
        </motion.div>

        {/* LADO ESQUERDO: Textos e Imagem */}
        <div className="w-full flex flex-col gap-15 z-10">
          <motion.div
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            custom={0}
            className="flex flex-col gap-3 md:gap-4 max-w-lg"
          >
            <Text
              variant="cta-md"
              TextColor="brand"
              className="tracking-widest"
            >
              Ainda com dúvidas?
            </Text>
            <Text as="h2" variant="h1">
              Tudo o que você precisa saber sobre a DSR Gráfica
            </Text>
            <Text
              variant="body-lg"
              TextColor="secondary"
              className="max-w-md leading-relaxed"
            >
              Se a resposta não estiver aqui, é só mandar uma mensagem, a gente
              responde na hora.
            </Text>
          </motion.div>

          {/* Ilustração */}
          <motion.div
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            custom={1}
            className="hidden lg:block w-full"
          >
            <img
              src={FAQIllustration}
              alt="Ilustração FAQ"
              className="w-full h-auto bg-bg-default"
            />
          </motion.div>
        </div>

        {/* LADO DIREITO: Acordeões */}
        <div className="w-full flex flex-col gap-4 z-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.number}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              custom={index + 2}
            >
              <FAQItem
                number={faq.number}
                question={faq.question}
                answer={faq.answer}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
