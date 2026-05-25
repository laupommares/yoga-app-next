import Image from "next/image";

export default function Practices() {
  const classes = [
    {
      title: "Yoga Terapéutico con orientación Ayurveda",
      duration: "60min",
      description:
        "Una práctica orientada a restablecer el equilibrio integral, contemplando la energía de los 5 elementos que habitan en la naturaleza y también en nosotros. Cada clase aborda un objetivo físico específico en conexión con un enfoque psicoemocional y energético, a través de un viaje interior inspirado en la energía de los 7 chakras. Este espacio invita al autoconocimiento, la transformación y la reconexión con la propia esencia, cultivando armonía y bienestar.",
      schedule: "COORDINÁ TU PRÁCTICA",
      image: "/ayur.png",
      reverse: false,
    },
    {
      title: "Ashtanga Vinyasa",
      duration: "60min",
      description:
        "Una práctica dinámica que sincroniza respiracion y movimiento, basada en una secuencia tradicional que se aprende progresivamente Mediante la repetición desarrolla tu fuerza, flexibilidad, presencia, purificando tu energia y calmando las fluctuaciones de la mente.",
      schedule: "COORDINÁ TU PRÁCTICA",
      image: "/ashtanga.png",
      reverse: true,
    },
    {
      title: "Clases 1 a 1 diseñadas exclusivamente para vos.",
      duration: "60min",
      description:
        "Un espacio de atención plena donde cada práctica se adapta a tus necesidades físicas, emocionales y energéticas, acompañándote de manera cercana y consciente para potenciar tu bienestar integral. Ideales para abordar patologías específicas o para quienes buscan una experiencia íntima y personalizada a través de encuentros individuales.",
      schedule: "COORDINÁ TU PRÁCTICA",
      image: "/clases-uno-a-uno.png",
      reverse: false,
    },
    {
      title: "Prenatal",
      duration: "60min",
      description:
        "Un espacio seguro para habitar tu embarazo con presencia, conexión y confianza. Las clases están diseñadas para acompañarte amorosamente en cada etapa, respetando tus tiempos, tus cambios y las necesidades de tu cuerpo. Aprendé a aliviar tensiones, fortalecer tu suelo pélvico, conectar con tu bebé y prepararte para el parto a través de prácticas conscientes, adaptadas a cada trimestre y a cada mujer.",
      schedule: "COORDINÁ TU PRÁCTICA",
      image: "/ayurveda.png",
      reverse: true,
    },
    {
      title: "Meditación",
      duration: "60min",
      description:
        "Un espacio para pausar y habitar. A través de prácticas guiadas de relajación, respiración y presencia consciente, la meditación ayuda a reducir el estrés, la ansiedad y el insomnio, restaurando la energía, favoreciendo un estado de calma y claridad  ✨",
      schedule: "COORDINÁ TU MEDITACIÓN",
      image: "/meditacion.png",
      reverse: false,
    },
  ];

  return (
    <section id="practices" className="py-12 lg:py-16 px-6 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 lg:mb-16 text-center">
          <p className="eyebrow mb-4">MIS PROPUESTAS</p>

          <h2 className="font-headline text-2xl md:text-3xl text-text-primary">
            Prácticas <span className="italic text-primary">con Intención</span>
          </h2>
        </div>

        <div className="space-y-8 lg:space-y-16">
          {classes.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col gap-4 lg:gap-6 md:flex-row md:items-center ${item.reverse ? "md:flex-row-reverse" : ""}`}>
              <div className="w-full md:w-1/2">
                <div
                  className="relative overflow-hidden rounded-xl bg-background h-[240px] sm:h-[300px] lg:bg-transparent lg:h-auto">
                  <Image src={item.image}
                    alt={item.title}
                    width={600}
                    height={600}
                    priority
                    className="w-full h-full rounded-xl object-contain lg:rounded-none lg:h-82 lg:object-cover lg:p-0"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="font-headline mb-3 text-xl md:text-2xl text-text-primary">
                  {item.title}
                  <span className="ml-2 text-sm font-light text-text-muted">/ {item.duration}</span>
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-text-secondary">{item.description}</p>

                <a href="#schedule" className="btn-link">
                  {item.schedule}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
