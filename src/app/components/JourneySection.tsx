"use client";

export default function JourneySection() {
  return (
    <section id="journey" className="relative py-12 lg:py-16 overflow-hidden bg-surface-container-low text-text-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <p className="eyebrow mb-4">
              Nueva etapa
            </p>

            <h2 className="text-2xl md:text-3xl font-light">
              YOGA me recuerda que el verdadero hogar habita dentro nuestro.
              Por eso, aunque cambie el paisaje, la conexión permanece.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-sm md:text-[15px] leading-relaxed text-text-secondary font-light">
              En los próximos meses voy a estar viajando por España,
              profundizando mi camino y compartiendo nuevas experiencias ligadas
              al yoga y el bienestar.
            </p>

            <p className="text-sm md:text-[15px] leading-relaxed text-text-secondary font-light">
              Muy pronto habrá novedades sobre prácticas online, clases
              grabadas y futuros encuentros para seguir acompañando procesos
              desde distintos lugares.
            </p>

            <div className="space-y-8">
              <div>
                <p className="eyebrow mb-2">
                  Online
                </p>

                <p className="font-serif italic text-xl">
                  Próximas propuestas en preparación
                </p>
              </div>

              <div>
                <p className="eyebrow mb-2">
                  Comunidad
                </p>

                <p className="font-serif italic text-xl">
                  Seguimos en contacto desde cualquier lugar
                </p>
              </div>
            </div>

              <a href="https://wa.me/5492346566187"
                className="btn-primary">
                Escribirme por WhatsApp
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}