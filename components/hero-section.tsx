"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

function LeafSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8.17 20C12.09 20 15.37 16.73 16.45 12.42C17.53 8.12 21 4 21 4C21 4 18.5 4 17 8Z"
        fill="currentColor"
      />
    </svg>
  )
}

function FloatingPetal({ delay, left, size }: { delay: number; left: string; size: number }) {
  return (
    <div
      className="pointer-events-none absolute animate-float-slow text-petal"
      style={{
        left,
        top: `${10 + Math.random() * 60}%`,
        animationDelay: `${delay}s`,
        opacity: 0.4,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <ellipse cx="10" cy="10" rx="8" ry="5" transform="rotate(-30 10 10)" />
      </svg>
    </div>
  )
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Watercolor blobs */}
      <div className="watercolor-blob left-[-10%] top-[10%] h-96 w-96 bg-prairie" />
      <div className="watercolor-blob right-[-5%] top-[30%] h-80 w-80 bg-horizon" />
      <div className="watercolor-blob bottom-[10%] left-[20%] h-64 w-64 bg-petal" />

      {/* Floating petals */}
      <FloatingPetal delay={0} left="10%" size={14} />
      <FloatingPetal delay={2} left="30%" size={10} />
      <FloatingPetal delay={4} left="70%" size={12} />
      <FloatingPetal delay={1} left="85%" size={16} />
      <FloatingPetal delay={3} left="50%" size={11} />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-32 lg:flex-row lg:gap-16">
        {/* Text content */}
        <div
          className={`flex flex-1 flex-col gap-6 transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2">
            <LeafSvg className="h-5 w-5 animate-sway text-primary" />
            <span className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
              UX/UI Designer
            </span>
          </div>

          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="text-balance">
              Portafolio
              <br />
              Ux/Ui Designer{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Luciana Belén Dáttoli</span>
                <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-amber/30" />
              </span>
            </span>
          </h1>

          <p className="max-w-lg font-sans text-lg leading-relaxed text-foreground/70">
            Transformo ideas complejas en interfaces intuitivas y memorables.
            Cada proyecto es una historia por contar, cada pantalla un lienzo
            donde la funcionalidad y la belleza se encuentran.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-sans text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
            >
              Ver proyectos
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 bg-background/50 px-8 py-3.5 font-sans text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-background"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Hero illustration */}
        <div
          className={`relative flex-1 transition-all delay-300 duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative mx-auto w-full max-w-lg">
            {/* Decorative frame */}
            <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-primary/20" />
            <div className="absolute -inset-8 rounded-3xl border border-amber/15" />

            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
              <Image
                src="/images/hero-ghibli.jpg"
                alt="Ilustración estilo Studio Ghibli de una diseñadora UX trabajando en su escritorio junto a una ventana con paisaje verde"
                width={600}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* Floating accent badges */}
            <div className="absolute -bottom-4 -left-4 animate-float rounded-2xl bg-background/90 px-4 py-3 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary" />
                <span className="font-sans text-xs font-bold text-foreground">
                  Research
                </span>
              </div>
            </div>

            <div className="absolute -right-4 -top-4 animate-float-slow rounded-2xl bg-background/90 px-4 py-3 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-accent" />
                <span className="font-sans text-xs font-bold text-foreground">
                  Design
                </span>
              </div>
            </div>

            <div className="absolute -right-2 bottom-8 animate-float rounded-2xl bg-background/90 px-4 py-3 shadow-lg backdrop-blur-sm" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-secondary" />
                <span className="font-sans text-xs font-bold text-foreground">
                  Prototype
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans text-xs tracking-widest text-foreground/40">
            SCROLL
          </span>
          <div className="h-10 w-6 rounded-full border-2 border-foreground/20">
            <div className="mx-auto mt-2 h-2 w-1 animate-bounce rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
