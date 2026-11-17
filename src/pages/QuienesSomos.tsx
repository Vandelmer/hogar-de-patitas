import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { BackgroundPatterns } from "@/components/BackgroundPatterns";
import { Reveal } from "@/components/Reveal";
import { BookOpenText, RocketLaunch, UsersThree } from "@phosphor-icons/react";

const equipo = [
  {
    nombre: "Javier Mendoza",
    cargo: "Director de Bienestar Animal",
    foto: "/equipo/javier-mendoza.jpg",
    alt: "Javier Mendoza, director de Bienestar Animal",
    texto:
      "Técnico veterinario con más de 10 años de experiencia. Supervisa la salud, la alimentación y las rutinas de descanso de cada huésped.",
  },
  {
    nombre: "Lucía Fernández",
    cargo: "Coordinadora de Experiencia",
    foto: "/equipo/lucia-fernandez.jpg",
    alt: "Lucía Fernández, coordinadora de Experiencia",
    texto:
      "La primera sonrisa que verás al entrar. Gestiona las reservas y se asegura de que cada dueño se vaya con la tranquilidad de dejar a su mejor amigo en las mejores manos.",
  },
  {
    nombre: "Carlos Ruiz",
    cargo: "Especialista en Juego y Conducta",
    foto: "/equipo/carlos-ruiz.jpg",
    alt: "Carlos Ruiz, especialista en Juego y Conducta",
    texto:
      "El alma de la fiesta. Diseña los juegos y las dinámicas de socialización para que los perros gasten toda su energía de forma positiva.",
  },
];

const parrafosHistoria = [
  "Detrás de Hogar de Patitas hay una historia de amor incondicional por los animales, esfuerzo y mucha ilusión. Nuestra fundadora y CEO, Ainara Vázquez Muñoz, es sevillana de nacimiento y siempre ha tenido muy claro que su vida estaría ligada al bienestar de los que no tienen voz.",
  "Su formación académica la llevó a estudiar Administración y Finanzas, pero su verdadera vocación siempre estuvo en las mascotas. Como buena emprendedora, decidió unir sus dos mundos: la solidez y el rigor de la gestión empresarial con la pasión por ofrecer un cuidado excepcional a perros y gatos.",
  "La idea de Hogar de Patitas nació de una experiencia personal. Tras años buscando en Sevilla un lugar donde dejar a su perro sin esa punzada de culpa o preocupación, se dio cuenta de que faltaba un espacio que realmente entendiera a los animales como familia. Fue entonces cuando dejó su zona de confort y creó el lugar que ella misma quería para su mascota: un auténtico hogar temporal, diseñado con mimo, seguridad y mucha diversión.",
];

const parrafosFuturo = [
  "Ainara lidera este proyecto con la mirada puesta en el futuro. Lo que empezó como un pequeño refugio en el corazón de Sevilla es hoy un referente de cuidado.",
  "El gran objetivo a medio plazo es ampliar las instalaciones para contar con zonas verdes más amplias y áreas de agility, además de lanzar un programa de adopción y colaboración con protectoras locales. Queremos que Hogar de Patitas no sea solo un hotel, sino una comunidad donde los amantes de los animales puedan compartir, aprender y crecer juntos.",
];

export function QuienesSomos() {
  const reduceMotion = useReducedMotion();
  const fotosRef = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({
    target: fotosRef,
    offset: ["start end", "end start"],
  });
  const yFotos = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-70, 70]);

  return (
    <section className="relative overflow-hidden">
      <BackgroundPatterns />

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-justify">
      {/* Entrada */}
      <Reveal className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wider text-[#008B8B]">
          Hogar de Patitas
        </p>
        <h1 className="mt-3 text-4xl text-[#173B3B] md:text-5xl">Quiénes somos</h1>
        <p className="mt-6 text-lg leading-relaxed text-[#526565]">
          Un equipo pequeño en Sevilla que cuida perros y gatos como si fueran de
          la familia.
        </p>
      </Reveal>

      {/* Dos columnas: texto a la izquierda, retratos en blanco y negro a la derecha */}
      <div className="mt-20 grid gap-12 md:grid-cols-2 lg:gap-16">
        <div className="space-y-16">
          <Reveal className="block">
            <section>
            <div className="flex items-center gap-3">
              <BookOpenText size={22} className="text-[#008B8B]" aria-hidden="true" />
              <h2 className="text-2xl text-[#173B3B] md:text-3xl">Nuestra Historia</h2>
            </div>
            <div className="mt-5 space-y-5 text-lg leading-relaxed text-[#526565]">
              {parrafosHistoria.map((parrafo, indice) => (
                <Reveal key={parrafo.slice(0, 24)} delay={0.05 * indice} y={16}>
                  <p>{parrafo}</p>
                </Reveal>
              ))}
            </div>
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex items-center gap-3">
              <UsersThree size={22} className="text-[#008B8B]" aria-hidden="true" />
              <h2 className="text-2xl text-[#173B3B] md:text-3xl">Nuestro Equipo</h2>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-[#526565]">
              Para hacer realidad este sueño, Ainara no está sola: ha reunido a un
              equipo que comparte su misma filosofía de vida.
            </p>
            <dl className="mt-6 space-y-6">
              {equipo.map((persona, indice) => (
                <Reveal key={persona.nombre} delay={0.1 * (indice + 1)} y={12}>
                  <div>
                    <dt className="text-lg font-bold text-[#173B3B]">
                      {persona.nombre}
                    </dt>
                    <dd className="mt-1 text-sm font-bold uppercase tracking-wider text-[#008B8B]">
                      {persona.cargo}
                    </dd>
                    <dd className="mt-2 text-base leading-relaxed text-[#526565]">
                      {persona.texto}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-3">
              <RocketLaunch size={22} className="text-[#008B8B]" aria-hidden="true" />
              <h2 className="text-2xl text-[#173B3B] md:text-3xl">Nuestro Futuro</h2>
            </div>
            <div className="mt-5 space-y-5 text-lg leading-relaxed text-[#526565]">
              {parrafosFuturo.map((parrafo, indice) => (
                <Reveal key={parrafo.slice(0, 24)} delay={0.05 * indice} y={16}>
                  <p>{parrafo}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.ul ref={fotosRef} style={{ y: yFotos }} className="space-y-8">
          {equipo.map((persona, indice) => (
            <li key={persona.nombre}>
              <Reveal delay={0.1 * (indice + 1)} y={20}>
                <figure>
                  <img
                    src={persona.foto}
                    alt={persona.alt}
                    loading="lazy"
                    className="aspect-square w-full rounded-xl object-cover grayscale outline outline-1 -outline-offset-1 outline-black/10"
                  />
                  <figcaption className="mt-3 text-base text-[#526565]">
                    <span className="font-bold text-[#173B3B]">{persona.nombre}</span>
                    <span className="block text-sm font-bold uppercase tracking-wider text-[#008B8B]">
                      {persona.cargo}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Cierre */}
      <Reveal delay={0.1}>
        <blockquote className="mt-20 rounded-2xl bg-[#E0F2F1]/70 p-8 md:p-10">
          <p className="text-lg leading-relaxed text-[#173B3B] md:text-xl">
            Hoy, Ainara y todo su equipo se aseguran cada día de que cada perro y
            cada gato que cruza la puerta reciba el amor, la atención personalizada
            y el respeto que se merece.
          </p>
          <p className="mt-4 text-base font-bold text-[#008B8B]">
            Porque para nosotros, no son mascotas, son familia.
          </p>
        </blockquote>
      </Reveal>
    </main>
    </section>
  );
}
