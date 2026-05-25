import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-12 md:py-16 sm:px-12 lg:px-16">
      <div className="mx-auto flex flex-col items-center gap-6 md:flex-row lg:gap-16 max-w-screen-2xl">
        <div className="w-full md:w-6/12 lg:w-5/12">
          <div className="max-w-xl">
            <p className="mb-4 lg:mb-8 eyebrow">INSTRUCTORA JORI CANTONE</p>

            <h1 className="font-headline text-4xl leading-widest text-text-primary lg:text-5xl">
              Volver a lo <span className="italic text-primary">esencial</span>
            </h1>

            <p className="my-6 md:mt-8 text-base leading-relaxed font-light text-text-secondary lg:text-lg">
              Un espacio para disfrutar el cuerpo, volver al presente y conectar con la respiración. Clases diseñadas
              para encontrar armonía, calma y bienestar.
            </p>

            <a href="#schedule" className="md:mt-8 btn-primary">
              Reservar clase
            </a>
          </div>
        </div>

        <div className="w-full md:w-6/12 lg:w-7/12 flex justify-center">
          <div className="h-auto w-full object-cover brightness-[1.02] contrast-[0.97] saturate-[0.93] rounded-4xl">
            <Image
              src="/hero.png"
              alt="Jori Cantone - Instructora de Yoga"
              width={700}
              height={900}
              priority
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
