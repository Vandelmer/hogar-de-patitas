import { motion } from "motion/react";
import { Bed, BowlFood, UserFocus } from "@phosphor-icons/react";
import { BackgroundPatterns } from "@/components/BackgroundPatterns";
import { Card } from "@/components/arc/card/card";
import { Button } from "@/components/arc/button/button";

const servicios = [
  {
    icono: Bed,
    titulo: "Elige su Habitación",
    texto:
      "Cada perro es único. Por eso, te damos la opción de elegir entre nuestras habitaciones estándar, suites familiares o zonas tranquilas, adaptándonos siempre a su tamaño y carácter.",
  },
  {
    icono: UserFocus,
    titulo: "Su Cuidador Favorito",
    texto:
      "La confianza es lo primero. Puedes elegir a su cuidador principal entre los miembros de nuestra plantilla (Javier, Lucía, Carlos o Ainara), asegurando que siempre tenga a su persona de confianza cerca.",
  },
  {
    icono: BowlFood,
    titulo: "Rutinas Personalizadas",
    texto:
      "Mantenemos sus horarios de comida, paseos y descanso. Si necesita medicación o una dieta especial, nuestro equipo se encargará de todo con absoluto rigor.",
  },
];

export function Services() {
  return (
    <section className="relative overflow-hidden py-24">
      <BackgroundPatterns />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-[#008B8B]">
            Nuestros Servicios
          </p>
          <h2 className="mt-3 text-4xl text-[#173B3B] md:text-5xl">
            Un Hotel de 5 Estrellas para tu Mejor Amigo
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#526565]">
            ¿Te vas de vacaciones? Nosotros nos encargamos de que su estancia sea
            tan increíble como la tuya. En Hogar de Patitas no es una guardería,
            es su propio paraíso.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {servicios.map((servicio, indice) => {
            const Icono = servicio.icono;
            return (
              <motion.div
                key={servicio.titulo}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: indice * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Card
                  title={servicio.titulo}
                  description={servicio.texto}
                  media={
                    <Icono
                      size={48}
                      weight="duotone"
                      className="text-[#008B8B]"
                      aria-hidden="true"
                    />
                  }
                  className="h-full bg-white"
                />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <Button variant="primary" size="md">
              Reservar sus vacaciones
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;
