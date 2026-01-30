"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const products = [
  {
    name: "Tortillas",
    description:
      "Tortillas de maíz elaboradas con los mejores granos, perfectas para tacos, quesadillas y platillos tradicionales. Textura suave, flexibilidad ideal y sabor auténtico que complementa cualquier receta.",
    image: "/images/tortillas.jpg",
  },
  {
    name: "Masa",
    description:
      "Masa de maíz fresca y de alta calidad, lista para usar en la preparación de tortillas, tamales, gorditas y más. Consistencia perfecta y sabor tradicional garantizado.",
    image: "/images/masa.jpg",
  },
  {
    name: "Totopos",
    description:
      "Totopos crujientes elaborados artesanalmente, ideales para nachos, chilaquiles y botanas. Textura perfecta que se mantiene firme con salsas y guacamole.",
    image: "/images/totopos.jpg",
  },
];

export function Products() {
  return (
    <section id="productos" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Fondo degradado animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950" />

      {/* Efectos de fondo decorativos */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/30 dark:bg-amber-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200/30 dark:bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 backdrop-blur-sm border border-amber-500/20 mb-6 animate-fadeIn">
            <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              Nuestros Productos
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white text-balance leading-tight animate-fadeInUp">
            Calidad en cada producto{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              de maíz
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Ofrecemos una línea completa de productos derivados del maíz,
            elaborados con los más altos estándares de calidad y el sabor
            auténtico de la tradición mexicana.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card con glassmorphism */}
              <div className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl shadow-slate-900/5 dark:shadow-slate-950/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 dark:hover:shadow-amber-500/20 hover:-translate-y-2 hover:border-amber-500/30 dark:hover:border-amber-400/30">
                {/* Imagen del producto */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />

                  {/* Overlay degradado en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-slate-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Badge decorativo */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-amber-500/20 shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                      Premium
                    </span>
                  </div>
                </div>

                {/* Contenido de la card */}
                <div className="relative p-6 sm:p-8">
                  {/* Indicador decorativo */}
                  <div className="absolute top-0 left-8 w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transform -translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base min-h-[120px]">
                    {product.description}
                  </p>

                  {/* CTA Button */}
                  <Link
                    href="#contacto"
                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-sm shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 transform hover:scale-105 transition-all duration-300 group/btn"
                  >
                    <span>Solicitar información</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5" />
                </div>
              </div>

              {/* Sombra decorativa externa */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 transform scale-95 group-hover:scale-100" />
            </div>
          ))}
        </div>
      </div>

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

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        /* Asegurar máxima legibilidad del texto sobre glassmorphism */
        .backdrop-blur-xl {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
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
