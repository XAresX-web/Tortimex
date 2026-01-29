import Link from "next/link"

const footerLinks = [
  {
    title: "Navegación",
    links: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Productos", href: "#productos" },
      { label: "Por qué elegirnos", href: "#por-que-elegirnos" },
      { label: "Proceso", href: "#proceso" },
    ],
  },
  {
    title: "Productos",
    links: [
      { label: "Tortillas", href: "#productos" },
      { label: "Masa", href: "#productos" },
      { label: "Totopos", href: "#productos" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Solicitar cotización", href: "#contacto" },
      { label: "+52 33 1234 5678", href: "tel:+523312345678" },
      { label: "contacto@tortimex.com", href: "mailto:contacto@tortimex.com" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              Tortimex
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Productos de maíz de alta calidad desde Jalisco, México. Tradición mexicana con estándares modernos.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Tortimex. Todos los derechos reservados.
          </p>
          <p className="text-sm text-background/60">
            Jalisco, México
          </p>
        </div>
      </div>
    </footer>
  )
}
