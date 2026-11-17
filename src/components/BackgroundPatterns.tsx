export function BackgroundPatterns() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage: "url('/patterns/patitas.svg')",
          backgroundSize: "2000px 1333px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage: "url('/patterns/casitas.svg')",
          backgroundSize: "1800px 1200px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />
    </>
  );
}