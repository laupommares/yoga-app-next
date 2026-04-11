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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">

          <div className="flex flex-col justify-center max-lg:items-center gap-4">
            <Image src="/logo.svg"
              alt="Yoga con Jori"
              width={110}
              height={32} />

            <p className="text-xs text-stone-500 font-light leading-relaxed max-w-55">
              © 2026 Jorgelina Cantone <br />
              Presencia en movimiento
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <ul className="space-y-3 text-sm text-text-secondary font-light">

              {[
                { href: "#home", label: "Inicio" },
                { href: "#about", label: "Mi filosofía" },
                { href: "#booking", label: "Precios" },
                { href: "#schedule", label: "Horarios" },
                { href: "#practices", label: "Propuestas" },
              ].map((item) => (
                <li key={item.href} className="group">
                  <a href={item.href}
                    className="flex items-center gap-2 transition hover:text-primary">
                    <span className="text-primary/50 transition-transform duration-300 group-hover:translate-x-1">
                      ›
                    </span>

                    <span className="relative">
                      {item.label}
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}

            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.15em] text-stone-400">
              Contacto
            </h4>

            <ul className="space-y-3 text-sm text-stone-600 font-light">

              <li>
                <a href="https://maps.google.com/?q=Pringles+36+Chivilcoy"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-primary transition">
                  <SiGooglemaps className="w-4 h-4 shrink-0" />
                  <span>Chivilcoy, Buenos Aires</span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/5492346566187?text=Hola!%20%C2%BFQu%C3%A9%20tal%3F%20Quisiera%20consultar%20por%20las%20clases%20%F0%9F%99%82"
                  className="flex items-center gap-3 hover:text-primary transition">
                  <IoLogoWhatsapp className="w-4 h-4 shrink-0" />
                  <span>Escribime por WhatsApp</span>
                </a>
              </li>

              <li>
                <a href="https://instagram.com/joricantone.yoga"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-primary transition">
                  <BiLogoInstagramAlt className="w-4 h-4 shrink-0" />
                  <span>@joricantone.yoga</span>
                </a>
              </li>

              <li>
                <a href="https://tiktok.com/@tuusuario"
                  className="flex items-center gap-3 hover:text-primary transition">
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