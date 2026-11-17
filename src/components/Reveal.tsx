import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Desplazamiento vertical inicial en px. */
  y?: number;
  /** Retardo en segundos antes de comenzar. */
  delay?: number;
  /** Duracion en segundos. */
  duration?: number;
  /** Si true, el elemento solo aparece una vez. */
  once?: boolean;
  /** Fraccion del elemento visible antes de disparar. */
  amount?: number;
  className?: string;
}

/**
 * Envuelve un bloque para que aparezca suavemente al entrar en el viewport:
 * fundido + desplazamiento vertical corto, con respeto por prefers-reduced-motion.
 */
export function Reveal({
  children,
  y = 24,
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.2, 0, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
