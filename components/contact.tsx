"use client";

import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Sparkles,
  CheckCircle2,
  Clock,
} from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/40 dark:from-slate-900 dark:via-amber-950/20 dark:to-slate-800" />

      {/* Patrón decorativo de fondo */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Efectos decorativos flotantes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-300/20 dark:bg-amber-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-300/20 dark:bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="mx-auto max-w-3xl text-center animate-fadeIn">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 backdrop-blur-sm border border-amber-500/20 mb-6 shadow-lg">
            <Mail className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              Contacto
            </span>
          </div>

          {/* Título */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white text-balance leading-tight">
            Hablemos de{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              tu negocio
            </span>
          </h2>

          {/* Descripción */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            ¿Listo para elevar la calidad de tus productos de maíz? Contáctanos
            y un asesor se pondrá en contacto contigo para crear una propuesta
            personalizada.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <div className="group relative animate-fadeInLeft">
            {/* Card principal con glassmorphism */}
            <div className="relative p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 shadow-2xl shadow-slate-900/10 dark:shadow-slate-950/50 overflow-hidden">
              {/* Efecto decorativo de fondo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />

              {isSubmitted ? (
                <div className="relative flex flex-col items-center justify-center h-full min-h-[400px] text-center animate-fadeInScale">
                  {/* Icono de éxito con animación */}
                  <div className="relative">
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-2xl shadow-emerald-500/40 animate-successBounce">
                      <CheckCircle2
                        className="h-10 w-10 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    {/* Resplandor del icono */}
                    <div className="absolute inset-0 rounded-2xl bg-emerald-500/40 blur-2xl animate-pulse" />
                    {/* Anillos decorativos */}
                    <div className="absolute inset-0 rounded-2xl border-4 border-emerald-500/30 scale-110 animate-ping" />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900 dark:text-white">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-sm leading-relaxed">
                    Gracias por contactarnos. Un asesor se comunicará contigo
                    pronto.
                  </p>

                  {/* Badge de tiempo de respuesta */}
                  <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20">
                    <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
                      Respuesta en menos de 24 horas
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-6">
                  {/* Grid de campos */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2 group/field">
                      <Label
                        htmlFor="nombre"
                        className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                      >
                        Nombre
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        placeholder="Tu nombre"
                        required
                        className="h-12 px-4 rounded-xl border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm focus:border-amber-500 focus:ring-amber-500/20 transition-all duration-300 hover:border-amber-400"
                      />
                    </div>
                    <div className="space-y-2 group/field">
                      <Label
                        htmlFor="empresa"
                        className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                      >
                        Empresa
                      </Label>
                      <Input
                        id="empresa"
                        name="empresa"
                        placeholder="Nombre de tu negocio"
                        required
                        className="h-12 px-4 rounded-xl border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm focus:border-amber-500 focus:ring-amber-500/20 transition-all duration-300 hover:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2 group/field">
                      <Label
                        htmlFor="email"
                        className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                        className="h-12 px-4 rounded-xl border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm focus:border-amber-500 focus:ring-amber-500/20 transition-all duration-300 hover:border-amber-400"
                      />
                    </div>
                    <div className="space-y-2 group/field">
                      <Label
                        htmlFor="telefono"
                        className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                      >
                        Teléfono
                      </Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        placeholder="+52 33 1234 5678"
                        required
                        className="h-12 px-4 rounded-xl border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm focus:border-amber-500 focus:ring-amber-500/20 transition-all duration-300 hover:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group/field">
                    <Label
                      htmlFor="mensaje"
                      className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                    >
                      Mensaje
                    </Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntanos sobre tu negocio y qué productos te interesan..."
                      rows={5}
                      required
                      className="px-4 py-3 rounded-xl border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm focus:border-amber-500 focus:ring-amber-500/20 transition-all duration-300 hover:border-amber-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="group/btn relative w-full h-14 text-base font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 rounded-xl shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                        </>
                      )}
                    </span>
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                  </Button>
                </form>
              )}
            </div>

            {/* Sombra decorativa externa */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 blur-2xl opacity-50" />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center animate-fadeInRight">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Información de contacto
            </h3>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Estamos ubicados en Jalisco, México. Contáctanos por cualquiera de
              estos medios o visítanos en nuestras instalaciones.
            </p>

            {/* Tarjetas de información */}
            <div className="mt-10 space-y-5">
              {[
                {
                  icon: MapPin,
                  title: "Ubicación",
                  content: "Zonas Industriales, Jalisco, México",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Phone,
                  title: "Teléfono",
                  content: "+52 33 3545 2105",
                  gradient: "from-emerald-500 to-green-500",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "contacto@tortimex.com",
                  gradient: "from-amber-500 to-orange-500",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="group relative animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative flex gap-4 p-5 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 dark:hover:border-amber-400/30">
                    {/* Icono con gradiente */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        <item.icon
                          className="h-7 w-7 text-white"
                          strokeWidth={2}
                        />
                      </div>
                      {/* Resplandor */}
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300`}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-slate-600 dark:text-slate-300 text-sm break-words">
                        {item.content}
                      </p>
                    </div>

                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>

            {/* Horario de atención */}
            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-amber-500/10 dark:from-amber-500/20 dark:via-orange-500/10 dark:to-amber-500/20 backdrop-blur-sm border border-amber-500/20 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Horario de Atención
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Lunes a Viernes: 7:00 AM - 6:00 PM
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Sábados y Domingos: 7:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Badge de respuesta rápida */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20">
              <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                Respuesta garantizada en menos de 24 horas
              </span>
            </div>
          </div>
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

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes successBounce {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
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

        .animate-fadeInScale {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .animate-successBounce {
          animation: successBounce 0.6s ease-out;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        /* Glassmorphism */
        .backdrop-blur-xl {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      `}</style>
    </section>
  );
}
