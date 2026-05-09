import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        px-6 py-16
        sm:px-10
        lg:px-16
      "
    >
      <div className="mx-auto grid max-w-screen-2xl items-center gap-12 lg:grid-cols-12">
        {/* TEXT */}
        <div className="relative z-20 lg:col-span-5">
          <div className="max-w-xl">
            <p
              className="
                mb-6
                text-[11px]
                uppercase
                tracking-[0.24em]
                text-text-muted
              "
            >
              INSTRUCTORA JORI CANTONE
            </p>

            <h1
              className="
                font-headline
                text-4xl
                leading-[1.05]
                text-text-primary
                md:text-5xl
              "
            >
              Volver a lo <span className="italic text-primary">esencial</span>
            </h1>

            <p
              className="
                mt-8
                max-w-md
                text-base
                leading-relaxed
                text-text-secondary
                md:text-lg
              "
            >
              Un espacio para disfrutar el cuerpo, volver al presente y conectar con la respiración. Clases pensadas
              para encontrar armonía, calma y bienestar.
            </p>

            <a
              href="#schedule"
              className="mt-8 hidden md:inline-flex items-center rounded-xs bg-primary px-6 py-3 text-sm uppercase tracking-[0.16em] text-on-primary transition-all duration-300 hover:scale-[1.02] hover:opacity-90å"
            >
              Reservar clase
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative lg:col-span-7">
          <div className="overflow-hidden rounded-[2rem]">
            <Image
              src="/hero-3.png"
              alt="Jori Cantone - Instructora de Yoga"
              width={700}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ambient blur */}
      <div
        className="
          pointer-events-none absolute
          -bottom-24 -left-24
          h-96 w-96
          rounded-full
          bg-primary-container/20
          blur-[120px]
        "
      />
    </section>
  );
}
