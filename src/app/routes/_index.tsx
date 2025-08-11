import { generatedMetadata } from "@shared/libs"
import {
  HeroSection,
  ProjectSection,
  SupportSection,
  TeamSection,
} from "@features/landing"

export function meta() {
  return generatedMetadata({
    title: "Ambitious Software Crafter | Moono",
    description:
      "Small teams of indie hacker trying to crafting and ship a good software globally",
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
