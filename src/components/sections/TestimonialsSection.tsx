import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInDown, fadeInUp, viewportSettings } from "@/lib/motion";
import { Section } from "../layout";
import { Button, Icon, Text } from "../ui";
import { CaretLeft, CaretRight } from "@/assets/icons";
import TestimonialCard from "../features/TestimonialCard";

const testimonials = [
  {
    rating: 4.5,
    testimonial:
      "Precisei encadernar meu TCC de última hora e entregaram no mesmo dia. Salvaram minha apresentação!",
    name: "Ana Lima",
    role: "Estudante universitária",
  },
  {
    rating: 5,
    testimonial:
      "Excelente atendimento! Fizemos os cartões de visita e panfletos da loja. Qualidade impecável das cores.",
    name: "Ricardo Silva",
    role: "Proprietário de Comércio",
  },
  {
    rating: 4.5,
    testimonial:
      "Trabalho com eles há anos para as plotagens de projetos. Rapidez e precisão que não encontro em outro lugar.",
    name: "Juliana Mendes",
    role: "Arquiteta",
  },
  {
    rating: 5,
    testimonial:
      "Enviei a arte pelo WhatsApp e em poucas horas já estava tudo pronto. Agilidade absurda, me salvou em um prazo apertado.",
    name: "Carlos Andrade",
    role: "Designer gráfico",
  },
  {
    rating: 4.5,
    testimonial:
      "Imprimi materiais para um evento e fiquei impressionada com a qualidade do acabamento. Tudo muito profissional.",
    name: "Fernanda Souza",
    role: "Produtora de eventos",
  },
  {
    rating: 5,
    testimonial:
      "Fiz adesivos personalizados para minha marca e ficaram perfeitos. Cores vivas e ótima durabilidade.",
    name: "Lucas Ribeiro",
    role: "Empreendedor",
  },
];

function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3); // desktop
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2); // tablet
      } else {
        setItemsPerPage(1); // mobile
      }
    }

    handleResize(); // roda ao montar
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return itemsPerPage;
}

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = useItemsPerPage();

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <Section id="depoimentos" className="md:py-20 lg:py-30 md:px-20 lg:px-30">
      <div className="flex flex-col gap-12">
        {/* Header da Seção: Título + Navegação */}
        <motion.div
          className="flex items-center justify-between"
          variants={fadeInDown}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          custom={0}
        >
          <Text as="h2" variant="h1">
            O que nossos clientes dizem
          </Text>

          {/* Botões de Navegação */}
          <div className="flex gap-2">
            <Button
              variant="tertiary"
              size="sm"
              className="rounded-lg border-transparent"
              onClick={prevSlide}
            >
              <Icon svg={CaretLeft} className="fill-neutral-900" />
            </Button>

            <Button
              variant="secondary"
              size="sm"
              className="rounded-lg border-transparent"
              onClick={nextSlide}
            >
              <Icon svg={CaretRight} className="fill-neutral-white" />
            </Button>
          </div>
        </motion.div>

        {/* Grid de Depoimentos */}
        <motion.div
          className="overflow-hidden"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          custom={1}
        >
          <motion.div
            className="flex cursor-grab active:cursor-grabbing" // Feedback visual de arrastar
            drag="x" // Habilita o arraste no eixo X
            dragConstraints={{ left: 0, right: 0 }} // Mantém o elemento "preso" ao centro após soltar
            onDragEnd={(_, info) => {
              const threshold = 50; // Sensibilidade: quantos pixels o usuário precisa mover
              if (info.offset.x < -threshold && currentPage < totalPages - 1) {
                nextSlide();
              } else if (info.offset.x > threshold && currentPage > 0) {
                prevSlide();
              }
            }}
            animate={{
              x: `-${currentPage * 100}%`,
            }}
            transition={{
              duration: 0.5,
              ease: [0.32, 0.72, 0, 1],
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div key={pageIndex} className="min-w-full flex gap-4">
                {testimonials
                  .slice(
                    pageIndex * itemsPerPage,
                    pageIndex * itemsPerPage + itemsPerPage,
                  )
                  .map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex-1 flex items-stretch"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportSettings}
                      custom={index + 1}
                    >
                      <TestimonialCard {...item} />
                    </motion.div>
                  ))}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Indicadores (Bullets) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          custom={2}
          className="flex justify-center gap-2"
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={cn(
                "h-1.5 transition-all duration-300 rounded-full",
                currentPage === index
                  ? "w-6 bg-brand-primary"
                  : "w-1.5 bg-neutral-500",
              )}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
