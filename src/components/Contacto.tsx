import { motion } from "motion/react";
import { useRef, useState } from "react";
import { BackgroundPatterns } from "@/components/BackgroundPatterns";
import { Check, PaperPlaneTilt } from "@phosphor-icons/react";
import { ActionSwap } from "@/components/arc/action-swap/action-swap";

export function Contacto() {
  const formRef = useRef<HTMLFormElement>(null);
  const [valido, setValido] = useState(false);
  return (
    <section id="contacto" className="relative overflow-hidden py-24">
      <BackgroundPatterns />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#173B3B] md:text-5xl">
            PREGUNTANOS LO QUE QUIERAS
          </h2>
        </div>

        <div className="mt-12 rounded-2xl border border-[#008B8B] bg-white p-8">
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
            onSubmit={(e) => e.preventDefault()}
            onChange={() => setValido(formRef.current?.checkValidity() ?? false)}
          >
            <div className="flex flex-col gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-base font-bold text-[#173B3B]">Nombre</span>
                <input
                  type="text"
                  name="nombre"
                  required
                  className="rounded-md border border-[#D6E2DE] bg-white px-4 py-3 text-[#173B3B] outline-none transition-colors focus:border-[#008B8B]"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-base font-bold text-[#173B3B]">Apellido</span>
                <input
                  type="text"
                  name="apellido"
                  required
                  className="rounded-md border border-[#D6E2DE] bg-white px-4 py-3 text-[#173B3B] outline-none transition-colors focus:border-[#008B8B]"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-base font-bold text-[#173B3B]">Correo electrónico</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-md border border-[#D6E2DE] bg-white px-4 py-3 text-[#173B3B] outline-none transition-colors focus:border-[#008B8B]"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-base font-bold text-[#173B3B]">Teléfono</span>
                <input
                  type="tel"
                  name="telefono"
                  required
                  className="rounded-md border border-[#D6E2DE] bg-white px-4 py-3 text-[#173B3B] outline-none transition-colors focus:border-[#008B8B]"
                />
              </label>
            </div>
            <div className="flex flex-col gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-base font-bold text-[#173B3B]">Asunto</span>
                <input
                  type="text"
                  name="asunto"
                  required
                  className="rounded-md border border-[#D6E2DE] bg-white px-4 py-3 text-[#173B3B] outline-none transition-colors focus:border-[#008B8B]"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-base font-bold text-[#173B3B]">Cuerpo</span>
                <textarea
                  name="cuerpo"
                  required
                  rows={8}
                  className="rounded-md border border-[#D6E2DE] bg-white px-4 py-3 text-[#173B3B] outline-none transition-colors focus:border-[#008B8B]"
                />
              </label>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <ActionSwap
                disabled={!valido}
                states={[
                  { id: "enviar", label: "Enviar", icon: <PaperPlaneTilt size={16} weight="fill" />, tone: "accent" },
                  {
                    id: "enviado",
                    label: "Enviado",
                    icon: <Check size={16} weight="bold" />,
                    tone: "success",
                    pendingLabel: "Enviando",
                    holdFor: 2000,
                  },
                ]}
                onAction={async (next) => {
                  const form = formRef.current;
                  if (form && !form.checkValidity()) {
                    form.reportValidity();
                    return;
                  }
                  if (next.id === "enviado") {
                    await new Promise((resolve) => setTimeout(resolve, 600));
                  }
                }}
              />
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}