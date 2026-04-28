import { type Variants } from "framer-motion";

// 1. Animação de cima para baixo (Hero)
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)",
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: custom * 0.15,
      duration: 0.8,
      ease: [0.21, 0.45, 0.32, 0.9],
      filter: { duration: 0.8, ease: "easeOut" },
    },
  }),
};

// 2. Animação de cima para baixo (Hero)
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: custom * 0.15,
      duration: 0.8,
      ease: [0.21, 0.45, 0.32, 0.9],
      filter: { duration: 0.8, ease: "easeOut" },
    },
  }),
};

// 3. Animação Pop-in/Scale
export const popIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.85, 
    filter: "blur(10px)" 
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: custom * 0.15,
      type: "spring",
      stiffness: 260,
      damping: 20, // Esse valor garante o "pulinho" elástico do vídeo
      filter: { duration: 0.6 }
    },
  }),
};

// Configuração padrão para o "Viewport" (quando a animação dispara ao scrollar)
export const viewportSettings = {
  once: true, // Anima apenas uma vez
  amount: 0.1, // Dispara quando 20% do elemento aparece
};
