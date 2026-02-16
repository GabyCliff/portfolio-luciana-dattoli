"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const skills = [
  { name: "User Research", color: "bg-primary/15 text-primary" },
  { name: "UX Writing", color: "bg-secondary/20 text-secondary-foreground" },
  { name: "Wireframing", color: "bg-accent/20 text-accent-foreground" },
  { name: "Prototyping", color: "bg-petal/30 text-foreground" },
  { name: "Design Systems", color: "bg-primary/15 text-primary" },
  { name: "Figma", color: "bg-secondary/20 text-secondary-foreground" },
  { name: "Usability Testing", color: "bg-accent/20 text-accent-foreground" },
  { name: "Information Architecture", color: "bg-petal/30 text-foreground" },
]

const tools = [
  "Figma",
  "FigJam",
  "Notion",
  "Miro",
  "Maze",
  "Optimal Workshop",
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="relative overflow-hidden py-28 lg:py-36"
    >
      {/* Watercolor accents */}
      <div className="watercolor-blob -right-20 top-20 h-72 w-72 bg-amber" />
      <div className="watercolor-blob -left-16 bottom-20 h-60 w-60 bg-horizon" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
            Sobre mi
          </span>
          <div className="ghibli-divider mt-3 w-20" />
        </div>

        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
          {/* Image */}
          <div
            className={`relative flex-shrink-0 transition-all delay-200 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative mx-auto w-72 lg:w-80">
              <div className="absolute -inset-3 rounded-3xl bg-primary/5" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/about-ghibli.jpg"
                  alt="Espacio de trabajo creativo con herramientas de diseño, acuarelas y bocetos de UX"
                  width={400}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>
              {/* Decorative leaf */}
              <svg
                className="absolute -bottom-6 -right-6 h-16 w-16 animate-sway text-primary/30"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8.17 20C12.09 20 15.37 16.73 16.45 12.42C17.53 8.12 21 4 21 4C21 4 18.5 4 17 8Z" />
              </svg>
            </div>
          </div>

          {/* Text content */}
          <div
            className={`flex flex-1 flex-col gap-8 transition-all delay-400 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
              <span className="text-balance">
                Cada gran producto comienza con una historia bien contada
              </span>
            </h2>

            <div className="flex flex-col gap-4 font-sans text-base leading-relaxed text-foreground/75">
              <p>
                Soy diseñadora UX/UI apasionada por entender a las personas y
                traducir sus necesidades en interfaces que no solo funcionan, sino
                que emocionan. Mi proceso de diseño está profundamente enraizado
                en la investigación, la empatía y el storytelling.
              </p>
              <p>
                Creo que el diseño es un acto de servicio: escuchar antes de
                crear, comprender antes de proponer, iterar antes de entregar. Mi
                enfoque combina la rigurosidad del research con la sensibilidad
                artística, buscando siempre ese punto donde la utilidad y la
                belleza convergen.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-3">
              <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-foreground/50">
                Habilidades
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-full px-4 py-1.5 font-sans text-xs font-semibold ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="flex flex-col gap-3">
              <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-foreground/50">
                Herramientas
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-2 rounded-lg border border-border bg-background/60 px-4 py-2 backdrop-blur-sm"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary/50" />
                    <span className="font-sans text-sm font-medium text-foreground/70">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
