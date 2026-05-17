import Image from "next/image";

export default function Practices() {
  const classes = [
    {
      title: "Yoga terapeutico con orietación Ayurveda",
      duration: "60min",
      description:
        "La ciencia de la vida. Te brindamos herramientas para comprender tu constitución única (Doshas) y ajustar tu nutrición y hábitos para vivir en sintonía con la naturaleza.",
      schedule: "LUNES, MARTES & JUEVES",
      image: "/ayurveda.png",
      reverse: false,
    },
    {
      title: "Ashtanga Vinhasa",
      duration: "60min",
      description:
        "Una meditación en movimiento. A través de la respiración consciente y secuencias de posturas, purificamos el sistema nervioso y cultivamos una concentración inquebrantable.",
      schedule: "CADA LUNES & MIÈRCOLES",
      image: "/ashtanga.png",
      reverse: true,
    },
    {
      title: "Clases 1 a 1 diseñadas exclusivamente para vos.",
      duration: "60min",
      description:
        "Un espacio de atención plena donde cada práctica se adapta a tus necesidades físicas, emocionales y energéticas, acompañándote de manera cercana y consciente para potenciar tu bienestar integral. Ideales para abordar patologías específicas o para quienes buscan una experiencia íntima y personalizada, ya sea desde la comodidad de tu hogar o en el estudio, a través de encuentros individuales.",
      schedule: "DÍAS CONVENIDOS",
      image: "/clases-uno-a-uno.png",
      reverse: false,
    },
    {
      title: "Prenatal",
      duration: "60min",
      description:
        "Un espacio seguro para habitar tu embarazo con presencia, conexión y confianza. Las clases están diseñadas para acompañarte amorosamente en cada etapa, respetando tus tiempos, tus cambios y las necesidades de tu cuerpo. Aprendé a aliviar tensiones, fortalecer tu suelo pélvico, conectar con tu bebé y prepararte para el parto a través de prácticas conscientes, adaptadas a cada trimestre y a cada mujer.",
      schedule: "CADA LUNES & MIÈRCOLES",
      image: "/prenatal.png",
      reverse: true,
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
              className={`flex flex-col gap-6 md:flex-row md:items-center ${item.reverse ? "md:flex-row-reverse" : ""}`}>
              <div className="w-full md:w-1/2">
                <div
                  className="relative overflow-hidden rounded-xl bg-background h-[240px] sm:h-[300px] lg:bg-transparent lg:h-auto">
                  <Image src={item.image}
                    alt={item.title}
                    width={600}
                    height={600}
                    priority
                    className="w-full h-full rounded-xl object-contain p-3 lg:rounded-none lg:h-82 lg:object-cover lg:p-0"
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
