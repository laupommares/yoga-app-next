export default function AboutSection() {
  return (
    <section id="about" className="bg-surface py-16">
      <div className="max-w-5xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Imagen */}
          <div className="w-full">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBqsxIAjqZ8hF0ofrRfDL5-l28R2aOe9kGxmwi2tDKxkSZF9-wtuncG45MCJkxARjT8eFgiXrY2v6LoevtBTVABgrgmGdS01z31CTdMTP1Y-w3Hq5IwOfmmWQerx1lpXTuwqQ7OKP7gV8zOSGuENN9_MwxX76-k9hX31brZa8jH3G4I_KEEgqmFl257POs9JdV7LDdJpAqkERUmPsAszO1iuq76uCF2ayWgXPd94JtHbtG6riHL7aHdzJxD8zH26dETelEOVc8Z-M"
              alt="Jori Yoga"
              className="w-full h-[420px] object-cover rounded-xl"
            />
          </div>

          {/* Texto */}
          <div>

            <span className="block text-xs uppercase tracking-[0.15em] text-stone-400 mb-4">
              Mi filosofía
            </span>

            <h2 className="text-2xl md:text-3xl font-light mb-6">
              Soy Jori
            </h2>

            <div className="space-y-4 text-sm text-on-surface-variant font-light leading-relaxed">

              <p>
                Soy Jori Cantone, instructora de yoga, y acompaño procesos desde una mirada consciente, terapéutica y humana.
              </p>

              <p>
                Llegué al yoga en un momento que transformó mi vida, y desde entonces lo vivo como una práctica de conexión, presencia y bienestar real.
              </p>

              <p>
                En mis clases vas a encontrar un espacio para volver al cuerpo, respirar con más conciencia, habitar tus emociones y cultivar una relación más amable con vos misma.
              </p>

              <p>
                Mi enfoque integra herramientas del yoga terapéutico, Ayurveda, yoga prenatal y Ashtanga Vinyasa, adaptando cada práctica a las necesidades de cada persona.
              </p>

              <p>
                Creo en un yoga posible, sensible y accesible.
              </p>

              <p>
                Un espacio donde no hace falta “hacerlo perfecto”, sino simplemente llegar, respirar y empezar.
              </p>

              <p>
                Si sentís que este camino resuena con vos, sos bienvenida.
              </p>

            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#booking"
                className="text-xs uppercase tracking-[0.15em] text-primary hover:opacity-70 transition"
              >
                Reservar una clase
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}