import Image from "next/image"
import { Factory, ShieldCheck, Truck, Scale } from "lucide-react"

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
]

export function Process() {
  return (
    <section id="proceso" className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/facility.jpg"
              alt="Instalaciones modernas de Tortimex"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Proceso y Calidad
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
              Excelencia en cada etapa del proceso
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Contamos con instalaciones modernas que cumplen con las más estrictas normas de inocuidad alimentaria. Nuestra capacidad de producción a escala nos permite atender las necesidades de negocios de todos los tamaños.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {steps.map((step) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
