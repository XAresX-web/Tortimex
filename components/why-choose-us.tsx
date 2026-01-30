"use client";

import { CheckCircle2, Sparkles, Award, Star } from "lucide-react";

const reasons = [
  {
    title: "Selección Premium de Maíz",
    description:
      "Trabajamos directamente con productores locales para obtener el maíz de la más alta calidad, asegurando un sabor y textura excepcionales.",
  },
  {
    title: "Calidad Constante",
    description:
      "Nuestros procesos estandarizados garantizan que cada lote mantenga las mismas características de sabor, textura y frescura.",
  },
  {
    title: "Distribución Confiable",
    description:
      "Cobertura en Jalisco y zonas cercanas con entregas puntuales y flexibles que se adaptan a las necesidades de tu negocio.",
  },
  {
    title: "Aliado Estratégico",
    description:
      "Más que un proveedor, somos un socio comprometido con el éxito de tu negocio gastronómico. Ofrecemos asesoría y servicio personalizado.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="por-que-elegirnos"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Fondo con gradiente vibrante */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 dark:from-amber-800 dark:via-orange-800 dark:to-amber-900" />

      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Efectos de brillo */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24 items-center">
          {/* Contenido textual */}
          <div className="animate-fadeInLeft">
            {/* Badge superior con estrellas */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6 shadow-xl">
              <Star className="w-4 h-4 text-amber-200 fill-amber-200" />
              <span className="text-sm font-semibold uppercase tracking-wider text-white">
                Por qué elegirnos
              </span>
              <Star className="w-4 h-4 text-amber-200 fill-amber-200" />
            </div>

            {/* Título principal */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance leading-tight">
              Tu socio confiable en{" "}
              <span className="relative inline-block">
                <span className="relative z-10">productos de maíz</span>
                {/* Subrayado decorativo */}
                <div className="absolute bottom-2 left-0 right-0 h-3 bg-amber-300/40 -rotate-1 rounded" />
              </span>
            </h2>

            {/* Descripción */}
            <p className="mt-6 text-lg sm:text-xl text-white/95 leading-relaxed">
              En Tortimex entendemos las necesidades de tu negocio. Por eso nos
              esforzamos en ofrecer productos de calidad premium con un servicio
              que supera expectativas.
            </p>

            {/* Estadísticas destacadas */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  15+
                </div>
                <div className="mt-1 text-sm text-white/80">
                  Años de experiencia
                </div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  100%
                </div>
                <div className="mt-1 text-sm text-white/80">
                  Calidad garantizada
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  500+
                </div>
                <div className="mt-1 text-sm text-white/80">
                  Clientes satisfechos
                </div>
              </div>
            </div>

            {/* Insignia de certificación */}
            <div className="mt-8 inline-flex items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-200" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  Certificación de Calidad
                </p>
                <p className="text-xs text-white/80">
                  Normas ISO y estándares internacionales
                </p>
              </div>
            </div>
          </div>

          {/* Grid de razones */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 animate-fadeInRight">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card con glassmorphism */}
                <div className="relative p-6 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-xl hover:bg-white/25 hover:border-white/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  {/* Icono con efecto de brillo */}
                  <div className="relative inline-flex">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm shadow-lg group-hover:bg-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <CheckCircle2
                        className="h-6 w-6 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    {/* Resplandor del icono */}
                    <div className="absolute inset-0 rounded-xl bg-white/40 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  </div>

                  {/* Contenido */}
                  <h3 className="mt-5 text-lg font-bold text-white group-hover:text-amber-100 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/90 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Barra decorativa inferior */}
                  <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full transform translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Partículas decorativas */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-amber-300/60 opacity-0 group-hover:opacity-100 animate-ping" />
                </div>

                {/* Sombra decorativa externa */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-white/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 transform scale-95 group-hover:scale-100" />
              </div>
            ))}
          </div>
        </div>

        {/* Elemento decorativo de separación */}
        <div className="mt-20 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/40" />
          <Sparkles className="w-5 h-5 text-amber-200" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/40" />
        </div>

        {/* Call to action adicional */}
        <div className="mt-12 text-center">
          <p className="text-white/90 text-lg font-medium">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
            <CheckCircle2 className="w-4 h-4 text-amber-200" />
            <span>Únete a cientos de negocios que confían en nosotros</span>
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

        .delay-1000 {
          animation-delay: 1s;
        }

        /* Glassmorphism premium */
        .backdrop-blur-xl {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .backdrop-blur-md {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      `}</style>
    </section>
  );
}
