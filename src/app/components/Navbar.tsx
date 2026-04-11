import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-stone-50/80 backdrop-blur-xl">
      <div className="container mx-auto flex w-full max-w-screen-2xl items-center justify-between px-8 py-4">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={120}
          height={35} />

        <div className="hidden text-sm items-center gap-12 md:flex">
          <a className="text-xs tracking-[0.12em] transition-colors text-text-muted hover:text-earth hover:font-medium hover:border-b hover:border-primary/30"
            href="#home">
            Inicio
          </a>
          <a className="text-xs tracking-[0.12em] transition-colors text-text-muted hover:text-earth hover:font-medium hover:border-b hover:border-primary/30"
            href="#about">
            Mi filosofía
          </a>
          <a className="text-xs tracking-[0.12em] transition-colors text-text-muted hover:text-earth hover:font-medium hover:border-b hover:border-primary/30"
            href="#schedule">
            Horarios
          </a>
          <a className="text-xs tracking-[0.12em] text-text-muted hover:text-earth hover:font-medium hover:border-b hover:border-primary/30"
            href="#practices">
            Propuestas
          </a>
          <a className="text-xs tracking-[0.12em] text-text-muted hover:text-earth hover:font-medium hover:border-b hover:border-primary/30"
            href="#booking">
            Precios
          </a>
        </div>

        <a href="#schedule" className="bg-primary px-6 py-3 text-xs uppercase tracking-[0.2em] text-on-primary transition-all duration-300 hover:opacity-90 active:scale-95">
          Reservar clase
        </a>
      </div>
    </nav>
  );
}