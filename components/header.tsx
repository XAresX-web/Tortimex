"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#por-que-elegirnos", label: "Por qué elegirnos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="
  fixed top-0 left-0 right-0 z-50
  bg-white/10 dark:bg-black/20
  backdrop-blur-xl
  border-b border-white/20
  shadow-lg shadow-black/5
">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-xl px-2">
          <Link href="/" className="flex items-center gap-2">
              <Image
    src="/logo.png"
    alt="Logo Tortimex"
    width={32}
    height={32}
    className="object-contain"
    priority
  />
  <span className="text-2xl font-bold tracking-tight text-primary">
    Tortimex
  </span>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="#contacto">Solicitar cotización</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="
  md:hidden mt-2 rounded-xl
  bg-white/20 dark:bg-black/30
  backdrop-blur-2xl
  border border-white/20
  shadow-lg
  py-4
">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
                  Solicitar cotización
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
