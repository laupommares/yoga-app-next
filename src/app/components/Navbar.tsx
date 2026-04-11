import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-stone-50/80 backdrop-blur-xl">
      <div className="container mx-auto flex w-full max-w-screen-2xl items-center justify-between px-8 py-4">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={120}
        height={35}/>

        <div className="hidden text-sm items-center gap-12 md:flex">
          <Link className="text-xs tracking-[0.12em] transition-colors text-text-muted hover:text-earth hover:font-medium hover:border-b hover:border-primary/30"
            href="#home">
            Inicio
          </Link>
          <Link className="text-xs tracking-[0.12em] transition-colors text-text-muted hover:text-earth hover:font-medium hover:border-b hover:border-primary/30"
            href="#about">
            Mi filosofía
          </Link>
          <Link className="text-xs tracking-[0.12em] transition-colors text-text-muted hover:text-earth hover:font-medium hover:border-b hover:border-primary/30"
            href="#schedule">
            Horarios
          </Link>
          <Link className="text-xs tracking-[0.12em] text-text-muted hover:text-earth hover:font-medium hover:border-b hover:border-primary/30"
            href="#practices">
            Propuestas
          </Link>
          <Link className="text-xs tracking-[0.12em] text-text-muted hover:text-earth hover:font-medium hover:border-b hover:border-primary/30"
            href="#booking">
            Precios
          </Link>
        </div>

        <button className="bg-primary px-6 py-3 text-xs uppercase tracking-[0.2em] text-on-primary transition-all duration-300 hover:opacity-90 active:scale-95">
          Reservar clase
        </button>
      </div>
    </nav>
  );
}