import { Link } from "react-router"

export interface Project {
  name: string
  desc: string
  link: string
}

interface ProjectItemProps {
  project: Project
}

export function ProjectItem({ project }: ProjectItemProps): React.ReactElement {
  const { name, desc, link } = project

  return (
    <Link to={link} target="_blank" className="flex items-center gap-2 py-2">
      <i className="fi fi-sc-bullet text-foreground/40 text-sm" />
      <span>{name}</span> - <span className="text-foreground/60">{desc}</span>
    </Link>
  )
}
