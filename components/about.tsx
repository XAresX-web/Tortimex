import { Leaf, Shield, Award } from "lucide-react"

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
]

export function About() {
  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Sobre Nosotros
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Una historia de calidad desde Jalisco
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Tortimex nace del compromiso de llevar productos de maíz de la más alta calidad a restaurantes, taquerías y distribuidores. Combinamos la riqueza de la tradición mexicana con procesos de producción modernos que garantizan higiene, consistencia y un sabor inigualable.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative p-8 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
