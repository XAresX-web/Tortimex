"use client";

import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  ScanLine,
  Rocket,
  ChevronRight,
  Building2,
  CalendarClock,
} from "lucide-react";
import Link from "next/link";

const features = [
  { Icon: Zap, text: "Control total", sub: "Gestión en tiempo real" },
  { Icon: ShieldCheck, text: "Cero fugas", sub: "Inventario blindado" },
  { Icon: ScanLine, text: "Precisión absoluta", sub: "Reportes exactos" },
];

const waitlist = [
  { initials: "JL", color: "from-amber-400 to-orange-500" },
  { initials: "MR", color: "from-orange-400 to-red-500" },
  { initials: "CA", color: "from-yellow-400 to-amber-500" },
  { initials: "DP", color: "from-amber-500 to-orange-600" },
  { initials: "EG", color: "from-orange-300 to-amber-400" },
];

export function TortiSoftPromo() {
  return (
    <section className="ts-root">
      {/* ── SCENE LAYERS ── */}
      <div className="ts-scene">
        <div className="ts-scene__base" />
        <div className="ts-scene__noise" />
        <div className="ts-scene__vignette" />

        {/* Gradient mesh */}
        <div className="ts-mesh">
          <div className="ts-mesh__node ts-mesh__node--a" />
          <div className="ts-mesh__node ts-mesh__node--b" />
          <div className="ts-mesh__node ts-mesh__node--c" />
          <div className="ts-mesh__node ts-mesh__node--d" />
        </div>

        {/* Grid */}
        <div className="ts-grid" />
        <div className="ts-grid ts-grid--fade" />

        {/* Decorative lines */}
        <div className="ts-deco-line ts-deco-line--h1" />
        <div className="ts-deco-line ts-deco-line--h2" />
        <div className="ts-deco-line ts-deco-line--v1" />
        <div className="ts-deco-line ts-deco-line--v2" />
      </div>

      {/* ── EDGE GLOWS ── */}
      <div className="ts-edge ts-edge--top" />
      <div className="ts-edge ts-edge--bottom" />

      {/* ── MAIN WRAPPER ── */}
      <div className="ts-wrapper">
        <div className="ts-card">
          {/* Card inner FX */}
          <div className="ts-card__inner-glow ts-card__inner-glow--a" />
          <div className="ts-card__inner-glow ts-card__inner-glow--b" />
          <div className="ts-card__scanline" />

          {/* Card borders */}
          <div className="ts-card__border ts-card__border--top" />
          <div className="ts-card__border ts-card__border--bottom" />
          <div className="ts-card__corner ts-card__corner--tl" />
          <div className="ts-card__corner ts-card__corner--tr" />
          <div className="ts-card__corner ts-card__corner--bl" />
          <div className="ts-card__corner ts-card__corner--br" />

          {/* ── CONTENT ── */}
          <div className="ts-content">
            {/* Eyebrow */}
            <div className="ts-eyebrow">
              <div className="ts-eyebrow__pill">
                <span className="ts-eyebrow__pulse" />
                <span className="ts-eyebrow__label">Próximo lanzamiento</span>
                <span className="ts-eyebrow__tag">2027</span>
              </div>
            </div>

            {/* Logo */}
            <div className="ts-logo">
              <div className="ts-logo__aura" />
              <div className="ts-logo__ring ts-logo__ring--1" />
              <div className="ts-logo__ring ts-logo__ring--2" />
              <div className="ts-logo__ring ts-logo__ring--3" />
              <Image
                src="/logos/logo-tortisoft.png"
                alt="TortiSoft"
                width={800}
                height={260}
                priority
                className="ts-logo__img"
              />
              <div className="ts-logo__reflection" />
            </div>

            {/* Headline */}
            <div className="ts-headline__wrap">
              <h3 className="ts-headline">
                <span className="ts-headline__line ts-headline__line--1">
                  El sistema que va a{" "}
                  <span className="ts-headline__underline">
                    <span className="ts-headline__underline-text">
                      redefinir
                    </span>
                    <svg
                      className="ts-headline__underline-svg"
                      height="10"
                      viewBox="0 0 260 10"
                      fill="none"
                      aria-hidden="true"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 8C65 2 195 2 258 8"
                        stroke="url(#tsg-ul)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="ts-headline__underline-path"
                      />
                      <defs>
                        <linearGradient
                          id="tsg-ul"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#fbbf24"
                            stopOpacity="0.15"
                          />
                          <stop
                            offset="45%"
                            stopColor="#f97316"
                            stopOpacity="1"
                          />
                          <stop
                            offset="100%"
                            stopColor="#fbbf24"
                            stopOpacity="0.15"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </span>
                <span className="ts-headline__line ts-headline__line--2">
                  <span className="ts-headline__grad">las tortillerías</span>
                </span>
              </h3>
            </div>

            {/* Ornament */}
            <div className="ts-ornament" aria-hidden="true">
              <div className="ts-ornament__line ts-ornament__line--l" />
              <div className="ts-ornament__diamond">
                <div className="ts-ornament__diamond-inner" />
              </div>
              <div className="ts-ornament__line ts-ornament__line--r" />
            </div>

            {/* Description */}
            <div className="ts-copy">
              <p className="ts-copy__main">
                Estamos construyendo{" "}
                <strong className="ts-copy__brand">
                  TortiSoft
                  <span className="ts-copy__brand-line" />
                </strong>
                : el software de administración y punto de venta más avanzado
                jamás creado para tortillerías.
              </p>
              <p className="ts-copy__sub">
                Inspirado en los mejores sistemas del mercado, llevado a un
                nivel que <em className="ts-copy__accent">nunca antes</em> se
                había visto.
              </p>
            </div>

            {/* Features */}
            <div className="ts-features" role="list">
              {features.map(({ Icon, text, sub }, i) => (
                <div
                  key={text}
                  className="ts-feat"
                  role="listitem"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <div className="ts-feat__glow" />
                  <div className="ts-feat__icon-wrap" aria-hidden="true">
                    <Icon className="ts-feat__icon" strokeWidth={2} />
                  </div>
                  <div className="ts-feat__body">
                    <span className="ts-feat__title">{text}</span>
                    <span className="ts-feat__sub">{sub}</span>
                  </div>
                  <div className="ts-feat__border-reveal" />
                </div>
              ))}
            </div>

            {/* Meta strip mejorado */}
            <div className="ts-meta" role="contentinfo">
              <div className="ts-meta__status">
                <span className="ts-meta__pulse" />
                <span className="ts-meta__live">Activo</span>
              </div>

              <div className="ts-meta__divider" aria-hidden="true" />

              <div className="ts-meta__brand">
                <span className="ts-meta__text">
                  Tortimex Software Division
                </span>
              </div>
            </div>

            {/* Waitlist */}
            <div className="ts-waitlist">
              <div className="ts-waitlist__card">
                <div
                  className="ts-waitlist__avatars"
                  aria-label="Usuarios en lista de espera"
                >
                  {waitlist.map(({ initials, color }, i) => (
                    <div
                      key={initials}
                      className={`ts-waitlist__avatar bg-gradient-to-br ${color}`}
                      style={{ zIndex: waitlist.length - i }}
                      aria-hidden="true"
                    >
                      <span className="ts-waitlist__avatar-text">
                        {initials}
                      </span>
                    </div>
                  ))}
                  <div
                    className="ts-waitlist__avatar ts-waitlist__avatar--more"
                    style={{ zIndex: 0 }}
                    aria-hidden="true"
                  >
                    <span className="ts-waitlist__avatar-plus">+</span>
                  </div>
                </div>

                <div className="ts-waitlist__divider" aria-hidden="true" />

                <div className="ts-waitlist__info">
                  <div className="ts-waitlist__live-row"></div>
                  <p className="ts-waitlist__count">
                    <strong>+50 tortillerías</strong> ya en lista de espera
                  </p>
                </div>
              </div>
              <p className="ts-waitlist__micro">
                Sin tarjeta de crédito · Acceso anticipado gratuito
              </p>
            </div>
          </div>
          {/* /ts-content */}
        </div>
        {/* /ts-card */}
      </div>
      {/* /ts-wrapper */}

      {/* ── STYLES ── */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Syne:wght@600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap");

        /* ╔══════════════════════════════════════════════════╗
           ║  DESIGN TOKENS                                   ║
           ╚══════════════════════════════════════════════════╝ */
        .ts-root {
          --gold-50: #fffbeb;
          --gold-100: #fef3c7;
          --gold-300: #fcd34d;
          --gold-400: #fbbf24;
          --gold-500: #f59e0b;
          --amber: #f97316;
          --green: #34d399;
          --green-dim: #10b981;

          --ink-950: #050610;
          --ink-900: #07091a;
          --ink-800: #0c0f24;
          --ink-700: #111428;

          --white: #ffffff;
          --slate-300: #cbd5e1;
          --slate-400: #94a3b8;
          --slate-500: #64748b;
          --slate-600: #475569;

          --radius-card: 2.5rem;
          --radius-pill: 9999px;
          --radius-feat: 1.25rem;
          --radius-cta: 1.125rem;
          --radius-icon: 0.875rem;

          --transition-fast: 180ms cubic-bezier(0.4, 0, 0.2, 1);
          --transition-med: 320ms cubic-bezier(0.4, 0, 0.2, 1);
          --transition-slow: 600ms cubic-bezier(0.22, 1, 0.36, 1);
          --transition-spring: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);

          --shadow-glow-gold: 0 0 60px rgba(251, 191, 36, 0.18);
          --shadow-glow-amber: 0 0 60px rgba(249, 115, 22, 0.14);
          --shadow-card:
            0 40px 120px rgba(0, 0, 0, 0.6), 0 8px 32px rgba(0, 0, 0, 0.4);

          position: relative;
          width: 100%;
          overflow: hidden;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* ╔══════════════════════════════════════════════════╗
           ║  SCENE / BACKGROUND SYSTEM                       ║
           ╚══════════════════════════════════════════════════╝ */
        .ts-scene {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .ts-scene__base {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            var(--ink-900) 0%,
            var(--ink-950) 40%,
            #060812 70%,
            var(--ink-900) 100%
          );
        }
        /* Subtle film grain texture via SVG filter */
        .ts-scene__noise {
          position: absolute;
          inset: 0;
          opacity: 0.028;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 256px;
        }
        /* Radial vignette */
        .ts-scene__vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 80% 80% at 50% 50%,
            transparent 30%,
            rgba(0, 0, 0, 0.55) 100%
          );
        }

        /* Gradient mesh nodes */
        .ts-mesh {
          position: absolute;
          inset: 0;
        }
        .ts-mesh__node {
          position: absolute;
          border-radius: 50%;
          filter: blur(130px);
          pointer-events: none;
          will-change: transform, opacity;
        }
        .ts-mesh__node--a {
          width: 900px;
          height: 900px;
          top: -25%;
          left: -15%;
          background: radial-gradient(
            ellipse,
            rgba(251, 191, 36, 0.09) 0%,
            transparent 65%
          );
          animation: meshDrift 20s ease-in-out infinite;
        }
        .ts-mesh__node--b {
          width: 700px;
          height: 700px;
          bottom: -20%;
          right: -12%;
          background: radial-gradient(
            ellipse,
            rgba(249, 115, 22, 0.07) 0%,
            transparent 65%
          );
          animation: meshDrift 25s ease-in-out infinite reverse;
        }
        .ts-mesh__node--c {
          width: 1100px;
          height: 500px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            ellipse,
            rgba(251, 191, 36, 0.04) 0%,
            transparent 70%
          );
          animation: meshDrift 30s ease-in-out infinite 5s;
        }
        .ts-mesh__node--d {
          width: 400px;
          height: 400px;
          top: 8%;
          right: 8%;
          background: radial-gradient(
            ellipse,
            rgba(251, 191, 36, 0.05) 0%,
            transparent 65%
          );
          animation: meshDrift 18s ease-in-out infinite 3s;
        }

        /* Dot grid */
        .ts-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle,
            rgba(251, 191, 36, 0.14) 1px,
            transparent 1px
          );
          background-size: 44px 44px;
          opacity: 0.045;
        }
        .ts-grid--fade {
          background-image: none;
          background: linear-gradient(
            180deg,
            transparent 0%,
            transparent 30%,
            rgba(251, 191, 36, 0.018) 60%,
            transparent 100%
          );
          opacity: 1;
        }

        /* Decorative lines */
        .ts-deco-line {
          position: absolute;
          pointer-events: none;
        }
        .ts-deco-line--h1 {
          top: 20%;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(251, 191, 36, 0.04) 40%,
            rgba(251, 191, 36, 0.04) 60%,
            transparent
          );
        }
        .ts-deco-line--h2 {
          bottom: 20%;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(249, 115, 22, 0.03) 40%,
            rgba(249, 115, 22, 0.03) 60%,
            transparent
          );
        }
        .ts-deco-line--v1 {
          left: 8%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(251, 191, 36, 0.03) 50%,
            transparent
          );
        }
        .ts-deco-line--v2 {
          right: 8%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(251, 191, 36, 0.03) 50%,
            transparent
          );
        }

        /* Section edge glows */
        .ts-edge {
          position: absolute;
          left: 0;
          right: 0;
          height: 1.5px;
          z-index: 4;
          pointer-events: none;
        }
        .ts-edge--top {
          top: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(251, 191, 36, 0.3) 15%,
            rgba(249, 115, 22, 0.95) 50%,
            rgba(251, 191, 36, 0.3) 85%,
            transparent 100%
          );
          box-shadow: 0 0 24px rgba(249, 115, 22, 0.4);
        }
        .ts-edge--bottom {
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(249, 115, 22, 0.25) 25%,
            rgba(251, 191, 36, 0.5) 50%,
            rgba(249, 115, 22, 0.25) 75%,
            transparent 100%
          );
        }

        /* ╔══════════════════════════════════════════════════╗
           ║  LAYOUT: WRAPPER + CARD                          ║
           ╚══════════════════════════════════════════════════╝ */
        .ts-wrapper {
          position: relative;
          z-index: 1;
          padding: 0;
        }
        @media (min-width: 1024px) {
          .ts-wrapper {
            max-width: 1600px;
            margin: 0 auto;
            padding: 4rem 2.5rem;
          }
        }
        @media (min-width: 1280px) {
          .ts-wrapper {
            padding: 5rem 4rem;
          }
        }
        @media (min-width: 1536px) {
          .ts-wrapper {
            padding: 5.5rem 6rem;
          }
        }

        .ts-card {
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 1024px) {
          .ts-card {
            border-radius: var(--radius-card);
            border: 1px solid rgba(255, 255, 255, 0.055);
            background: rgba(255, 255, 255, 0.012);
            backdrop-filter: blur(2px);
            box-shadow: var(--shadow-card);
            transition: transform var(--transition-slow);
          }
          .ts-card:hover {
            transform: translateY(-5px);
          }
        }

        /* Inner glow FX */
        .ts-card__inner-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          z-index: 0;
          filter: blur(100px);
          will-change: opacity, transform;
        }
        .ts-card__inner-glow--a {
          width: 28rem;
          height: 28rem;
          top: -4rem;
          left: 20%;
          background: rgba(251, 191, 36, 0.14);
          animation: glowPulse 6s ease-in-out infinite;
        }
        .ts-card__inner-glow--b {
          width: 24rem;
          height: 24rem;
          bottom: -4rem;
          right: 20%;
          background: rgba(249, 115, 22, 0.12);
          animation: glowPulse 8s ease-in-out infinite 2s;
        }

        /* Scanline hint */
        .ts-card__scanline {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.022) 0px,
            rgba(0, 0, 0, 0.022) 1px,
            transparent 1px,
            transparent 3px
          );
        }

        /* Card borders */
        .ts-card__border {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          z-index: 2;
          pointer-events: none;
        }
        .ts-card__border--top {
          top: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(251, 191, 36, 0.12) 10%,
            rgba(251, 191, 36, 0.7) 50%,
            rgba(251, 191, 36, 0.12) 90%,
            transparent 100%
          );
        }
        .ts-card__border--bottom {
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(249, 115, 22, 0.08) 20%,
            rgba(249, 115, 22, 0.4) 50%,
            rgba(249, 115, 22, 0.08) 80%,
            transparent 100%
          );
        }

        /* Corner brackets */
        .ts-card__corner {
          position: absolute;
          width: 24px;
          height: 24px;
          z-index: 3;
          pointer-events: none;
          display: none;
        }
        @media (min-width: 1024px) {
          .ts-card__corner {
            display: block;
          }
        }
        .ts-card__corner--tl {
          top: 0;
          left: 0;
          border-top: 1.5px solid rgba(251, 191, 36, 0.6);
          border-left: 1.5px solid rgba(251, 191, 36, 0.6);
          border-top-left-radius: var(--radius-card);
        }
        .ts-card__corner--tr {
          top: 0;
          right: 0;
          border-top: 1.5px solid rgba(251, 191, 36, 0.6);
          border-right: 1.5px solid rgba(251, 191, 36, 0.6);
          border-top-right-radius: var(--radius-card);
        }
        .ts-card__corner--bl {
          bottom: 0;
          left: 0;
          border-bottom: 1.5px solid rgba(249, 115, 22, 0.4);
          border-left: 1.5px solid rgba(249, 115, 22, 0.4);
          border-bottom-left-radius: var(--radius-card);
        }
        .ts-card__corner--br {
          bottom: 0;
          right: 0;
          border-bottom: 1.5px solid rgba(249, 115, 22, 0.4);
          border-right: 1.5px solid rgba(249, 115, 22, 0.4);
          border-bottom-right-radius: var(--radius-card);
        }

        /* ╔══════════════════════════════════════════════════╗
           ║  CONTENT AREA                                    ║
           ╚══════════════════════════════════════════════════╝ */
        .ts-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 4rem 1.25rem 5rem;
          gap: 0;
        }
        @media (min-width: 480px) {
          .ts-content {
            padding: 5rem 1.75rem 5.5rem;
          }
        }
        @media (min-width: 640px) {
          .ts-content {
            padding: 5.5rem 2.5rem 6rem;
          }
        }
        @media (min-width: 1024px) {
          .ts-content {
            padding: 6rem 5rem 7rem;
          }
        }
        @media (min-width: 1280px) {
          .ts-content {
            padding: 7rem 8rem 8rem;
          }
        }
        @media (min-width: 1536px) {
          .ts-content {
            padding: 8rem 12rem 9rem;
          }
        }

        /* ── EYEBROW ── */
        .ts-eyebrow {
          margin-bottom: 3rem;
        }
        .ts-eyebrow__pill {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.5rem 1.2rem 0.5rem 0.875rem;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(251, 191, 36, 0.22);
          background: rgba(251, 191, 36, 0.055);
          backdrop-filter: blur(16px);
          box-shadow:
            0 0 0 1px rgba(251, 191, 36, 0.04),
            0 0 30px rgba(251, 191, 36, 0.07),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          animation: eyebrowFloat 5s ease-in-out infinite;
        }
        .ts-eyebrow__pulse {
          width: 0.44rem;
          height: 0.44rem;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7);
          animation: liveRipple 2.4s ease-out infinite;
          flex-shrink: 0;
        }
        .ts-eyebrow__icon {
          width: 0.8rem;
          height: 0.8rem;
          color: var(--gold-400);
          filter: drop-shadow(0 0 4px rgba(251, 191, 36, 0.5));
          animation: sparkPulse 3s ease-in-out infinite;
        }
        .ts-eyebrow__label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-400);
        }
        .ts-eyebrow__tag {
          font-size: 0.58rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-pill);
          background: rgba(251, 191, 36, 0.12);
          border: 1px solid rgba(251, 191, 36, 0.2);
          color: rgba(251, 191, 36, 0.7);
        }

        /* ── LOGO ── */
        .ts-logo {
          position: relative;
          display: flex;
          justify-content: center;
          margin-bottom: 3.75rem;
          width: 100%;
        }
        .ts-logo__aura {
          position: absolute;
          inset: -60px;
          background: radial-gradient(
            ellipse,
            rgba(251, 191, 36, 0.16) 0%,
            transparent 65%
          );
          filter: blur(40px);
          pointer-events: none;
          animation: glowPulse 5s ease-in-out infinite;
        }
        .ts-logo__ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: var(--radius-pill);
          border: 1px solid;
          pointer-events: none;
        }
        .ts-logo__ring--1 {
          width: 108%;
          height: 220%;
          border-color: rgba(251, 191, 36, 0.055);
          animation: ringPulse 6s ease-in-out infinite;
        }
        .ts-logo__ring--2 {
          width: 120%;
          height: 280%;
          border-color: rgba(249, 115, 22, 0.03);
          animation: ringPulse 8s ease-in-out infinite 1s;
        }
        .ts-logo__ring--3 {
          width: 135%;
          height: 340%;
          border-color: rgba(251, 191, 36, 0.018);
          animation: ringPulse 10s ease-in-out infinite 2s;
        }
        .ts-logo__img {
          position: relative;
          z-index: 1;
          width: auto;
          max-width: 92vw;
          height: 5.5rem;
          object-fit: contain;
          filter: drop-shadow(0 0 48px rgba(251, 191, 36, 0.2)) brightness(1.04);
          transition:
            filter var(--transition-slow),
            transform var(--transition-slow);
        }
        @media (min-width: 480px) {
          .ts-logo__img {
            height: 7rem;
            max-width: 88vw;
          }
        }
        @media (min-width: 640px) {
          .ts-logo__img {
            height: 8.5rem;
          }
        }
        @media (min-width: 768px) {
          .ts-logo__img {
            height: 10rem;
          }
        }
        @media (min-width: 1024px) {
          .ts-logo__img {
            height: 12rem;
          }
        }
        @media (min-width: 1280px) {
          .ts-logo__img {
            height: 14rem;
          }
        }
        .ts-logo:hover .ts-logo__img {
          filter: drop-shadow(0 0 80px rgba(251, 191, 36, 0.42))
            brightness(1.08);
          transform: scale(1.025) translateY(-3px);
        }
        /* Logo reflection */
        .ts-logo__reflection {
          position: absolute;
          bottom: -1.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(251, 191, 36, 0.22),
            transparent
          );
          border-radius: var(--radius-pill);
          filter: blur(4px);
        }

        /* ── HEADLINE ── */
        .ts-headline__wrap {
          margin-bottom: 0;
        }
        .ts-headline {
          font-family: "Playfair Display", serif;
          font-size: clamp(1.9rem, 7vw, 5.25rem);
          font-weight: 900;
          color: var(--white);
          line-height: 1.08;
          letter-spacing: -0.025em;
          margin: 0;
        }
        .ts-headline__line {
          display: block;
        }
        .ts-headline__line--1 {
          font-size: clamp(1.4rem, 4.5vw, 3.4rem);
          font-weight: 700;
          color: rgba(255, 255, 255, 0.72);
          letter-spacing: -0.01em;
          margin-bottom: 0.2em;
        }
        .ts-headline__line--2 {
          display: block;
        }
        .ts-headline__underline {
          position: relative;
          display: inline-block;
        }
        .ts-headline__underline-text {
          position: relative;
          z-index: 1;
        }
        .ts-headline__underline-svg {
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          overflow: visible;
          pointer-events: none;
        }
        .ts-headline__underline-path {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: drawLine 2s ease-out 0.6s forwards;
        }
        .ts-headline__grad {
          display: inline-block;
          background: linear-gradient(
            100deg,
            #fde68a 0%,
            #fbbf24 25%,
            #fb923c 55%,
            #f97316 75%,
            #fde68a 100%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 5s ease infinite;
          filter: drop-shadow(0 2px 24px rgba(249, 115, 22, 0.25));
        }
        /* ── ORNAMENT ── */
        .ts-ornament {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 2.75rem 0;
          width: 100%;
          max-width: 400px;
          position: relative;
        }

        .ts-ornament__line {
          flex: 1;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(251, 191, 36, 0.28)
          );
        }

        .ts-ornament__diamond {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 10px;
          height: 10px;
          transform: rotate(45deg);
          background: rgba(251, 191, 36, 0.3);
          border: 1px solid rgba(251, 191, 36, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.25);
          animation: sparkPulse 3s ease-in-out infinite;
        }

        .ts-ornament__diamond-inner {
          width: 3px;
          height: 3px;
          background: var(--gold-400);
          border-radius: 1px;
        }

        @keyframes sparkPulse {
          0% {
            transform: scale(0.75);
            opacity: 0.5;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0.75);
            opacity: 0.5;
          }
        }

        /* ── COPY ── */
        .ts-copy {
          max-width: 760px;
        }
        .ts-copy__main {
          font-size: clamp(0.92rem, 2.2vw, 1.28rem);
          color: rgba(203, 213, 225, 0.82);
          line-height: 1.82;
          font-weight: 300;
          margin: 0 0 0.875rem;
        }
        .ts-copy__brand {
          font-weight: 700;
          color: var(--white);
          position: relative;
          display: inline-block;
        }
        .ts-copy__brand-line {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 1.5px;
          background: linear-gradient(90deg, var(--gold-400), var(--amber));
          border-radius: var(--radius-pill);
          display: block;
        }
        .ts-copy__sub {
          font-size: clamp(0.84rem, 1.7vw, 1.08rem);
          color: rgba(148, 163, 184, 0.65);
          line-height: 1.82;
          font-weight: 300;
          margin: 0;
        }
        .ts-copy__accent {
          color: var(--gold-400);
          font-weight: 600;
          font-style: normal;
        }

        /* ── FEATURES ── */
        .ts-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.875rem;
          margin-top: 3rem;
          width: 100%;
        }
        .ts-feat {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.875rem;
          padding: 1rem 1.625rem;
          border-radius: var(--radius-feat);
          background: rgba(255, 255, 255, 0.028);
          border: 1px solid rgba(255, 255, 255, 0.065);
          backdrop-filter: blur(14px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.04),
            0 4px 24px rgba(0, 0, 0, 0.25);
          transition:
            border-color var(--transition-med),
            background var(--transition-med),
            transform var(--transition-spring),
            box-shadow var(--transition-med);
          text-align: left;
          overflow: hidden;
          /* fade-up entry */
          opacity: 0;
          animation: fadeUp 0.7s ease-out calc(var(--i) * 120ms) forwards;
        }
        .ts-feat:hover {
          border-color: rgba(251, 191, 36, 0.28);
          background: rgba(251, 191, 36, 0.048);
          transform: translateY(-6px) scale(1.01);
          box-shadow:
            0 16px 40px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(251, 191, 36, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }
        .ts-feat__glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            rgba(251, 191, 36, 0.06) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity var(--transition-med);
          pointer-events: none;
          border-radius: inherit;
        }
        .ts-feat:hover .ts-feat__glow {
          opacity: 1;
        }
        .ts-feat__icon-wrap {
          position: relative;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: var(--radius-icon);
          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 0.16),
            rgba(249, 115, 22, 0.1)
          );
          border: 1px solid rgba(251, 191, 36, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(251, 191, 36, 0.22);
          transition:
            transform var(--transition-spring),
            box-shadow var(--transition-med);
        }
        .ts-feat:hover .ts-feat__icon-wrap {
          transform: rotate(-6deg) scale(1.1);
          box-shadow: 0 6px 22px rgba(251, 191, 36, 0.36);
        }
        .ts-feat__icon {
          width: 1.1rem;
          height: 1.1rem;
          color: var(--gold-400);
        }
        .ts-feat__body {
          display: flex;
          flex-direction: column;
          gap: 0.12rem;
        }
        .ts-feat__title {
          font-size: 0.84rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.25;
        }
        .ts-feat__sub {
          font-size: 0.7rem;
          color: rgba(148, 163, 184, 0.55);
          font-weight: 400;
        }
        /* hover border reveal */
        .ts-feat__border-reveal {
          position: absolute;
          bottom: 0;
          left: 20%;
          right: 20%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(251, 191, 36, 0.5),
            transparent
          );
          transform: scaleX(0);
          transition: transform var(--transition-med);
          pointer-events: none;
        }
        .ts-feat:hover .ts-feat__border-reveal {
          transform: scaleX(1);
        }

        .ts-meta {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          padding: 10px 20px;
          border-radius: 999px;
          background: linear-gradient(
            135deg,
            rgba(20, 25, 40, 0.85),
            rgba(10, 15, 25, 0.75)
          );
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          margin-top: 2rem;
          font-size: 12px;
        }

        .ts-meta__status {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ts-meta__pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.7);
        }

        .ts-meta__live {
          font-size: 13px;
          font-weight: 600;
          color: #22c55e;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .ts-meta__divider {
          width: 1px;
          height: 18px;
          background: rgba(255, 255, 255, 0.12);
        }

        .ts-meta__brand {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ts-meta__icon {
          width: 16px;
          height: 16px;
          color: rgba(255, 255, 255, 0.6);
        }

        .ts-meta__text {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          letter-spacing: 0.4px;
        }

        /* ── WAITLIST ── */
        .ts-waitlist {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.875rem;
        }
        .ts-waitlist__card {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1.125rem;
          padding: 1.125rem 1.75rem;
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.022);
          border: 1px solid rgba(255, 255, 255, 0.055);
          backdrop-filter: blur(14px);
          box-shadow:
            0 4px 24px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          transition:
            border-color var(--transition-med),
            background var(--transition-med);
          max-width: 700px;
          width: 100%;
        }
        .ts-waitlist__card:hover {
          border-color: rgba(52, 211, 153, 0.18);
          background: rgba(16, 185, 129, 0.025);
        }

        /* Avatars */
        .ts-waitlist__avatars {
          display: flex;
        }
        .ts-waitlist__avatar {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          border: 2px solid rgba(7, 9, 26, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: -0.55rem;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
          transition: transform var(--transition-spring);
          flex-shrink: 0;
          cursor: default;
        }
        .ts-waitlist__avatar:first-child {
          margin-left: 0;
        }
        .ts-waitlist__avatar:hover {
          transform: scale(1.18) translateY(-4px);
          z-index: 10 !important;
        }
        .ts-waitlist__avatar--more {
          background: rgba(255, 255, 255, 0.055);
          border-color: rgba(255, 255, 255, 0.09);
        }
        .ts-waitlist__avatar-text {
          font-size: 0.52rem;
          font-weight: 800;
          color: var(--white);
          letter-spacing: 0.02em;
          line-height: 1;
        }
        .ts-waitlist__avatar-plus {
          font-size: 0.85rem;
          font-weight: 800;
          color: rgba(251, 191, 36, 0.8);
          line-height: 1;
        }

        .ts-waitlist__divider {
          width: 1px;
          height: 2.5rem;
          background: rgba(255, 255, 255, 0.07);
          flex-shrink: 0;
        }
        @media (max-width: 479px) {
          .ts-waitlist__divider {
            display: none;
          }
        }

        .ts-waitlist__info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.28rem;
        }
        .ts-waitlist__live-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .ts-waitlist__live-dot {
          width: 0.42rem;
          height: 0.42rem;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 6px rgba(52, 211, 153, 0.7);
          animation: liveRipple 2.4s ease-out infinite;
        }
        .ts-waitlist__live-label {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(52, 211, 153, 0.75);
        }
        .ts-waitlist__count {
          font-size: 0.8rem;
          font-weight: 400;
          color: rgba(203, 213, 225, 0.75);
          line-height: 1.35;
          margin: 0;
        }
        .ts-waitlist__count strong {
          color: var(--white);
          font-weight: 700;
        }

        /* Join CTA */
        .ts-waitlist__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-feat);
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: rgba(52, 211, 153, 0.88);
          font-size: 0.78rem;
          font-weight: 600;
          text-decoration: none;
          transition:
            background var(--transition-med),
            border-color var(--transition-med),
            transform var(--transition-spring),
            box-shadow var(--transition-med);
          white-space: nowrap;
        }
        .ts-waitlist__cta:hover {
          background: rgba(16, 185, 129, 0.16);
          border-color: rgba(52, 211, 153, 0.36);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.14);
        }
        .ts-waitlist__cta-arrow {
          width: 0.75rem;
          height: 0.75rem;
          transition: transform var(--transition-fast);
        }
        .ts-waitlist__cta:hover .ts-waitlist__cta-arrow {
          transform: translateX(4px);
        }
        .ts-waitlist__micro {
          font-size: 0.6rem;
          color: rgba(255, 255, 255, 0.2);
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        /* ╔══════════════════════════════════════════════════╗
           ║  KEYFRAMES                                       ║
           ╚══════════════════════════════════════════════════╝ */
        @keyframes meshDrift {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -22px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.96);
          }
        }
        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.08);
          }
        }
        @keyframes ringPulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes liveRipple {
          0% {
            box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.75);
          }
          60% {
            box-shadow: 0 0 0 6px rgba(52, 211, 153, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(52, 211, 153, 0);
          }
        }
        @keyframes eyebrowFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes sparkPulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.55;
            transform: scale(0.9);
          }
        }
        @keyframes drawLine {
          from {
            stroke-dashoffset: 300;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
