import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="bg-[#E0F2F1] py-12 text-[#173B3B]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">Hogar de Patitas</p>
            <p className="mt-2 text-sm text-[#526565]">
              Hotel para perros y gatos en Mairena del Aljarafe, Sevilla.
            </p>
            <p className="mt-4 text-sm text-[#526565]">
              Fundado por <span className="font-bold text-[#173B3B]">Ainara Vázquez Muñoz</span>, CEO.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#008B8B]">
              Enlaces
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#526565]">
              <li><a href="/#inicio" className="hover:text-[#008B8B]">Inicio</a></li>
              <li><a href="/quienes-somos" className="hover:text-[#008B8B]">Quiénes somos</a></li>
              <li><a href="/cuidadores" className="hover:text-[#008B8B]">Cuidadores</a></li>
              <li><a href="/resenas" className="hover:text-[#008B8B]">Reseñas</a></li>
              <li><a href="/#contacto" className="hover:text-[#008B8B]">Contacto</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#008B8B]">
              Legal
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#526565]">
              <li><a href="/terminos" target="_blank" rel="noopener noreferrer" className="hover:text-[#008B8B]">Términos y condiciones</a></li>
              <li><a href="/privacidad" target="_blank" rel="noopener noreferrer" className="hover:text-[#008B8B]">Política de privacidad</a></li>
              <li><a href="/cookies" target="_blank" rel="noopener noreferrer" className="hover:text-[#008B8B]">Política de cookies</a></li>
            </ul>
            <div className="mt-4 flex gap-3 text-[#008B8B]">
              <InstagramLogo size={20} />
              <WhatsappLogo size={20} />
            </div>
          </div>
        </div>

    </div>
  </footer>
  );
}