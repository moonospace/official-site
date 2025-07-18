import { generatedMetadata } from "@shared/libs"
import {
  HeroSection,
  ProjectSection,
  SupportSection,
  TeamSection,
} from "@features/landing"

export function meta() {
  return generatedMetadata({
    title: "The House for Better Software | Moono",
    description: "The house for better software, products and apps",
  })
}

export default function HomePage() {
  return (
    <main className="flex flex-col gap-16">
      <HeroSection />
      <TeamSection />
      <ProjectSection />
      <SupportSection />
    </main>
  )
}
