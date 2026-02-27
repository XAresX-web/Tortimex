"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function TortiSoftPromo() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Fondo base de la sección */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950" />

      <div className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-24">
        {/* Separador visual */}
        <div className="relative mx-auto mb-20 h-px max-w-4xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent animate-shimmer" />
        </div>

        {/* Card principal */}
        <div className="group relative rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:-translate-y-2">
          {/* Fondos multicapa */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black dark:from-black dark:via-slate-950 dark:to-black" />
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-orange-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />

          {/* Patrón de grid sutil */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(251,191,36,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Efectos de luz flotantes */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

          {/* Borde animado en hover */}
          <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-amber-500/50 via-orange-500/50 to-amber-500/50 blur-xl animate-spin-slow" />
          </div>

          {/* Borde superior */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

          {/* Contenido */}
          <div className="relative px-8 py-24 sm:px-16 lg:px-24 text-center backdrop-blur-3xl">
            {/* Badge de lanzamiento */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border-2 border-amber-500/40 bg-gradient-to-r from-amber-500/15 to-orange-500/15 backdrop-blur-md mb-10 shadow-xl shadow-amber-500/20 animate-float">
              <div className="relative">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <div className="absolute inset-0 bg-amber-400 blur-md opacity-50" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-400">
                Próximo lanzamiento
              </span>
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            </div>

            {/* Logo TORTISOFT */}
            <div className="relative mb-16 flex justify-center group/logo">
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-500/40 via-orange-500/50 to-amber-500/40 blur-[100px] opacity-60 group-hover/logo:opacity-90 transition-opacity duration-700" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" />

              {/* Anillos decorativos */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-amber-500/10 animate-ping-slow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border border-orange-500/10 animate-ping-slow delay-500" />
              </div>

              <Image
                src="/logos/logo-tortisoft.png"
                alt="Tortisoft"
                width={800}
                height={260}
                priority
                className="w-auto h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 max-w-[90%] object-contain transition-all duration-700 group-hover/logo:scale-105 drop-shadow-[0_0_50px_rgba(251,191,36,0.3)]"
              />
            </div>

            {/* Título */}
            <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.1] mb-4">
              El sistema que va a{" "}
              <span className="relative inline-block">
                <span className="relative z-10">redefinir</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-draw"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                      <stop
                        offset="50%"
                        stopColor="#f97316"
                        stopOpacity="0.8"
                      />
                      <stop
                        offset="100%"
                        stopColor="#f59e0b"
                        stopOpacity="0.4"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  las tortillerías
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </span>
            </h3>

            {/* Línea decorativa */}
            <div className="flex items-center justify-center gap-3 my-10">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/40" />
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500/40" />
            </div>

            {/* Descripción */}
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Estamos construyendo{" "}
              <span className="font-bold text-white relative">
                TortiSoft
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-amber-500 to-orange-500" />
              </span>
              : el software de administración y punto de venta más avanzado
              jamás creado para tortillerías.
            </p>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
              Inspirado en los mejores sistemas del mercado, pero llevado a un
              nivel que{" "}
              <span className="text-amber-400 font-semibold">nunca antes</span>{" "}
              se había visto.
            </p>

            {/* Features pills */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              {[
                { icon: "⚡", text: "Control total" },
                { icon: "🔒", text: "Cero fugas" },
                { icon: "🎯", text: "Precisión absoluta" },
              ].map((feature, index) => (
                <div
                  key={feature.text}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-sm font-semibold text-white">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 flex justify-center">
              <Link
                href="https://tortisoft.com"
                className="group/cta relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl border-2 border-amber-500/40 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-white font-bold text-base sm:text-lg tracking-wide overflow-hidden transition-all duration-500 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/cta:translate-x-[200%] transition-transform duration-1000" />
                <span className="relative z-10 bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                  Quiero ser de los primeros
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-amber-400 transition-transform duration-300 group-hover/cta:translate-x-2" />
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 opacity-0 group-hover/cta:opacity-100 animate-ping" />
              </Link>
            </div>

            {/* Microcopy */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-slate-600" />
                <p className="text-xs text-slate-500 tracking-[0.15em] uppercase font-semibold">
                  Lanzamiento próximamente
                </p>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-slate-600" />
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs text-slate-400 font-medium">
                  Tortimex Software Division
                </span>
              </div>
            </div>

            {/* Lista de espera */}
            <div className="mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-slate-900 flex items-center justify-center shadow-lg"
                  >
                    <span className="text-xs font-bold text-white">+</span>
                  </div>
                ))}
              </div>
              <span className="text-sm font-semibold text-emerald-400">
                Únete a la lista de espera
              </span>
            </div>
          </div>

          {/* Borde inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        {/* Sombra decorativa externa */}
        <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-amber-500/10 via-orange-500/20 to-amber-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]" />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes draw {
          0% {
            stroke-dasharray: 0 200;
          }
          100% {
            stroke-dasharray: 200 0;
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes ping-slow {
          75%,
          100% {
            transform: scale(1.1);
            opacity: 0;
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
            transform: scale(1.05);
          }
        }
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

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .animate-draw {
          animation: draw 2s ease-out forwards;
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }

        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .backdrop-blur-md {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
    </section>
  );
}
