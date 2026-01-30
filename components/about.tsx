"use client";

import { Leaf, Shield, Award, Sparkles, MapPin } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Tradición Mexicana",
    description:
      "Preservamos los métodos tradicionales de elaboración que dan a nuestros productos su sabor auténtico.",
  },
  {
    icon: Shield,
    title: "Estándares Modernos",
    description:
      "Instalaciones de última generación que garantizan la más alta calidad e higiene en cada producto.",
  },
  {
    icon: Award,
    title: "Compromiso con la Calidad",
    description:
      "Seleccionamos el mejor maíz y controlamos cada etapa del proceso para asegurar consistencia.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/40 dark:from-slate-900 dark:via-slate-800 dark:to-amber-950/20" />

      {/* Patrón de puntos decorativo */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(120 53 15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Efectos de fondo flotantes */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-400/20 dark:bg-amber-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-400/20 dark:bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Elemento decorativo superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="mx-auto max-w-3xl text-center animate-fadeIn">
          {/* Badge superior con ubicación */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 dark:from-amber-500/20 dark:to-orange-500/20 backdrop-blur-sm border border-amber-500/20 mb-6 shadow-lg">
            <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              Sobre Nosotros
            </span>
            <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </div>

          {/* Título principal */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white text-balance leading-tight">
            Una historia de{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                calidad
              </span>
              {/* Subrayado decorativo animado */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 2 150 2 198 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-amber-500/40 dark:text-amber-400/40"
                />
              </svg>
            </span>{" "}
            desde Jalisco
          </h2>

          {/* Descripción principal */}
          <p className="mt-8 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Tortimex nace del compromiso de llevar productos de maíz de la más
            alta calidad a restaurantes, taquerías y distribuidores. Combinamos
            la riqueza de la tradición mexicana con procesos de producción
            modernos que garantizan higiene, consistencia y un sabor
            inigualable.
          </p>

          {/* Destacados informativos */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="font-medium">Desde Jalisco</span>
            </div>
            <div className="w-px h-4 bg-slate-300 dark:bg-slate-600" />
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse delay-300" />
              <span className="font-medium">Producción Local</span>
            </div>
            <div className="w-px h-4 bg-slate-300 dark:bg-slate-600" />
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse delay-700" />
              <span className="font-medium">Calidad Garantizada</span>
            </div>
          </div>
        </div>

        {/* Grid de características */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card principal con glassmorphism */}
              <div className="relative h-full p-8 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 shadow-xl shadow-slate-900/5 dark:shadow-slate-950/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 dark:hover:shadow-amber-500/20 hover:-translate-y-3 hover:border-amber-500/40 dark:hover:border-amber-400/40 overflow-hidden">
                {/* Fondo decorativo con patrón */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />

                {/* Icono con efectos premium */}
                <div className="relative inline-flex mb-6">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/25 group-hover:shadow-xl group-hover:shadow-amber-500/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <feature.icon
                      className="h-7 w-7 text-white"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Anillo decorativo */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-amber-500/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />

                  {/* Resplandor del icono */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
                </div>

                {/* Contenido */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>

                {/* Línea decorativa inferior */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent rounded-full transform translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Badge numérico decorativo */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Sombra decorativa externa */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 transform scale-95 group-hover:scale-100" />

              {/* Borde decorativo animado */}
              <div className="absolute -inset-0.5 -z-20 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Sección adicional de valores */}
        <div className="mt-20 text-center animate-fadeInUp animation-delay-600">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-amber-500/10 dark:from-amber-500/20 dark:via-orange-500/10 dark:to-amber-500/20 backdrop-blur-sm border border-amber-500/20 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Nuestro Compromiso
              </h3>
            </div>
            <p className="max-w-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Más que un proveedor, somos tu aliado estratégico. Trabajamos día
              a día para que cada producto que salga de nuestras instalaciones
              lleve el sello de la excelencia y la autenticidad.
            </p>

            {/* Separador decorativo */}
            <div className="flex items-center gap-3 mt-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/40" />
              <Sparkles className="w-4 h-4 text-amber-500" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500/40" />
            </div>
          </div>
        </div>
      </div>

      {/* Elemento decorativo inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent via-amber-500/50 to-transparent" />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        /* Glassmorphism premium */
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
