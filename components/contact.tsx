"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Contacto
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Hablemos de tu negocio
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            ¿Listo para elevar la calidad de tus productos de maíz? Contáctanos y un asesor se pondrá en contacto contigo para crear una propuesta personalizada.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg border border-border">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  ¡Mensaje enviado!
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Gracias por contactarnos. Un asesor se comunicará contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      placeholder="Nombre de tu negocio"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="+52 33 1234 5678"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos sobre tu negocio y qué productos te interesan..."
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-foreground">
              Información de contacto
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Estamos ubicados en Jalisco, México. Contáctanos por cualquiera de estos medios o visítanos en nuestras instalaciones.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Ubicación</h4>
                  <p className="mt-1 text-muted-foreground">
                    Zona Industrial, Jalisco, México
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Teléfono</h4>
                  <p className="mt-1 text-muted-foreground">
                    +52 33 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <p className="mt-1 text-muted-foreground">
                    contacto@tortimex.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
