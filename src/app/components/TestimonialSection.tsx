export default function TestimonialSection() {
    return (
      <section className="bg-surface py-40">
        <div className="relative mx-auto max-w-5xl px-8 text-center">

          <blockquote className="font-headline text-4xl font-light italic leading-tight text-on-surface md:text-6xl">
          El silencio no es la ausencia de
          sonido, sino la presencia de
          armonía.
          </blockquote>
  
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 scale-90 rounded-full opacity-10 md:scale-100" />
        </div>
      </section>
    );
  }