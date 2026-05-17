"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const links = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Mi filosofía" },
    { href: "#journey", label: "Horarios" }, 
    { href: "#booking", label: "Precios" },
    { href: "#practices", label: "Propuestas" },
  ];

  // Active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => document.querySelector(link.href));

      sections.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(links[index].href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-stone-200/40 bg-stone-50/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-4 lg:px-16">
        <a href="#home" className="shrink-0">
          <Image src="/logo.svg" alt="Logo" width={118} height={34} className="w-28 lg:w-30" />
        </a>

        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-xs tracking-widest">
          {links.map((link) => {
            const isActive = active === link.href;

            return (
              <a key={link.href}
                href={link.href}
                className={`relative uppercase pb-1 transition-colors duration-300
                  ${isActive ? "text-earth" : "text-text-muted hover:text-earth"}`} >
                {link.label}

                <span className={`absolute left-0 bottom-0 h-px bg-earth transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                <span className="absolute left-0 bottom-0 h-px w-0 bg-earth transition-all duration-300 hover:w-full" />
              </a>
            );
          })}
        </div>

        <a href="#schedule" className="max-md:hidden btn-primary">
          Reservar
        </a>

        <button onClick={() => setOpen(!open)} className="text-primary flex md:hidden">
          <span className="material-symbols-outlined text-4xl!">{open ? "close" : "menu"}</span>
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-125px py-6" : "max-h-0"}`}>
        <div className="flex flex-col items-center gap-6 px-8 text-sm">
          {links.map((link) => (
            <a key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`group relative pb-1 transition-colors duration-300${active === link.href ? "text-earth" : "text-text-secondary hover:text-earth"
                }`} >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-px bg-earth transition-all duration-300
                ${active === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </a>
          ))}

          <a href="#schedule"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xs bg-primary px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-on-primary">
            Reservar clase
          </a>
        </div>
      </div>
    </nav>
  );
}
