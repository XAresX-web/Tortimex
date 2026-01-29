import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

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
]

export function Products() {
  return (
    <section id="productos" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nuestros Productos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Calidad en cada producto de maíz
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Ofrecemos una línea completa de productos derivados del maíz, elaborados con los más altos estándares de calidad y el sabor auténtico de la tradición mexicana.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <Link
                  href="#contacto"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Solicitar información
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
