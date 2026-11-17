import { BackgroundPatterns } from "@/components/BackgroundPatterns";

export function Privacidad() {
  return (
    <section className="relative overflow-hidden py-24">
      <BackgroundPatterns />
      <main className="relative z-10 mx-auto max-w-4xl px-6 text-justify">
        <h1 className="text-4xl text-[#173B3B] md:text-5xl">Política de privacidad</h1>
        <p className="mt-6 text-lg leading-relaxed text-[#526565]">
          En Hogar de Patitas respetamos tu privacidad y protegemos los datos personales que nos facilitas al hacer una reserva o contactar con nosotros.
        </p>
        <h2 className="mt-10 text-2xl text-[#173B3B]">Datos que recogemos</h2>
        <p className="mt-4 text-base leading-relaxed text-[#526565]">
          Recogemos nombre, apellidos, correo electrónico, teléfono y la información necesaria sobre la mascota (edad, raza, salud y comportamiento) para ofrecer un servicio adecuado y seguro.
        </p>
        <h2 className="mt-10 text-2xl text-[#173B3B]">Uso de los datos</h2>
        <p className="mt-4 text-base leading-relaxed text-[#526565]">
          Los datos se utilizan exclusivamente para gestionar reservas, comunicarnos contigo y garantizar el bienestar de la mascota. No vendemos ni compartimos tus datos con terceros, salvo obligación legal o proveedores necesarios para el servicio.
        </p>
        <h2 className="mt-10 text-2xl text-[#173B3B]">Tus derechos</h2>
        <p className="mt-4 text-base leading-relaxed text-[#526565]">
          Puedes acceder, rectificar o solicitar la eliminación de tus datos en cualquier momento escribiéndonos a través del formulario de contacto. Conservamos la información solo durante el tiempo necesario para cumplir con la finalidad del servicio.
        </p>
      </main>
    </section>
  );
}