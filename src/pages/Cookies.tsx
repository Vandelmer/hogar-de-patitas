import { BackgroundPatterns } from "@/components/BackgroundPatterns";

export function Cookies() {
  return (
    <section className="relative overflow-hidden py-24">
      <BackgroundPatterns />
      <main className="relative z-10 mx-auto max-w-4xl px-6 text-justify">
        <h1 className="text-4xl text-[#173B3B] md:text-5xl">Política de cookies</h1>
        <p className="mt-6 text-lg leading-relaxed text-[#526565]">
          Este sitio web utiliza cookies para mejorar la experiencia de navegación y analizar el uso del sitio de forma anónima.
        </p>
        <h2 className="mt-10 text-2xl text-[#173B3B]">Qué son las cookies</h2>
        <p className="mt-4 text-base leading-relaxed text-[#526565]">
          Las cookies son pequeños archivos que se almacenan en tu dispositivo cuando visitas una página web. Permiten recordar preferencias y entender cómo se utiliza el sitio.
        </p>
        <h2 className="mt-10 text-2xl text-[#173B3B]">Tipos de cookies</h2>
        <p className="mt-4 text-base leading-relaxed text-[#526565]">
          Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y cookies de análisis para medir el tráfico y mejorar nuestros servicios. No utilizamos cookies publicitarias de terceros.
        </p>
        <h2 className="mt-10 text-2xl text-[#173B3B]">Gestión</h2>
        <p className="mt-4 text-base leading-relaxed text-[#526565]">
          Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento. Ten en cuenta que algunas funcionalidades del sitio podrían verse afectadas.
        </p>
      </main>
    </section>
  );
}