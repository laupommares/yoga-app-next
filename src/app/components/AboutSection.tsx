import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-surface py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="w-full">
            <Image
              src="/about.png"
              alt="Jori Yoga"
              width={600}
              height={600}
              className="w-full h-105 object-cover rounded-xl"
            />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-[0.15em] text-stone-400 mb-4">Mi filosofía</span>

            <h2 className="text-2xl md:text-3xl font-light mb-6">Soy Jori</h2>

            <div className="space-y-4 text-sm text-on-surface-variant font-light leading-relaxed">
              <p>
                Soy Jori Cantone, instructora de yoga, y acompaño procesos desde una mirada consciente, terapéutica y
                empática.
              </p>

              <p>
                Llegué al yoga en un momento que transformó mi vida, con la necesidad de canalizar mis emociones y
                sentirme bien en mi propio cuerpo. Desde entonces una chispa se encendió en mi y tranformó mi vida, mi
                cuerpo y mi sentir.
              </p>

              <p>
                Actualmente lo vivo con pasión, es mi hábito de conexión, presencia y bienestar real. En mis clases vas
                a encontrar un espacio para volver al cuerpo, respirar con más conciencia, habitar tus emociones y
                cultivar una relación más amable con vos mism@.
              </p>

              <p>
                Mi enfoque es integral, me capacité en yoga terapéutico con orientación Ayurveda, Ashtanga Vinyasa y
                yoga prenatal, adaptando cada práctica a las necesidades de cada persona.
              </p>
              <p>Un espacio donde no hace falta “hacerlo perfecto”, sino simplemente llegar, respirar y empezar.</p>
              <p>Si sentís que este camino resuena con vos, sos bienvenida.</p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a href="#schedule" className="btn-link">
                Reservar una clase
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
