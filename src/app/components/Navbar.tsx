"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Mi filosofía" },
    { href: "#booking", label: "Precios" },
    { href: "#schedule", label: "Horarios" },
    { href: "#practices", label: "Propuestas" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-stone-50/80 backdrop-blur-xl">
      <div className="container mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">

        <Image src="/logo.svg" alt="Logo" width={110} height={32} />

        <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.12em]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-muted hover:text-earth transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#schedule"
          className="hidden md:inline-block bg-primary px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-on-primary hover:opacity-90 transition">
          Reservar
        </a>

        <button onClick={() => setOpen(!open)}
          className="md:hidden text-text-primary flex items-center justify-center w-10 h-10">
          <span className="material-symbols-outlined text-[20px]">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-100 py-6" : "max-h-0"}`}>
        <div className="flex flex-col items-center gap-6 text-sm text-text-secondary">

          {links.map((link) => (
            <a key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-primary transition">
              {link.label}
            </a>
          ))}

          <a href="#schedule"
            onClick={() => setOpen(false)}
            className="mt-2 bg-primary px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] text-on-primary">
            Reservar clase
          </a>

        </div>
      </div>
    </nav>
  );
}