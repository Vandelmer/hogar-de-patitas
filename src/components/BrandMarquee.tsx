type Marca = { nombre: string; url: string; logo: string };

const marcas: Marca[] = [
  { nombre: "Royal Canin", url: "https://www.royalcanin.com", logo: "/brand-logos/royalcanin.png" },
  { nombre: "Purina", url: "https://www.purina.com", logo: "/brand-logos/purina.png" },
  { nombre: "Hill's", url: "https://www.hillspet.com", logo: "/brand-logos/hillspet.png" },
  { nombre: "Greenies", url: "https://www.greenies.com", logo: "/brand-logos/greenies.png" },
  { nombre: "Taste of the Wild", url: "https://www.tasteofthewildpetfood.com", logo: "/brand-logos/tasteofthewild.png" },
  { nombre: "Tractive", url: "https://tractive.com", logo: "/brand-logos/tractive.png" },
  { nombre: "Dentastix", url: "https://www.dentastix.com", logo: "/brand-logos/dentastix.png" },
  { nombre: "PetSafe", url: "https://www.petsafe.com", logo: "/brand-logos/petsafe.png" },
  { nombre: "Eukanuba", url: "https://www.eukanuba.com", logo: "/brand-logos/eukanuba.png" },
  { nombre: "Kong", url: "https://www.kongcompany.com", logo: "/brand-logos/kongcompany.png" },
];

export function BrandMarquee() {
  const lista = [...marcas, ...marcas, ...marcas];

  return (
    <section className="overflow-hidden py-10">
      <div
        className="marquee-container group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="marquee-track flex w-max items-center gap-24 whitespace-nowrap">
          {lista.map((marca, indice) => (
            <a
              key={`${marca.nombre}-${indice}`}
              href={marca.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={marca.nombre}
              className="flex h-14 shrink-0 items-center opacity-40 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
            >
              <img
                src={marca.logo}
                alt={marca.nombre}
                className="h-10 w-auto max-w-[160px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
