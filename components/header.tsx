"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#por-que-elegirnos", label: "Por qué elegirnos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl shadow-xl shadow-slate-900/10 dark:shadow-slate-950/50 border-b border-slate-200/60 dark:border-slate-700/60"
            : "bg-white/10 dark:bg-black/20 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5"
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`
          flex items-center justify-between transition-all duration-300
          ${isScrolled ? "h-16" : "h-20"}
        `}
        >
          {/* Logo con efectos premium */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              {/* Resplandor del logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Logo */}
              <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 p-1.5 shadow-lg group-hover:shadow-xl group-hover:shadow-amber-500/40 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="Logo Tortimex"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Nombre de marca */}
            <div className="flex flex-col">
              <span
                className={`
                font-bold tracking-tight bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent
                transition-all duration-300
                ${isScrolled ? "text-xl" : "text-2xl"}
              `}
              >
                TORTIMEX
              </span>
              <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400 -mt-1">
                Calidad Premium
              </span>
            </div>

            {/* Indicador de calidad */}
            <Sparkles className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 rounded-lg hover:bg-amber-50/50 dark:hover:bg-amber-900/10"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{link.label}</span>

                {/* Indicador de hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button
              asChild
              className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
            >
              <Link href="#contacto" className="flex items-center gap-2">
                <span className="relative z-10">Solicitar cotización</span>
                <ChevronRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />

                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`
              md:hidden relative p-2.5 rounded-xl
              bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm
              border border-slate-200 dark:border-slate-700
              text-slate-900 dark:text-slate-100
              hover:bg-slate-200/80 dark:hover:bg-slate-700/80
              transition-all duration-300
              ${isMenuOpen ? "rotate-90 scale-95" : "rotate-0 scale-100"}
            `}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 transition-transform duration-300" />
            ) : (
              <Menu className="h-5 w-5 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
    md:hidden overflow-hidden transition-all duration-500 ease-in-out
    ${isMenuOpen ? "max-h-[500px] opacity-100 mb-4" : "max-h-0 opacity-0"}
  `}
        >
          <div
            className="
      relative mt-4 rounded-3xl
      bg-white/25 dark:bg-slate-900/30
      backdrop-blur-[18px] backdrop-saturate-150
      border border-white/30 dark:border-white/10
      shadow-[0_8px_40px_rgba(0,0,0,0.15)]
      p-4 overflow-hidden
    "
          >
            {/* Glass light reflection */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-transparent" />

            <nav className="relative z-10 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 rounded-xl hover:bg-amber-50/50 dark:hover:bg-amber-900/10 transition-all duration-300 animate-slideInLeft"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              ))}

              {/* Separador */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent my-2" />

              {/* CTA Button Mobile */}
              <Button
                asChild
                className="group relative mt-2 w-full overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 h-12 animate-slideInLeft"
                style={{ animationDelay: "250ms" }}
              >
                <Link
                  href="#contacto"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">Solicitar cotización</span>
                  <ChevronRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />

                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Link>
              </Button>
            </nav>

            {/* Info adicional mobile */}
            <div className="relative z-10 mt-4 pt-4 border-t border-white/30">
              <p className="text-xs text-center text-slate-600 dark:text-slate-300">
                Productos de maíz de alta calidad
              </p>
              <p className="text-xs text-center text-slate-600 dark:text-slate-300 mt-1">
                📍 Jalisco, México
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
