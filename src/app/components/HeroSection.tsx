export default function HeroSection() {
    return (
      <section id="home" className="relative mb-16 flex min-h-[90vh] flex-col justify-center overflow-hidden px-8 md:px-24">
        <div className="grid h-full grid-cols-12 items-center gap-4">
          <div className="relative z-10 col-span-12 md:col-span-8 md:translate-x-110">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAvNCcNSVW4W3gj-IP-PaX66C39pvtyMoo-NYyep6pImVDzPV1IieayG2y7SaBul3wMj7RPWOmNNwR3GGZjSEJNjHy5HM6PVkDIu--h80tVvqcNEkV-6gwZXRD1LU13BvIIscBKGVDS7v_hoYiQhq7jnuuELPxndddPnPY-wKUDEDclTjloHun4DILnPyXsNF4vdnl8r2gsJBcKsUZjE3pi3oraC9W841Nt2g7WVDjgl5hkTur8eoqISgZ6dYt92cGevVQjfQogJE"
              alt="Yoga practice"
              className="h-179 w-full rounded-xl object-cover shadow-editorial"/>
          </div>
  
          <div className="absolute bg-stone-50/80 backdrop-blur-xl z-20 rounded-xl">
            <div className="inline-block bg-surface-container-lowest shadow-editorial p-6 md:p-10">
              <h2 className="uppercase tracking-[0.2em] text-text-muted">
                PROF. JORGELINA CANTONE
              </h2>
              <h1 className="font-headline mb-8 leading-tight text-on-surface text-4xl md:text-6xl">
              Volver a tu <br />
                <span className="italic text-primary">centro</span>
              </h1>
  
              <p className="mb-10 max-w-sm text-base md:text-lg leading-relaxed text-on-surface-variant">
              Ashtanga & Ayurveda para una vida en
              equilibrio. Descubre el silencio que habita en el movimiento.
              </p>
  
              <a href="#booking"
                className="inline-block border-b border-primary/30 pb-1 text-sm font-medium uppercase tracking-widest text-primary transition-all hover:border-primary">
                Reservar Clase
              </a>
            </div>
          </div>
        </div>
  
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary-container/20 blur-[100px]" />
      </section>
    );
  }