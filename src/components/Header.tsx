import { useState } from "react";
import type { MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { Button } from "@/components/arc/button/button";
import { navegar, useRuta } from "@/lib/router";

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Cuidadores", href: "/cuidadores" },
  { label: "Reservar", href: "/#reservas" },
  { label: "Contacto", href: "/#contacto" },
  { label: "Reseñas", href: "/resenas" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const ruta = useRuta();
  const esActivo = (href: string) => {
    if (href === "/#inicio") return ruta === "/";
    if (href.startsWith("/#")) return false;
    return ruta === href;
  };

  /** Cambia de vista sin recargar; deja pasar los clics con modificador o de otro origen. */
  const alPulsarEnlace = (evento: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey) return;
    if (evento.button !== 0 || !href.startsWith("/")) return;
    evento.preventDefault();
    navegar(href);
  };

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* 1. LOGO (Izquierda) */}
        <a
          href="/#inicio"
          onClick={(e) => alPulsarEnlace(e, "/#inicio")}
          aria-label="Hogar de Patitas — ir al inicio"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <img
            src="/referencias/logotipo-hogar-patitas.png"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* 2. NAVEGACIÓN (Centro) */}
        <nav className="hidden md:flex items-center gap-12 text-base font-medium text-[#173B3B]">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => alPulsarEnlace(e, l.href)}
              aria-current={esActivo(l.href) ? "page" : undefined}
              className={
                esActivo(l.href)
                  ? "group relative inline-flex items-center gap-1 text-[#008B8B] transition-colors"
                  : "group relative inline-flex items-center gap-1 hover:text-[#008B8B] transition-colors"
              }
            >
              {l.label}
              <ArrowUpRight
                size={14}
                className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        {/* 3. BOTÓN (Derecha) */}
        <div className="hidden md:block">
          <Button variant="primary" size="md" className="px-6!">
            Entrar
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-[#173B3B] transition-transform active:scale-[0.97]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white/95 border-t border-gray-100"
          >
            <nav className="flex flex-col gap-1 px-6 py-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    alPulsarEnlace(e, l.href);
                    setOpen(false);
                  }}
                  className={
                    esActivo(l.href)
                      ? "group flex items-center justify-between py-2 text-base font-medium text-[#008B8B] transition-colors"
                      : "group flex items-center justify-between py-2 text-base font-medium text-[#173B3B] hover:text-[#008B8B] transition-colors"
                  }
                >
                  {l.label}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                    aria-hidden="true"
                  />
                </a>
              ))}
              <div className="pt-2">
                <Button variant="primary" size="md" className="w-full">
                  Entrar
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
