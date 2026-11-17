import { BackgroundPatterns } from "@/components/BackgroundPatterns";

export function Terminos() {
  return (
    <section className="relative overflow-hidden py-24">
      <BackgroundPatterns />
      <main className="relative z-10 mx-auto max-w-4xl px-6 text-justify">
        <h1 className="text-4xl text-[#173B3B] md:text-5xl">Términos y condiciones</h1>
        <p className="mt-6 text-lg leading-relaxed text-[#526565]">
          Bienvenido a Hogar de Patitas. Al utilizar nuestros servicios de hotel para mascotas, aceptas los siguientes términos y condiciones. El servicio consiste en el cuidado, alojamiento y atención de perros y gatos durante la ausencia de sus dueños, conforme a las rutinas acordadas en el momento de la reserva.
        </p>
        <h2 className="mt-10 text-2xl text-[#173B3B]">Reservas y cancelaciones</h2>
        <p className="mt-4 text-base leading-relaxed text-[#526565]">
          Las reservas se confirman tras el pago de la señal correspondiente. Las cancelaciones realizadas con más de 7 días de antelación recibirán la devolución íntegra de la señal. Cancelaciones posteriores podrán no ser reembolsables, dependiendo de la disponibilidad y de los gastos incurridos.
        </p>
        <h2 className="mt-10 text-2xl text-[#173B3B]">Responsabilidades</h2>
        <p className="mt-4 text-base leading-relaxed text-[#526565]">
          El propietario se compromete a informar sobre el estado de salud, vacunación y comportamiento de su mascota. Hogar de Patitas se compromete a proporcionar un entorno seguro, higiénico y cariñoso, siguiendo las indicaciones recibidas. En caso de emergencia veterinaria, se actuará en beneficio del animal y se avisará al propietario lo antes posible.
        </p>
        <h2 className="mt-10 text-2xl text-[#173B3B]">Modificaciones</h2>
        <p className="mt-4 text-base leading-relaxed text-[#526565]">
          Hogar de Patitas se reserva el derecho de actualizar estos términos cuando sea necesario. Las modificaciones serán publicadas en esta página y entrarán en vigor desde su publicación.
        </p>
      </main>
    </section>
  );
}