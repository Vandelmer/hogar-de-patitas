import { motion } from "motion/react";
import { Button } from "@/components/arc/button/button";
import { Reveal } from "@/components/Reveal";

const lineasEslogan = [
  "Porque ellos merecen un hogar,",
  "incluso cuando tú no estás.",
];

export function LandingHero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden scroll-mt-20"
    >
      <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl items-center px-4 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6">
          {/* Columna izquierda: nombre + eslogan */}
          <div className="col-span-12 lg:col-span-8">
            <Reveal delay={0.05}>
              <div className="relative">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 opacity-20"
                >
                  <g fill="none" stroke="#173B3B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3">
                    <path strokeOpacity=".5" strokeWidth=".8" d="m7.4 12.2l3.1-2.3M8.8 14l8.5-6.7m-8 9.1l10.2-8.1m-8.9 9.8l7.6-5.8" />
                    <path strokeOpacity=".5" strokeWidth=".5" d="M13.5 21.4q-1.8-.8-2.6-1.3q-.8-.4-1.5-1q-.6-.6-1.2-1.3q-.5-.6-1.1-1.3q-.5-.7-1-1.3q-.5-.7-.9-1.3q-.5-.7-.8-1.3q-.4-.7-.7-1.4q-.2-.6-.4-1.3q-.2-.6-.2-1.3q0-.6.1-1.1q.1-.6.3-1.1q.3-.5.6-.9q.4-.4.8-.7t.9-.5q.4-.2.9-.2q.5-.1 1-.1q.5.1 1.1.2q.5.2 1 .5q.6.3 1 .7q.5.5 1.3 1.5q1-.8 1.5-1.1q.5-.4.9-.7l1-.4q.5-.2 1-.3q.6-.1 1 0q.5 0 .9.2q.5.2.9.5t.7.7t.5.9q.3.5.4 1t.1 1.1q-.1.7-.2 1.3q-.2.7-.5 1.4q-.3.6-.7 1.3q-.3.7-.8 1.3l-.8 1.2q-.5.6-1.1 1.1q-.6.6-1.3 1.1q-.6.5-1.2 1.1L13 19.8q-.7.6-2.5 1.5" />
                    <path d="M12.1 21q-1.5-1-2.2-1.5q-.7-.6-1.3-1.2q-.6-.7-1.1-1.3q-.6-.7-1.1-1.3q-.5-.7-1-1.3q-.5-.7-.9-1.4q-.5-.6-.8-1.3t-.4-1.4Q3.1 9.7 3 9V7.8q.1-.6.3-1.2l.6-1q.3-.5.8-.8q.4-.4.9-.6t1-.3q.6-.1 1.1-.1q.6.1 1.1.3q.6.2 1.1.5t1 .7q.5.5 1.3 1.5q.8-.9 1.3-1.2q.5-.4 1-.7t1.1-.5l1-.2q.6-.1 1.1 0t1 .3t.9.5q.4.4.7.8q.3.5.5 1t.3 1.1q0 .6-.1 1.3q0 .7-.2 1.4q-.3.8-.6 1.5t-.7 1.3q-.5.6-.9 1.2q-.5.5-1 1.1q-.6.5-1.2 1.1t-1.2 1.3q-.7.6-1.5 1.2q-.7.6-2.2 1.7" />
                  </g>
                </svg>
                <h1 className="relative z-10 mt-4 font-display text-5xl font-bold leading-none text-[#173B3B] md:text-7xl">
                  Hogar de Patitas
                </h1>
              </div>
            </Reveal>

            <div className="mt-8 space-y-1">
              {lineasEslogan.map((linea, indice) => (
                <motion.p
                  key={linea}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.25 + indice * 0.12,
                    ease: [0.2, 0, 0, 1],
                  }}
                  className="font-sans text-3xl leading-tight text-[#173B3B] md:text-5xl"
                >
                  {linea}
                </motion.p>
              ))}
            </div>

            <Reveal delay={0.35}>
              <dl className="mt-8 grid grid-cols-2 gap-6 pt-4">
                <div>
                  <dt className="text-3xl font-bold text-[#173B3B] md:text-4xl">500+</dt>
                  <dd className="mt-1 text-sm text-[#526565]">Perros y gatos cuidados</dd>
                </div>
                <div>
                  <dt className="text-3xl font-bold text-[#173B3B] md:text-4xl">120+</dt>
                  <dd className="mt-1 text-sm text-[#526565]">Reservas al año</dd>
                </div>
                <div>
                  <dt className="text-3xl font-bold text-[#173B3B] md:text-4xl">4,9 ★</dt>
                  <dd className="mt-1 text-sm text-[#526565]">Google Maps · 86 reseñas</dd>
                </div>
                <div>
                  <dt className="text-3xl font-bold text-[#173B3B] md:text-4xl">30+</dt>
                  <dd className="mt-1 text-sm text-[#526565]">Adopciones acompañadas</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Button
                  variant="secondary"
                  size="sm"
                  className="group w-auto p-1! rounded-md border-[#008B8B] text-[#008B8B]"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/search/?api=1&query=C.+Artesan%C3%ADa,+21,+41927+Mairena+del+Aljarafe,+Sevilla",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <img
                    src="/icons/google-maps.svg"
                    alt="Google Maps"
                    className="h-6 w-auto grayscale opacity-50 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </Button>
                <Button variant="primary" size="md" className="w-full px-6!">
                  Reservar
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Columna derecha: reservada para la siguiente peticion */}
          <div className="col-span-12 lg:col-span-4" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
