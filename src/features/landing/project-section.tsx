import projectData from "./project-data.json";
import type { Project } from "./project-item";
import { ProjectItem } from "./project-item";

const projects = projectData as Project[];

export function ProjectSection() {
  return (
    <section className="mx-auto flex w-full flex-col">
      <div className="flex flex-col gap-6 text-pretty leading-7">
        <p>Product that we ship recently:</p>

        <div className="flex flex-col gap-1">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
