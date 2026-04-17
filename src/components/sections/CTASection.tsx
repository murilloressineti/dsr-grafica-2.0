import { Section } from "../layout";
import { Button, Icon, Text } from "../ui";
import { ArrowUpRight } from "@/assets/icons";

export default function CTASection() {
  return (
    <Section id="contato" className="py-16 md:py-30 lg:py-40 md:px-15 lg:px-30">
      <div className="flex flex-col items-center text-center max-w-300 mx-auto">
        <div className="md:py-10">
          {/* Badge Superior */}
          <Text
            variant="cta-lg"
            TextColor="brand"
            className="tracking-widest leading-normal mb-4"
          >
            Precisa imprimir hoje?
          </Text>

          {/* Título Principal */}
          <Text as="h2" variant="display-lg">
            Manda uma mensagem agora, <br /> a gente vê o que dá pra fazer ainda
            hoje
          </Text>
        </div>

        {/* Botão de WhatsApp */}
        <Button
          as="a"
          href="https://wa.me/5511982305193?text=Olá!%20Gostaria%20de%20pedir%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 md:mt-16"
        >
          Mandar mensagem no whatsapp
          <Icon
            svg={ArrowUpRight}
            animate="rotate"
            className="fill-text-primary"
            size="md"
          />
        </Button>
      </div>
    </Section>
  );
}
