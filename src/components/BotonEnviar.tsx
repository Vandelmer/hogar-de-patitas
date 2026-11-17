import { useState } from "react";
import { motion } from "motion/react";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { Button } from "@/components/arc/button/button";

export function BotonEnviar() {
  const [volando, setVolando] = useState(false);

  const alEnviar = () => {
    setVolando(true);
    window.setTimeout(() => setVolando(false), 900);
  };

  return (
    <Button variant="primary" size="md" type="submit" onClick={alEnviar}>
      <motion.span
        animate={
          volando
            ? { x: 70, y: -24, opacity: 0, rotate: 15 }
            : { x: 0, y: 0, opacity: 1, rotate: 0 }
        }
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex"
      >
        <PaperPlaneTilt size={18} weight="fill" />
      </motion.span>
      <span className="ml-2">Enviar</span>
    </Button>
  );
}