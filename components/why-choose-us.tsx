import { CheckCircle2 } from "lucide-react"

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
]

export function WhyChooseUs() {
  return (
    <section id="por-que-elegirnos" className="py-24 sm:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Por qué elegirnos
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              Tu socio confiable en productos de maíz
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">
              En Tortimex entendemos las necesidades de tu negocio. Por eso nos esforzamos en ofrecer productos de calidad premium con un servicio que supera expectativas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
              >
                <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
                <h3 className="mt-4 text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
