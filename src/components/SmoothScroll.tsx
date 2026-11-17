import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * Proveedor de scroll suave (Lenis) a nivel de aplicacion.
 * Se desactiva la inercia si el usuario pide menos movimiento.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.4,
        smoothWheel: !reduceMotion,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
