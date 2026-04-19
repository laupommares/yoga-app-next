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
    <section id="booking" className="py-16 bg-surface">
      <div className="max-w-2xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light">
            Inversión en tu bienestar
          </h2>
        </div>

        {/* Lista */}
        <div className="divide-y divide-stone-200/50">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="flex items-center justify-between py-5"
            >
              <div>
                <h4 className="text-base md:text-lg font-light">
                  {plan.title}
                </h4>
                <p className="text-xs text-on-surface-variant font-light">
                  {plan.description}
                </p>
              </div>

              <span className="text-xl md:text-2xl font-light text-primary whitespace-nowrap">
                {plan.price}
              </span>
            </div>
          ))}
        </div>

        {/* Info extra */}
        <div className="mt-10 space-y-3 text-xs text-on-surface-variant font-light leading-relaxed text-center max-w-md mx-auto">
          <p>
            Clases presenciales grupales en Chivilcoy y clases online pregrabadas para todo el mundo.
          </p>
          <p className="italic">
            Cualquier consulta, estoy a disposición ✨
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a href="#schedule"
            className="inline-block px-8 py-2.5 border border-primary text-primary text-[11px] uppercase tracking-[0.15em] hover:bg-primary hover:text-on-primary transition-all duration-300">
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}