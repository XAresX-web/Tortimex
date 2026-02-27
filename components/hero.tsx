"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award, TrendingUp, Cpu } from "lucide-react";

const badges = [
  {
    icon: Award,
    label: "Sistema de Calidad",
    value: "Control de procesos documentado",
  },
  {
    icon: Sparkles,
    label: "Trayectoria",
    value: "Más de 10 años en el sector",
  },
  {
    icon: TrendingUp,
    label: "Confianza Empresarial",
    value: "Empresas nacionales nos respaldan",
  },
  {
    icon: Cpu,
    label: "Operación Estandarizada",
    value: "Producción bajo protocolos definidos",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image con efectos */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tortillas.jpg"
          alt="Tortillas de maíz de alta calidad"
          fill
          className="object-cover scale-105 animate-kenburns"
          priority
        />
        {/* Overlay degradado sofisticado */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-amber-950/90" />

        {/* Overlay adicional para profundidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        {/* Patrón de textura sutil */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-4xl">
          <div className="flex justify-center sm:justify-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-xl animate-fadeInDown">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="text-sm font-semibold text-white/95 tracking-wide">
                Líderes en Producción de Maíz
              </span>
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            </div>
          </div>

          {/* Título principal con efectos */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.1] text-balance animate-fadeInUp">
            <span className="inline-block">Calidad,</span>{" "}
            <span className="inline-block bg-gradient-to-r from-amber-300 via-amber-200 to-orange-300 bg-clip-text text-transparent">
              tradición
            </span>{" "}
            <span className="inline-block">y confianza</span>
            <br />
            <span className="inline-block mt-2">en cada producto de maíz</span>
          </h1>

          {/* Descripción */}
          <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl animate-fadeInUp animation-delay-200">
            Somos <span className="font-semibold text-amber-300">Tortimex</span>
            , productores de tortillas, masa y totopos de alta calidad desde
            Jalisco, México. Tradición mexicana con estándares modernos de
            producción.
          </p>

          {/* Botones de acción */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-400">
            <Button
              size="lg"
              asChild
              className="group relative text-base sm:text-lg px-8 py-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <Link href="#contacto">
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar cotización
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="group text-base sm:text-lg px-8 py-6 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Link href="#productos">
                <span className="flex items-center gap-2">
                  Conocer productos
                  <TrendingUp className="h-5 w-5 transition-transform group-hover:translate-y-[-2px]" />
                </span>
              </Link>
            </Button>
          </div>

          {/* Stats / Badges informativos — mejorados */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeInUp animation-delay-600">
            {badges.map(({ icon: Icon, label, value }) => (
              <div key={label} className="stat-card">
                <div className="stat-icon-wrap">
                  <Icon
                    className="w-[18px] h-[18px] text-white"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <p className="stat-label">{label}</p>
                  <p className="stat-value">{value}</p>
                  <div className="stat-divider" />
                </div>
              </div>
            ))}
          </div>

          {/* Indicador de confianza — mejorado */}
          <div className="mt-10 inline-flex items-center gap-3 px-3 py-2 pr-5 rounded-full bg-white/7 border border-white/12 backdrop-blur-md animate-fadeInUp animation-delay-800">
            <div className="flex trust-avatars">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="trust-avatar">
                  <span className="trust-star">★</span>
                </div>
              ))}
            </div>
            <div className="pulse-dot" />
            <span className="text-sm font-medium text-white/65">
              <strong className="text-white/90 font-bold">+100 negocios</strong>{" "}
              confían en nosotros
            </span>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-wider">Descubre más</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
            <div className="w-1.5 h-2 rounded-full bg-white/60 animate-scroll" />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        /* ── Fuentes ── */
        @import url("https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap");

        /* ── Badge card ── */
        .stat-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.125rem 1.125rem 1.25rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow:
            0 4px 24px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          overflow: hidden;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }
        .stat-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 0.08) 0%,
            transparent 60%
          );
          pointer-events: none;
        }
        .stat-card:hover {
          transform: translateY(-3px);
          border-color: rgba(251, 191, 36, 0.35);
          box-shadow:
            0 8px 36px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(251, 191, 36, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.14);
        }

        /* ── Icono ── */
        .stat-icon-wrap {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, #fbbf24 0%, #f97316 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(251, 146, 60, 0.45);
          flex-shrink: 0;
        }

        /* ── Texto ── */
        .stat-label {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
          line-height: 1;
        }
        .stat-value {
          font-family: "Syne", sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          color: #fff;
          margin: 0.2rem 0 0;
          line-height: 1.3;
        }

        /* ── Divisor decorativo ── */
        .stat-divider {
          width: 1.75rem;
          height: 2px;
          border-radius: 99px;
          background: linear-gradient(90deg, #fbbf24, transparent);
          margin-top: 0.5rem;
        }

        /* ── Trust row ── */
        .trust-avatars {
          display: flex;
        }
        .trust-avatar {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #fbbf24, #f97316);
          border: 2px solid rgba(15, 23, 42, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: -0.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          transition: transform 0.2s ease;
        }
        .trust-avatar:first-child {
          margin-left: 0;
        }
        .trust-avatar:hover {
          transform: scale(1.15) translateY(-2px);
          z-index: 10;
        }
        .trust-star {
          font-size: 0.65rem;
          color: #fff;
          line-height: 1;
        }

        /* ── Pulse dot ── */
        .pulse-dot {
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.5);
          flex-shrink: 0;
          animation: pulse-ring 2s ease-out infinite;
        }

        /* ── Keyframes originales ── */
        @keyframes kenburns {
          0%,
          100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.1);
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(16px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        /* ── Keyframe nuevo ── */
        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.5);
          }
          70% {
            box-shadow: 0 0 0 6px rgba(74, 222, 128, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
          }
        }

        /* ── Clases de animación ── */
        .animate-kenburns {
          animation: kenburns 20s ease-in-out infinite;
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        .delay-1000 {
          animation-delay: 1s;
        }

        /* ── Glassmorphism ── */
        .backdrop-blur-md {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
    </section>
  );
}
