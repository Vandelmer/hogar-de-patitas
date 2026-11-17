import { useEffect, useState } from "react";

const normalizar = (pathname: string) => pathname.replace(/\/+$/, "") || "/";

const EVENTO_CAMBIO = "router:cambio";

/** Ruta interna actual, sin barra final. */
export function rutaActual() {
  return normalizar(window.location.pathname);
}

/**
 * Navegacion interna sin recargar el documento: cambia la URL con el History API,
 * avisa a los suscriptores y coloca el scroll en el ancla o arriba del todo.
 */
export function navegar(href: string) {
  const destino = new URL(href, window.location.origin);

  if (destino.origin !== window.location.origin) {
    window.location.href = href;
    return;
  }

  window.history.pushState({}, "", `${destino.pathname}${destino.hash}`);
  window.dispatchEvent(new Event(EVENTO_CAMBIO));

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  requestAnimationFrame(() => {
    const ancla = destino.hash ? document.getElementById(destino.hash.slice(1)) : null;
    if (ancla) {
      ancla.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }
  });
}

/** Suscribe el componente a los cambios de ruta, incluidos atras/adelante del navegador. */
export function useRuta() {
  const [ruta, setRuta] = useState(rutaActual);

  useEffect(() => {
    const alCambiar = () => setRuta(rutaActual());
    window.addEventListener("popstate", alCambiar);
    window.addEventListener(EVENTO_CAMBIO, alCambiar);
    return () => {
      window.removeEventListener("popstate", alCambiar);
      window.removeEventListener(EVENTO_CAMBIO, alCambiar);
    };
  }, []);

  return ruta;
}
