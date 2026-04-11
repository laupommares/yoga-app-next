import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-stone-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">

        {/* Marca */}
        <div className="space-y-4 text-center md:text-left">
          <Image
            src="/logo.svg"
            alt="Yoga con Jori"
            width={110}
            height={32}/>

          <p className="text-xs text-stone-500 font-light">
            © 2026 Jorgelina Cantone  
            <br />
            Presencia en movimiento
          </p>
        </div>

        {/* Contacto */}
        <div className="space-y-4 text-sm text-stone-600 font-light">

          <h4 className="text-xs uppercase tracking-[0.15em] text-stone-400">
            Contacto
          </h4>

          <ul className="space-y-3">

            <li>
              <a
                href="https://maps.google.com/?q=Pringles+36+Chivilcoy"
                target="_blank"
                className="flex items-center gap-2 hover:text-primary transition">
                📍 Pringles 36, Chivilcoy
              </a>
            </li>

            <li>
              <a href="https://wa.me/XXXXXXXX"
                target="_blank"
                className="flex items-center gap-2 hover:text-primary transition">
                💬 WhatsApp
              </a>
            </li>

            <li>
              <a
                href="https://instagram.com/tuusuario"
                target="_blank"
                className="flex items-center gap-2 hover:text-primary transition">
                📷 Instagram / @tuusuario
              </a>
            </li>

            <li>
              <a
                href="https://tiktok.com/@tuusuario"
                target="_blank"
                className="flex items-center gap-2 hover:text-primary transition">
                🎵 TikTok / @tuusuario
              </a>
            </li>
          </ul>
        </div>

        {/* Mini menú */}
        <div className="space-y-4 text-sm text-stone-600 font-light">

          <h4 className="text-xs uppercase tracking-[0.15em] text-stone-400">
            Navegación
          </h4>

          <ul className="space-y-3">
            <li>
              <a href="#inicio" className="hover:text-primary transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#practicas" className="hover:text-primary transition">
                Prácticas
              </a>
            </li>
            <li>
              <a href="#horarios" className="hover:text-primary transition">
                Horarios
              </a>
            </li>
            <li>
              <a href="#clases" className="hover:text-primary transition">
                Clases
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}