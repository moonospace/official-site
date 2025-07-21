import { ProjectItem } from "./project-item"
import type { Project } from "./project-item"
import projectData from "./project-data.json"

const projects = projectData as Project[]

export function ProjectSection() {
  return (
    <section className="flex flex-col w-full mx-auto">
      <div className="flex flex-col gap-6 text-pretty leading-relaxed">
        <p>Product that we ship recently:</p>

        <ul className="flex flex-col gap-2 ml-3">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </ul>
      </div>
    </section>
  )
}
