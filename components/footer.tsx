"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Sparkles,
  ChevronRight,
  Award,
} from "lucide-react";

import { LucideIcon } from "lucide-react";

type FooterLink = {
  label: string;
  href: string;
  icon?: LucideIcon;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerLinks: FooterSection[] = [
  {
    title: "Navegación",
    links: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Productos", href: "#productos" },
      { label: "Por qué elegirnos", href: "#por-que-elegirnos" },
      { label: "Proceso", href: "#proceso" },
    ],
  },
  {
    title: "Productos",
    links: [
      { label: "Tortillas", href: "#productos" },
      { label: "Masa", href: "#productos" },
      { label: "Totopos", href: "#productos" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Solicitar cotización", href: "#contacto", icon: ChevronRight },
      { label: "+52 33 3545 2105", href: "tel:+523335452105", icon: Phone },
      {
        label: "contacto@tortimex.com",
        href: "mailto:contacto@tortimex.com",
        icon: Mail,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Patrón decorativo de fondo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />

      {/* Borde superior decorativo con gradiente */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1 animate-fadeInUp">
            {/* Logo con efecto */}
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-2xl sm:text-3xl font-bold transition-all duration-300 hover:scale-105"
            >
              <span className="relative">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Tortimex
                </span>
                {/* Subrayado decorativo */}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
              <Sparkles className="w-5 h-5 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <p className="mt-6 text-sm text-slate-300 leading-relaxed">
              Productos de maíz de alta calidad desde Jalisco, México. Tradición
              mexicana con estándares modernos.
            </p>

            {/* Badges de certificación */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-slate-200">
                  ISO 9001
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-slate-200">
                  +50 años
                </span>
              </div>
            </div>

            {/* Ubicación destacada */}
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Jalisco, México</span>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div
              key={section.title}
              className="animate-fadeInUp"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                {section.title}
              </h3>
              {/* Línea decorativa */}
              <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-5" />

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400 transition-all duration-300"
                    >
                      {link.icon && (
                        <link.icon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                      )}
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                      {!link.icon && (
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-300" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner Premium */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 backdrop-blur-sm border border-amber-500/20 overflow-hidden relative group animate-fadeInUp animation-delay-400">
          {/* Efecto de brillo animado */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                ¿Listo para elevar tu negocio?
              </h3>
              <p className="text-sm sm:text-base text-slate-300">
                Solicita una cotización personalizada sin compromiso
              </p>
            </div>
            <Link
              href="#contacto"
              className="group/btn flex-shrink-0 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-sm shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Contactar ahora
              <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10 animate-fadeInUp animation-delay-600">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} Tortimex. Todos los derechos
                reservados.
              </p>

              {/* Links legales */}
              <div className="flex items-center gap-4 text-sm">
                <Link
                  href="#"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Privacidad
                </Link>
                <span className="text-slate-600">•</span>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Términos
                </Link>
              </div>
            </div>

            {/* Badge "Hecho en México" */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10">
              <span className="text-sm font-medium text-slate-300">
                Hecho en México
              </span>
              <span className="text-base transition-transform duration-300 hover:scale-110">
                🇲🇽
              </span>
            </div>
          </div>

          {/* Texto legal adicional */}
          <p className="mt-6 text-xs text-slate-500 text-center leading-relaxed max-w-4xl mx-auto">
            Tortimex es una marca registrada dedicada a la producción de
            productos derivados del maíz. Todos nuestros productos cumplen con
            las normas mexicanas de inocuidad alimentaria NOM-251-SSA1-2009.
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        /* Glassmorphism */
        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      `}</style>
    </footer>
  );
}
