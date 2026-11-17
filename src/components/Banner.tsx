import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/arc/button/button";

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { type: "spring" as const, bounce: 0.3 },
};

export function Banner() {
  return (
    <section id="reservas" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          {...reveal}
          className="bg-[var(--color-accent)] rounded-[3rem] px-8 py-12 md:py-16 text-center flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] shadow">
            <Calendar size={32} />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-[var(--color-text)]">Realiza tu reserva</h2>
          <p className="text-[var(--color-text-secondary)] max-w-md">
            Reserva la estancia de tu perro en pocos pasos. Te confirmamos disponibilidad al instante.
          </p>
          <Button variant="primary" size="lg">Reservar ahora</Button>
        </motion.div>
      </div>
    </section>
  );
}
