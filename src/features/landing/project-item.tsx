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
    <li className="flex items-center gap-2">
      <i className="fi fi-sc-check-circle" />

      <div className="group">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link
                to={link}
                target="_blank"
                className="text-foreground group-hover:text-link"
              >
                {name}
              </Link>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <span> - {description}</span>
      </div>
    </li>
  )
}
