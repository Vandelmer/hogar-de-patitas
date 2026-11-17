import { motion } from "motion/react";
import { PawPrint, Heart, Users, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/arc/button/button";

const floatItems = [
  { icon: Heart, label: "Ambiente familiar" },
  { icon: Users, label: "Atención personalizada" },
  { icon: Sparkles, label: "Espacios de juego" },
  { icon: ShieldCheck, label: "Cuidado y bienestar" },
];

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { type: "spring" as const, bounce: 0.3 },
};

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-[var(--color-bg-light)] to-white">
      {/* decorative paw prints */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[var(--color-primary)]/10"
            style={{ top: `${10 + i * 14}%`, left: `${5 + i * 16}%` }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <PawPrint size={32 + i * 6} />
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div {...reveal}>
            <h1 className="font-display text-4xl md:text-6xl leading-tight text-[var(--color-text)]">
              Hogar de Patitas
            </h1>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-md">
              Un espacio cálido donde tu perro se siente como en casa. Hospedaje, cuidado y cariño mientras tú no estás.
            </p>
            <div className="mt-6">
              <Button variant="primary" size="lg">Conoce nuestros servicios</Button>
            </div>
          </motion.div>

          <motion.div {...reveal} transition={{ type: "spring" as const, bounce: 0.3, delay: 0.15 }}>
            <div className="image-frame rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/referencias/REFERENCIA%20LANDING.jpg"
                alt="Perro y gato en Hogar de Patitas"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* floating bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring" as const, bounce: 0.3, delay: 0.3 }}
          className="mt-10 mx-auto max-w-4xl bg-white rounded-full shadow-[var(--shadow-raised)] px-4 py-3 flex flex-wrap items-center justify-center gap-4 md:gap-8"
        >
          {floatItems.map((it) => (
            <div key={it.label} className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)]">
              <it.icon size={18} className="text-[var(--color-primary)]" />
              <span>{it.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
