import { motion } from "motion/react";
import { Check, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/arc/button/button";
import { Card } from "@/components/arc/card/card";

const services = [
  "Hospedaje diurno y nocturno",
  "Paseos y ejercicio",
  "Alimentación personalizada",
  "Baño y peluquería",
  "Atención veterinaria",
  "Fotos y actualizaciones diarias",
];

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { type: "spring" as const, bounce: 0.3 },
};

export function InfoServicesGallery() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quiénes somos */}
          <motion.div {...reveal} className="flex flex-col gap-4">
            <h2 className="font-display text-3xl text-[var(--color-text)]">Quiénes somos</h2>
            <p className="text-[var(--color-text-secondary)]">
              En Hogar de Patitas amamos a los animales. Ofrecemos un entorno seguro, cálido y divertido para que tu perro se sienta como en casa mientras tú no estás.
            </p>
            <div>
              <Button variant="secondary" size="md">Sobre nosotros</Button>
            </div>
          </motion.div>

          {/* Servicios */}
          <motion.div {...reveal} transition={{ type: "spring" as const, bounce: 0.3, delay: 0.1 }}>
            <Card
              title="Nuestros servicios"
              description="Todo lo que tu perro necesita en un solo lugar."
              className="bg-[var(--color-bg-light)]"
            >
              <ul className="flex flex-col gap-2 mt-2">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-[var(--color-text)]">
                    <Check size={16} className="text-[var(--color-primary)]" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Button variant="primary" size="md">Ver todos los servicios</Button>
              </div>
            </Card>
          </motion.div>

          {/* Galería */}
          <motion.div {...reveal} transition={{ type: "spring" as const, bounce: 0.3, delay: 0.2 }} className="flex flex-col gap-4">
            <h2 className="font-display text-3xl text-[var(--color-text)]">Galería</h2>
            <div className="grid grid-cols-2 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square rounded-2xl bg-[var(--color-bg-light)] flex items-center justify-center text-[var(--color-primary)]/40">
                  <ImageIcon size={28} />
                </div>
              ))}
            </div>
            <div>
              <Button variant="secondary" size="md">Ver galería</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
