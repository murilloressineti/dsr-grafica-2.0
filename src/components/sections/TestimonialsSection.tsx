import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
        <div className="flex items-center justify-between">
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
        </div>

        {/* Grid de Depoimentos */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
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
                    <div key={index} className="flex items-stretch">
                      <TestimonialCard {...item} />
                    </div>
                  ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Indicadores (Bullets) */}
        <div className="flex justify-center gap-2">
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
        </div>
      </div>
    </Section>
  );
}
