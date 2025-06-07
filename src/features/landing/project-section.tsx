import { type Project, ProjectItem } from "./project-item"

const projects: Project[] = [
  {
    name: "Indie Page",
    description: "In progress, coming soon",
    link: "https://moono.vercel.app",
    label: "The page for indie hackers",
  },
]

export function ProjectSection() {
  return (
    <section className="flex flex-col w-full mx-auto">
      <div className="flex flex-col gap-6 text-pretty leading-relaxed">
        <p>Product that we ship with heart and soul:</p>

        <ul className="flex flex-col gap-2 ml-3 text-foreground/70">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </ul>
      </div>
    </section>
  )
}
