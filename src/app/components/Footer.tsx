import Image from "next/image";
import { AiFillTikTok } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import { HiOutlineHome } from "react-icons/hi";
import { LuFlower2 } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { LuHeartHandshake } from "react-icons/lu";
import { LuBadgeDollarSign } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="w-full bg-stone-100 pt-16 pb-10">
      <div className="container mx-auto max-w-screen-2xl px-8">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Marca */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.svg"
              alt="Yoga con Jori"
              width={110}
              height={32}
            />

            <p className="text-xs text-stone-500 font-light leading-relaxed max-w-[220px]">
              © 2026 Jorgelina Cantone <br />
              Presencia en movimiento
            </p>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-4">
            <ul className="space-y-3 text-sm text-stone-600 font-light">

              <li>
                <a href="#home" className="flex items-center gap-2 hover:text-primary transition">
                  <HiOutlineHome className="w-4 h-4" />
                  <span>Inicio</span>
                </a>
              </li>

              <li>
                <a href="#about" className="flex items-center gap-2 hover:text-primary transition">
                  <LuFlower2 className="w-4 h-4" />
                  <span>Mi filosofía</span>
                </a>
              </li>

              <li>
                <a href="#schedule" className="flex items-center gap-2 hover:text-primary transition">
                  <LuCalendar className="w-4 h-4" />
                  <span>Horarios</span>
                </a>
              </li>

              <li>
                <a href="#practices" className="flex items-center gap-2 hover:text-primary transition">
                  <LuHeartHandshake className="w-4 h-4" />
                  <span>Propuestas</span>
                </a>
              </li>

              <li>
                <a href="#booking" className="flex items-center gap-2 hover:text-primary transition">
                  <LuBadgeDollarSign className="w-4 h-4" />
                  <span>Precios</span>
                </a>
              </li>

            </ul>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.15em] text-stone-400">
              ContactoR
            </h4>

            <ul className="space-y-3 text-sm text-stone-600 font-light">

              <li>
                <a
                  href="https://maps.google.com/?q=Pringles+36+Chivilcoy"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-primary transition"
                >
                  <SiGooglemaps className="w-4 h-4 shrink-0" />
                  <span>Chivilcoy, Buenos Aires</span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/5492346566187"
                  className="flex items-center gap-3 hover:text-primary transition"
                >
                  <IoLogoWhatsapp className="w-4 h-4 shrink-0" />
                  <span>Escribime por WhatsApp</span>
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/joricantone.yoga"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-primary transition"
                >
                  <BiLogoInstagramAlt className="w-4 h-4 shrink-0" />
                  <span>@joricantone.yoga</span>
                </a>
              </li>

              <li>
                <a
                  href="https://tiktok.com/@tuusuario"
                  className="flex items-center gap-3 hover:text-primary transition"
                >
                  <AiFillTikTok className="w-4 h-4 shrink-0" />
                  <span>@tuusuario</span>
                </a>
              </li>

            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}