export default function AboutSection() {
  return (
    <section className="bg-surface-container-low px-8 py-24 md:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-16 md:flex-row md:gap-32">
          <div className="relative w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="pt-12">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6fwHTVUsrX6ZM7xcaC0k56ByILnFC51CWm0L3NIjXo3ABPjRFIDUgg5l8N6CDs0FG-XNv7joLAHkEHbHRMmy6vtQXbQgG4c2CMscQpXkzfL-mU65brkheeDh_N61X32qZb6h5Sxuz9azT3RC89NofXfdLD7Wnf9uBFqpVlTmrBLHWm6vhVg6B-uHmJJbEtSzZ0k9eyIWMRG8GpCo5pWcl1AdEg6Qh0PU78ZfLycek3aeyRJtj_gz3AwfjkGrC3vCeDhX1UpDWfjw"
                  alt="Yoga detail"
                  className="aspect-4/5 w-full rounded-lg object-cover"
                />
              </div>

              <div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBqsxIAjqZ8hF0ofrRfDL5-l28R2aOe9kGxmwi2tDKxkSZF9-wtuncG45MCJkxARjT8eFgiXrY2v6LoevtBTVABgrgmGdS01z31CTdMTP1Y-w3Hq5IwOfmmWQerx1lpXTuwqQ7OKP7gV8zOSGuENN9_MwxX76-k9hX31brZa8jH3G4I_KEEgqmFl257POs9JdV7LDdJpAqkERUmPsAszO1iuq76uCF2ayWgXPd94JtHbtG6riHL7aHdzJxD8zH26dETelEOVc8Z-M"
                  alt="Minimalist studio"
                  className="aspect-3/4 w-full rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="absolute bg-white -bottom-8 -right-8 hidden max-w-50 bg-surface-container-lowest p-6 shadow-editorial md:block">
              <span className="font-headline text-xl italic text-tertiary">
                “The breath is the bridge.”
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="mb-6 block text-xs uppercase tracking-[0.2em] text-outline">
              Mi filosofía
            </span>

            <h2 className="font-headline mb-8 text-4xl italic text-on-surface md:text-5xl">
              Soy Jori
            </h2>

            <div className="space-y-6 text-lg font-light leading-[1.8] text-on-surface-variant">
              <p>
                Soy Jori Cantone, instructora de yoga, y acompaño procesos desde una mirada consciente, terapéutica y humana.

                Llegué al yoga en un momento que transformó mi vida, y desde entonces lo vivo como una práctica de conexión, presencia y bienestar real.

                En mis clases vas a encontrar un espacio para volver al cuerpo, respirar con más conciencia, habitar tus emociones y cultivar una relación más amable con vos misma.

                Mi enfoque integra herramientas del yoga terapéutico, Ayurveda, yoga prenatal y Ashtanga Vinyasa, adaptando cada práctica a las necesidades de cada persona.

                Creo en un yoga posible, sensible y accesible.

                Un espacio donde no hace falta “hacerlo perfecto”, sino simplemente llegar, respirar y empezar.

                Si sentís que este camino resuena con vos, sos bienvenida.
              </p>

            </div>

            <div className="mt-8">
              <hr className="mb-8 w-24 border-outline-variant opacity-30" />
              <a href="#"
                className="text-sm uppercase tracking-[0.3em] text-on-surface transition-colors hover:text-primary">
                CONTACTAME
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}