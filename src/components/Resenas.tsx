import { Star } from "@phosphor-icons/react";
import { BackgroundPatterns } from "@/components/BackgroundPatterns";
import { Reveal } from "@/components/Reveal";

const resenas = [
  {
    nombre: "Marta G.",
    mascota: "Luna, golden retriever",
    texto:
      "Dejamos a Luna por primera vez con miedo y volvimos a por ella con la cola moviéndose. Nos mandaron fotos y vídeos cada día. Volveremos sin duda.",
    estrellas: 5,
  },
  {
    nombre: "Carlos R.",
    mascota: "Toby, beagle",
    texto:
      "El trato es cercano y profesional. Toby llegó a casa cansado y feliz, que es lo que uno quiere. El patio de juegos es una pasada.",
    estrellas: 5,
  },
  {
    nombre: "Lucía M.",
    mascota: "Nala, gata europea",
    texto:
      "Nala es muy exigente y aquí la trataron como a una reina. Las instalaciones están impecables y el equipo se nota que ama a los animales.",
    estrellas: 5,
  },
  {
    nombre: "Javier P.",
    mascota: "Rocky, bulldog francés",
    texto:
      "Reservar fue facilísimo y la comunicación constante. Rocky volvió con una cinta y un informe de su estancia. Totalmente recomendable.",
    estrellas: 4,
  },
];

export function Resenas() {
  return (
    <section id="resenas" className="relative overflow-hidden py-24">
      <BackgroundPatterns />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-4xl font-bold tracking-wider text-[#173B3B] md:text-5xl">
            RESEÑAS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#526565]">
            Lo que dicen las familias que ya han confiado en nosotros.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {resenas.map((resena, indice) => (
            <Reveal key={resena.nombre} delay={0.05 * (indice + 1)} y={16}>
              <article className="h-full rounded-2xl bg-[#F5F5DC]/60 p-6">
                <div className="flex items-center gap-1 text-[#008B8B]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      weight={i < resena.estrellas ? "fill" : "regular"}
                      className={i < resena.estrellas ? "text-[#008B8B]" : "text-[#B8C5C2]"}
                    />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-[#526565]">
                  &ldquo;{resena.texto}&rdquo;
                </p>
                <div className="mt-5">
                  <p className="font-bold text-[#173B3B]">{resena.nombre}</p>
                  <p className="text-sm text-[#526565]">{resena.mascota}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
