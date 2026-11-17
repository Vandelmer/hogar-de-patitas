import { useRef } from "react";
import type { MouseEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { Reveal } from "@/components/Reveal";

const fotos = [
  { src: "/galeria/galeria-1.jpg", alt: "Perro en Hogar de Patitas" },
  { src: "/galeria/galeria-2.jpg", alt: "Perro en Hogar de Patitas" },
  { src: "/galeria/galeria-3.jpg", alt: "Perro en Hogar de Patitas" },
  { src: "/galeria/galeria-4.jpg", alt: "Perro en Hogar de Patitas" },
  { src: "/galeria/galeria-5.jpg", alt: "Perro en Hogar de Patitas" },
  { src: "/galeria/galeria-6.jpg", alt: "Perro en Hogar de Patitas" },
];

/**
 * Tarjeta de la galeria con efecto iman: sigue ligeramente el cursor
 * mientras esta encima y vuelve a su sitio con un spring al salir.
 */
function TarjetaGaleria({ foto, indice }: { foto: { src: string; alt: string }; indice: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });

  const alMover = (evento: MouseEvent<HTMLElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centroX = rect.left + rect.width / 2;
    const centroY = rect.top + rect.height / 2;
    x.set((evento.clientX - centroX) * 0.18);
    y.set((evento.clientY - centroY) * 0.18);
  };

  const alSalir = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal delay={0.05 * (indice + 1)} y={16}>
      <motion.figure
        ref={ref}
        onMouseMove={alMover}
        onMouseLeave={alSalir}
        style={{ x: springX, y: springY }}
        className="group overflow-hidden rounded-2xl transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
      >
        <img
          src={foto.src}
          alt={foto.alt}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover outline outline-1 -outline-offset-1 outline-black/10"
        />
      </motion.figure>
    </Reveal>
  );
}

export function Galeria() {
  return (
    <section id="galeria" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-4xl font-bold tracking-wider text-[#173B3B] md:text-5xl">
            GALERÍA
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-3">
          {fotos.map((foto, indice) => (
            <TarjetaGaleria key={foto.src} foto={foto} indice={indice} />
          ))}
        </div>
      </div>
    </section>
  );
}
