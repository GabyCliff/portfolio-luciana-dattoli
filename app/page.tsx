import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <div className="ghibli-divider mx-auto max-w-4xl" />
      <AboutSection />
      <div className="ghibli-divider mx-auto max-w-4xl" />
      <ProjectsSection />
      <div className="ghibli-divider mx-auto max-w-4xl" />
      <ContactSection />
      <Footer />
    </main>
  )
}
