export default function Practices() {
  const classes = [
    {
      title: "Yoga terapeutico con orietación Ayurveda",
      duration: "60min",
      description:
        "La ciencia de la vida. Te brindamos herramientas para comprender tu constitución única (Doshas) y ajustar tu nutrición y hábitos para vivir en sintonía con la naturaleza.",
      schedule: "LUNES, MARTES & JUEVES",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA9zkpf7djgpqxZYF2-qPUNNElK5JintruaQ1JR6UGVwrxFtjg5SfExK_S-mCplyYiOm5dO1OQHLBPai4UioBIh5z8ESyzaTZjBh8-yw6_QG55PLRcUCvBc4yHSV18pG_N4TggNI9Owa8KgLNAVKEAP1WZStREYbWq6ogQCeGGXnfbveO0CheNMq5fcY0CuZNwMwkmpRu7rkg_7sgK80Pao4j2qJDfeEyeCu5kjyE7N1t9IqeARFSx89u3gNiHwcRCKT1qtDfcaVJA",
      reverse: false,
      italic: true,
    },
    {
      title: "Ashtanga Vinhasa",
      duration: "60min",
      description:
        "Una meditación en movimiento. A través de la respiración consciente y secuencias de posturas, purificamos el sistema nervioso y cultivamos una concentración inquebrantable.",
      schedule: "CADA LUNES & MIÈRCOLES",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD6efkfs0DFLV5Wzf2VNNXXoSmfo_-qS4cLHBoO4TXvHrQKLhC7jNyw9KwNtmtPRGmb2rEJzZGbTRki391KAjD56-dHEJKLj6GHSpquDeTmQ_aNo8aB9_l56QfOmroxVt6LDeJJFskFKbBeiRLQzMIwkWkC8CrPYIjzKbAM9bl1xo4-ujHwt0mcWplse4x1XiZ0iWxI4ni3oD3QQxRvbaPLRq8xpN5EHGNVBx0J0LmaBU3pbuXbZoEM7IbkLDOjlvZu7jw-NqWfj84",
      reverse: true,
      italic: false,
    },
    {
      title: "Clases 1 a 1 diseñadas exclusivamente para vos.",
      duration: "60min",
      description:
        "Un espacio de atención plena donde cada práctica se adapta a tus necesidades físicas, emocionales y energéticas, acompañándote de manera cercana y consciente para potenciar tu bienestar integral. Ideales para abordar patologías específicas o para quienes buscan una experiencia íntima y personalizada, ya sea desde la comodidad de tu hogar o en el estudio, a través de encuentros individuales.",
      schedule: "DÍAS CONVENIDOS",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCpsx4907bV-2dIuVPXLxTBZxfyp_DD1KPBwWeevNNSqNkB95OyxAaZC7vDmxb4-2V0Lq9XvTG4G3HRuPIT-X7NPvnw6qF9lE5YJn6I0XHJGNcZkw6ayetVkMaWIqlXYH_pMvjvNZ6LsSFIGBjYqlIKkXGTgNCe8Cirx988DtssitfEgWC8PAp4zy8_0z9Rqo5eYKq2a-O9TDmHdOM0UXLBKib25mWHRysPmaxDiKnn1jzngKg8xTYjBma4rGKw0SgAKut451m7EcU",
      reverse: false,
      italic: false,
    },
    {
      title: "Prenatal",
      duration: "60min",
      description:
        "Un espacio seguro para habitar tu embarazo con presencia, conexión y confianza. Las clases están diseñadas para acompañarte amorosamente en cada etapa, respetando tus tiempos, tus cambios y las necesidades de tu cuerpo. Aprendé a aliviar tensiones, fortalecer tu suelo pélvico, conectar con tu bebé y prepararte para el parto a través de prácticas conscientes, adaptadas a cada trimestre y a cada mujer.",
      schedule: "CADA LUNES & MIÈRCOLES",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCpsx4907bV-2dIuVPXLxTBZxfyp_DD1KPBwWeevNNSqNkB95OyxAaZC7vDmxb4-2V0Lq9XvTG4G3HRuPIT-X7NPvnw6qF9lE5YJn6I0XHJGNcZkw6ayetVkMaWIqlXYH_pMvjvNZ6LsSFIGBjYqlIKkXGTgNCe8Cirx988DtssitfEgWC8PAp4zy8_0z9Rqo5eYKq2a-O9TDmHdOM0UXLBKib25mWHRysPmaxDiKnn1jzngKg8xTYjBma4rGKw0SgAKut451m7EcU",
      reverse: true,
      italic: false,
    },
  ];

  return (
    <section id="practices" className="py-16 px-6 md:px-12">
      <div className="mx-auto max-w-5xl">

        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.15em] text-text-muted">
            MIS PROPUESTAS
          </p>

          <h2 className="font-headline text-2xl md:text-3xl text-text-primary">
            Prácticas <span className="italic text-primary">con Intención</span>
          </h2>
        </div>

        <div className="space-y-16">
          {classes.map((item) => (
            <div key={item.title}
              className={`flex flex-col gap-6 md:flex-row md:items-center ${
                item.reverse ? "md:flex-row-reverse" : ""
              }`}>

              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-xl aspect-4/3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"/>
                </div>
              </div>

              <div className="w-full md:w-1/2">

                <h3 className={`font-headline mb-3 text-xl md:text-2xl ${
                    item.italic ? "italic text-text-secondary" : "text-text-primary"
                  }`}>
                  {item.title}
                  <span className="ml-2 text-sm font-light text-text-muted">
                    / {item.duration}
                  </span>
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>

                <a href="#schedule" className="text-[11px] uppercase tracking-[0.12em] text-primary">
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