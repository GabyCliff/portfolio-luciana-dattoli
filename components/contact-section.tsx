"use client"

import { useEffect, useRef, useState } from "react"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/luciana-belen-dattoli/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:dattolilucianabelen@gmail.com",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
]

export function ContactSection() {
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
      id="contacto"
      ref={sectionRef}
      className="relative overflow-hidden py-28 lg:py-36"
    >
      {/* Watercolor accents */}
      <div className="watercolor-blob left-[10%] top-[20%] h-64 w-64 bg-petal" />
      <div className="watercolor-blob right-[15%] bottom-[20%] h-56 w-56 bg-prairie" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div
          className={`flex flex-col items-center text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
            Contacto
          </span>
          <div className="ghibli-divider mt-3 w-20" />

          <h2 className="mt-8 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Hablemos de tu proximo proyecto
            </span>
          </h2>

          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-foreground/60">
            Siempre estoy abierta a nuevas oportunidades, colaboraciones
            interesantes y conversaciones sobre diseño. Si te gustó lo que viste,
            no dudes en escribirme.
          </p>

          {/* CTA */}
          <a
            href="mailto:dattolilucianabelen@gmail.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 font-sans text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Escribeme
          </a>

          {/* Social links */}
          <div
            className={`mt-12 flex items-center gap-4 transition-all delay-300 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/60 text-foreground/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                aria-label={`Visitar perfil de ${link.name}`}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Decorative plant */}
          <div className="mt-16">
            <svg
              className="mx-auto h-20 w-20 animate-sway text-primary/20"
              viewBox="0 0 80 80"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M40 70 C40 70 40 40 40 40 C30 30 15 25 10 30 C5 35 20 45 40 40 M40 70 C40 70 40 45 40 45 C50 35 65 30 70 35 C75 40 60 50 40 45 M40 70 C40 70 40 50 40 50 C35 40 25 35 22 38 C19 41 30 48 40 50" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
