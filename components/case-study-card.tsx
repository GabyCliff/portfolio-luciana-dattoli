"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import type { CaseStudy } from "@/lib/case-studies-data"

function SectionDot({ color }: { color: string }) {
  return <div className={`mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full ${color}`} />
}

function SectionDivider() {
  return <div className="ghibli-divider" />
}

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const colorMap: Record<string, { dot: string; tag: string; border: string; bg: string }> = {
    prairie: {
      dot: "bg-primary",
      tag: "bg-primary/10 text-primary",
      border: "border-primary/20",
      bg: "bg-primary/5",
    },
    horizon: {
      dot: "bg-secondary",
      tag: "bg-secondary/15 text-secondary-foreground",
      border: "border-secondary/20",
      bg: "bg-secondary/5",
    },
    amber: {
      dot: "bg-accent",
      tag: "bg-accent/15 text-accent-foreground",
      border: "border-accent/20",
      bg: "bg-accent/5",
    },
    petal: {
      dot: "bg-petal",
      tag: "bg-petal/30 text-foreground",
      border: "border-petal/30",
      bg: "bg-petal/10",
    },
  }

  const colors = colorMap[study.color] || colorMap.prairie

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <article className="ghibli-card overflow-hidden">
        {/* Header with image */}
        <div className="relative flex flex-col lg:flex-row">
          {/* Image side */}
          <div className="relative h-64 w-full flex-shrink-0 overflow-hidden lg:h-auto lg:min-h-[320px] lg:w-2/5">
            <Image
              src={study.image}
              alt={`Ilustración del caso de estudio: ${study.title}`}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/5" />
            {/* Number badge */}
            <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm">
              <span className="font-serif text-lg font-bold text-foreground">
                {study.number}
              </span>
            </div>
          </div>

          {/* Content side */}
          <div className="flex flex-1 flex-col gap-4 p-6 lg:p-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full px-3 py-1 font-sans text-xs font-semibold ${colors.tag}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="font-serif text-2xl font-bold leading-tight text-foreground lg:text-3xl">
              {study.title}
            </h3>

            <p className="font-sans text-sm font-medium text-foreground/50">
              {study.subtitle}
            </p>

            {/* Metadata badges */}
            {(study.role || study.duration || study.type || study.tools) && (
              <div className="flex flex-wrap gap-x-4 gap-y-2 rounded-xl border border-border bg-background/60 px-4 py-3">
                {study.role && (
                  <div className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    <span className="font-sans text-xs text-foreground/60">{study.role}</span>
                  </div>
                )}
                {study.duration && (
                  <div className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="font-sans text-xs text-foreground/60">{study.duration}</span>
                  </div>
                )}
                {study.type && (
                  <div className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                    <span className="font-sans text-xs text-foreground/60">{study.type}</span>
                  </div>
                )}
                {study.tools && (
                  <div className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.59-5.59a2.002 2.002 0 010-2.83l5.59-5.59m5.17 13.42l5.59-5.59a2.002 2.002 0 000-2.83l-5.59-5.59" /></svg>
                    <span className="font-sans text-xs text-foreground/60">{study.tools}</span>
                  </div>
                )}
              </div>
            )}

            <p className="font-sans text-base leading-relaxed text-foreground/70">
              {study.marketingSummary}
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`mt-2 inline-flex items-center gap-2 self-start rounded-full border-2 px-6 py-2.5 font-sans text-sm font-semibold transition-all duration-300 ${colors.border} ${
                isExpanded
                  ? `${colors.bg} text-foreground`
                  : "bg-transparent text-foreground/70 hover:text-foreground"
              }`}
            >
              {isExpanded ? "Cerrar caso de estudio" : "Ver caso de estudio completo"}
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Expanded content */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isExpanded ? "max-h-[8000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border">
            <div className="flex flex-col gap-10 p-6 lg:p-10">

              {/* Problem Statement */}
              <div className="flex gap-4">
                <SectionDot color={colors.dot} />
                <div className="flex flex-1 flex-col gap-3">
                  <h4 className="font-serif text-xl font-bold text-foreground">
                    Problem Statement
                  </h4>
                  <p className="font-sans text-base leading-relaxed text-foreground/70">
                    {study.problemStatement}
                  </p>
                </div>
              </div>

              <SectionDivider />

              {/* How Could We */}
              <div className="flex gap-4">
                <SectionDot color={colors.dot} />
                <div className="flex flex-1 flex-col gap-3">
                  <h4 className="font-serif text-xl font-bold text-foreground">
                    How Could We...?
                  </h4>
                  <blockquote
                    className={`rounded-xl border-l-4 ${colors.border} ${colors.bg} p-6 font-sans text-base italic leading-relaxed text-foreground/80`}
                  >
                    {study.howCouldWe}
                  </blockquote>
                  {study.howCouldWeGoal && (
                    <p className="mt-1 font-sans text-sm leading-relaxed text-foreground/60">
                      {study.howCouldWeGoal}
                    </p>
                  )}
                </div>
              </div>

              <SectionDivider />

              {/* Research (if available) */}
              {study.research && (
                <>
                  <div className="flex gap-4">
                    <SectionDot color={colors.dot} />
                    <div className="flex flex-1 flex-col gap-4">
                      <h4 className="font-serif text-xl font-bold text-foreground">
                        Investigación
                      </h4>
                      <p className="font-sans text-base leading-relaxed text-foreground/70">
                        {study.research.description}
                      </p>
                      <div className="flex flex-col gap-2">
                        {study.research.findings.map((finding, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-3 rounded-lg ${colors.bg} px-4 py-3`}
                          >
                            <svg className={`mt-0.5 h-5 w-5 flex-shrink-0 ${study.color === "prairie" ? "text-primary" : study.color === "horizon" ? "text-secondary" : study.color === "amber" ? "text-accent" : "text-petal"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                            </svg>
                            <span className="font-sans text-sm leading-relaxed text-foreground/70">
                              {finding}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="font-sans text-sm italic leading-relaxed text-foreground/50">
                        Estos insights guiaron las decisiones de diseño y la definición de funcionalidades prioritarias.
                      </p>
                    </div>
                  </div>
                  <SectionDivider />
                </>
              )}

              {/* User Persona (if available) */}
              {study.userPersona && (
                <>
                  <div className="flex gap-4">
                    <SectionDot color={colors.dot} />
                    <div className="flex flex-1 flex-col gap-4">
                      <h4 className="font-serif text-xl font-bold text-foreground">
                        User Persona
                      </h4>
                      <div className={`rounded-xl border ${colors.border} ${colors.bg} p-6`}>
                        <div className="flex items-center gap-4">
                          <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full ${colors.dot}`}>
                            <svg className="h-7 w-7 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-serif text-lg font-bold text-foreground">
                              {study.userPersona.name}, {study.userPersona.age} años
                            </h5>
                            <p className="font-sans text-sm text-foreground/50">
                              {study.userPersona.role}
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 font-sans text-sm leading-relaxed text-foreground/70">
                          {study.userPersona.description}
                        </p>
                        <div className="mt-4">
                          <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-wider text-foreground/50">
                            Necesidades clave
                          </p>
                          <div className="flex flex-col gap-1.5">
                            {study.userPersona.needs.map((need, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${colors.dot}`} />
                                <span className="font-sans text-sm text-foreground/70">{need}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <SectionDivider />
                </>
              )}

              {/* Information Architecture */}
              <div className="flex gap-4">
                <SectionDot color={colors.dot} />
                <div className="flex flex-1 flex-col gap-4">
                  <h4 className="font-serif text-xl font-bold text-foreground">
                    Arquitectura de la Información
                  </h4>
                  {study.informationArchitectureDescription && (
                    <p className="font-sans text-base leading-relaxed text-foreground/70">
                      {study.informationArchitectureDescription}
                    </p>
                  )}
                  {study.informationArchitectureImage && (
                    <div className="relative mt-2 aspect-video w-full overflow-hidden rounded-xl border border-border bg-background/60">
                      <Image
                        src={study.informationArchitectureImage}
                        alt={`Diagrama de arquitectura de la información - ${study.title}`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  )}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {study.informationArchitecture.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-xl border border-border bg-background/60 p-4"
                      >
                        <span
                          className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${colors.tag} font-sans text-xs font-bold`}
                        >
                          {i + 1}
                        </span>
                        <span className="font-sans text-sm leading-relaxed text-foreground/70">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <SectionDivider />

              {/* User Flows (if available) */}
              {study.userFlows && (
                <>
                  <div className="flex gap-4">
                    <SectionDot color={colors.dot} />
                    <div className="flex flex-1 flex-col gap-3">
                      <h4 className="font-serif text-xl font-bold text-foreground">
                        Flows Principales
                      </h4>
                      <p className="font-sans text-base leading-relaxed text-foreground/70">
                        {study.userFlows.description}
                      </p>
                      {study.userFlows.image && (
                        <div className="relative mt-2 aspect-video w-full overflow-hidden rounded-xl border border-border bg-background/60">
                          <Image
                            src={study.userFlows.image}
                            alt={`User flow principal - ${study.title}`}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <SectionDivider />
                </>
              )}

              {/* Wireframes */}
              <div className="flex gap-4">
                <SectionDot color={colors.dot} />
                <div className="flex flex-1 flex-col gap-3">
                  <h4 className="font-serif text-xl font-bold text-foreground">
                    Wireframes
                  </h4>
                  <p className="font-sans text-base leading-relaxed text-foreground/70">
                    {study.wireframesDescription}
                  </p>
                  {/* Real wireframe images or placeholder */}
                  {study.wireframeImages && study.wireframeImages.length > 0 ? (
                    <div className={`mt-2 grid grid-cols-1 gap-4 rounded-xl ${colors.bg} p-6 sm:grid-cols-3`}>
                      {study.wireframeImages.map((img, n) => (
                        <div key={n} className="relative aspect-[9/16] w-full overflow-hidden rounded-xl border border-border bg-background/60">
                          <Image
                            src={img}
                            alt={`Wireframe ${n + 1} - ${study.title}`}
                            fill
                            className="object-contain p-1"
                          />
                          <div className="absolute bottom-2 left-2 right-2">
                            <span className={`rounded-full ${colors.tag} px-2.5 py-1 font-sans text-xs font-semibold`}>
                              {n === 0 ? "Home" : n === 1 ? "Recordatorios" : "Perfil"}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={`mt-2 flex gap-3 overflow-x-auto rounded-xl ${colors.bg} p-6`}>
                      {[1, 2, 3].map((n) => (
                        <div
                          key={n}
                          className="flex h-48 w-28 flex-shrink-0 flex-col gap-2 rounded-xl border-2 border-dashed border-foreground/10 bg-background/50 p-3"
                        >
                          <div className="h-3 w-full rounded bg-foreground/10" />
                          <div className="h-2 w-3/4 rounded bg-foreground/5" />
                          <div className="mt-2 flex-1 rounded bg-foreground/5" />
                          <div className="h-6 w-full rounded bg-foreground/10" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <SectionDivider />

              {/* UI & Visual Design (if available) */}
              {study.uiDesign && (
                <>
                  <div className="flex gap-4">
                    <SectionDot color={colors.dot} />
                    <div className="flex flex-1 flex-col gap-3">
                      <h4 className="font-serif text-xl font-bold text-foreground">
                        {"UI & Visual Design"}
                      </h4>
                      <p className="font-sans text-base leading-relaxed text-foreground/70">
                        {study.uiDesign}
                      </p>
                    </div>
                  </div>
                  <SectionDivider />
                </>
              )}

              {/* Usability Tests (if available) */}
              {study.usabilityTests && (
                <>
                  <div className="flex gap-4">
                    <SectionDot color={colors.dot} />
                    <div className="flex flex-1 flex-col gap-3">
                      <h4 className="font-serif text-xl font-bold text-foreground">
                        Pruebas de Usabilidad
                      </h4>
                      <p className="font-sans text-base leading-relaxed text-foreground/70">
                        {study.usabilityTests}
                      </p>
                    </div>
                  </div>
                  <SectionDivider />
                </>
              )}

              {/* Learnings */}
              <div className="flex gap-4">
                <SectionDot color={colors.dot} />
                <div className="flex flex-1 flex-col gap-4">
                  <h4 className="font-serif text-xl font-bold text-foreground">
                    Aprendizajes
                  </h4>
                  <div className="flex flex-col gap-3">
                    {study.learnings.map((learning, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-xl border border-border bg-background/40 p-4"
                      >
                        <svg
                          className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                            study.color === "prairie"
                              ? "text-primary"
                              : study.color === "horizon"
                                ? "text-secondary"
                                : study.color === "amber"
                                  ? "text-accent"
                                  : "text-petal"
                          }`}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8.17 20C12.09 20 15.37 16.73 16.45 12.42C17.53 8.12 21 4 21 4C21 4 18.5 4 17 8Z" />
                        </svg>
                        <p className="font-sans text-sm leading-relaxed text-foreground/70">
                          {learning}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prototype link (if available) */}
              {study.prototypeUrl && (
                <>
                  <SectionDivider />
                  <div className="flex items-center justify-center">
                    <a
                      href={study.prototypeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full ${colors.dot} px-8 py-3 font-sans text-sm font-bold text-background transition-all duration-300 hover:opacity-90 hover:shadow-lg`}
                    >
                      Ver prototipo interactivo en Figma
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
