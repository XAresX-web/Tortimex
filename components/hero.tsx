"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award, TrendingUp, Cpu } from "lucide-react";

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

          {/* Stats / Badges informativos */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 animate-fadeInUp animation-delay-600">
            {/* Badge 1 */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-white/70">Certificación</p>
                <p className="text-base font-bold text-white">ISO 9001</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-white/70">Experiencia</p>
                <p className="text-base font-bold text-white">+50 años</p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-white/70">Clientes</p>
                <p className="text-base font-bold text-white">+500</p>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-white/70">Innovación</p>
                <p className="text-base font-bold text-white">
                  Nueva generación
                </p>
              </div>
            </div>
          </div>

          {/* Indicador de confianza */}
          <div className="mt-12 inline-flex items-center gap-2 text-white/70 text-sm animate-fadeInUp animation-delay-800">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-slate-900 flex items-center justify-center shadow-lg"
                >
                  <span className="text-xs font-bold text-white">★</span>
                </div>
              ))}
            </div>
            <span>Más de 500 negocios confían en nosotros</span>
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

        @keyframes shimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
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

        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 3s ease-in-out infinite;
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

        /* Glassmorphism */
        .backdrop-blur-md {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
    </section>
  );
}
