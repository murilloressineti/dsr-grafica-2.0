import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icon, Text } from "../ui";
import { CaretDown } from "@/assets/icons";

interface FAQItemProps {
  number: string;
  question: string;
  answer: string;
}

export default function FAQItem({ number, question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "cursor-pointer rounded-2xl px-6 pt-6 pb-9 transition-all duration-300",
        isOpen
          ? "bg-brand-primary shadow-lg shadow-brand-primary/20"
          : "bg-neutral-300",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          {/* Número do FAQ */}
          <Text
            variant="body-lg"
            className={cn(
              "shrink-0",
              isOpen ? "text-text-primary" : "text-neutral-600",
            )}
          >
            / {number}
          </Text>

          {/* Pergunta */}
          <Text
            variant="body-md"
            className={cn(
              "tracking-normal leading-tight",
              isOpen ? "text-text-primary" : "text-neutral-800",
            )}
          >
            {question}
          </Text>
        </div>

        {/* Ícone de Seta com animação de rotação */}
        <div
          className={cn(
            "w-10 h-10 bg-transparent rounded-full flex items-center justify-center border transition-all duration-300",
            isOpen ? "border-neutral-900" : "border-none",
          )}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            <Icon
              svg={CaretDown}
              className={cn("w-5 h-5 transition-colors duration-300")}
            />
          </motion.div>
        </div>
      </div>

      {/* Resposta Animada */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 0 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="w-full h-px bg-neutral-900 my-3 opacity-20" />

            <Text variant="body-md" className="text-text-primary">
              {answer}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
