import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-corn.jpg"
          alt="Tortillas de maíz de alta calidad"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight text-balance">
            Calidad, tradición y confianza en cada producto de maíz
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
            Somos Tortimex, productores de tortillas, masa y totopos de alta calidad desde Jalisco, México. Tradición mexicana con estándares modernos de producción.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <Link href="#contacto">
                Solicitar cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base bg-transparent text-white border-white hover:bg-white hover:text-foreground"
            >
              <Link href="#productos">Conocer productos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
