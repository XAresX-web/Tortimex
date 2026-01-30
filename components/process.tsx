"use client";

import Image from "next/image";
import { Factory, ShieldCheck, Truck, Scale, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Scale,
    title: "Selección de Materia Prima",
    description:
      "Seleccionamos cuidadosamente el mejor maíz de productores locales verificados.",
  },
  {
    icon: Factory,
    title: "Producción Moderna",
    description:
      "Instalaciones de última generación que combinan tradición con tecnología.",
  },
  {
    icon: ShieldCheck,
    title: "Control de Calidad",
    description:
      "Rigurosos controles en cada etapa para garantizar productos excepcionales.",
  },
  {
    icon: Truck,
    title: "Distribución Eficiente",
    description:
      "Logística optimizada para entregas frescas y puntuales a tu negocio.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-amber-950/30" />

      {/* Efectos decorativos de fondo */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-300/20 dark:bg-amber-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-300/20 dark:bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24 items-center">
          {/* Imagen con efectos premium */}
          <div className="relative group animate-fadeInLeft">
            {/* Container principal de la imagen */}
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] lg:min-h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 shadow-2xl shadow-slate-900/10 dark:shadow-slate-950/50">
              <Image
                src="/images/maquinatortilla.jpg"
                alt="Instalaciones modernas de Tortimex"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />

              {/* Badge flotante */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Tecnología de vanguardia
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Certificaciones internacionales
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Borde decorativo animado */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />

            {/* Elementos decorativos flotantes */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-20 blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 opacity-20 blur-2xl animate-pulse delay-500" />
          </div>

          {/* Contenido textual */}
          <div className="animate-fadeInRight">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 backdrop-blur-sm border border-amber-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                Proceso y Calidad
              </span>
            </div>

            {/* Título */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white text-balance leading-tight">
              Excelencia en cada{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                etapa del proceso
              </span>
            </h2>

            {/* Descripción */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Contamos con instalaciones modernas que cumplen con las más
              estrictas normas de inocuidad alimentaria. Nuestra capacidad de
              producción a escala nos permite atender las necesidades de
              negocios de todos los tamaños.
            </p>

            {/* Grid de pasos del proceso */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="group/card relative animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card con glassmorphism */}
                  <div className="relative flex gap-4 p-5 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-slate-900/5 dark:shadow-slate-950/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10 dark:hover:shadow-amber-500/20 hover:-translate-y-1 hover:border-amber-500/30 dark:hover:border-amber-400/30">
                    {/* Icono */}
                    <div className="flex-shrink-0 relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/25 group-hover/card:shadow-xl group-hover/card:shadow-amber-500/40 transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-3">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      {/* Resplandor del icono */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 opacity-0 group-hover/card:opacity-30 blur-xl transition-opacity duration-300" />
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover/card:text-amber-600 dark:group-hover/card:text-amber-400 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Barra decorativa superior */}
                    <div className="absolute top-0 left-5 right-5 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transform -translate-y-full opacity-0 group-hover/card:opacity-100 transition-all duration-500" />

                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  {/* Sombra decorativa externa */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 blur-xl opacity-0 group-hover/card:opacity-60 transition-opacity duration-500" />
                </div>
              ))}
            </div>

            {/* Indicador de calidad adicional */}
            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-amber-500/5 border border-amber-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Garantía de Calidad Certificada
                  </h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Todos nuestros procesos cuentan con certificaciones
                    nacionales e internacionales de inocuidad y calidad
                    alimentaria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        /* Asegurar glassmorphism real */
        .backdrop-blur-xl {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      `}</style>
    </section>
  );
}
