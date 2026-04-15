import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
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
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <Section id="depoimentos" className="md:py-20 lg:py-30">
      <div className="flex flex-col gap-12 ">
        {/* Header da Seção: Título + Navegação */}
        <div className="flex items-center justify-between">
          <Text as="h2" variant="h1">
            O que nossos clientes dizem
          </Text>

          {/* Botões de Navegação */}
          <div className="flex gap-2">
            <Button
              variant="tertiary"
              size="sm"
              className="rounded-lg border-neutral-200"
              onClick={prevSlide}
            >
              <Icon svg={CaretLeft} className="fill-neutral-900" />
            </Button>

            <Button
              variant="secondary"
              size="sm"
              className="rounded-lg"
              onClick={nextSlide}
            >
              <Icon svg={CaretRight} className="fill-neutral-white" />
            </Button>
          </div>
        </div>

        {/* Grid de Depoimentos */}
        <div className="relative">
          <motion.div
            className="flex gap-4"
            animate={{
              // Deslocamento dinâmico: 100% no mobile, 50% no tablet, 33.3% no desktop
              x: `calc(-${currentIndex} * (100% / 1))`,
            }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-full md:min-w-[calc(50%-8px)] lg:min-w-[calc(33.333%-11px)]"
              >
                <TestimonialCard {...item} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Indicadores (Bullets) */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-1.5 transition-all duration-300 rounded-full",
                currentIndex === index
                  ? "w-6 bg-brand-primary"
                  : "w-1.5 bg-neutral-500",
              )}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
