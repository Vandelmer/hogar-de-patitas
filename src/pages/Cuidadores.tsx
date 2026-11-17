import { BackgroundPatterns } from "@/components/BackgroundPatterns";

const cuidadores = [
  {
    nombre: "Manuel",
    cargo: "Cuidador de perros",
    foto: "/cuidadores/cuidador-1.jpg",
    alt: "Manuel, cuidador de perros, paseando o jugando con perros en la zona de juegos",
    texto:
      "Adiestrador canino. Organiza los juegos y paseos para que los perros gasten energía y estén tranquilos.",
  },
  {
    nombre: "Marina",
    cargo: "Responsable y cuidadora",
    foto: "/cuidadores/cuidador-3.jpg",
    alt: "Marina, responsable y cuidadora, sonriendo junto a un perro",
    texto:
      "Veterinaria auxiliar con 8 años de experiencia. Se encarga de que cada mascota tenga su rutina de comida y descanso, y de enviar las fotos diarias a los dueños.",
  },
  {
    nombre: "Jose",
    cargo: "Cuidadora de gatos",
    foto: "/cuidadores/cuidador-2.jpg",
    alt: "Jose, cuidadora de gatos, con un gato en la zona de gatos",
    texto:
      "Especialista en comportamiento felino. Cuida a los gatos con paciencia y respeta su ritmo hasta que se sienten en casa.",
  },
];

export function Cuidadores() {
  return (
    <section className="relative overflow-hidden py-24">
      <BackgroundPatterns />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {cuidadores.map((cuidador) => (
            <div key={cuidador.nombre} className="flip-wrapper cursor-pointer">
              <div style={{ perspective: 1000 }}>
                <div className="flip-inner relative aspect-[4/5] w-full">
                  <div
                    className="absolute inset-0 overflow-hidden rounded-2xl shadow-xl shadow-black/30"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={cuidador.foto}
                      alt={cuidador.alt}
                      className="h-full w-full object-cover grayscale"
                    />
                  </div>
                  <div
                    className="absolute inset-0 overflow-hidden rounded-2xl shadow-xl shadow-black/30"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <img
                      src={cuidador.foto}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full scale-110 object-cover grayscale blur-md opacity-40"
                    />
                    <div className="absolute inset-0 bg-[#173B3B]/25" />
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <p className="text-center text-base font-medium leading-relaxed text-[#173B3B]">
                        {cuidador.texto}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-bold text-[#008B8B]">{cuidador.nombre}</h2>
                <p className="text-sm font-light uppercase tracking-wider text-[#526565]">
                  {cuidador.cargo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}