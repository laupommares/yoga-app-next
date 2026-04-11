"use client";

const plans = [
  {
    title: "Clase suelta",
    description: "Práctica libre, sin compromiso",
    price: "$10.000",
  },
  {
    title: "1 vez por semana",
    description: "Intercambio y constancia",
    price: "$28.000",
  },
  {
    title: "2 veces por semana",
    description: "Equilibrio y continuidad",
    price: "$32.000",
  },
  {
    title: "3 veces por semana",
    description: "Profundizar tu práctica",
    price: "$38.000",
  },
];

export default function BookingSection() {
  return (
    <section id="booking" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light">
            Inversión en tu Bienestar
          </h2>
        </div>

        {/* Lista */}
        <div className="space-y-12">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 border-b border-stone-200/50 pb-6"
            >
              <div>
                <h4 className="text-lg md:text-xl font-light mb-1">
                  {plan.title}
                </h4>
                <p className="text-sm text-on-surface-variant font-light">
                  {plan.description}
                </p>
              </div>

              <span className="text-2xl md:text-3xl font-light text-primary">
                {plan.price}
              </span>
            </div>
          ))}
        </div>

        {/* Info extra */}
        <div className="mt-16 space-y-6 text-sm text-on-surface-variant font-light leading-relaxed">

          <p>
            Podés combinar horarios y estilos según tu disponibilidad.
            (Martes y jueves 20:30 actualmente completo)
          </p>
          <p>Clases presenciales grupales en Chivilcoy de abril a agosto </p>
       
          <p className="italic">
            Cualquier consulta, estoy a disposición ✨
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="#"
            className="inline-block px-10 py-3 border border-primary text-primary text-[11px] uppercase tracking-[0.15em] hover:bg-primary hover:text-on-primary transition-all duration-300">
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}