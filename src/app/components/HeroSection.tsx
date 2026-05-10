import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-8 md:py-16 sm:px-10 lg:px-16">
      <div className="mx-auto flex flex-col items-center gap-4 lg:flex-row lg:gap-16 max-w-screen-2xl">
        <div className="relative z-20 lg:col-span-5">
          <div className="max-w-xl">
            <p className=" mb-6 text-[11px] uppercase tracking-[0.24em] text-text-muted">INSTRUCTORA JORI CANTONE</p>

            <h1 className="font-headline text-4xl leading-[1.05] text-text-primary md:text-5xl">
              Volver a lo <span className="italic text-primary">esencial</span>
            </h1>

            <p className="mt-4 md:mt-8 max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
              Un espacio para disfrutar el cuerpo, volver al presente y conectar con la respiración. Clases pensadas
              para encontrar armonía, calma y bienestar.
            </p>

            <a href="#schedule" className="mt-8 btn-primary">
              Reservar clase
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="h-auto w-full object-cover brightness-[1.02] contrast-[0.97] saturate-[0.93] rounded-4xl">
            <Image
              src="/hero1.png"
              alt="Jori Cantone - Instructora de Yoga"
              width={700}
              height={900}
              priority
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary-container/20 blur-[120px]" />
    </section>
  );
}
