"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Sparkles,
  ChevronRight,
  Award,
  Instagram,
  Facebook,
  Clock,
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
      { label: "+52 33 3905 7440", href: "tel:+523339057440", icon: Phone },
      {
        label: "contacto.tortimex@gmail.com",
        href: "mailto:contacto.tortimex@gmail.com",
        icon: Mail,
      },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/tortimex.mx",
    icon: Instagram,
    color: "hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-400/10",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/share/18MCHiT71d/?mibextid=wwXifr",
    icon: Facebook,
    color: "hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-400/10",
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* ── Brand Section ── */}
          <div className="lg:col-span-1 animate-fadeInUp">
            {/* Logo */}
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-2xl sm:text-3xl font-bold transition-all duration-300 hover:scale-105"
            >
              <span className="relative">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Tortimex
                </span>
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
              {/* ISO — próximamente */}
              <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-dashed border-amber-500/40 group cursor-default">
                <Award className="w-4 h-4 text-amber-400/60" />
                <span className="text-xs font-semibold text-slate-400">
                  ISO 9001
                </span>
                {/* Tooltip */}
                <div className="iso-tooltip">
                  <Clock className="w-3 h-3 text-amber-400 flex-shrink-0" />
                  <span>Certificación en proceso</span>
                </div>
                {/* Etiqueta flotante */}
                <span className="iso-badge">
                  <span className="iso-badge-dot" />
                  Próximamente
                </span>
              </div>

              {/* Años de trayectoria */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-slate-200">
                  +10 años
                </span>
              </div>
            </div>

            {/* Ubicación */}
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Jalisco, México</span>
            </div>

            {/* Redes sociales */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                Síguenos
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon, color }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`social-btn ${color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── Links Sections ── */}
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
                        <link.icon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
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

        {/* ── CTA Banner Premium ── */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 backdrop-blur-sm border border-amber-500/20 overflow-hidden relative group animate-fadeInUp animation-delay-400">
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

        {/* ── Bottom Section ── */}
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
                  href="/privacidad"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Privacidad
                </Link>
                <span className="text-slate-600">•</span>
                <Link
                  href="/terminos"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Términos
                </Link>
              </div>
            </div>

            {/* Badge Hecho en México + redes en mobile */}
            <div className="flex items-center gap-3">
              {/* Redes en pie de página (visible en sm+) */}
              <div className="hidden sm:flex items-center gap-2">
                {socialLinks.map(({ label, href, icon: Icon, color }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`social-btn-sm ${color}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>

              <div className="hidden sm:block w-px h-5 bg-white/10" />

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10">
                <span className="text-sm font-medium text-slate-300">
                  Hecho en México
                </span>
                <span className="text-base">🇲🇽</span>
              </div>
            </div>
          </div>

          {/* Texto legal */}
          <p className="mt-6 text-xs text-slate-500 text-center leading-relaxed max-w-4xl mx-auto">
            Tortimex es una marca registrada dedicada a la producción de
            productos derivados del maíz. Todos nuestros productos cumplen con
            las normas mexicanas de inocuidad alimentaria NOM-251-SSA1-2009.
          </p>
        </div>
      </div>

      {/* ── CSS ── */}
      <style jsx>{`
        /* ── Social buttons ── */
        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 0.625rem;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.25s ease;
        }
        .social-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .social-btn-sm {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1.875rem;
          height: 1.875rem;
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
          transition: all 0.25s ease;
        }
        .social-btn-sm:hover {
          transform: translateY(-1px);
        }

        /* ── ISO badge "Próximamente" ── */
        .iso-badge {
          position: absolute;
          top: -0.6rem;
          right: -0.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.15rem 0.5rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #92400e, #b45309);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #fef3c7;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          white-space: nowrap;
          pointer-events: none;
        }
        .iso-badge-dot {
          width: 0.35rem;
          height: 0.35rem;
          border-radius: 50%;
          background: #fbbf24;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        /* ── ISO tooltip ── */
        .iso-tooltip {
          position: absolute;
          bottom: calc(100% + 0.5rem);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          opacity: 0;
          pointer-events: none;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.375rem 0.75rem;
          border-radius: 0.5rem;
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid rgba(251, 191, 36, 0.3);
          font-size: 0.7rem;
          font-weight: 500;
          color: #fcd34d;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          transition:
            opacity 0.2s ease,
            transform 0.2s ease;
          z-index: 20;
        }
        .iso-tooltip::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-top-color: rgba(251, 191, 36, 0.3);
        }
        .group:hover .iso-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        /* ── Animations ── */
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
        @keyframes pulse-dot {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
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

        /* ── Glassmorphism ── */
        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      `}</style>
    </footer>
  );
}
