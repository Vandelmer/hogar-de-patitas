import { useEffect } from "react";
import { Header } from "./components/Header";
import { BackgroundPatterns } from "./components/BackgroundPatterns";
import { BrandMarquee } from "./components/BrandMarquee";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";
import { Galeria } from "./components/Galeria";
import { LandingHero } from "./components/LandingHero";
import { Cookies } from "./pages/Cookies";
import { Cuidadores } from "./pages/Cuidadores";
import { Privacidad } from "./pages/Privacidad";
import { Terminos } from "./pages/Terminos";
import { QuienesSomos } from "./pages/QuienesSomos";
import { ResenasPage } from "./pages/Resenas";
import { Servicios } from "./pages/Servicios";
import { useRuta } from "./lib/router";

export default function App() {
  const ruta = useRuta();
  const esInicio = ruta === "/";
  const esCookies = ruta === "/cookies";
  const esCuidadores = ruta === "/cuidadores";
  const esPrivacidad = ruta === "/privacidad";
  const esQuienesSomos = ruta === "/quienes-somos";
  const esTerminos = ruta === "/terminos";
  const esResenas = ruta === "/resenas";
  const esServicios = ruta === "/servicios";

  useEffect(() => {
    document.title = esCookies
      ? "Cookies — Hogar de Patitas"
      : esCuidadores
      ? "Cuidadores — Hogar de Patitas"
      : esPrivacidad
      ? "Privacidad — Hogar de Patitas"
      : esQuienesSomos
      ? "Quiénes somos — Hogar de Patitas"
      : esResenas
      ? "Reseñas — Hogar de Patitas"
      : esServicios
      ? "Servicios — Hogar de Patitas"
      : esTerminos
      ? "Términos — Hogar de Patitas"
      : "Hogar de Patitas - Hotel para perros";
  }, [esCookies, esCuidadores, esPrivacidad, esQuienesSomos, esResenas, esServicios, esTerminos]);

  return (
    <div className="relative isolate min-h-screen bg-white font-sans">
      <Header />
      {esInicio && (
        <>
          <BackgroundPatterns />
          <img
            src="/fondos/fondo-perro.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-12 z-0 h-[99vh] w-auto max-w-none scale-110 translate-x-0 object-contain object-right origin-bottom-right"
          />
          <LandingHero />
          <BrandMarquee />
          <Galeria />
          <Contacto />
        </>
      )}
      {esCookies && <Cookies />}
      {esCuidadores && <Cuidadores />}
      {esPrivacidad && <Privacidad />}
      {esQuienesSomos && <QuienesSomos />}
      {esResenas && <ResenasPage />}
      {esServicios && <Servicios />}
      {esTerminos && <Terminos />}
      <Footer />
    </div>
  );
}