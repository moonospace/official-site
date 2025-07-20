import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@shared/components"
import { Link } from "react-router"

export interface Project {
  name: string
  description: string
  link: string
  label: string
}

interface ProjectItemProps {
  project: Project
}

export function ProjectItem({ project }: ProjectItemProps): React.ReactElement {
  const { name, description, link, label } = project

  return (
    <li className="flex group transition-all duration-300 hover:-translate-y-1">
      <Link to={link} target="_blank" className="flex items-center gap-2">
        <i className="fi fi-sc-check-circle" />

        <div className="group">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="cursor-pointer">{name}</TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <span className="text-foreground/60"> - {description}</span>
        </div>
      </Link>
    </li>
  )
}
