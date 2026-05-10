import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-surface py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="w-full order-2 md:order-1">
            <Image
              src="/about.png"
              alt="Jori Yoga"
              width={600}
              height={600}
              className="w-full h-105 object-cover rounded-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="eyebrow mb-4">Mi filosofía</p>

            <h2 className="text-2xl md:text-3xl font-light mb-6">Soy Jori</h2>

            <div className="space-y-4 text-sm text-text-secondary font-light leading-relaxed">
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
              <p>Un espacio donde no hace falta “hacerlo perfecto”, sino simplemente llegar, respirar y empezar. Si sentís que este camino resuena con vos, sos bienvenid@.</p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a href="#schedule" className="btn-secondary">
                Reservar una clase
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
