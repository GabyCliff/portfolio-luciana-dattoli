"use client"

import { caseStudies } from "@/lib/case-studies-data"
import { CaseStudyCard } from "@/components/case-study-card"
import { useEffect, useRef, useState } from "react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="relative overflow-hidden py-28 lg:py-36"
    >
      {/* Watercolor accents */}
      <div className="watercolor-blob right-[-8%] top-[5%] h-80 w-80 bg-petal" />
      <div className="watercolor-blob left-[-5%] top-[40%] h-72 w-72 bg-prairie" />
      <div className="watercolor-blob right-[10%] bottom-[10%] h-64 w-64 bg-horizon" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 flex flex-col items-center text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
            Casos de Estudio
          </span>
          <div className="ghibli-divider mt-3 w-20" />
          <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Proyectos que cuentan historias
            </span>
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-foreground/60">
            Cada proyecto es un viaje de descubrimiento. Desde la investigación
            inicial hasta el diseño final, estas son las historias detrás de mis
            soluciones de diseño.
          </p>
        </div>

        {/* Case studies */}
        <div className="flex flex-col gap-10">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
